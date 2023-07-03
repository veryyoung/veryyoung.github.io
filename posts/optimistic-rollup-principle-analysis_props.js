import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/optimistic-rollup-principle-analysis.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/optimistic-rollup-principle-analysis.html",
    'title': "Optimistic Rollup 原理分析",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Optimistic Rollup 原理</h1>\n<h2 id="%E5%89%8D%E8%A8%80">前言<a class="anchor" href="#%E5%89%8D%E8%A8%80">§</a></h2>\n<p>21 年的时候有幸帮一家基于 Optimistic Rollup 的 layer2 团队做过一段时间的事情，时间久了都快忘记了。最近工作不太忙，抽空梳理下。</p>\n<h2 id="%E7%AE%80%E4%BB%8B">简介<a class="anchor" href="#%E7%AE%80%E4%BB%8B">§</a></h2>\n<p>Layer2 Rollup 是用来做以太坊吞吐量扩容的典型方案，使用 Rollup 可以让交易发生在二层，同时使用以太坊一层来验证二层执行的安全性。</p>\n<p>Optimistic Rollup 顾名思义，就是乐观的认为交易是有效的，除非有人提出欺诈证明。</p>\n<p>二层上的用户将交易提交给排序者 Sequencer，Sequencer 在二层区块链上执行交易，并定时将交易的 Merkle tree 和状态根提交给一层。</p>\n<p>Sequencer 的节点需要质押代币来执行，交易提交后会有一个时间窗口(一般是七天)，在时间窗口内任何人都可以提交欺诈证明。欺诈证明一旦成立会扣除对应 Sequencer 的奖励，同时给与提交欺诈证明的人奖励。</p>\n<h2 id="%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84">代码结构<a class="anchor" href="#%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84">§</a></h2>\n<p>代码分为如下五层:</p>\n<ul>\n<li>l2geth</li>\n<li>contracts</li>\n<li>data-transport-layer</li>\n<li>batch-submitter</li>\n<li>message-relayer</li>\n</ul>\n<h3 id="l2geth">l2geth:<a class="anchor" href="#l2geth">§</a></h3>\n<p>l2geth 是 go-ethereum 的 fork，同时里面增加了 rollup 包，实现了 layer2 上的两种角色：Sequencer 和 Verifier。</p>\n<p>Sequencer: 监听 layer1 的跨域消息，并且将交易改为 OVMMessage 到 OVM 中运行。</p>\n<p>Verifier: 验证 layer2 上的 Sequencer 提交的交易的正确性。</p>\n<h3 id="contracts">contracts：<a class="anchor" href="#contracts">§</a></h3>\n<p>包含 layer1 和 layer2 上的合约。</p>\n<h3 id="data-transport-layer">data-transport-layer：<a class="anchor" href="#data-transport-layer">§</a></h3>\n<p>通过 RPC 访问 layer1 的 RPC 接口，获取 layer1 上的合约事件，并存储在本地，提供接口供 l2geth 来获取时间。</p>\n<h3 id="batch-submitter">batch-submitter：<a class="anchor" href="#batch-submitter">§</a></h3>\n<p>定时将交易的 Merkle tree 和状态根提交给一层。</p>\n<h3 id="message-relayer">message-relayer：<a class="anchor" href="#message-relayer">§</a></h3>\n<p>监听 layer2 上的 SentMessages 事件，在 layer1 上调用 OVM_L1CrossDomainMessenger 合约的 relayMessage 方法，在一层上执行对应的操作，来完成跨域转账。</p>\n<h2 id="%E4%B8%BB%E8%A6%81%E6%B5%81%E7%A8%8B">主要流程<a class="anchor" href="#%E4%B8%BB%E8%A6%81%E6%B5%81%E7%A8%8B">§</a></h2>\n<p>layer2 上执行交易，通过 batch-submitter 提交到 layer1 合约上，通过事件的方式记录下来。data-transport-layer 从 layer1 上监听事件，存储在本地，提供 RPC 接口给 layer2，layer2 和已经确定的交易进行比较，如果不一样需要提交给 layer1 上的验证者进行验证。</p>\n<h2 id="zk-rollup-%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D">zk-rollup 简单介绍<a class="anchor" href="#zk-rollup-%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D">§</a></h2>\n<p>顾名思义，通过零知识证明验证来进行 Rollups 环节。 ZK 生成一个简洁的证明来确保批次中的交易有效性，无需逐一检查每笔交易。</p>\n<p>因为生成零知识证明的难度过高，目前仅支持简单的转账交易。</p>\n<h2 id="op-%E4%BC%98%E7%BC%BA%E7%82%B9">OP 优缺点<a class="anchor" href="#op-%E4%BC%98%E7%BC%BA%E7%82%B9">§</a></h2>\n<p>优点：</p>\n<ul>\n<li>吞吐量高</li>\n<li>EVM 兼容，迁移成本低</li>\n</ul>\n<p>缺点：</p>\n<ul>\n<li>排序器是中心化的，会影响交易顺序的公平性</li>\n<li>因为有锁定期，提币时间长</li>\n<li>有验证者作恶的风险成本</li>\n</ul>\n<h2 id="%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料<a class="anchor" href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">§</a></h2>\n<ul>\n<li><a href="https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/">OPTIMISTIC ROLLUPS</a></li>\n<li><a href="https://github.com/ethereum-optimism">Optimism</a></li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "Optimistic Rollup \u539F\u7406"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%89%8D%E8%A8%80">前言<a class="anchor" href="#%E5%89%8D%E8%A8%80">§</a></h2>\n<p>21 年的时候有幸帮一家基于 Optimistic Rollup 的 layer2 团队做过一段时间的事情，时间久了都快忘记了。最近工作不太忙，抽空梳理下。</p>\n<h2 id="%E7%AE%80%E4%BB%8B">简介<a class="anchor" href="#%E7%AE%80%E4%BB%8B">§</a></h2>\n<p>Layer2 Rollup 是用来做以太坊吞吐量扩容的典型方案，使用 Rollup 可以让交易发生在二层，同时使用以太坊一层来验证二层执行的安全性。</p>\n<p>Optimistic Rollup 顾名思义，就是乐观的认为交易是有效的，除非有人提出欺诈证明。</p>\n<p>二层上的用户将交易提交给排序者 Sequencer，Sequencer 在二层区块链上执行交易，并定时将交易的 Merkle tree 和状态根提交给一层。</p>\n<p>Sequencer 的节点需要质押代币来执行，交易提交后会有一个时间窗口(一般是七天)，在时间窗口内任何人都可以提交欺诈证明。欺诈证明一旦成立会扣除对应 Sequencer 的奖励，同时给与提交欺诈证明的人奖励。</p>\n<h2 id="%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84">代码结构<a class="anchor" href="#%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84">§</a></h2>\n<p>代码分为如下五层:</p>\n<ul>\n<li>l2geth</li>\n<li>contracts</li>\n<li>data-transport-layer</li>\n<li>batch-submitter</li>\n<li>message-relayer</li>\n</ul>\n<h3 id="l2geth">l2geth:<a class="anchor" href="#l2geth">§</a></h3>\n<p>l2geth 是 go-ethereum 的 fork，同时里面增加了 rollup 包，实现了 layer2 上的两种角色：Sequencer 和 Verifier。</p>\n<p>Sequencer: 监听 layer1 的跨域消息，并且将交易改为 OVMMessage 到 OVM 中运行。</p>\n<p>Verifier: 验证 layer2 上的 Sequencer 提交的交易的正确性。</p>\n<h3 id="contracts">contracts：<a class="anchor" href="#contracts">§</a></h3>\n<p>包含 layer1 和 layer2 上的合约。</p>\n<h3 id="data-transport-layer">data-transport-layer：<a class="anchor" href="#data-transport-layer">§</a></h3>\n<p>通过 RPC 访问 layer1 的 RPC 接口，获取 layer1 上的合约事件，并存储在本地，提供接口供 l2geth 来获取时间。</p>\n<h3 id="batch-submitter">batch-submitter：<a class="anchor" href="#batch-submitter">§</a></h3>\n<p>定时将交易的 Merkle tree 和状态根提交给一层。</p>\n<h3 id="message-relayer">message-relayer：<a class="anchor" href="#message-relayer">§</a></h3>\n<p>监听 layer2 上的 SentMessages 事件，在 layer1 上调用 OVM_L1CrossDomainMessenger 合约的 relayMessage 方法，在一层上执行对应的操作，来完成跨域转账。</p>\n<h2 id="%E4%B8%BB%E8%A6%81%E6%B5%81%E7%A8%8B">主要流程<a class="anchor" href="#%E4%B8%BB%E8%A6%81%E6%B5%81%E7%A8%8B">§</a></h2>\n<p>layer2 上执行交易，通过 batch-submitter 提交到 layer1 合约上，通过事件的方式记录下来。data-transport-layer 从 layer1 上监听事件，存储在本地，提供 RPC 接口给 layer2，layer2 和已经确定的交易进行比较，如果不一样需要提交给 layer1 上的验证者进行验证。</p>\n<h2 id="zk-rollup-%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D">zk-rollup 简单介绍<a class="anchor" href="#zk-rollup-%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D">§</a></h2>\n<p>顾名思义，通过零知识证明验证来进行 Rollups 环节。 ZK 生成一个简洁的证明来确保批次中的交易有效性，无需逐一检查每笔交易。</p>\n<p>因为生成零知识证明的难度过高，目前仅支持简单的转账交易。</p>\n<h2 id="op-%E4%BC%98%E7%BC%BA%E7%82%B9">OP 优缺点<a class="anchor" href="#op-%E4%BC%98%E7%BC%BA%E7%82%B9">§</a></h2>\n<p>优点：</p>\n<ul>\n<li>吞吐量高</li>\n<li>EVM 兼容，迁移成本低</li>\n</ul>\n<p>缺点：</p>\n<ul>\n<li>排序器是中心化的，会影响交易顺序的公平性</li>\n<li>因为有锁定期，提币时间长</li>\n<li>有验证者作恶的风险成本</li>\n</ul>\n<h2 id="%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料<a class="anchor" href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">§</a></h2>\n<ul>\n<li><a href="https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/">OPTIMISTIC ROLLUPS</a></li>\n<li><a href="https://github.com/ethereum-optimism">Optimism</a></li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%89%8D%E8%A8%80" }, "\u524D\u8A00")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%AE%80%E4%BB%8B" }, "\u7B80\u4ECB")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%A3%E7%A0%81%E7%BB%93%E6%9E%84" }, "\u4EE3\u7801\u7ED3\u6784"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#l2geth" }, "l2geth:")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#contracts" }, "contracts\uFF1A")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#data-transport-layer" }, "data-transport-layer\uFF1A")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#batch-submitter" }, "batch-submitter\uFF1A")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#message-relayer" }, "message-relayer\uFF1A")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%B8%BB%E8%A6%81%E6%B5%81%E7%A8%8B" }, "\u4E3B\u8981\u6D41\u7A0B")),
            React.createElement("li", null,
                React.createElement("a", { href: "#zk-rollup-%E7%AE%80%E5%8D%95%E4%BB%8B%E7%BB%8D" }, "zk-rollup \u7B80\u5355\u4ECB\u7ECD")),
            React.createElement("li", null,
                React.createElement("a", { href: "#op-%E4%BC%98%E7%BC%BA%E7%82%B9" }, "OP \u4F18\u7F3A\u70B9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99" }, "\u53C2\u8003\u8D44\u6599")))),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2023-06-22T00:00:00.000Z",
    'updated': null,
    'excerpt': "前言 21 年的时候有幸帮一家基于 Optimistic Rollup 的 layer2 团队做过一段时间的事情，时间久了都快忘记了。最近工作不太忙，抽空梳理下。 简介 Layer2 Rollup 是用来做以太坊吞吐量扩容的典型方案，使用 Rollup 可以让交易发...",
    'cover': undefined,
    'tags': [
        "crypto",
        "blockchain",
        "layer2"
    ],
    'blog': {
        "isPost": true,
        "posts": [
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
                "count": 9
            },
            {
                "name": "crypto",
                "count": 9
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
