import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/crypto/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/crypto/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'title': "crypto",
    'content': null,
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
