---
title: ERC721A 介绍及原理分析
date: 2022-04-07
author: veryyoung
tags:
  - crypto
  - blockchain
  - NFT
---

# ERC721A 介绍及原理分析

## 介绍

[ERC721A](https://www.erc721a.org/) 是 [Azuki](https://opensea.io/collection/azuki) 项目方研发的一个 ERC721 协议的实现，能在 mint 多个 NFT 的时候节省大量的 gas，甚至能做到 gas 成本基本与铸造单个 NFT 基本相同。


## ERC721A 使用

1.  引入 ERC721A 依赖

``` shell
npm install --save-dev erc721a
```

2.  合约导入 ERC721A 依赖


``` js
import "erc721a/contracts/ERC721A.sol";
```

3.  修改循环调用 _safeMint 为按 quantity mint


完整代码如下

``` js
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";

contract Azuki is ERC721A {
  constructor() ERC721A("Azuki", "AZUKI") {}

  function mint(uint256 quantity) external payable {
    // _safeMint's second argument now takes in a quantity, not a tokenId.
    _safeMint(msg.sender, quantity);
  }
}
```

## ERC721A gas 测量

这是官方的测量结果

![MEASUREMENTS](https://camo.githubusercontent.com/d13739d5ecfd5dc882b0cb7089a770b55f4bb1a1abf98067b94e1c21864fb261/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f464964494c4b7056514145515f35553f666f726d61743d6a7067266e616d653d6d656469756d)

可以看出使用 ERC721A 实现相比较于 [openzeppelin](https://docs.openzeppelin.com/contracts/4.x/erc721) 的实现，mint 一只 NFT 能节省大约 50% gas，mint 越多越省，mint 五只节省的 gas 高达 7 倍，接近于 mint 一只的成本。


## ERC721A 原理分析

1.   去掉了没必要的存储

openzeppelin 的实现用 _allTokens 这个数组存储了所有的 token 情况，而 ERC721A 实现放弃了这个存储，设定 token index 从 0 开始自增。

openzeppelin 的 totalSupply 方法需要从 _allTokens 查

``` js
/**
 * @dev See {IERC721Enumerable-totalSupply}.
 */
function totalSupply() public view virtual override returns (uint256) {
    return _allTokens.length;
}
``` 

而 ERC721A 实现可以根据 index 算出来

``` js
/**
 * @dev Burned tokens are calculated here, use _totalMinted() if you want to count just minted tokens.
 */
function totalSupply() public view returns (uint256) {
    // Counter underflow is impossible as _burnCounter cannot be incremented
    // more than _currentIndex - _startTokenId() times
    unchecked {
        return _currentIndex - _burnCounter - _startTokenId();
    }
}

/**
 * Returns the total amount of tokens minted in the contract.
 */
function _totalMinted() internal view returns (uint256) {
    // Counter underflow is impossible as _currentIndex does not decrement,
    // and it is initialized to _startTokenId()
    unchecked {
        return _currentIndex - _startTokenId();
    }
}
``` 


2.  只在批量 mint 后更新 owner 的余额，而不是每只 mint 后更新

``` js
_addressData[to].balance += uint64(quantity);
_addressData[to].numberMinted += uint64(quantity);
```

3.  按批写入 NFT 的 owner，而不是每只 mint 后都更新

``` js
_ownerships[startTokenId].addr = to;
_ownerships[startTokenId].startTimestamp = uint64(block.timestamp);
```

这样在 mint 时候确实能节省大量存储 token 所属人的成本，但是查询 token 所属人的时候也要做相应的更改

``` js

/**
 * Gas spent here starts off proportional to the maximum mint batch size.
 * It gradually moves to O(1) as tokens get transferred around in the collection over time.
 */
function _ownershipOf(uint256 tokenId) internal view returns (TokenOwnership memory) {
    uint256 curr = tokenId;

    unchecked {
        if (_startTokenId() <= curr && curr < _currentIndex) {
            TokenOwnership memory ownership = _ownerships[curr];
            if (!ownership.burned) {
                if (ownership.addr != address(0)) {
                    return ownership;
                }
                // Invariant:
                // There will always be an ownership that has an address and is not burned
                // before an ownership that does not have an address and is not burned.
                // Hence, curr will not underflow.
                while (true) {
                    curr--;
                    ownership = _ownerships[curr];
                    if (ownership.addr != address(0)) {
                        return ownership;
                    }
                }
            }
        }
    }
    revert OwnerQueryForNonexistentToken();
}
```

如果 ownership 找不到，递归往前寻找到第一个有效地址为止，而之前只需要从 _ownedTokens 这个 mapping 中获取。

这会导致查询 token owner 的 gas 成本增加。

所以在 NFT 转账和销毁场景消耗的 gas 是更多的，这点 ERC721A 在介绍和文档里并没有提到。


## ERC721A 缺点

1.  转账和销毁 gas 提升

正如上所说，转账和销毁 gas 会增加，大约会增加 40%，但由于转账的 gas 并不高，这缺点可以忍受。

2.  无法自定义 tokenId

ERC721A 的 tokenId 只能是从 0 开始自增。在大部分 NFT 的 tokenId 都是从 0 自增的情况下，这个缺点也不是那么关键。


## ERC721A 意义

ERC721A 可以大大降低 mint NFT 的成本，这对 NFT 一级市场参与者，对 NFT 项目方，都是很大的利好。

参与者在 mint NFT 的成本降低会降低参与者参与 NFT 的风险，也会促进 NFT 项目更快的将 NFT 卖完。

对 NFT 整个行业都有着促进作用，而市场似乎也很认可这点，截止到当前 Azuki 的地板价已到达 26 ETH，除了 Azuki 精美的艺术、良好的社区氛围和团队运营，恐怕技术也有一定的作用。