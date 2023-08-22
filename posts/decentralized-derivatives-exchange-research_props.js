import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/decentralized-derivatives-exchange-research.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/decentralized-derivatives-exchange-research.html",
    'title': "去中心化衍生品交易所调研",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>去中心化衍生品交易所调研</h1>\n<h2 id="%E5%89%8D%E8%A8%80">前言<a class="anchor" href="#%E5%89%8D%E8%A8%80">§</a></h2>\n<p>随着 Uniswap 等 DEX 的崛起以及 FTX 巨无霸交易所的倒闭，去中心化交易所越来越受到关注。</p>\n<p>衍生品交易是交易所的一个很重要的交易方向，以币安为例，过去 24H（20230821）币安现货交易额约为 40 亿美金（数据出处 <a href="https://coinmarketcap.com/zh/rankings/exchanges/">CoinMarketCap</a>），而衍生品交易额为 180 亿美金，是现货的四倍多。可见衍生品交易是比现货交易更大的市场。</p>\n<p>而去中心化交易所中 24H 交易额为 10.6 亿美金（数据出处 <a href="https://dune.com/hagaetc/dex-metrics">Dune</a>），其中衍生品交易额为 6.1 亿美金（数据出处 <a href="https://defillama.com/derivatives">Defillama</a>），占比不到 60%，而 CEX 的占比大约为 82%。</p>\n<p>从去中心化交易所与中心化交易所的衍生品交易量和交易额占比可以看出，去中心化衍生品交易所具有巨大的市场空间。</p>\n<h2 id="%E9%A1%B9%E7%9B%AE%E5%88%86%E6%9E%90">项目分析<a class="anchor" href="#%E9%A1%B9%E7%9B%AE%E5%88%86%E6%9E%90">§</a></h2>\n<p>从 <a href="https://defillama.com/derivatives">Defillama</a> 按过去 24H 交易额取 Top10 DEX 衍生品交易所进行分析。</p>\n<p>列表如下：</p>\n<ul>\n<li>dYdX</li>\n<li>GMX</li>\n<li>Hyperliquid</li>\n<li>HMX</li>\n<li>Synthetix</li>\n<li>Kwenta</li>\n<li>Satori</li>\n<li>Vertex Protocol</li>\n<li>Polynomial Protocol</li>\n<li>MUX Protocol</li>\n</ul>\n<p>由于 dYdX 和 GMX 是各自模式的开拓者，将其人工调整到了第一二位。</p>\n<h3 id="dydx">dYdX<a class="anchor" href="#dydx">§</a></h3>\n<p><a href="https://dydx.exchange/">dYdX</a> 是去基于订单簿的中心化衍生品交易平台的龙头，订单簿运行在链下的中心化服务器上，撮合引擎运行在 Starkware 上，将会转移到 Cosmos。 基于订单簿的协议对交易者的使用体验会更加友好和自然，交易滑点也更可控。也采用了类 CEX 的资金费率机制来保持合约价格与标的资产价格之间的平衡。</p>\n<p>持有 DYDX 平台币不仅可以参与平台治理，还能拥有交易手续费减免这类和 CEX 一致的用户体验。</p>\n<p>功能完善，体验类 CEX。</p>\n<p>缺点在于由于是订单薄模式，需要引入大量的做市商，且不少做市商是 dYdX 的投资方和朋友，存在操控价格、定点爆破、刷订单量获取代币等风险。</p>\n<p>为了获得更高的 TPS 和更强的去中心化性，dYdX 将会迁移到基于 Cosmos 构建的独占链上，节点验证者不光进行撮合，订单簿也运行在其中，同时项目方也将不再运行协议的任何部分，而是由社区控制，这大大增强了去中心化性。</p>\n<h3 id="gmx">GMX<a class="anchor" href="#gmx">§</a></h3>\n<p><a href="https://gmx.io/#/">GMX</a> 是一种去中心化的现货和永续交易所，特点是低交易手续费、低价格滑点，流动性由多资产池来提供，通过做市、交易费用和杠杆交易赚取流动性提供者费用。支持 Arbitrum 和 Avalanche 链。</p>\n<p>由于没有订单薄也没有 AMM 模型，GMX 的资产定价功能是由 Chainlink 预言机提供的。流动性则是由 GLP 提供的。GLP 池是一个多资产池，流动性提供者可以将资产合成 GLP 池，用户做多可以理解为从池子租借对应币种，做空则视为从池子租借稳定币。</p>\n<p>由于资产定价来自预言机，资产交易可以做到零滑点，同时 GLP 的资产利用率也大大提升，这导致流动性提供者能获取的收益率也会随之提高。</p>\n<p>目前 TVL 为 1.4 亿美金。</p>\n<h3 id="hyperliquid">Hyperliquid<a class="anchor" href="#hyperliquid">§</a></h3>\n<p><a href="https://app.hyperliquid.xyz/">Hyperliquid</a> 理念基本和 dYdX v4(迁移到 Cosmos 独占链上的思路)基本一致。</p>\n<p>同时提出了 HLP(Hyperliquidity Provider) 的概念，用户可以将资产存入 HLP 来获取收益。</p>\n<p>目前 TVL 仅有 691 万美金。</p>\n<h3 id="hmx">HMX<a class="anchor" href="#hmx">§</a></h3>\n<p><a href="https://hmx.org/arbitrum">HMX</a> 跟 GMX 比较类似，资金池叫 HLP，基于 GMX 的 GLP，流动性提供方能同时得到 GMX 和 HMX 的收益。</p>\n<p>交易手续费比 GMX 更低，明牌空投，其他没有显著特点。</p>\n<h3 id="synthetix">Synthetix<a class="anchor" href="#synthetix">§</a></h3>\n<p><a href="https://synthetix.io/">Synthetix</a> 是一个构建在以太坊和 Optimistic 上的去中心化流动性提供协议。通过质押资产合成 Synthetix Network Token（SNX）来进行流动性提供。整体机制和 GMX 比较类似。</p>\n<h3 id="kwenta">Kwenta<a class="anchor" href="#kwenta">§</a></h3>\n<p><a href="https://kwenta.eth.limo/">Kwenta</a> 运行在 Optimism 上，流动性源于 Synthetix。也采用了基于 Chainlink 的预言机提供价格报价，因此交易也无滑点。</p>\n<h3 id="satori">Satori<a class="anchor" href="#satori">§</a></h3>\n<p><a href="https://satori.finance/">Satori</a> 是一个基于订单簿的去中心化交易所，从波卡生态孵化，构建在  Polygon zkEVM、zkSync 和 Scroll，理念基本和 dYdX 一致。</p>\n<h3 id="vertex">Vertex<a class="anchor" href="#vertex">§</a></h3>\n<p><a href="https://vertexprotocol.com/">Vertex</a> 运行在 Arbitrum 上，采用订单簿与 AMM 结合的去中心化交易所。拥有订单簿交易体验好的特点，同时也拥有 AMM 去中心化解决流动性问题的优点。</p>\n<p>目前 TVL 仅有 985 万美金。</p>\n<h3 id="polynomial-protocol">Polynomial Protocol<a class="anchor" href="#polynomial-protocol">§</a></h3>\n<p><a href="https://www.polynomial.fi/">Polynomial Protocol</a> 运行在 Optimism，流动性源于 Synthetix，也使用 Chainlink 进行报价。目前正在进行 Trading Season，达到一定交易量可获得 NFT 和 ＄OP 代币的空投。</p>\n<h3 id="mux-protocol">MUX Protocol<a class="anchor" href="#mux-protocol">§</a></h3>\n<p><a href="https://mux.network/">MUX Protocol</a> 运行在 Arbitrum、BNB Chain、Optimism、Avalanche 和 Fantom 上。跟 GLP 比较类似，由质押资金池提供 MUXLP 提供流动性。属于是 GMX 的 fork，但通过对各项参数的微调，可能对大户更加友好。</p>\n<h3 id="%E6%96%B9%E6%A1%88%E5%AF%B9%E6%AF%94">方案对比<a class="anchor" href="#%E6%96%B9%E6%A1%88%E5%AF%B9%E6%AF%94">§</a></h3>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>项目</th>\n<th>运行的链</th>\n<th>定价机制</th>\n<th>流动性提供方式</th>\n<th>滑点</th>\n<th>多空调控手段</th>\n<th>去中心化程度</th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dYdX</td>\n<td>目前在 Starkware，新版本会迁移到基于 Cosmos 构建的独占链上</td>\n<td>订单簿</td>\n<td>订单簿，做市商</td>\n<td>无</td>\n<td>资金费率</td>\n<td>目前订单簿在链下，做市商比较集中</td>\n<td></td>\n</tr>\n<tr>\n<td>GMX</td>\n<td>Arbitrum、Avalanche</td>\n<td>预言机</td>\n<td>GLP</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n<tr>\n<td>Hyperliquid</td>\n<td>基于 Cosmos 构建的独占链上</td>\n<td>订单簿</td>\n<td>订单簿，做市商</td>\n<td>无</td>\n<td>资金费率</td>\n<td>做市商比较集中</td>\n<td></td>\n</tr>\n<tr>\n<td>HMX</td>\n<td>Arbitrum</td>\n<td>预言机</td>\n<td>HLP、GLP</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n<tr>\n<td>Synthetix</td>\n<td>Optimism</td>\n<td>预言机</td>\n<td>SNX</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n<tr>\n<td>Kwenta</td>\n<td>Optimism</td>\n<td>预言机</td>\n<td>Synthetix 债务池</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n<tr>\n<td>Satori</td>\n<td>zkEVM、zkSync、Scroll</td>\n<td>订单簿</td>\n<td>订单簿，做市商</td>\n<td>无</td>\n<td>资金费率</td>\n<td>订单簿在链下，做市商比较集中</td>\n<td></td>\n</tr>\n<tr>\n<td>Vertex</td>\n<td>Arbitrum</td>\n<td>订单簿和 AMM</td>\n<td>订单簿和 AMM</td>\n<td>AMM 部分存在滑点</td>\n<td>资金费率</td>\n<td>订单簿在链下，做市商比较集中</td>\n<td></td>\n</tr>\n<tr>\n<td>Polynomial Protocol</td>\n<td>Optimism</td>\n<td>预言机</td>\n<td>Synthetix 债务池</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n<tr>\n<td>MUX Protocol</td>\n<td>Arbitrum、BNB Chain、Optimism、Avalanche、Fantom</td>\n<td>预言机</td>\n<td>MUXLP</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="%E6%80%BB%E7%BB%93">总结<a class="anchor" href="#%E6%80%BB%E7%BB%93">§</a></h2>\n<p>目前市场上主流的去中心化衍生品交易所主要是基于订单簿和资产质押合成两种方式。</p>\n<p>基于订单簿的协议用户体验更友好（类 CEX），功能更完善，也不存在滑点。但需要做市商来提供流动性，这增大了中心化的风险。同时订单簿对底层区块链的 TPS 要求更高，导致部分协议（比如 dYdX）在以太坊和以太坊二层上无法进行流程的服务，最后不得不出走选择自建应用链，而自建应用链又会导致订单簿的存储和撮合部分不够去中心化。</p>\n<p>基于资产质押合成的协议由于资产定价来自预言机，资产交易可以做到零滑点，同时的资产利用率和流动性提供者能获取的收益率也会比较高。缺点在于由于流动性由资产质押提供，交易对比较固定，支持的交易对比较少。 由于缺乏资金费率正负的调整，多空交易容易出现一边倒的情况。</p>\n<h2 id="%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料<a class="anchor" href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">§</a></h2>\n<ul>\n<li><a href="https://defillama.com/derivatives">https://defillama.com/derivatives</a></li>\n<li><a href="https://dydx.exchange/faq">https://dydx.exchange/faq</a></li>\n<li><a href="https://docs.gmx.io/docs/intro">https://docs.gmx.io/docs/intro</a></li>\n<li><a href="https://hyperliquid.gitbook.io/hyperliquid-docs/">https://hyperliquid.gitbook.io/hyperliquid-docs/</a></li>\n<li><a href="https://docs.hmx.org/hmx/">https://docs.hmx.org/hmx/</a></li>\n<li><a href="https://docs.synthetix.io/synthetix-protocol/readme">https://docs.synthetix.io/synthetix-protocol/readme</a></li>\n<li><a href="https://docs.kwenta.io/">https://docs.kwenta.io/</a></li>\n<li><a href="https://docs.satori.finance/#introduction">https://docs.satori.finance/#introduction</a></li>\n<li><a href="https://vertex-protocol.gitbook.io/docs/getting-started/overview">https://vertex-protocol.gitbook.io/docs/getting-started/overview</a></li>\n<li><a href="https://docs.trade.polynomial.fi/">https://docs.trade.polynomial.fi/</a></li>\n<li><a href="https://docs.mux.network/protocol/overview">https://docs.mux.network/protocol/overview</a></li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u53BB\u4E2D\u5FC3\u5316\u884D\u751F\u54C1\u4EA4\u6613\u6240\u8C03\u7814"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%89%8D%E8%A8%80">前言<a class="anchor" href="#%E5%89%8D%E8%A8%80">§</a></h2>\n<p>随着 Uniswap 等 DEX 的崛起以及 FTX 巨无霸交易所的倒闭，去中心化交易所越来越受到关注。</p>\n<p>衍生品交易是交易所的一个很重要的交易方向，以币安为例，过去 24H（20230821）币安现货交易额约为 40 亿美金（数据出处 <a href="https://coinmarketcap.com/zh/rankings/exchanges/">CoinMarketCap</a>），而衍生品交易额为 180 亿美金，是现货的四倍多。可见衍生品交易是比现货交易更大的市场。</p>\n<p>而去中心化交易所中 24H 交易额为 10.6 亿美金（数据出处 <a href="https://dune.com/hagaetc/dex-metrics">Dune</a>），其中衍生品交易额为 6.1 亿美金（数据出处 <a href="https://defillama.com/derivatives">Defillama</a>），占比不到 60%，而 CEX 的占比大约为 82%。</p>\n<p>从去中心化交易所与中心化交易所的衍生品交易量和交易额占比可以看出，去中心化衍生品交易所具有巨大的市场空间。</p>\n<h2 id="%E9%A1%B9%E7%9B%AE%E5%88%86%E6%9E%90">项目分析<a class="anchor" href="#%E9%A1%B9%E7%9B%AE%E5%88%86%E6%9E%90">§</a></h2>\n<p>从 <a href="https://defillama.com/derivatives">Defillama</a> 按过去 24H 交易额取 Top10 DEX 衍生品交易所进行分析。</p>\n<p>列表如下：</p>\n<ul>\n<li>dYdX</li>\n<li>GMX</li>\n<li>Hyperliquid</li>\n<li>HMX</li>\n<li>Synthetix</li>\n<li>Kwenta</li>\n<li>Satori</li>\n<li>Vertex Protocol</li>\n<li>Polynomial Protocol</li>\n<li>MUX Protocol</li>\n</ul>\n<p>由于 dYdX 和 GMX 是各自模式的开拓者，将其人工调整到了第一二位。</p>\n<h3 id="dydx">dYdX<a class="anchor" href="#dydx">§</a></h3>\n<p><a href="https://dydx.exchange/">dYdX</a> 是去基于订单簿的中心化衍生品交易平台的龙头，订单簿运行在链下的中心化服务器上，撮合引擎运行在 Starkware 上，将会转移到 Cosmos。 基于订单簿的协议对交易者的使用体验会更加友好和自然，交易滑点也更可控。也采用了类 CEX 的资金费率机制来保持合约价格与标的资产价格之间的平衡。</p>\n<p>持有 DYDX 平台币不仅可以参与平台治理，还能拥有交易手续费减免这类和 CEX 一致的用户体验。</p>\n<p>功能完善，体验类 CEX。</p>\n<p>缺点在于由于是订单薄模式，需要引入大量的做市商，且不少做市商是 dYdX 的投资方和朋友，存在操控价格、定点爆破、刷订单量获取代币等风险。</p>\n<p>为了获得更高的 TPS 和更强的去中心化性，dYdX 将会迁移到基于 Cosmos 构建的独占链上，节点验证者不光进行撮合，订单簿也运行在其中，同时项目方也将不再运行协议的任何部分，而是由社区控制，这大大增强了去中心化性。</p>\n<h3 id="gmx">GMX<a class="anchor" href="#gmx">§</a></h3>\n<p><a href="https://gmx.io/#/">GMX</a> 是一种去中心化的现货和永续交易所，特点是低交易手续费、低价格滑点，流动性由多资产池来提供，通过做市、交易费用和杠杆交易赚取流动性提供者费用。支持 Arbitrum 和 Avalanche 链。</p>\n<p>由于没有订单薄也没有 AMM 模型，GMX 的资产定价功能是由 Chainlink 预言机提供的。流动性则是由 GLP 提供的。GLP 池是一个多资产池，流动性提供者可以将资产合成 GLP 池，用户做多可以理解为从池子租借对应币种，做空则视为从池子租借稳定币。</p>\n<p>由于资产定价来自预言机，资产交易可以做到零滑点，同时 GLP 的资产利用率也大大提升，这导致流动性提供者能获取的收益率也会随之提高。</p>\n<p>目前 TVL 为 1.4 亿美金。</p>\n<h3 id="hyperliquid">Hyperliquid<a class="anchor" href="#hyperliquid">§</a></h3>\n<p><a href="https://app.hyperliquid.xyz/">Hyperliquid</a> 理念基本和 dYdX v4(迁移到 Cosmos 独占链上的思路)基本一致。</p>\n<p>同时提出了 HLP(Hyperliquidity Provider) 的概念，用户可以将资产存入 HLP 来获取收益。</p>\n<p>目前 TVL 仅有 691 万美金。</p>\n<h3 id="hmx">HMX<a class="anchor" href="#hmx">§</a></h3>\n<p><a href="https://hmx.org/arbitrum">HMX</a> 跟 GMX 比较类似，资金池叫 HLP，基于 GMX 的 GLP，流动性提供方能同时得到 GMX 和 HMX 的收益。</p>\n<p>交易手续费比 GMX 更低，明牌空投，其他没有显著特点。</p>\n<h3 id="synthetix">Synthetix<a class="anchor" href="#synthetix">§</a></h3>\n<p><a href="https://synthetix.io/">Synthetix</a> 是一个构建在以太坊和 Optimistic 上的去中心化流动性提供协议。通过质押资产合成 Synthetix Network Token（SNX）来进行流动性提供。整体机制和 GMX 比较类似。</p>\n<h3 id="kwenta">Kwenta<a class="anchor" href="#kwenta">§</a></h3>\n<p><a href="https://kwenta.eth.limo/">Kwenta</a> 运行在 Optimism 上，流动性源于 Synthetix。也采用了基于 Chainlink 的预言机提供价格报价，因此交易也无滑点。</p>\n<h3 id="satori">Satori<a class="anchor" href="#satori">§</a></h3>\n<p><a href="https://satori.finance/">Satori</a> 是一个基于订单簿的去中心化交易所，从波卡生态孵化，构建在  Polygon zkEVM、zkSync 和 Scroll，理念基本和 dYdX 一致。</p>\n<h3 id="vertex">Vertex<a class="anchor" href="#vertex">§</a></h3>\n<p><a href="https://vertexprotocol.com/">Vertex</a> 运行在 Arbitrum 上，采用订单簿与 AMM 结合的去中心化交易所。拥有订单簿交易体验好的特点，同时也拥有 AMM 去中心化解决流动性问题的优点。</p>\n<p>目前 TVL 仅有 985 万美金。</p>\n<h3 id="polynomial-protocol">Polynomial Protocol<a class="anchor" href="#polynomial-protocol">§</a></h3>\n<p><a href="https://www.polynomial.fi/">Polynomial Protocol</a> 运行在 Optimism，流动性源于 Synthetix，也使用 Chainlink 进行报价。目前正在进行 Trading Season，达到一定交易量可获得 NFT 和 ＄OP 代币的空投。</p>\n<h3 id="mux-protocol">MUX Protocol<a class="anchor" href="#mux-protocol">§</a></h3>\n<p><a href="https://mux.network/">MUX Protocol</a> 运行在 Arbitrum、BNB Chain、Optimism、Avalanche 和 Fantom 上。跟 GLP 比较类似，由质押资金池提供 MUXLP 提供流动性。属于是 GMX 的 fork，但通过对各项参数的微调，可能对大户更加友好。</p>\n<h3 id="%E6%96%B9%E6%A1%88%E5%AF%B9%E6%AF%94">方案对比<a class="anchor" href="#%E6%96%B9%E6%A1%88%E5%AF%B9%E6%AF%94">§</a></h3>\n<div class="table_wrapper"><table>\n<thead>\n<tr>\n<th>项目</th>\n<th>运行的链</th>\n<th>定价机制</th>\n<th>流动性提供方式</th>\n<th>滑点</th>\n<th>多空调控手段</th>\n<th>去中心化程度</th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>dYdX</td>\n<td>目前在 Starkware，新版本会迁移到基于 Cosmos 构建的独占链上</td>\n<td>订单簿</td>\n<td>订单簿，做市商</td>\n<td>无</td>\n<td>资金费率</td>\n<td>目前订单簿在链下，做市商比较集中</td>\n<td></td>\n</tr>\n<tr>\n<td>GMX</td>\n<td>Arbitrum、Avalanche</td>\n<td>预言机</td>\n<td>GLP</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n<tr>\n<td>Hyperliquid</td>\n<td>基于 Cosmos 构建的独占链上</td>\n<td>订单簿</td>\n<td>订单簿，做市商</td>\n<td>无</td>\n<td>资金费率</td>\n<td>做市商比较集中</td>\n<td></td>\n</tr>\n<tr>\n<td>HMX</td>\n<td>Arbitrum</td>\n<td>预言机</td>\n<td>HLP、GLP</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n<tr>\n<td>Synthetix</td>\n<td>Optimism</td>\n<td>预言机</td>\n<td>SNX</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n<tr>\n<td>Kwenta</td>\n<td>Optimism</td>\n<td>预言机</td>\n<td>Synthetix 债务池</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n<tr>\n<td>Satori</td>\n<td>zkEVM、zkSync、Scroll</td>\n<td>订单簿</td>\n<td>订单簿，做市商</td>\n<td>无</td>\n<td>资金费率</td>\n<td>订单簿在链下，做市商比较集中</td>\n<td></td>\n</tr>\n<tr>\n<td>Vertex</td>\n<td>Arbitrum</td>\n<td>订单簿和 AMM</td>\n<td>订单簿和 AMM</td>\n<td>AMM 部分存在滑点</td>\n<td>资金费率</td>\n<td>订单簿在链下，做市商比较集中</td>\n<td></td>\n</tr>\n<tr>\n<td>Polynomial Protocol</td>\n<td>Optimism</td>\n<td>预言机</td>\n<td>Synthetix 债务池</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n<tr>\n<td>MUX Protocol</td>\n<td>Arbitrum、BNB Chain、Optimism、Avalanche、Fantom</td>\n<td>预言机</td>\n<td>MUXLP</td>\n<td>无</td>\n<td>资产的利用率</td>\n<td>高</td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n<h2 id="%E6%80%BB%E7%BB%93">总结<a class="anchor" href="#%E6%80%BB%E7%BB%93">§</a></h2>\n<p>目前市场上主流的去中心化衍生品交易所主要是基于订单簿和资产质押合成两种方式。</p>\n<p>基于订单簿的协议用户体验更友好（类 CEX），功能更完善，也不存在滑点。但需要做市商来提供流动性，这增大了中心化的风险。同时订单簿对底层区块链的 TPS 要求更高，导致部分协议（比如 dYdX）在以太坊和以太坊二层上无法进行流程的服务，最后不得不出走选择自建应用链，而自建应用链又会导致订单簿的存储和撮合部分不够去中心化。</p>\n<p>基于资产质押合成的协议由于资产定价来自预言机，资产交易可以做到零滑点，同时的资产利用率和流动性提供者能获取的收益率也会比较高。缺点在于由于流动性由资产质押提供，交易对比较固定，支持的交易对比较少。 由于缺乏资金费率正负的调整，多空交易容易出现一边倒的情况。</p>\n<h2 id="%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料<a class="anchor" href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">§</a></h2>\n<ul>\n<li><a href="https://defillama.com/derivatives">https://defillama.com/derivatives</a></li>\n<li><a href="https://dydx.exchange/faq">https://dydx.exchange/faq</a></li>\n<li><a href="https://docs.gmx.io/docs/intro">https://docs.gmx.io/docs/intro</a></li>\n<li><a href="https://hyperliquid.gitbook.io/hyperliquid-docs/">https://hyperliquid.gitbook.io/hyperliquid-docs/</a></li>\n<li><a href="https://docs.hmx.org/hmx/">https://docs.hmx.org/hmx/</a></li>\n<li><a href="https://docs.synthetix.io/synthetix-protocol/readme">https://docs.synthetix.io/synthetix-protocol/readme</a></li>\n<li><a href="https://docs.kwenta.io/">https://docs.kwenta.io/</a></li>\n<li><a href="https://docs.satori.finance/#introduction">https://docs.satori.finance/#introduction</a></li>\n<li><a href="https://vertex-protocol.gitbook.io/docs/getting-started/overview">https://vertex-protocol.gitbook.io/docs/getting-started/overview</a></li>\n<li><a href="https://docs.trade.polynomial.fi/">https://docs.trade.polynomial.fi/</a></li>\n<li><a href="https://docs.mux.network/protocol/overview">https://docs.mux.network/protocol/overview</a></li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%89%8D%E8%A8%80" }, "\u524D\u8A00")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E9%A1%B9%E7%9B%AE%E5%88%86%E6%9E%90" }, "\u9879\u76EE\u5206\u6790"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#dydx" }, "dYdX")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#gmx" }, "GMX")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#hyperliquid" }, "Hyperliquid")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#hmx" }, "HMX")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#synthetix" }, "Synthetix")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#kwenta" }, "Kwenta")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#satori" }, "Satori")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#vertex" }, "Vertex")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#polynomial-protocol" }, "Polynomial Protocol")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#mux-protocol" }, "MUX Protocol")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%96%B9%E6%A1%88%E5%AF%B9%E6%AF%94" }, "\u65B9\u6848\u5BF9\u6BD4")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%80%BB%E7%BB%93" }, "\u603B\u7ED3")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99" }, "\u53C2\u8003\u8D44\u6599")))),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2023-08-21T00:00:00.000Z",
    'updated': null,
    'excerpt': "前言 随着 Uniswap 等 DEX 的崛起以及 FTX 巨无霸交易所的倒闭，去中心化交易所越来越受到关注。 衍生品交易是交易所的一个很重要的交易方向，以币安为例，过去 24H（20230821）币安现货交易额约为 40 亿美金（数据出处 CoinMa...",
    'cover': undefined,
    'tags': [
        "crypto",
        "blockchain",
        "DEX"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/decentralized-derivatives-exchange-research.md",
                "title": "去中心化衍生品交易所调研",
                "link": "posts/decentralized-derivatives-exchange-research.html",
                "date": "2023-08-21T00:00:00.000Z",
                "updated": null,
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "crypto",
                    "blockchain",
                    "DEX"
                ],
                "excerpt": "前言 随着 Uniswap 等 DEX 的崛起以及 FTX 巨无霸交易所的倒闭，去中心化交易所越来越受到关注。 衍生品交易是交易所的一个很重要的交易方向，以币安为例，过去 24H（20230821）币安现货交易额约为 40 亿美金（数据出处 CoinMa..."
            },
            {
                "pagePath": "posts/japan-lasik-surgery.md",
                "title": "日本品川眼睛近视手术过程和注意事项",
                "link": "posts/japan-lasik-surgery.html",
                "date": "2023-07-03T00:00:00.000Z",
                "updated": null,
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "life"
                ],
                "excerpt": "前言 戴着近视眼镜各种不便，终于下定决心做了近视眼手术，记录下过程，不专业，贵在真实。 术前 打电话预约，需要日语好，不然会被拒绝。 会询问半年以内有没有做过手术、有没有戴隐形眼镜。 建议预约上午，因为当天检查做手术..."
            },
            {
                "pagePath": "posts/optimistic-rollup-principle-analysis.md",
                "title": "Optimistic Rollup 原理分析",
                "link": "posts/optimistic-rollup-principle-analysis.html",
                "date": "2023-06-22T00:00:00.000Z",
                "updated": null,
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "crypto",
                    "blockchain",
                    "layer2"
                ],
                "excerpt": "前言 21 年的时候有幸帮一家基于 Optimistic Rollup 的 layer2 团队做过一段时间的事情，时间久了都快忘记了。最近工作不太忙，抽空梳理下。 简介 Layer2 Rollup 是用来做以太坊吞吐量扩容的典型方案，使用 Rollup 可以让交易发..."
            },
            {
                "pagePath": "posts/ERC721A-analysis.md",
                "title": "ERC721A 介绍及原理分析",
                "link": "posts/ERC721A-analysis.html",
                "date": "2022-04-07T00:00:00.000Z",
                "updated": null,
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "crypto",
                    "blockchain",
                    "NFT"
                ],
                "excerpt": "介绍 ERC721A 是 Azuki 项目方研发的一个 ERC721 协议的实现，能在 mint 多个 NFT 的时候节省大量的 gas，甚至能做到 gas 成本基本与铸造单个 NFT 基本相同。 ERC721A 使用 1. 引入 ERC721A 依赖 npm install --save-dev erc72...",
                "cover": "https://camo.githubusercontent.com/d13739d5ecfd5dc882b0cb7089a770b55f4bb1a1abf98067b94e1c21864fb261/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f464964494c4b7056514145515f35553f666f726d61743d6a7067266e616d653d6d656469756d"
            },
            {
                "pagePath": "posts/summary-of-youtuber-nft-alpha.md",
                "title": "YouTuber NFT阿尔法视频小结",
                "link": "posts/summary-of-youtuber-nft-alpha.html",
                "date": "2022-03-18T00:00:00.000Z",
                "updated": null,
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "crypto",
                    "blockchain",
                    "NFT"
                ],
                "excerpt": "前言 在家人 Penny777 的推荐下知道了 YouTuber NFT阿尔法，有种相见恨晚的感觉。 花了一周时间按视频发布时间倒序看完了所有视频，受益匪浅。 做一个简单的总结，也因此得到了白名单， mint 了 NFT，现在地板价稳在 1.45 ETH。..."
            },
            {
                "pagePath": "posts/suterusu-research-report.md",
                "title": "Suterusu 研究报告",
                "link": "posts/suterusu-research-report.html",
                "date": "2022-01-15T00:00:00.000Z",
                "updated": "2022-01-15T03:20:41.000Z",
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "crypto",
                    "blockchain",
                    "privacy"
                ],
                "excerpt": "前言 Suterusu 是一位币圈 OG 朋友推荐给我的。 他来自传统金融领域，但在工作没多久就辞职 All in crypto，有大量的大饼在手，是曾经两个 punk 的持有者，各种新玩法他也能跟得上，并且有很独到的见解。 Suterusu 是他重仓的一..."
            },
            {
                "pagePath": "posts/2021-in-review.md",
                "title": "2021 In Review",
                "link": "posts/2021-in-review.html",
                "date": "2022-01-04T00:00:00.000Z",
                "updated": "2022-01-14T19:37:11.000Z",
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "crypto",
                    "blockchain",
                    "life"
                ],
                "excerpt": "Connect the Dots 刚毕业那几年还会写 \"20xx 年总结\" 这样的文章，不知道在哪一年已经失去了这个习惯。 今年发生了太多事情，让我非常有写点东西的想法。 叫 \"总结\" 好像过于古板，叫 \"回顾\" 可能比较合理，毕竟作为技术人，Co...",
                "cover": "../assets/images/sequoia_capital_all_in_crypto.jpg"
            },
            {
                "pagePath": "posts/NFT-presale-and-public-dev-tutorial.md",
                "title": "NFT 预售和公售开发教程",
                "link": "posts/NFT-presale-and-public-dev-tutorial.html",
                "date": "2021-12-31T00:00:00.000Z",
                "updated": null,
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "dev",
                    "crypto",
                    "blockchain"
                ],
                "excerpt": "上文组成了 NFT 基本的流程，一般的发售够用了，但现在主流做法是搞预售和公售。 预售可以起到给项目预热的作用，也可以在 Discord 里举办 AMA(Ask me anything) 让投资者更好的了解这个项目，项目方会有一定的要求，完成任务后..."
            },
            {
                "pagePath": "posts/NFT-development-tutorial.md",
                "title": "NFT 从开发到上架 Opensea 全流程",
                "link": "posts/NFT-development-tutorial.html",
                "date": "2021-11-30T00:00:00.000Z",
                "updated": "2022-03-18T13:13:53.000Z",
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "dev",
                    "crypto",
                    "blockchain"
                ],
                "excerpt": "最近参与了很多 NFT 项目的一级市场 mint 以及交易过程，也阅读了很多 NFT 项目的合约代码，自己还没实操过，并且全网也没找到此主题的文章。 此文章边做边写，不一定是最佳实践，但所有环节是本人亲自参与过的，keep your han...",
                "cover": "../assets/images/not_revealed_metadata.jpg"
            },
            {
                "pagePath": "posts/how-to-get-unlimited-emails.md",
                "title": "如何得到无限邮箱号？",
                "link": "posts/how-to-get-unlimited-emails.html",
                "date": "2021-09-27T00:00:00.000Z",
                "updated": "2021-12-17T08:10:23.000Z",
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "tips"
                ],
                "excerpt": "国内的网站或平台基本是需要绑定手机号的，但国外的大部分验证邮箱即可，如果能拥有无限邮箱号，就有无限注册账号的可能，如果平台有类似新手活动或需要拉邀请.....剩下的自己体会 以下是我尝试过的几种方式。 Gmail 任意位置加...",
                "cover": "../assets/images/email_all_receive.png"
            },
            {
                "pagePath": "posts/intro-to-ethereum.md",
                "title": "以太坊简介",
                "link": "posts/intro-to-ethereum.html",
                "date": "2021-09-22T00:00:00.000Z",
                "updated": "2021-12-26T13:14:32.000Z",
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "crypto",
                    "blockchain"
                ],
                "excerpt": "以太坊简介 2013 年底，19 岁的 Vitalik Buterin(以下简称 V 神) 发布了以太坊白皮书，以太坊就此诞生。 白皮书的副标题是 \"A Next-Generation Smart Contract and Decentralized Application Platform\"(下一代智能合约智能合约...",
                "cover": "https://sanfranciscotribe.com/Home/wp-content/uploads/2020/05/Ethereum-Ground-Up.png"
            },
            {
                "pagePath": "posts/intro-to-bitcoin.md",
                "title": "比特币简介",
                "link": "posts/intro-to-bitcoin.html",
                "date": "2021-09-01T00:00:00.000Z",
                "updated": "2021-12-17T08:10:23.000Z",
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "crypto",
                    "blockchain"
                ],
                "excerpt": "初识比特币 大约 13-14 年左右就听说过比特币，当时并没有特别的印象，只是把它当成用电脑挖矿开采的“Q 币”，还用当时的破电脑跑过挖矿程序，有没有运行起来并加入网络，有没有挖到过比特币已是毫无印象。 2015 年大学毕业后...",
                "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hash_Tree.svg/2560px-Hash_Tree.svg.png"
            }
        ],
        "categories": [],
        "tags": [
            {
                "name": "blockchain",
                "count": 10
            },
            {
                "name": "crypto",
                "count": 10
            },
            {
                "name": "dev",
                "count": 2
            },
            {
                "name": "life",
                "count": 2
            },
            {
                "name": "NFT",
                "count": 2
            },
            {
                "name": "DEX",
                "count": 1
            },
            {
                "name": "layer2",
                "count": 1
            },
            {
                "name": "privacy",
                "count": 1
            },
            {
                "name": "tips",
                "count": 1
            }
        ]
    }
};
