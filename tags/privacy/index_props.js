import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/privacy/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/privacy/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'title': "privacy",
    'content': null,
    'blog': {
        "isPost": false,
        "posts": [
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
