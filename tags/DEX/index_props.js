import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/DEX/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/DEX/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'title': "DEX",
    'content': null,
    'blog': {
        "isPost": false,
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
