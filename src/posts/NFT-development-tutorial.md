---
title: NFT 从开发到上架 Opensea 全流程
date: 2021-11-30
author: veryyoung
tags:
  - dev
  - crypto
  - blockchain
---

# NFT 从开发到上架全流程

最近参与了很多 NFT 项目的一级市场 mint 以及交易过程，也阅读了很多 NFT 项目的合约代码，自己还没实操过，此文章边做边写，不一定是最佳实践，但所有环节是本人亲自参与过的，keep your hands dirty, let's go.

此教程所有环节在科学上网环境下进行，有任何网络错误相关问题请检查你的科学上网是否流畅。


## 1. 生成钱包地址

部署 NFT 合约的时候需要有一个钱包地址作为合约的 deployer 和 owner，这里使用 [Metamask](https://metamask.io/) 作为钱包应用。

打开 Metamask 官网 [https://metamask.io/](https://metamask.io/)，点击 ”Download now“，下载 Chrome 插件并安装。

如果有现成的私钥点击”Import wallet“，如果没有点击”Create a Wallet“，设置好密码，保管好助记词，助记词保管参考[偷不走的助记词](https://www.geekmeta.com/article/1220099.html)

## 2. 领取以太币

打开 Rinkeby 的水龙头 [https://faucet.rinkeby.io/](https://faucet.rinkeby.io/)，按照水龙头的 "How does this work?" 领取 Rinkeby 网络的以太币。

## 3. 准备盲盒图片和 meta info 文件

图片尺寸 512x512 px 最佳，上传到 ipfs 上。我这里使用的是[https://www.pinata.cloud/](https://www.pinata.cloud/)，上传后得到图片 URL [https://gateway.pinata.cloud/ipfs/QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv](https://gateway.pinata.cloud/ipfs/QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv)，文件在 ipfs 上的 cid: QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv

同时准备 N 个 Json 文件， N = 准备发售的 NFT 个数，格式如下


``` js
{
  "name": "Veryyoung NFT Demo #0",
  "description": "veryyoung nft demo",
  "image": "ipfs://QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv",
  "attributes": []
}
```

名字编号做成自增，description 可以随意写， image 内容填 ipfs://+刚刚准备的文件 cid

我准备了个脚本来自动生成所有盲盒 json 文件，代码见 [unreveal.js](https://github.com/veryyoung/nft-demo/blob/main/scripts/unreveal.js)

执行后效果如下

![not revealed metadata](../assets/images/not_revealed_metadata.jpg)


将 metadata 上传到 ipfs，得到 folder 的 cid：QmPphQMMEhwmXMp3m4sJrtL9xqAX8emiXBZw8UeVGhqZhK


## 4. 编写合约代码

代码见 [VeryyoungNFTSimpleDemo.sol](https://github.com/veryyoung/nft-demo/blob/main/contracts/VeryyoungNFTSimpleDemo.sol)

这里有几个需要注意的：

1.  使用 openzeppelin 的 Counter 工具来当计数器，而不是自己维护计数器，避免混乱。已经见过好几个项目计数混乱了。
2.  留了方法 setBaseURI 来修改 baseurl，用来开图。
3.  拒绝合约调用，防止使用合约来批量调用（NFT初期很多项目被用合约批量 mint，某数字 DAO 因此一战成名）
4.  withdraw 方法使用了 call 而不是直接使用 tranfer 函数
5.  敏感方法加上了 onlyOwner 修饰符，仅允许合约拥有者(也就是部署合约的那个地址)进行操作，防止被恶意利用，具体原因参考 [Don't use transfer() or send()](https://consensys.github.io/smart-contract-best-practices/recommendations/#dont-use-transfer-or-send)

## 6. 编写测试

参考 [simple_demo.spec.js](https://github.com/veryyoung/nft-demo/blob/main/test/simple_demo.spec.js)

## 7. 部署合约

## 8. 上架 opensea


## 9. 开图

生成开图后的图片和 meta info





