import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/how-to-get-unlimited-emails.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/how-to-get-unlimited-emails.html",
    'title': "如何得到无限邮箱号？",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>如何得到无限邮箱？</h1>\n<p>国内的网站或平台基本是需要绑定手机号的，但国外的大部分验证邮箱即可，如果能拥有无限邮箱号，就有无限注册账号的可能，如果平台有类似新手活动或需要拉邀请.....剩下的自己体会</p>\n<p>以下是我尝试过的几种方式。</p>\n<h2 id="gmail">Gmail<a class="anchor" href="#gmail">§</a></h2>\n<h3 id="%E4%BB%BB%E6%84%8F%E4%BD%8D%E7%BD%AE%E5%8A%A0">任意位置加「.」<a class="anchor" href="#%E4%BB%BB%E6%84%8F%E4%BD%8D%E7%BD%AE%E5%8A%A0">§</a></h3>\n<p>Gmail 地址中可以随意加「.」，都会发送到原始 Gmail 地址中去，参考：<a href="https://support.google.com/mail/answer/7436150?hl=zh-Hans%5D">https://support.google.com/mail/answer/7436150?hl=zh-Hans</a></p>\n<h3 id="%E6%9C%AB%E5%B0%BE%E5%8A%A0%E5%92%8C%E4%BB%BB%E4%BD%95%E5%86%85%E5%AE%B9">末尾加「+」和任何内容<a class="anchor" href="#%E6%9C%AB%E5%B0%BE%E5%8A%A0%E5%92%8C%E4%BB%BB%E4%BD%95%E5%86%85%E5%AE%B9">§</a></h3>\n<p>Gmail 地址末尾可以加「+」和任何内容，都会发送到原始 Gmail 地址中去，参考：<a href="https://support.google.com/a/users/answer/9308648?hl=zh-Hans">https://support.google.com/a/users/answer/9308648?hl=zh-Hans</a></p>\n<h3 id="%E4%BD%BF%E7%94%A8-googlemailcom-%E5%90%8E%E7%BC%80">使用 <a href="http://googlemail.com">googlemail.com</a> 后缀<a class="anchor" href="#%E4%BD%BF%E7%94%A8-googlemailcom-%E5%90%8E%E7%BC%80">§</a></h3>\n<p>使用 <a href="http://googlemail.com">googlemail.com</a> 后缀也可以发送到原始 Gmail 地址中去</p>\n<h3 id="%E5%89%8D%E4%B8%89%E7%82%B9%E7%9A%84%E7%BB%93%E5%90%88">前三点的结合<a class="anchor" href="#%E5%89%8D%E4%B8%89%E7%82%B9%E7%9A%84%E7%BB%93%E5%90%88">§</a></h3>\n<h2 id="protonmail">ProtonMail<a class="anchor" href="#protonmail">§</a></h2>\n<p><a href="https://protonmail.com">ProtonMail</a> 是一个免费的加密电子邮箱服务，代码开源，使用点对点加密策略，注册不需要任何个人信息，安全性拉满，可无限注册。</p>\n<h2 id="%E5%9F%9F%E5%90%8D%E9%82%AE%E7%AE%B1">域名邮箱<a class="anchor" href="#%E5%9F%9F%E5%90%8D%E9%82%AE%E7%AE%B1">§</a></h2>\n<h3 id="zoho">ZOHO<a class="anchor" href="#zoho">§</a></h3>\n<p><a href="https://www.zoho.com/">ZOHO</a>是一个免费的域名邮箱，在域名商或第三方 DNS 设置好之后即可拥有企业邮箱，请注意，不要进 ZOHO 中国版，中国版需要太多个人信息，繁琐且不安全。</p>\n<p>操作流程参考 <a href="https://help.zoho.com/portal/en/kb/backstage/user-guide/setting-up-a-portal/authenticating-your-email-domain/articles/authenticating-your-email-domain#Delete_email_domain">Authenticating an email domain\n</a>，设置好域名邮箱后设置「全收邮箱」，任何该域名下不存在的邮箱收件都会转发到该「全收邮箱」。</p>\n<p><img src="../assets/images/email_all_receive.png" alt="全收邮箱"></p>\n<h3 id="yandex">Yandex<a class="anchor" href="#yandex">§</a></h3>\n<p>参考 <a href="https://51.ruyo.net/3350.html">Yandex.Mail可自定义域名的免费邮局，支持1000用户，每个用户10 GB容量</a></p>\n<h3 id="%E8%85%BE%E8%AE%AF%E4%BC%81%E4%B8%9A%E9%82%AE%E7%AE%B1%E5%85%8D%E8%B4%B9">腾讯企业邮箱免费<a class="anchor" href="#%E8%85%BE%E8%AE%AF%E4%BC%81%E4%B8%9A%E9%82%AE%E7%AE%B1%E5%85%8D%E8%B4%B9">§</a></h3>\n<p>参考 <a href="https://51.ruyo.net/4048.html">腾讯企业邮箱免费版部署演示，可实现无限别名</a></p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5982\u4F55\u5F97\u5230\u65E0\u9650\u90AE\u7BB1\uFF1F"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>国内的网站或平台基本是需要绑定手机号的，但国外的大部分验证邮箱即可，如果能拥有无限邮箱号，就有无限注册账号的可能，如果平台有类似新手活动或需要拉邀请.....剩下的自己体会</p>\n<p>以下是我尝试过的几种方式。</p>\n<h2 id="gmail">Gmail<a class="anchor" href="#gmail">§</a></h2>\n<h3 id="%E4%BB%BB%E6%84%8F%E4%BD%8D%E7%BD%AE%E5%8A%A0">任意位置加「.」<a class="anchor" href="#%E4%BB%BB%E6%84%8F%E4%BD%8D%E7%BD%AE%E5%8A%A0">§</a></h3>\n<p>Gmail 地址中可以随意加「.」，都会发送到原始 Gmail 地址中去，参考：<a href="https://support.google.com/mail/answer/7436150?hl=zh-Hans%5D">https://support.google.com/mail/answer/7436150?hl=zh-Hans</a></p>\n<h3 id="%E6%9C%AB%E5%B0%BE%E5%8A%A0%E5%92%8C%E4%BB%BB%E4%BD%95%E5%86%85%E5%AE%B9">末尾加「+」和任何内容<a class="anchor" href="#%E6%9C%AB%E5%B0%BE%E5%8A%A0%E5%92%8C%E4%BB%BB%E4%BD%95%E5%86%85%E5%AE%B9">§</a></h3>\n<p>Gmail 地址末尾可以加「+」和任何内容，都会发送到原始 Gmail 地址中去，参考：<a href="https://support.google.com/a/users/answer/9308648?hl=zh-Hans">https://support.google.com/a/users/answer/9308648?hl=zh-Hans</a></p>\n<h3 id="%E4%BD%BF%E7%94%A8-googlemailcom-%E5%90%8E%E7%BC%80">使用 <a href="http://googlemail.com">googlemail.com</a> 后缀<a class="anchor" href="#%E4%BD%BF%E7%94%A8-googlemailcom-%E5%90%8E%E7%BC%80">§</a></h3>\n<p>使用 <a href="http://googlemail.com">googlemail.com</a> 后缀也可以发送到原始 Gmail 地址中去</p>\n<h3 id="%E5%89%8D%E4%B8%89%E7%82%B9%E7%9A%84%E7%BB%93%E5%90%88">前三点的结合<a class="anchor" href="#%E5%89%8D%E4%B8%89%E7%82%B9%E7%9A%84%E7%BB%93%E5%90%88">§</a></h3>\n<h2 id="protonmail">ProtonMail<a class="anchor" href="#protonmail">§</a></h2>\n<p><a href="https://protonmail.com">ProtonMail</a> 是一个免费的加密电子邮箱服务，代码开源，使用点对点加密策略，注册不需要任何个人信息，安全性拉满，可无限注册。</p>\n<h2 id="%E5%9F%9F%E5%90%8D%E9%82%AE%E7%AE%B1">域名邮箱<a class="anchor" href="#%E5%9F%9F%E5%90%8D%E9%82%AE%E7%AE%B1">§</a></h2>\n<h3 id="zoho">ZOHO<a class="anchor" href="#zoho">§</a></h3>\n<p><a href="https://www.zoho.com/">ZOHO</a>是一个免费的域名邮箱，在域名商或第三方 DNS 设置好之后即可拥有企业邮箱，请注意，不要进 ZOHO 中国版，中国版需要太多个人信息，繁琐且不安全。</p>\n<p>操作流程参考 <a href="https://help.zoho.com/portal/en/kb/backstage/user-guide/setting-up-a-portal/authenticating-your-email-domain/articles/authenticating-your-email-domain#Delete_email_domain">Authenticating an email domain\n</a>，设置好域名邮箱后设置「全收邮箱」，任何该域名下不存在的邮箱收件都会转发到该「全收邮箱」。</p>\n<p><img src="../assets/images/email_all_receive.png" alt="全收邮箱"></p>\n<h3 id="yandex">Yandex<a class="anchor" href="#yandex">§</a></h3>\n<p>参考 <a href="https://51.ruyo.net/3350.html">Yandex.Mail可自定义域名的免费邮局，支持1000用户，每个用户10 GB容量</a></p>\n<h3 id="%E8%85%BE%E8%AE%AF%E4%BC%81%E4%B8%9A%E9%82%AE%E7%AE%B1%E5%85%8D%E8%B4%B9">腾讯企业邮箱免费<a class="anchor" href="#%E8%85%BE%E8%AE%AF%E4%BC%81%E4%B8%9A%E9%82%AE%E7%AE%B1%E5%85%8D%E8%B4%B9">§</a></h3>\n<p>参考 <a href="https://51.ruyo.net/4048.html">腾讯企业邮箱免费版部署演示，可实现无限别名</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#gmail" }, "Gmail"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BB%BB%E6%84%8F%E4%BD%8D%E7%BD%AE%E5%8A%A0" }, "\u4EFB\u610F\u4F4D\u7F6E\u52A0\u300C.\u300D")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%9C%AB%E5%B0%BE%E5%8A%A0%E5%92%8C%E4%BB%BB%E4%BD%95%E5%86%85%E5%AE%B9" }, "\u672B\u5C3E\u52A0\u300C+\u300D\u548C\u4EFB\u4F55\u5185\u5BB9")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BD%BF%E7%94%A8-googlemailcom-%E5%90%8E%E7%BC%80" }, "\u4F7F\u7528 googlemail.com \u540E\u7F00")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%89%8D%E4%B8%89%E7%82%B9%E7%9A%84%E7%BB%93%E5%90%88" }, "\u524D\u4E09\u70B9\u7684\u7ED3\u5408")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#protonmail" }, "ProtonMail")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%9F%9F%E5%90%8D%E9%82%AE%E7%AE%B1" }, "\u57DF\u540D\u90AE\u7BB1"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#zoho" }, "ZOHO")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#yandex" }, "Yandex")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E8%85%BE%E8%AE%AF%E4%BC%81%E4%B8%9A%E9%82%AE%E7%AE%B1%E5%85%8D%E8%B4%B9" }, "\u817E\u8BAF\u4F01\u4E1A\u90AE\u7BB1\u514D\u8D39")))))),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2021-09-27T00:00:00.000Z",
    'updated': "2021-12-17T08:10:23.000Z",
    'excerpt': "国内的网站或平台基本是需要绑定手机号的，但国外的大部分验证邮箱即可，如果能拥有无限邮箱号，就有无限注册账号的可能，如果平台有类似新手活动或需要拉邀请.....剩下的自己体会 以下是我尝试过的几种方式。 Gmail 任意位置加...",
    'cover': "../assets/images/email_all_receive.png",
    'tags': [
        "tips"
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
