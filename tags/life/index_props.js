import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "tags/life/",
    'layoutPath': "archives/_layout.tsx",
    'outputPath': "tags/life/index.html",
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'title': "life",
    'content': null,
    'blog': {
        "isPost": false,
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
