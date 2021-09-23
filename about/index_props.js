import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "about/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "about/index.html",
    'title': "About me",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>About me</h1>\n<p>互联网从业者，目前 focus 在区块链领域，在我看来区块链是最有可能引领 web3.0 的方向的技术，钻到这里领域里面去有种理想世界的感觉。</p>\n<p>我也是名 Bitcoin hodler， 比特币最大的意义在于，这是人类史上第一次，从技术层面上彻底、纯粹地保证了“私人财产不可侵犯”。</p>\n<p>Hold BTC, use the blockchain technology, enjoy life！</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "About me"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>互联网从业者，目前 focus 在区块链领域，在我看来区块链是最有可能引领 web3.0 的方向的技术，钻到这里领域里面去有种理想世界的感觉。</p>\n<p>我也是名 Bitcoin hodler， 比特币最大的意义在于，这是人类史上第一次，从技术层面上彻底、纯粹地保证了“私人财产不可侵犯”。</p>\n<p>Hold BTC, use the blockchain technology, enjoy life！</p>'
        } }),
    'toc': null,
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2021-08-30T12:42:10.000Z",
    'updated': null,
    'excerpt': "互联网从业者，目前 focus 在区块链领域，在我看来区块链是最有可能引领 web3.0 的方向的技术，钻到这里领域里面去有种理想世界的感觉。 我也是名 Bitcoin hodler， 比特币最大的意义在于，这是人类史上第一次，从技术层面上彻...",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/intro-to-ethereum.md",
                "title": "以太坊简介",
                "link": "posts/intro-to-ethereum.html",
                "date": "2021-09-22T00:00:00.000Z",
                "updated": null,
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "crypto",
                    "blockchain"
                ],
                "excerpt": "以太坊简介 2013 年底，19 岁的 Vitalik Buterin(以下简称 V 神) 发布了以太坊白皮书，以太坊就此诞生。 白皮书的副标题是 \"A Next-Generation Smart Contract and Decentralized Application Platform\"(下一代智能合约智能合约...",
                "cover": "https://ethereum.org/static/2c0e5e27e397f4ac6b88082fd28d072f/00e09/ether-state-transition.png"
            },
            {
                "pagePath": "posts/intro-to-bitcoin.md",
                "title": "比特币简介",
                "link": "posts/intro-to-bitcoin.html",
                "date": "2021-09-01T00:00:00.000Z",
                "updated": "2021-09-23T11:04:41.000Z",
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
                "count": 2
            },
            {
                "name": "crypto",
                "count": 2
            }
        ]
    }
};
