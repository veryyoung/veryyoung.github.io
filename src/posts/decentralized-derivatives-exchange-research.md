---
title: 去中心化衍生品交易所调研
date: 2023-08-21
author: veryyoung
tags:
  - crypto
  - blockchain
  - DEX
---

# 去中心化衍生品交易所调研

## 前言

随着 Uniswap 等 DEX 的崛起以及 FTX 巨无霸交易所的倒闭，去中心化交易所越来越受到关注。

衍生品交易是交易所的一个很重要的交易方向，以币安为例，过去 24H（20230821）币安现货交易额约为 40 亿美金（数据出处 [CoinMarketCap](https://coinmarketcap.com/zh/rankings/exchanges/)），而衍生品交易额为 180 亿美金，是现货的四倍多。可见衍生品交易是比现货交易更大的市场。

而去中心化交易所中 24H 交易额为 10.6 亿美金（数据出处 [Dune](https://dune.com/hagaetc/dex-metrics)），其中衍生品交易额为 6.1 亿美金（数据出处 [Defillama](https://defillama.com/derivatives)），占比不到 60%，而 CEX 的占比大约为 82%。

从去中心化交易所与中心化交易所的衍生品交易量和交易额占比可以看出，去中心化衍生品交易所具有巨大的市场空间。


## 项目分析

从 [Defillama](https://defillama.com/derivatives) 按过去 24H 交易额取 Top10 DEX 衍生品交易所进行分析。

列表如下：

- dYdX
- GMX
- Hyperliquid
- HMX
- Synthetix
- Kwenta
- Satori
- Vertex Protocol
- Polynomial Protocol
- MUX Protocol

由于 dYdX 和 GMX 是各自模式的开拓者，将其人工调整到了第一二位。

### dYdX

[dYdX](https://dydx.exchange/) 是去基于订单簿的中心化衍生品交易平台的龙头，订单簿运行在链下的中心化服务器上，撮合引擎运行在 Starkware 上，将会转移到 Cosmos。 基于订单簿的协议对交易者的使用体验会更加友好和自然，交易滑点也更可控。也采用了类 CEX 的资金费率机制来保持合约价格与标的资产价格之间的平衡。

持有 DYDX 平台币不仅可以参与平台治理，还能拥有交易手续费减免这类和 CEX 一致的用户体验。

功能完善，体验类 CEX。

缺点在于由于是订单薄模式，需要引入大量的做市商，且不少做市商是 dYdX 的投资方和朋友，存在操控价格、定点爆破、刷订单量获取代币等风险。

为了获得更高的 TPS 和更强的去中心化性，dYdX 将会迁移到基于 Cosmos 构建的独占链上，节点验证者不光进行撮合，订单簿也运行在其中，同时项目方也将不再运行协议的任何部分，而是由社区控制，这大大增强了去中心化性。

### GMX

[GMX](https://gmx.io/#/) 是一种去中心化的现货和永续交易所，特点是低交易手续费、低价格滑点，流动性由多资产池来提供，通过做市、交易费用和杠杆交易赚取流动性提供者费用。支持 Arbitrum 和 Avalanche 链。

由于没有订单薄也没有 AMM 模型，GMX 的资产定价功能是由 Chainlink 预言机提供的。流动性则是由 GLP 提供的。GLP 池是一个多资产池，流动性提供者可以将资产合成 GLP 池，用户做多可以理解为从池子租借对应币种，做空则视为从池子租借稳定币。


由于资产定价来自预言机，资产交易可以做到零滑点，同时 GLP 的资产利用率也大大提升，这导致流动性提供者能获取的收益率也会随之提高。

目前 TVL 为 1.4 亿美金。


### Hyperliquid

[Hyperliquid](https://app.hyperliquid.xyz/) 理念基本和 dYdX v4(迁移到 Cosmos 独占链上的思路)基本一致。

同时提出了 HLP(Hyperliquidity Provider) 的概念，用户可以将资产存入 HLP 来获取收益。

目前 TVL 仅有 691 万美金。

### HMX

[HMX](https://hmx.org/arbitrum) 跟 GMX 比较类似，资金池叫 HLP，基于 GMX 的 GLP，流动性提供方能同时得到 GMX 和 HMX 的收益。

交易手续费比 GMX 更低，明牌空投，其他没有显著特点。

### Synthetix

[Synthetix](https://synthetix.io/) 是一个构建在以太坊和 Optimistic 上的去中心化流动性提供协议。通过质押资产合成 Synthetix Network Token（SNX）来进行流动性提供。整体机制和 GMX 比较类似。


### Kwenta

[Kwenta](https://kwenta.eth.limo/) 运行在 Optimism 上，流动性源于 Synthetix。也采用了基于 Chainlink 的预言机提供价格报价，因此交易也无滑点。

### Satori

[Satori](https://satori.finance/) 是一个基于订单簿的去中心化交易所，从波卡生态孵化，构建在  Polygon zkEVM、zkSync 和 Scroll，理念基本和 dYdX 一致。

### Vertex

[Vertex](https://vertexprotocol.com/) 运行在 Arbitrum 上，采用订单簿与 AMM 结合的去中心化交易所。拥有订单簿交易体验好的特点，同时也拥有 AMM 去中心化解决流动性问题的优点。

目前 TVL 仅有 985 万美金。

### Polynomial Protocol

[Polynomial Protocol](https://www.polynomial.fi/) 运行在 Optimism，流动性源于 Synthetix，也使用 Chainlink 进行报价。目前正在进行 Trading Season，达到一定交易量可获得 NFT 和 ＄OP 代币的空投。

### MUX Protocol

[MUX Protocol](https://mux.network/) 运行在 Arbitrum、BNB Chain、Optimism、Avalanche 和 Fantom 上。跟 GLP 比较类似，由质押资金池提供 MUXLP 提供流动性。属于是 GMX 的 fork，但通过对各项参数的微调，可能对大户更加友好。


### 方案对比

| 项目                | 运行的链                                                   | 定价机制     | 流动性提供方式   | 滑点             | 多空调控手段 | 去中心化程度                     |   |
|---------------------|------------------------------------------------------------|--------------|------------------|------------------|--------------|----------------------------------|---|
| dYdX                | 目前在 Starkware，新版本会迁移到基于 Cosmos 构建的独占链上 | 订单簿       | 订单簿，做市商   | 无               | 资金费率     | 目前订单簿在链下，做市商比较集中 |   |
| GMX                 | Arbitrum、Avalanche                                        | 预言机       | GLP              | 无               | 资产的利用率 | 高                               |   |
| Hyperliquid         | 基于 Cosmos 构建的独占链上                                 | 订单簿       | 订单簿，做市商   | 无               | 资金费率     | 做市商比较集中                   |   |
| HMX                 | Arbitrum                                                   | 预言机       | HLP、GLP         | 无               | 资产的利用率 | 高                               |   |
| Synthetix           | Optimism                                                   | 预言机       | SNX              | 无               | 资产的利用率 | 高                               |   |
| Kwenta              | Optimism                                                   | 预言机       | Synthetix 债务池 | 无               | 资产的利用率 | 高                               |   |
| Satori              | zkEVM、zkSync、Scroll                                      | 订单簿       | 订单簿，做市商   | 无               | 资金费率     | 订单簿在链下，做市商比较集中     |   |
| Vertex              | Arbitrum                                                   | 订单簿和 AMM | 订单簿和 AMM     | AMM 部分存在滑点 | 资金费率     | 订单簿在链下，做市商比较集中     |   |
| Polynomial Protocol | Optimism                                                   | 预言机       | Synthetix 债务池 | 无               | 资产的利用率 | 高                               |   |
| MUX Protocol        | Arbitrum、BNB Chain、Optimism、Avalanche、Fantom           | 预言机       | MUXLP            | 无               | 资产的利用率 | 高                               |   |




## 总结

目前市场上主流的去中心化衍生品交易所主要是基于订单簿和资产质押合成两种方式。

基于订单簿的协议用户体验更友好（类 CEX），功能更完善，也不存在滑点。但需要做市商来提供流动性，这增大了中心化的风险。同时订单簿对底层区块链的 TPS 要求更高，导致部分协议（比如 dYdX）在以太坊和以太坊二层上无法进行流程的服务，最后不得不出走选择自建应用链，而自建应用链又会导致订单簿的存储和撮合部分不够去中心化。

基于资产质押合成的协议由于资产定价来自预言机，资产交易可以做到零滑点，同时的资产利用率和流动性提供者能获取的收益率也会比较高。缺点在于由于流动性由资产质押提供，交易对比较固定，支持的交易对比较少。 由于缺乏资金费率正负的调整，多空交易容易出现一边倒的情况。

## 参考资料

- [https://defillama.com/derivatives](https://defillama.com/derivatives)
- [https://dydx.exchange/faq](https://dydx.exchange/faq)
- [https://docs.gmx.io/docs/intro](https://docs.gmx.io/docs/intro)
- [https://hyperliquid.gitbook.io/hyperliquid-docs/](https://hyperliquid.gitbook.io/hyperliquid-docs/)
- [https://docs.hmx.org/hmx/](https://docs.hmx.org/hmx/)
- [https://docs.synthetix.io/synthetix-protocol/readme](https://docs.synthetix.io/synthetix-protocol/readme)
- [https://docs.kwenta.io/](https://docs.kwenta.io/)
- [https://docs.satori.finance/#introduction](https://docs.satori.finance/#introduction)
- [https://vertex-protocol.gitbook.io/docs/getting-started/overview](https://vertex-protocol.gitbook.io/docs/getting-started/overview)
- [https://docs.trade.polynomial.fi/](https://docs.trade.polynomial.fi/)
- [https://docs.mux.network/protocol/overview](https://docs.mux.network/protocol/overview)