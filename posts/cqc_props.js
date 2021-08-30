import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/cqc.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/cqc.html",
    'title': "Test blog",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>运行一个脚本，看看你的项目的代码质量吧</h1>\n<p>代码质量有很多指标：</p>\n<ol>\n<li>源代码行数</li>\n<li>代码重复率</li>\n<li>圈复杂度</li>\n<li>报错量（ Bug 数）占比</li>\n<li>测试覆盖率</li>\n<li>开发约束（代码块行数等）</li>\n</ol>\n<p>我做了一个脚本可以测出上面的 1, 2, 3</p>\n<p>大家都来试一试吧！</p>\n<h2 id="supported-languages">Supported Languages<a class="anchor" href="#supported-languages">§</a></h2>\n<ul>\n<li>js, jsx</li>\n<li>css, less, scss, sass, styl</li>\n</ul>\n<h2 id="getting-started">Getting Started<a class="anchor" href="#getting-started">§</a></h2>\n<h3 id="installation">Installation<a class="anchor" href="#installation">§</a></h3>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> -g cqc\n</code></pre>\n<h3 id="usage">Usage<a class="anchor" href="#usage">§</a></h3>\n<pre class="language-bash"><code class="language-bash">cqc src/**/*.js src/**/*.jsx\n</code></pre>\n<p>Output:</p>\n<pre class="language-autoit"><code class="language-autoit">Number of files<span class="token punctuation">:</span>        <span class="token number">9</span>\nSource lines of code<span class="token punctuation">:</span>   <span class="token number">463</span>\nDuplicate rate<span class="token punctuation">:</span>         <span class="token number">15.71</span>%\nHigh complexity rate<span class="token punctuation">:</span>   <span class="token number">11.11</span>%\nMax complexity<span class="token punctuation">:</span>         <span class="token number">19</span>\n</code></pre>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u8FD0\u884C\u4E00\u4E2A\u811A\u672C\uFF0C\u770B\u770B\u4F60\u7684\u9879\u76EE\u7684\u4EE3\u7801\u8D28\u91CF\u5427"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>代码质量有很多指标：</p>\n<ol>\n<li>源代码行数</li>\n<li>代码重复率</li>\n<li>圈复杂度</li>\n<li>报错量（ Bug 数）占比</li>\n<li>测试覆盖率</li>\n<li>开发约束（代码块行数等）</li>\n</ol>\n<p>我做了一个脚本可以测出上面的 1, 2, 3</p>\n<p>大家都来试一试吧！</p>\n<h2 id="supported-languages">Supported Languages<a class="anchor" href="#supported-languages">§</a></h2>\n<ul>\n<li>js, jsx</li>\n<li>css, less, scss, sass, styl</li>\n</ul>\n<h2 id="getting-started">Getting Started<a class="anchor" href="#getting-started">§</a></h2>\n<h3 id="installation">Installation<a class="anchor" href="#installation">§</a></h3>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> -g cqc\n</code></pre>\n<h3 id="usage">Usage<a class="anchor" href="#usage">§</a></h3>\n<pre class="language-bash"><code class="language-bash">cqc src/**/*.js src/**/*.jsx\n</code></pre>\n<p>Output:</p>\n<pre class="language-autoit"><code class="language-autoit">Number of files<span class="token punctuation">:</span>        <span class="token number">9</span>\nSource lines of code<span class="token punctuation">:</span>   <span class="token number">463</span>\nDuplicate rate<span class="token punctuation">:</span>         <span class="token number">15.71</span>%\nHigh complexity rate<span class="token punctuation">:</span>   <span class="token number">11.11</span>%\nMax complexity<span class="token punctuation">:</span>         <span class="token number">19</span>\n</code></pre>'
        } }),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#supported-languages">Supported Languages</a></li><li><a href="#getting-started">Getting Started</a><ol><li><a href="#installation">Installation</a></li><li><a href="#usage">Usage</a></li></ol></li></ol></nav>'
        } }),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2021-08-30T00:00:00.000Z",
    'updated': null,
    'excerpt': "代码质量有很多指标： 1. 源代码行数 2. 代码重复率 3. 圈复杂度 4. 报错量（ Bug 数）占比 5. 测试覆盖率 6. 开发约束（代码块行数等） 我做了一个脚本可以测出上面的 1, 2, 3 大家都来试一试吧！ Supported Languages - js, ...",
    'cover': undefined,
    'tags': [
        "crypto",
        "blockchain"
    ],
    'blog': {
        "isPost": true,
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
