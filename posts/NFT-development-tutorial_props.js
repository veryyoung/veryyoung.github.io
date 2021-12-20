import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/NFT-development-tutorial.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/NFT-development-tutorial.html",
    'title': "NFT 从开发到上架 Opensea 全流程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>NFT 从开发到上架全流程</h1>\n<p>最近参与了很多 NFT 项目的一级市场 mint 以及交易过程，也阅读了很多 NFT 项目的合约代码，自己还没实操过，此文章边做边写，不一定是最佳实践，但所有环节是本人亲自参与过的，keep your hands dirty, let\'s go.</p>\n<p>此教程所有环节在科学上网环境下进行，有任何网络错误相关问题请检查你的科学上网是否流畅。</p>\n<h2 id="1-%E7%94%9F%E6%88%90%E9%92%B1%E5%8C%85%E5%9C%B0%E5%9D%80">1. 生成钱包地址<a class="anchor" href="#1-%E7%94%9F%E6%88%90%E9%92%B1%E5%8C%85%E5%9C%B0%E5%9D%80">§</a></h2>\n<p>部署 NFT 合约的时候需要有一个钱包地址作为合约的 deployer 和 owner，这里使用 <a href="https://metamask.io/">Metamask</a> 作为钱包应用。</p>\n<p>打开 Metamask 官网 <a href="https://metamask.io/">https://metamask.io/</a>，点击 ”Download now“，下载 Chrome 插件并安装。</p>\n<p>如果有现成的私钥点击”Import wallet“，如果没有点击”Create a Wallet“，设置好密码，保管好助记词，助记词保管参考<a href="https://www.geekmeta.com/article/1220099.html">偷不走的助记词</a></p>\n<h2 id="2-%E9%A2%86%E5%8F%96%E4%BB%A5%E5%A4%AA%E5%B8%81">2. 领取以太币<a class="anchor" href="#2-%E9%A2%86%E5%8F%96%E4%BB%A5%E5%A4%AA%E5%B8%81">§</a></h2>\n<p>打开 Rinkeby 的水龙头 <a href="https://faucet.rinkeby.io/">https://faucet.rinkeby.io/</a>，按照水龙头的 &quot;How does this work?&quot; 领取 Rinkeby 网络的以太币。</p>\n<h2 id="3-%E5%87%86%E5%A4%87%E7%9B%B2%E7%9B%92%E5%9B%BE%E7%89%87%E5%92%8C-meta-info-%E6%96%87%E4%BB%B6">3. 准备盲盒图片和 meta info 文件<a class="anchor" href="#3-%E5%87%86%E5%A4%87%E7%9B%B2%E7%9B%92%E5%9B%BE%E7%89%87%E5%92%8C-meta-info-%E6%96%87%E4%BB%B6">§</a></h2>\n<p>图片尺寸 512x512 px 最佳，上传到 ipfs 上。我这里使用的是<a href="https://www.pinata.cloud/">https://www.pinata.cloud/</a>，上传后得到图片 URL <a href="https://gateway.pinata.cloud/ipfs/QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv">https://gateway.pinata.cloud/ipfs/QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</a>，文件在 ipfs 上的 cid: QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</p>\n<p>同时准备 N 个 Json 文件， N = 准备发售的 NFT 个数，格式如下</p>\n<pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"Veryyoung NFT Demo #0"</span><span class="token punctuation">,</span>\n  <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">"veryyoung nft demo"</span><span class="token punctuation">,</span>\n  <span class="token string">"image"</span><span class="token operator">:</span> <span class="token string">"<a class="token url-link" href="ipfs://QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv">ipfs://QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</a>"</span><span class="token punctuation">,</span>\n  <span class="token string">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>名字编号做成自增，description 可以随意写， image 内容填 ipfs://+刚刚准备的文件 cid</p>\n<p>我准备了个脚本来自动生成所有盲盒 json 文件，代码见 <a href="https://github.com/veryyoung/nft-demo/blob/main/scripts/unreveal.js">unreveal.js</a></p>\n<p>执行后效果如下</p>\n<p><img src="../assets/images/not_revealed_metadata.jpg" alt="not revealed metadata"></p>\n<p>将 metadata 上传到 ipfs，得到 folder 的 cid：QmPphQMMEhwmXMp3m4sJrtL9xqAX8emiXBZw8UeVGhqZhK</p>\n<h2 id="4-%E7%BC%96%E5%86%99%E5%90%88%E7%BA%A6%E4%BB%A3%E7%A0%81">4. 编写合约代码<a class="anchor" href="#4-%E7%BC%96%E5%86%99%E5%90%88%E7%BA%A6%E4%BB%A3%E7%A0%81">§</a></h2>\n<p>代码见 <a href="https://github.com/veryyoung/nft-demo/blob/main/contracts/VeryyoungNFTSimpleDemo.sol">VeryyoungNFTSimpleDemo.sol</a></p>\n<p>这里有几个需要注意的：</p>\n<ol>\n<li>使用 openzeppelin 的 Counter 工具来当计数器，而不是自己维护计数器，避免混乱。已经见过好几个项目计数混乱了。</li>\n<li>留了方法 setBaseURI 来修改 baseurl，用来开图。</li>\n<li>拒绝合约调用，防止使用合约来批量调用（NFT初期很多项目被用合约批量 mint，某数字 DAO 因此一战成名）</li>\n<li>withdraw 方法使用了 call 而不是直接使用 tranfer 函数</li>\n<li>敏感方法加上了 onlyOwner 修饰符，仅允许合约拥有者(也就是部署合约的那个地址)进行操作，防止被恶意利用，具体原因参考 <a href="https://consensys.github.io/smart-contract-best-practices/recommendations/#dont-use-transfer-or-send">Don\'t use transfer() or send()</a></li>\n</ol>\n<h2 id="6-%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">6. 编写测试<a class="anchor" href="#6-%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">§</a></h2>\n<p>参考 <a href="https://github.com/veryyoung/nft-demo/blob/main/test/simple_demo.spec.js">simple_demo.spec.js</a></p>\n<h2 id="7-%E9%83%A8%E7%BD%B2%E5%90%88%E7%BA%A6">7. 部署合约<a class="anchor" href="#7-%E9%83%A8%E7%BD%B2%E5%90%88%E7%BA%A6">§</a></h2>\n<h2 id="8-%E4%B8%8A%E6%9E%B6-opensea">8. 上架 opensea<a class="anchor" href="#8-%E4%B8%8A%E6%9E%B6-opensea">§</a></h2>\n<h2 id="9-%E5%BC%80%E5%9B%BE">9. 开图<a class="anchor" href="#9-%E5%BC%80%E5%9B%BE">§</a></h2>\n<p>生成开图后的图片和 meta info</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "NFT \u4ECE\u5F00\u53D1\u5230\u4E0A\u67B6\u5168\u6D41\u7A0B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>最近参与了很多 NFT 项目的一级市场 mint 以及交易过程，也阅读了很多 NFT 项目的合约代码，自己还没实操过，此文章边做边写，不一定是最佳实践，但所有环节是本人亲自参与过的，keep your hands dirty, let\'s go.</p>\n<p>此教程所有环节在科学上网环境下进行，有任何网络错误相关问题请检查你的科学上网是否流畅。</p>\n<h2 id="1-%E7%94%9F%E6%88%90%E9%92%B1%E5%8C%85%E5%9C%B0%E5%9D%80">1. 生成钱包地址<a class="anchor" href="#1-%E7%94%9F%E6%88%90%E9%92%B1%E5%8C%85%E5%9C%B0%E5%9D%80">§</a></h2>\n<p>部署 NFT 合约的时候需要有一个钱包地址作为合约的 deployer 和 owner，这里使用 <a href="https://metamask.io/">Metamask</a> 作为钱包应用。</p>\n<p>打开 Metamask 官网 <a href="https://metamask.io/">https://metamask.io/</a>，点击 ”Download now“，下载 Chrome 插件并安装。</p>\n<p>如果有现成的私钥点击”Import wallet“，如果没有点击”Create a Wallet“，设置好密码，保管好助记词，助记词保管参考<a href="https://www.geekmeta.com/article/1220099.html">偷不走的助记词</a></p>\n<h2 id="2-%E9%A2%86%E5%8F%96%E4%BB%A5%E5%A4%AA%E5%B8%81">2. 领取以太币<a class="anchor" href="#2-%E9%A2%86%E5%8F%96%E4%BB%A5%E5%A4%AA%E5%B8%81">§</a></h2>\n<p>打开 Rinkeby 的水龙头 <a href="https://faucet.rinkeby.io/">https://faucet.rinkeby.io/</a>，按照水龙头的 &quot;How does this work?&quot; 领取 Rinkeby 网络的以太币。</p>\n<h2 id="3-%E5%87%86%E5%A4%87%E7%9B%B2%E7%9B%92%E5%9B%BE%E7%89%87%E5%92%8C-meta-info-%E6%96%87%E4%BB%B6">3. 准备盲盒图片和 meta info 文件<a class="anchor" href="#3-%E5%87%86%E5%A4%87%E7%9B%B2%E7%9B%92%E5%9B%BE%E7%89%87%E5%92%8C-meta-info-%E6%96%87%E4%BB%B6">§</a></h2>\n<p>图片尺寸 512x512 px 最佳，上传到 ipfs 上。我这里使用的是<a href="https://www.pinata.cloud/">https://www.pinata.cloud/</a>，上传后得到图片 URL <a href="https://gateway.pinata.cloud/ipfs/QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv">https://gateway.pinata.cloud/ipfs/QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</a>，文件在 ipfs 上的 cid: QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</p>\n<p>同时准备 N 个 Json 文件， N = 准备发售的 NFT 个数，格式如下</p>\n<pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"Veryyoung NFT Demo #0"</span><span class="token punctuation">,</span>\n  <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">"veryyoung nft demo"</span><span class="token punctuation">,</span>\n  <span class="token string">"image"</span><span class="token operator">:</span> <span class="token string">"<a class="token url-link" href="ipfs://QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv">ipfs://QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</a>"</span><span class="token punctuation">,</span>\n  <span class="token string">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>名字编号做成自增，description 可以随意写， image 内容填 ipfs://+刚刚准备的文件 cid</p>\n<p>我准备了个脚本来自动生成所有盲盒 json 文件，代码见 <a href="https://github.com/veryyoung/nft-demo/blob/main/scripts/unreveal.js">unreveal.js</a></p>\n<p>执行后效果如下</p>\n<p><img src="../assets/images/not_revealed_metadata.jpg" alt="not revealed metadata"></p>\n<p>将 metadata 上传到 ipfs，得到 folder 的 cid：QmPphQMMEhwmXMp3m4sJrtL9xqAX8emiXBZw8UeVGhqZhK</p>\n<h2 id="4-%E7%BC%96%E5%86%99%E5%90%88%E7%BA%A6%E4%BB%A3%E7%A0%81">4. 编写合约代码<a class="anchor" href="#4-%E7%BC%96%E5%86%99%E5%90%88%E7%BA%A6%E4%BB%A3%E7%A0%81">§</a></h2>\n<p>代码见 <a href="https://github.com/veryyoung/nft-demo/blob/main/contracts/VeryyoungNFTSimpleDemo.sol">VeryyoungNFTSimpleDemo.sol</a></p>\n<p>这里有几个需要注意的：</p>\n<ol>\n<li>使用 openzeppelin 的 Counter 工具来当计数器，而不是自己维护计数器，避免混乱。已经见过好几个项目计数混乱了。</li>\n<li>留了方法 setBaseURI 来修改 baseurl，用来开图。</li>\n<li>拒绝合约调用，防止使用合约来批量调用（NFT初期很多项目被用合约批量 mint，某数字 DAO 因此一战成名）</li>\n<li>withdraw 方法使用了 call 而不是直接使用 tranfer 函数</li>\n<li>敏感方法加上了 onlyOwner 修饰符，仅允许合约拥有者(也就是部署合约的那个地址)进行操作，防止被恶意利用，具体原因参考 <a href="https://consensys.github.io/smart-contract-best-practices/recommendations/#dont-use-transfer-or-send">Don\'t use transfer() or send()</a></li>\n</ol>\n<h2 id="6-%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">6. 编写测试<a class="anchor" href="#6-%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">§</a></h2>\n<p>参考 <a href="https://github.com/veryyoung/nft-demo/blob/main/test/simple_demo.spec.js">simple_demo.spec.js</a></p>\n<h2 id="7-%E9%83%A8%E7%BD%B2%E5%90%88%E7%BA%A6">7. 部署合约<a class="anchor" href="#7-%E9%83%A8%E7%BD%B2%E5%90%88%E7%BA%A6">§</a></h2>\n<h2 id="8-%E4%B8%8A%E6%9E%B6-opensea">8. 上架 opensea<a class="anchor" href="#8-%E4%B8%8A%E6%9E%B6-opensea">§</a></h2>\n<h2 id="9-%E5%BC%80%E5%9B%BE">9. 开图<a class="anchor" href="#9-%E5%BC%80%E5%9B%BE">§</a></h2>\n<p>生成开图后的图片和 meta info</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#1-%E7%94%9F%E6%88%90%E9%92%B1%E5%8C%85%E5%9C%B0%E5%9D%80" }, "1. \u751F\u6210\u94B1\u5305\u5730\u5740")),
            React.createElement("li", null,
                React.createElement("a", { href: "#2-%E9%A2%86%E5%8F%96%E4%BB%A5%E5%A4%AA%E5%B8%81" }, "2. \u9886\u53D6\u4EE5\u592A\u5E01")),
            React.createElement("li", null,
                React.createElement("a", { href: "#3-%E5%87%86%E5%A4%87%E7%9B%B2%E7%9B%92%E5%9B%BE%E7%89%87%E5%92%8C-meta-info-%E6%96%87%E4%BB%B6" }, "3. \u51C6\u5907\u76F2\u76D2\u56FE\u7247\u548C meta info \u6587\u4EF6")),
            React.createElement("li", null,
                React.createElement("a", { href: "#4-%E7%BC%96%E5%86%99%E5%90%88%E7%BA%A6%E4%BB%A3%E7%A0%81" }, "4. \u7F16\u5199\u5408\u7EA6\u4EE3\u7801")),
            React.createElement("li", null,
                React.createElement("a", { href: "#6-%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95" }, "6. \u7F16\u5199\u6D4B\u8BD5")),
            React.createElement("li", null,
                React.createElement("a", { href: "#7-%E9%83%A8%E7%BD%B2%E5%90%88%E7%BA%A6" }, "7. \u90E8\u7F72\u5408\u7EA6")),
            React.createElement("li", null,
                React.createElement("a", { href: "#8-%E4%B8%8A%E6%9E%B6-opensea" }, "8. \u4E0A\u67B6 opensea")),
            React.createElement("li", null,
                React.createElement("a", { href: "#9-%E5%BC%80%E5%9B%BE" }, "9. \u5F00\u56FE")))),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2021-11-30T00:00:00.000Z",
    'updated': "2021-12-20T18:54:37.000Z",
    'excerpt': "最近参与了很多 NFT 项目的一级市场 mint 以及交易过程，也阅读了很多 NFT 项目的合约代码，自己还没实操过，此文章边做边写，不一定是最佳实践，但所有环节是本人亲自参与过的，keep your hands dirty, let's go. 此教程所有环...",
    'cover': "../assets/images/not_revealed_metadata.jpg",
    'tags': [
        "dev",
        "crypto",
        "blockchain"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/NFT-development-tutorial.md",
                "title": "NFT 从开发到上架 Opensea 全流程",
                "link": "posts/NFT-development-tutorial.html",
                "date": "2021-11-30T00:00:00.000Z",
                "updated": "2021-12-20T18:54:37.000Z",
                "author": "veryyoung",
                "contributors": [
                    "veryyoung"
                ],
                "tags": [
                    "dev",
                    "crypto",
                    "blockchain"
                ],
                "excerpt": "最近参与了很多 NFT 项目的一级市场 mint 以及交易过程，也阅读了很多 NFT 项目的合约代码，自己还没实操过，此文章边做边写，不一定是最佳实践，但所有环节是本人亲自参与过的，keep your hands dirty, let's go. 此教程所有环...",
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
                "updated": "2021-09-24T02:23:43.000Z",
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
                "count": 3
            },
            {
                "name": "crypto",
                "count": 3
            },
            {
                "name": "dev",
                "count": 1
            },
            {
                "name": "tips",
                "count": 1
            }
        ]
    }
};
