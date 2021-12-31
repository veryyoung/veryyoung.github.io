---
title: NFT 预售和公售开发教程
date: 2021-12-31
author: veryyoung
tags:
  - dev
  - crypto
  - blockchain
---

# NFT 预售和公售开发教程

上文组成了 NFT 基本的流程，一般的发售够用了，但现在主流做法是搞预售和公售。

预售可以起到给项目预热的作用，也可以在 Discord 里举办 AMA(Ask me anything) 让投资者更好的了解这个项目，项目方会有一定的要求，完成任务后可以得到白名单，白名单一般可以提前 mint NFT，以比较低的价格，也可以避免 gas war。

预售完就是公售，预售效果如果好公售会引发哄抢，是 gas war 和科学家的战斗(如上文所说，禁止合约调用后科学家基本退出了抢公售的舞台)。

我参与了很多项目的预售环节，可以发现目前很多 NFT 项目方的开发者的水平是明显存在问题的，很多项目受到严重影响，甚至因为技术原因直接死掉。

本文我会整理下常见的问题，并给出解决方案，最后会附上一份示例代码仅供参考。



## 常见问题

### 循环遍历 list 来判断白名单

示例代码如下

``` solidity
function isWhitelisted(address _user) public view returns (bool) {
    for (uint256 i = 0; i < whitelistedAddresses.length; i++) {
        if (whitelistedAddresses[i] == _user) {
            return true;
        }
    }
    return false;
}
```

白名单地址一般会有几千个，这样一趟下来 gas 直接拉满，导致大面积的人 mint 失败，极少数排在 list 前面的地址能侥幸成功。

解决方案：一般项目使用 map 来判断，好的项目使用签名或 Merkle tree 判断，狗屎项目不判断，lmao.


### 单次操作过大

``` solidity
function whitelistUsers(address[] calldata _users) public onlyOwner {
    delete whitelistedAddresses;
    whitelistedAddresses = _users;
}
```

几千个白单一次性函数交互到链上


``` solidity
function airdropWhitelistTokens() public onlyOwner {
    require(!airdropped, "Whitelist Tokens have already been airdroped.");
    require(!paused, "The contract is paused");
    require(!whitelistMint, "Whitelist sale is still running");
    airdropped = true;
    for (uint256 i; i < whitelistTokens.length; i++) {
        transferFrom(
            whitelistWallet,
            whitelistTokensOwners[whitelistTokens[i]],
            whitelistTokens[i]
        );
    }
}
```

一次性空投 NFT 给白单地址


太大的操作是极难成功的，就算成功也要烧掉很多的 gas。

#### 解决方案

尽量避免这样的大操作，如果非要执行请分批次执行。

### 合约重入

``` solidity
function mintTokens(uint256 count) external payable {
    // Gas optimization
    uint256 _nextTokenId = nextTokenId;

    // Make sure presale has been set up
    SaleConfig memory _saleConfig = saleConfig;
    require(_saleConfig.startTime > 0, "TheSevens: sale not configured");

    require(treasury != address(0), "TheSevens: treasury not set");
    require(tokenPrice > 0, "TheSevens: token price not set");
    require(count > 0, "TheSevens: invalid count");
    require(block.timestamp >= _saleConfig.startTime, "TheSevens: sale not started");

    require(
        count <=
            (
                block.timestamp >= _saleConfig.maxCountUnlockTime
                    ? _saleConfig.unlockedMaxCount
                    : _saleConfig.initMaxCount
            ),
        "TheSevens: max count per tx exceeded"
    );
    require(_nextTokenId + count <= maxSupply, "TheSevens: max supply exceeded");
    require(tokenPrice * count == msg.value, "TheSevens: incorrect Ether value");

    // The contract never holds any Ether. Everything gets redirected to treasury directly.
    treasury.transfer(msg.value);

    for (uint256 ind = 0; ind < count; ind++) {
        _safeMint(msg.sender, _nextTokenId + ind);
    }
    nextTokenId += count;

    emit SaleMint(msg.sender, count);
}
```

合约代码中原本通过 count、unlockedMaxCount、initMaxCount，限制单地址单笔交易的能获得 token 的个数，但是科学家通过部署合约 A，在 A 内部循环用 count = 1 调用 mintToken，在同一个区块内，限制条件为能生效。


``` solidity
function mint(uint256 num) public payable whenMintNotPaused(){
    uint256 supply = totalSupply();
    uint256 tokenCount = balanceOf(msg.sender);
    require( num <= 12,                                                             "GalaxyEggs: You can mint a maximum of 12 Galaxy Eggs" );
    require( tokenCount + num <= 13,                                                "GalaxyEggs: You can mint a maximum of 13 Galaxy Eggs per wallet" );
    require( supply + num <= TOTAL_NUMBER_OF_GALAXY_EGGS - giveaway_reserved,       "GalaxyEggs: Exceeds maximum Galaxy Eggs supply" );
    require( msg.value >= PRICE * num,                                              "GalaxyEggs: Ether sent is less than PRICE * num" );

    for(uint256 i; i < num; i++){
        _safeMint( msg.sender, supply + i );
    }
}
```

合约代码量，限制了地址 balance + 单次 mint num 限制单地址不超过 13 个。科学家部署合约，mint 后把 NFT 转移到自己钱包，绕过了单地址限制。


#### 解决方案

禁止合约调用，加上如下代码 

``` solidity
require(
    !Address.isContract(msg.sender),
    "Contracts are not allowed."
);
```

### 限制单个钱包余额数量


``` solidity
function canMint(uint _numberOfItemsToMint) public view returns (bool) {
    
    // Enforce started rule
    if (block.timestamp < start){
        return false;
    }

    // Enforce max per call rule
    if (_numberOfItemsToMint > MAX_MINT_PER_CALL) {
        return false;
    }

    // Authenticate
    if (!isPublic && !IAuthenticator(whitelist).authenticate(msg.sender))
    {
        return false;
    }

    // Enforce max per address rule
    if ((IERC721Enumerable(token).balanceOf(msg.sender) + _numberOfItemsToMint) > MAX_MINT_PER_ADDRESS) {
        return false;
    }

    // Enforce max token rule
    return IERC721Enumerable(token).totalSupply() <= (MAX_SUPPLY - _numberOfItemsToMint);
}
```

合约限制了钱包余额数量和 mint 数量不大于 MAX_MINT_PER_ADDRESS，可以在 mint 后把 NFT 转到别的地址，继续 mint。

#### 解决方案

``` solidity
mapping(address => uint256) private _claimed
```

用 mapping 存已 mint 过的地址和 mint 个数。


### 上传白单消耗大量 gas

``` solidity
mapping(address => bool) private _pre_sale_minters;

function setPreMintRole(address calldata _address) external onlyOwner {
    _pre_sale_minters[_address] = true;
}
```

每个白单需要和以太坊交互一次，消耗大量 gas。 某个项目方哭着说每个白单我需要花 0.01 ETH 上传，而你们却不 mint，他哭我 LoL，谁让你的技术这么菜，转我 10E 我把你解决这个问题，lmao..


#### 临时解决方案

按批次上传

``` solidity
function setPreMintRoleBatch(address[] calldata _addresses) external onlyOwner {
    for(uint256 i; i < _addresses.length; i++){
        _pre_sale_minters[_addresses[i]] = true;
    }
}
```
#### 好的解决方案

参考下文

## 推荐的判断白单方法

### 使用签名

前端跟后端交互，后端判断是否在钱包地址是否属于白名单，如果属于则用私钥生成签名，返回给前端。前端调用合约进行 mint，合约判断签名是否有效。

此做法不需要上传白单，超省 gas；缺点是判断过程是中心化的，没法零知识证明所有地址都是公开的那些，没有作恶。

### 使用 Merkle tree

[Merkle tree](https://zh.wikipedia.org/wiki/%E5%93%88%E5%B8%8C%E6%A0%91) 是非常适合做验证工作的，把所有白名单地址生成一个 Merkle Root，上传到合约上， mint 的时候可以很方便的进行验证。

此做法只需要一次链上操作。

### 两者优缺点

Merkle tree 和签名有几个使用场景的区别：
1. 签名需要用到 private key，所以签名的过程只能在后端进行，如果是实时生成签名就需要用到后端服务。Mekle Tree 生成可以在前端进行，可以利用用户的浏览器资源，不需要消耗服务器
2. Merkle Tree 一旦生成，后续白名单修改起来不是很方便，每改一次就需要重新设置 root，而签名更灵活一些，对于新增的钱包直接生成新的签名就行了

From shep.eth

## 示例代码

见 [VeryyoungNFTDemo.sol](https://github.com/veryyoung/nft-demo/blob/main/contracts/VeryyoungNFTDemo.sol)


## 致敬

感谢 NextDAO 家人们的一起讨论技术，共享财富密码，无偿分享代码，无偿分享复盘资料，respect！

