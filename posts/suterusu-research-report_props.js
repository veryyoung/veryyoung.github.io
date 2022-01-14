import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/suterusu-research-report.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/suterusu-research-report.html",
    'title': "Suterusu 研究报告",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Suterusu 调研报告</h1>\n<h2 id="%E5%89%8D%E8%A8%80">前言<a class="anchor" href="#%E5%89%8D%E8%A8%80">§</a></h2>\n<p><a href="https://suterusu.io/">Suterusu</a> 是一位币圈 OG 朋友推荐给我的。</p>\n<p>他来自传统金融领域，但在工作没多久就辞职 All in crypto，有大量的大饼在手，是曾经两个 punk 的持有者，各种新玩法他也能跟得上，并且有很独到的见解。</p>\n<p>Suterusu 是他重仓的一个项目，在 2019 年私募时就已经买进，并且持续关注项目和团队的发展。</p>\n<h2 id="what-is-suterusu">What is Suterusu?<a class="anchor" href="#what-is-suterusu">§</a></h2>\n<p>Suterusu 协议是一个 Layer2 的智能合约隐私支付基础建设，他采用了自研的 <a href="https://medium.com/suterusu/what-is-zk-consnark-bc458d4336f2">ZK-ConSnark</a> 算法，在不依赖受信任的设置的情况下，proof 生成和验证效率比同类算法大大提升，proof 体积也显著减少。这个算法的 paper 已经被 <a href="https://eprint.iacr.org/2021/540">Eurocrypt 2021</a> 接收。</p>\n<p>为什么需要一个隐私协议？</p>\n<p>一个广泛的误解是区块链是透明的。实际上区块链上的东西大部分都是公开的，每个人做了哪些交易，参与了哪些智能合约的交互都是公开的。地址仅仅是现实生活中的化名而已，随着 ENS 的流行，这会更加容易和现实生活绑定。</p>\n<p>很多巨鲸的钱包，比如孙哥、a16z、三箭、P 姐等的地址都是大家知道且在监控中的。</p>\n<p>而 Suterusu 试图给需要隐私保护的人和平台提供了一个隐私协议方案。</p>\n<p>与传统的隐私币或者隐私公链不同的是，Suterusu 是加密隐私层。</p>\n<p>它可以和其他公链结合，为不同链的交易和智能合约提供隐私保护。</p>\n<p>支付隐私：通过 Suterusu 进行不同币种支付，可以做到 from、to、amount 全部隐藏。</p>\n<p>智能合约隐私保护：可以把智能合约的执行隐藏起来，这个更具有想象力，接入 Suterusu  后，用户在 uni 上交易数字货币，在 opensea 上交易 NFT，在 DeFi 平台进行挖矿，都是完全匿名的。</p>\n<p>Suterusu 为开发者提供了一个名为 SuterVM 的虚拟机，基于它可以在无需密码学专业知识的情况下部署隐私保护协议。</p>\n<h2 id="%E5%9B%A2%E9%98%9F%E5%88%86%E6%9E%90">团队分析<a class="anchor" href="#%E5%9B%A2%E9%98%9F%E5%88%86%E6%9E%90">§</a></h2>\n<p>Suterusu 的 CTO 林煌林博士是项目的带队人，他是密码学领域的专家，拥有十几年的密码学经验。</p>\n<p>对于林煌而言，区块链是他的新起点，能将密码学的理论和经验融入区块链，给加密世界的用户带来隐私安全，是他作为工程师的骄傲。</p>\n<p>林博士是团队的灵魂人物，其他团队成员不再介绍。</p>\n<h2 id="%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90">竞品分析<a class="anchor" href="#%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90">§</a></h2>\n<p>晕死赛道的区块链平台或平台有不少，但都不是很流行。本人对这个领域了解不深，主要和目前使用最广泛的隐私交易协议 <a href="https://tornado.cash/">Tornado</a> 进行比较。</p>\n<h3 id="suterusu-vs-tornado">Suterusu Vs Tornado<a class="anchor" href="#suterusu-vs-tornado">§</a></h3>\n<h4 id="1--%E6%8A%80%E6%9C%AF%E5%AF%B9%E6%AF%94">1.  技术对比<a class="anchor" href="#1--%E6%8A%80%E6%9C%AF%E5%AF%B9%E6%AF%94">§</a></h4>\n<p>Tornado：Tornado 使用智能合约（匿名池），接收来自一个地址的代币存款，并允许他们从不同的地址提款，并且通过零知识证明阻断了存款地址和提款地址之间的联系，让隐私性得到了保护。</p>\n<p>Suterusu：基于自研算法 ZK-ConSnark 的支付基础建设。</p>\n<h4 id="2-%E4%BA%A4%E6%98%93%E4%BF%9D%E6%8A%A4%E6%95%88%E6%9E%9C">2. 交易保护效果<a class="anchor" href="#2-%E4%BA%A4%E6%98%93%E4%BF%9D%E6%8A%A4%E6%95%88%E6%9E%9C">§</a></h4>\n<p>Tornado：仅支持 ETH 及少数币种，无法保护交易金额隐私，只支持 0.1、1、10、100 这几种金额，这导致交易麻烦且消耗 gas.</p>\n<p>Suterusu：支持链上标准的 ERC20 协议代币，金额可自定义。</p>\n<h4 id="3-%E6%8F%90%E5%8F%96%E5%AE%89%E5%85%A8%E6%80%A7">3. 提取安全性<a class="anchor" href="#3-%E6%8F%90%E5%8F%96%E5%AE%89%E5%85%A8%E6%80%A7">§</a></h4>\n<p>Tornado：钱存入后生成 notes，根据 notes 提取资产。 Notes 保存、转交是个很麻烦且危险的事情。</p>\n<p>Suterusu：钱存入后使用账号进行提取，账号是用户的公钥。</p>\n<h4 id="4-%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E6%94%AF%E6%8C%81">4. 智能合约支持<a class="anchor" href="#4-%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E6%94%AF%E6%8C%81">§</a></h4>\n<p>Tornado：仅支持交易。</p>\n<p>Suterusu：支持智能合约。</p>\n<p>综上所述，Suterusu 比目前市面上混币龙头 Tornado 技术更先进，体验更佳，保护效果更好，能支持智能合约有了更多的使用场景。</p>\n<p>但 Tornado 占据了先发优势，交易量远高于 Suterusu。</p>\n<h2 id="suterusu-%E4%BB%A3%E5%B8%81%E7%BB%8F%E6%B5%8E%E6%9C%BA%E5%88%B6">Suterusu 代币经济机制<a class="anchor" href="#suterusu-%E4%BB%A3%E5%B8%81%E7%BB%8F%E6%B5%8E%E6%9C%BA%E5%88%B6">§</a></h2>\n<p>代币总量十亿枚，团队和 Foundation 占比为 8%（锁仓到 2022 年 10 月），16% 的份额是私募投资者占有，22% 用于挖矿奖励，54% 作为未来的奖励。</p>\n<p>xSuter 是 Suterusu 协议的链上的收益型代币, Suterusu 协议在多个智能合约平台上的收益都将分配给 xSuter 持有人，总量设定为 32000 枚。xSuter 的发行方式将由多轮荷兰式拍卖的方式举行，每轮发行的 xSuter 数量有限，并且每次数量递减。</p>\n<p>xSuter 的发行只能用 Suter 代币参与，并且每轮参与的初始价格将逐轮递增。</p>\n<p>Xsuter 的产生条件是依赖于手续费(单比交易的 1%)的池子分红目标，一旦达到相应的分红目标就会启动新的一轮 xSuter 代币拍卖，而拍卖时只能用Suter代币进行拍卖，最后拍卖所得 Suter 将会打到黑洞地址进行销毁。</p>\n<p>目前 Suterusu 流通市值仅不到 2kw U，当家币价为 0.004525，跌破私募发行价 0.006。</p>\n<h2 id="%E5%8F%91%E5%B1%95%E7%8E%B0%E7%8A%B6">发展现状<a class="anchor" href="#%E5%8F%91%E5%B1%95%E7%8E%B0%E7%8A%B6">§</a></h2>\n<p>Suterusu 是 2019 年发起的项目，技术功底非常扎实，做出的产品可用性很强。</p>\n<p>目前已在 BSC、ETH、Polygon、FTM 部署 shield(类 Tornado 的交易隐私平台)，每天交易额在两亿多美金(主要在 BSC 链上)。总活跃用户低于两万。</p>\n<p>在交易挖矿补贴 250wU 后，交易量迅速下降，用户增长也明显下降，可见效果一般。</p>\n<p>智能合约方面并没有和太多机构和公链合作做出有代表性的产品。</p>\n<h2 id="%E6%8A%95%E8%B5%84%E5%88%86%E6%9E%90">投资分析<a class="anchor" href="#%E6%8A%95%E8%B5%84%E5%88%86%E6%9E%90">§</a></h2>\n<p>项目技术功底非常扎实，密码学方面的能力在同类产品中比较顶级，但实在不擅长做市场营销。</p>\n<p>币价稳不住，已跌破发行价。</p>\n<p>由于通缩模型的存在，交易带来的手续费会持续利好币价，但交易量也一般。</p>\n<p>更有想象力的智能合约隐私保护目前还没有太具有代表性的作品。</p>\n<p>1% 的手续费沉淀会分发给 xSuter 的持有人。原本是想形成联动 Suter 和 xSuter，但没搞好机制，倒是分流了。</p>\n<p>社交媒体上在和 BSC 疯狂联动，不排除有上币安或者和 BSC 有深度合作的可能。</p>\n<h2 id="%E7%BB%93%E8%AF%AD">结语<a class="anchor" href="#%E7%BB%93%E8%AF%AD">§</a></h2>\n<p>Suterusu 是一个加密领域的隐私层项目，基于自研的 ZK-ConSnark 技术，创始团队在加密领域的功底非常深厚，项目持续在推进中，但市场反响一般。</p>\n<p>经济模型上具有通缩属性，但 Suter 和 xSuter 两个代币有点分流。</p>\n<p>目前主要是做隐私的 shield，但和 Tornado 的交易量存在明显差距。</p>\n<p>智能合约的隐私保护缺乏代表性作品，也无背靠的大公链或者关系好的大型 Dapps 合作。</p>\n<p>做起来会跟公链一样非常有爆发力，但目前还处于等待风口到来的阶段。</p>\n<p>隐私版块在最近稍有起色，Rose 的利好对整个版块都有利。一人得道可鸡犬升天，而 Suterusu 出色的技术能力和隐私层的定位足以在这个赛道成为佼佼者之一。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Suterusu \u8C03\u7814\u62A5\u544A"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%89%8D%E8%A8%80">前言<a class="anchor" href="#%E5%89%8D%E8%A8%80">§</a></h2>\n<p><a href="https://suterusu.io/">Suterusu</a> 是一位币圈 OG 朋友推荐给我的。</p>\n<p>他来自传统金融领域，但在工作没多久就辞职 All in crypto，有大量的大饼在手，是曾经两个 punk 的持有者，各种新玩法他也能跟得上，并且有很独到的见解。</p>\n<p>Suterusu 是他重仓的一个项目，在 2019 年私募时就已经买进，并且持续关注项目和团队的发展。</p>\n<h2 id="what-is-suterusu">What is Suterusu?<a class="anchor" href="#what-is-suterusu">§</a></h2>\n<p>Suterusu 协议是一个 Layer2 的智能合约隐私支付基础建设，他采用了自研的 <a href="https://medium.com/suterusu/what-is-zk-consnark-bc458d4336f2">ZK-ConSnark</a> 算法，在不依赖受信任的设置的情况下，proof 生成和验证效率比同类算法大大提升，proof 体积也显著减少。这个算法的 paper 已经被 <a href="https://eprint.iacr.org/2021/540">Eurocrypt 2021</a> 接收。</p>\n<p>为什么需要一个隐私协议？</p>\n<p>一个广泛的误解是区块链是透明的。实际上区块链上的东西大部分都是公开的，每个人做了哪些交易，参与了哪些智能合约的交互都是公开的。地址仅仅是现实生活中的化名而已，随着 ENS 的流行，这会更加容易和现实生活绑定。</p>\n<p>很多巨鲸的钱包，比如孙哥、a16z、三箭、P 姐等的地址都是大家知道且在监控中的。</p>\n<p>而 Suterusu 试图给需要隐私保护的人和平台提供了一个隐私协议方案。</p>\n<p>与传统的隐私币或者隐私公链不同的是，Suterusu 是加密隐私层。</p>\n<p>它可以和其他公链结合，为不同链的交易和智能合约提供隐私保护。</p>\n<p>支付隐私：通过 Suterusu 进行不同币种支付，可以做到 from、to、amount 全部隐藏。</p>\n<p>智能合约隐私保护：可以把智能合约的执行隐藏起来，这个更具有想象力，接入 Suterusu  后，用户在 uni 上交易数字货币，在 opensea 上交易 NFT，在 DeFi 平台进行挖矿，都是完全匿名的。</p>\n<p>Suterusu 为开发者提供了一个名为 SuterVM 的虚拟机，基于它可以在无需密码学专业知识的情况下部署隐私保护协议。</p>\n<h2 id="%E5%9B%A2%E9%98%9F%E5%88%86%E6%9E%90">团队分析<a class="anchor" href="#%E5%9B%A2%E9%98%9F%E5%88%86%E6%9E%90">§</a></h2>\n<p>Suterusu 的 CTO 林煌林博士是项目的带队人，他是密码学领域的专家，拥有十几年的密码学经验。</p>\n<p>对于林煌而言，区块链是他的新起点，能将密码学的理论和经验融入区块链，给加密世界的用户带来隐私安全，是他作为工程师的骄傲。</p>\n<p>林博士是团队的灵魂人物，其他团队成员不再介绍。</p>\n<h2 id="%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90">竞品分析<a class="anchor" href="#%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90">§</a></h2>\n<p>晕死赛道的区块链平台或平台有不少，但都不是很流行。本人对这个领域了解不深，主要和目前使用最广泛的隐私交易协议 <a href="https://tornado.cash/">Tornado</a> 进行比较。</p>\n<h3 id="suterusu-vs-tornado">Suterusu Vs Tornado<a class="anchor" href="#suterusu-vs-tornado">§</a></h3>\n<h4 id="1--%E6%8A%80%E6%9C%AF%E5%AF%B9%E6%AF%94">1.  技术对比<a class="anchor" href="#1--%E6%8A%80%E6%9C%AF%E5%AF%B9%E6%AF%94">§</a></h4>\n<p>Tornado：Tornado 使用智能合约（匿名池），接收来自一个地址的代币存款，并允许他们从不同的地址提款，并且通过零知识证明阻断了存款地址和提款地址之间的联系，让隐私性得到了保护。</p>\n<p>Suterusu：基于自研算法 ZK-ConSnark 的支付基础建设。</p>\n<h4 id="2-%E4%BA%A4%E6%98%93%E4%BF%9D%E6%8A%A4%E6%95%88%E6%9E%9C">2. 交易保护效果<a class="anchor" href="#2-%E4%BA%A4%E6%98%93%E4%BF%9D%E6%8A%A4%E6%95%88%E6%9E%9C">§</a></h4>\n<p>Tornado：仅支持 ETH 及少数币种，无法保护交易金额隐私，只支持 0.1、1、10、100 这几种金额，这导致交易麻烦且消耗 gas.</p>\n<p>Suterusu：支持链上标准的 ERC20 协议代币，金额可自定义。</p>\n<h4 id="3-%E6%8F%90%E5%8F%96%E5%AE%89%E5%85%A8%E6%80%A7">3. 提取安全性<a class="anchor" href="#3-%E6%8F%90%E5%8F%96%E5%AE%89%E5%85%A8%E6%80%A7">§</a></h4>\n<p>Tornado：钱存入后生成 notes，根据 notes 提取资产。 Notes 保存、转交是个很麻烦且危险的事情。</p>\n<p>Suterusu：钱存入后使用账号进行提取，账号是用户的公钥。</p>\n<h4 id="4-%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E6%94%AF%E6%8C%81">4. 智能合约支持<a class="anchor" href="#4-%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6%E6%94%AF%E6%8C%81">§</a></h4>\n<p>Tornado：仅支持交易。</p>\n<p>Suterusu：支持智能合约。</p>\n<p>综上所述，Suterusu 比目前市面上混币龙头 Tornado 技术更先进，体验更佳，保护效果更好，能支持智能合约有了更多的使用场景。</p>\n<p>但 Tornado 占据了先发优势，交易量远高于 Suterusu。</p>\n<h2 id="suterusu-%E4%BB%A3%E5%B8%81%E7%BB%8F%E6%B5%8E%E6%9C%BA%E5%88%B6">Suterusu 代币经济机制<a class="anchor" href="#suterusu-%E4%BB%A3%E5%B8%81%E7%BB%8F%E6%B5%8E%E6%9C%BA%E5%88%B6">§</a></h2>\n<p>代币总量十亿枚，团队和 Foundation 占比为 8%（锁仓到 2022 年 10 月），16% 的份额是私募投资者占有，22% 用于挖矿奖励，54% 作为未来的奖励。</p>\n<p>xSuter 是 Suterusu 协议的链上的收益型代币, Suterusu 协议在多个智能合约平台上的收益都将分配给 xSuter 持有人，总量设定为 32000 枚。xSuter 的发行方式将由多轮荷兰式拍卖的方式举行，每轮发行的 xSuter 数量有限，并且每次数量递减。</p>\n<p>xSuter 的发行只能用 Suter 代币参与，并且每轮参与的初始价格将逐轮递增。</p>\n<p>Xsuter 的产生条件是依赖于手续费(单比交易的 1%)的池子分红目标，一旦达到相应的分红目标就会启动新的一轮 xSuter 代币拍卖，而拍卖时只能用Suter代币进行拍卖，最后拍卖所得 Suter 将会打到黑洞地址进行销毁。</p>\n<p>目前 Suterusu 流通市值仅不到 2kw U，当家币价为 0.004525，跌破私募发行价 0.006。</p>\n<h2 id="%E5%8F%91%E5%B1%95%E7%8E%B0%E7%8A%B6">发展现状<a class="anchor" href="#%E5%8F%91%E5%B1%95%E7%8E%B0%E7%8A%B6">§</a></h2>\n<p>Suterusu 是 2019 年发起的项目，技术功底非常扎实，做出的产品可用性很强。</p>\n<p>目前已在 BSC、ETH、Polygon、FTM 部署 shield(类 Tornado 的交易隐私平台)，每天交易额在两亿多美金(主要在 BSC 链上)。总活跃用户低于两万。</p>\n<p>在交易挖矿补贴 250wU 后，交易量迅速下降，用户增长也明显下降，可见效果一般。</p>\n<p>智能合约方面并没有和太多机构和公链合作做出有代表性的产品。</p>\n<h2 id="%E6%8A%95%E8%B5%84%E5%88%86%E6%9E%90">投资分析<a class="anchor" href="#%E6%8A%95%E8%B5%84%E5%88%86%E6%9E%90">§</a></h2>\n<p>项目技术功底非常扎实，密码学方面的能力在同类产品中比较顶级，但实在不擅长做市场营销。</p>\n<p>币价稳不住，已跌破发行价。</p>\n<p>由于通缩模型的存在，交易带来的手续费会持续利好币价，但交易量也一般。</p>\n<p>更有想象力的智能合约隐私保护目前还没有太具有代表性的作品。</p>\n<p>1% 的手续费沉淀会分发给 xSuter 的持有人。原本是想形成联动 Suter 和 xSuter，但没搞好机制，倒是分流了。</p>\n<p>社交媒体上在和 BSC 疯狂联动，不排除有上币安或者和 BSC 有深度合作的可能。</p>\n<h2 id="%E7%BB%93%E8%AF%AD">结语<a class="anchor" href="#%E7%BB%93%E8%AF%AD">§</a></h2>\n<p>Suterusu 是一个加密领域的隐私层项目，基于自研的 ZK-ConSnark 技术，创始团队在加密领域的功底非常深厚，项目持续在推进中，但市场反响一般。</p>\n<p>经济模型上具有通缩属性，但 Suter 和 xSuter 两个代币有点分流。</p>\n<p>目前主要是做隐私的 shield，但和 Tornado 的交易量存在明显差距。</p>\n<p>智能合约的隐私保护缺乏代表性作品，也无背靠的大公链或者关系好的大型 Dapps 合作。</p>\n<p>做起来会跟公链一样非常有爆发力，但目前还处于等待风口到来的阶段。</p>\n<p>隐私版块在最近稍有起色，Rose 的利好对整个版块都有利。一人得道可鸡犬升天，而 Suterusu 出色的技术能力和隐私层的定位足以在这个赛道成为佼佼者之一。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%89%8D%E8%A8%80" }, "\u524D\u8A00")),
            React.createElement("li", null,
                React.createElement("a", { href: "#what-is-suterusu" }, "What is Suterusu?")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%9B%A2%E9%98%9F%E5%88%86%E6%9E%90" }, "\u56E2\u961F\u5206\u6790")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%AB%9E%E5%93%81%E5%88%86%E6%9E%90" }, "\u7ADE\u54C1\u5206\u6790"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#suterusu-vs-tornado" }, "Suterusu Vs Tornado"),
                        React.createElement("ol", null)))),
            React.createElement("li", null,
                React.createElement("a", { href: "#suterusu-%E4%BB%A3%E5%B8%81%E7%BB%8F%E6%B5%8E%E6%9C%BA%E5%88%B6" }, "Suterusu \u4EE3\u5E01\u7ECF\u6D4E\u673A\u5236")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%8F%91%E5%B1%95%E7%8E%B0%E7%8A%B6" }, "\u53D1\u5C55\u73B0\u72B6")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8A%95%E8%B5%84%E5%88%86%E6%9E%90" }, "\u6295\u8D44\u5206\u6790")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%BB%93%E8%AF%AD" }, "\u7ED3\u8BED")))),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2022-01-15T00:00:00.000Z",
    'updated': null,
    'excerpt': "前言 Suterusu 是一位币圈 OG 朋友推荐给我的。 他来自传统金融领域，但在工作没多久就辞职 All in crypto，有大量的大饼在手，是曾经两个 punk 的持有者，各种新玩法他也能跟得上，并且有很独到的见解。 Suterusu 是他重仓的一...",
    'cover': undefined,
    'tags': [
        "crypto",
        "blockchain",
        "privacy"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/suterusu-research-report.md",
                "title": "Suterusu 研究报告",
                "link": "posts/suterusu-research-report.html",
                "date": "2022-01-15T00:00:00.000Z",
                "updated": null,
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
                "updated": "2021-12-31T10:18:44.000Z",
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
                "count": 6
            },
            {
                "name": "crypto",
                "count": 6
            },
            {
                "name": "dev",
                "count": 2
            },
            {
                "name": "life",
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
