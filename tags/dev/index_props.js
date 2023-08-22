import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/dev/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/dev/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'title': "dev",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
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
