import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "about/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about/index.html",
    'title': "About me",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>About me</h1>\n<p>Web3 Builder, Crypto Holder.</p>\n<p>All in Crypto，民间伪科学家。</p>\n<p>欢迎发信与我聊 Web3 和 Crypto 的事情，也可以找我寻求技术帮助(收费昂贵)。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "About me"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Web3 Builder, Crypto Holder.</p>\n<p>All in Crypto，民间伪科学家。</p>\n<p>欢迎发信与我聊 Web3 和 Crypto 的事情，也可以找我寻求技术帮助(收费昂贵)。</p>'
        } }),
    'toc': null,
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2021-08-30T12:42:10.000Z",
    'updated': "2022-01-06T18:21:08.000Z",
    'excerpt': "Web3 Builder, Crypto Holder. All in Crypto，民间伪科学家。 欢迎发信与我聊 Web3 和 Crypto 的事情，也可以找我寻求技术帮助(收费昂贵)。",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/2021-in-review.md",
                "title": "2021 In Review",
                "link": "posts/2021-in-review.html",
                "date": "2022-01-04T00:00:00.000Z",
                "updated": "2022-01-06T18:45:38.000Z",
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "dev",
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
                "count": 5
            },
            {
                "name": "crypto",
                "count": 5
            },
            {
                "name": "dev",
                "count": 3
            },
            {
                "name": "life",
                "count": 1
            },
            {
                "name": "tips",
                "count": 1
            }
        ]
    }
};
