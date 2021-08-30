import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
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
                "pagePath": "posts/cqc.md",
                "title": "Test blog",
                "link": "posts/cqc.html",
                "date": "2021-08-30T00:00:00.000Z",
                "updated": null,
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "crypto",
                    "blockchain"
                ],
                "excerpt": "代码质量有很多指标： 1. 源代码行数 2. 代码重复率 3. 圈复杂度 4. 报错量（ Bug 数）占比 5. 测试覆盖率 6. 开发约束（代码块行数等） 我做了一个脚本可以测出上面的 1, 2, 3 大家都来试一试吧！ Supported Languages - js, ..."
            }
        ],
        "categories": [],
        "tags": [
            {
                "name": "blockchain",
                "count": 1
            },
            {
                "name": "crypto",
                "count": 1
            }
        ]
    }
};
