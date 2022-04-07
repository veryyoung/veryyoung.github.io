import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/NFT-development-tutorial.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/NFT-development-tutorial.html",
    'title': "NFT 从开发到上架 Opensea 全流程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>NFT 从开发到上架 Opensea 全流程</h1>\n<p>最近参与了很多 NFT 项目的一级市场 mint 以及交易过程，也阅读了很多 NFT 项目的合约代码，自己还没实操过，并且全网也没找到此主题的文章。</p>\n<p>此文章边做边写，不一定是最佳实践，但所有环节是本人亲自参与过的，keep your hands dirty, let\'s go.</p>\n<p>此教程所有环节在科学上网环境下进行，有任何网络错误相关问题请检查你的科学上网是否流畅。</p>\n<h2 id="1-%E7%94%9F%E6%88%90%E9%92%B1%E5%8C%85%E5%9C%B0%E5%9D%80">1. 生成钱包地址<a class="anchor" href="#1-%E7%94%9F%E6%88%90%E9%92%B1%E5%8C%85%E5%9C%B0%E5%9D%80">§</a></h2>\n<p>部署 NFT 合约的时候需要有一个钱包地址作为合约的 deployer 和 owner，这里使用 <a href="https://metamask.io/">Metamask</a> 作为钱包应用。</p>\n<p>打开 Metamask 官网 <a href="https://metamask.io/">https://metamask.io/</a>，点击 &quot;Download now&quot;，下载 Chrome 插件并安装。</p>\n<p>如果有现成的私钥点击 &quot;Import wallet&quot;，如果没有点击 &quot;Create a Wallet&quot;，设置好密码，保管好助记词，助记词保管参考<a href="https://www.geekmeta.com/article/1220099.html">偷不走的助记词</a></p>\n<h2 id="2-%E9%A2%86%E5%8F%96%E4%BB%A5%E5%A4%AA%E5%B8%81">2. 领取以太币<a class="anchor" href="#2-%E9%A2%86%E5%8F%96%E4%BB%A5%E5%A4%AA%E5%B8%81">§</a></h2>\n<p>打开 Rinkeby 的水龙头 <a href="https://faucet.rinkeby.io/">https://faucet.rinkeby.io/</a>，按照水龙头的 &quot;How does this work?&quot; 领取 Rinkeby 网络的以太币。</p>\n<h2 id="3-%E5%87%86%E5%A4%87%E7%9B%B2%E7%9B%92%E5%9B%BE%E7%89%87%E5%92%8C-meta-info-%E6%96%87%E4%BB%B6">3. 准备盲盒图片和 meta info 文件<a class="anchor" href="#3-%E5%87%86%E5%A4%87%E7%9B%B2%E7%9B%92%E5%9B%BE%E7%89%87%E5%92%8C-meta-info-%E6%96%87%E4%BB%B6">§</a></h2>\n<p>图片尺寸 512x512 px 最佳，上传到 ipfs 上。我这里使用的是 <a href="https://www.pinata.cloud/">https://www.pinata.cloud/</a>，上传后得到图片 URL <a href="https://gateway.pinata.cloud/ipfs/QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv">https://gateway.pinata.cloud/ipfs/QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</a>，文件在 ipfs 上的 cid: QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</p>\n<p>同时准备 N 个 Json 文件， N = 准备发售的 NFT 个数，格式如下</p>\n<pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"Veryyoung NFT Demo #0"</span><span class="token punctuation">,</span>\n  <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">"veryyoung nft demo"</span><span class="token punctuation">,</span>\n  <span class="token string">"image"</span><span class="token operator">:</span> <span class="token string">"<a class="token url-link" href="ipfs://QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv">ipfs://QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</a>"</span><span class="token punctuation">,</span>\n  <span class="token string">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>名字编号做成自增，description 可以随意写， image 内容填 ipfs://+刚刚准备的文件 cid</p>\n<p>我准备了个脚本来自动生成所有盲盒 json 文件，代码见 <a href="https://github.com/veryyoung/nft-demo/blob/main/scripts/unreveal.js">unreveal.js</a></p>\n<p>执行后效果如下</p>\n<p><img src="../assets/images/not_revealed_metadata.jpg" alt="not revealed metadata"></p>\n<p>将 metadata 上传到 ipfs，得到 folder 的 cid：QmPphQMMEhwmXMp3m4sJrtL9xqAX8emiXBZw8UeVGhqZhK</p>\n<h2 id="4-%E7%BC%96%E5%86%99%E5%90%88%E7%BA%A6%E4%BB%A3%E7%A0%81">4. 编写合约代码<a class="anchor" href="#4-%E7%BC%96%E5%86%99%E5%90%88%E7%BA%A6%E4%BB%A3%E7%A0%81">§</a></h2>\n<p>代码见 <a href="https://github.com/veryyoung/nft-demo/blob/main/contracts/VeryyoungNFTSimpleDemo.sol">VeryyoungNFTSimpleDemo.sol</a></p>\n<p>这里有几个需要注意的：</p>\n<ol>\n<li>留了方法 setBaseURI 来修改 baseurl，用来开图。</li>\n<li>拒绝合约调用，防止使用合约来批量调用（NFT初期很多项目被用合约批量 mint，某数字 DAO 因此一战成名）</li>\n<li>withdraw 方法使用了 call 而不是直接使用 tranfer 函数，防止被恶意利用，具体原因参考 <a href="https://consensys.github.io/smart-contract-best-practices/recommendations/#dont-use-transfer-or-send">Don\'t use transfer() or send()</a></li>\n<li>敏感方法加上了 onlyOwner 修饰符，仅允许合约拥有者(也就是部署合约的那个地址)进行操作</li>\n<li>使用 <a href="https://github.com/chiru-labs/ERC721A">ERC721A</a> 降低 mint 多个的 gas</li>\n</ol>\n<h2 id="6-%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">6. 编写测试<a class="anchor" href="#6-%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">§</a></h2>\n<p>参考 <a href="https://github.com/veryyoung/nft-demo/blob/main/test/simple_demo.spec.js">simple_demo.spec.js</a></p>\n<p>我在本地 <a href="https://trufflesuite.com/ganache/">Ganache</a> 跑的测试，有其他网络需求记得修改 hardhart 配置里的 url 和端口</p>\n<h2 id="7-%E9%83%A8%E7%BD%B2%E5%90%88%E7%BA%A6">7. 部署合约<a class="anchor" href="#7-%E9%83%A8%E7%BD%B2%E5%90%88%E7%BA%A6">§</a></h2>\n<p>先在本地执行部署</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> deploy:simple\n</code></pre>\n<p>部署成功会如下提示：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> run v1.22.10\n$ npx hardhat run scripts/deploy_simple.js\nVeryyoung simple NFT demo contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3\n✨  Done <span class="token keyword">in</span> <span class="token number">3</span>.96s.\n</code></pre>\n<p>部署其他网络需要申请 <a href="https://infura.io/">infura</a>，可以理解为一套远端的以太坊节点，提供了标准的 RPC API 供使用，避免开发者自己在本地跑以太坊节点的麻烦。</p>\n<p>申请后把 key 放到 .env 的 INFURA_KEY 里。</p>\n<p>同时把钱包的助记词放在 .env 的 MNEMONIC 里，一定要注意小心助记词泄露，比如被程序兼听剪切板，比如文件泄露，比如文件随着代码上传到远端。</p>\n<p>一切都配置好后执行</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> deploy:simple\n</code></pre>\n<p>或者</p>\n<pre class="language-bash"><code class="language-bash">npx hardhat run scripts/deploy_simple.js --network rinkeby\n</code></pre>\n<p>成功后会提示：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> run v1.22.10\n$ npx hardhat run scripts/deploy_simple.js --network rinkeby\nVeryyoung simple NFT demo contract deployed to: 0xF82E39Ce459786cC9AE3602Eed9c288B4FBBE785\n✨  Done <span class="token keyword">in</span> <span class="token number">23</span>.47s.\n</code></pre>\n<p>合约部署成功！</p>\n<h2 id="8-%E5%BC%80%E6%BA%90%E4%BB%A3%E7%A0%81">8. 开源代码<a class="anchor" href="#8-%E5%BC%80%E6%BA%90%E4%BB%A3%E7%A0%81">§</a></h2>\n<p>打开 etherscan 可以看到部署的合约 <a href="https://rinkeby.etherscan.io/address/0xf82e39ce459786cc9ae3602eed9c288b4fbbe785">https://rinkeby.etherscan.io/address/0xf82e39ce459786cc9ae3602eed9c288b4fbbe785</a>，</p>\n<p><img src="../assets/images/contract_not_verified.jpg" alt="contract not verified"></p>\n<p>代码是未验证的，也就是未开源的。</p>\n<p>在 Web3 的世界里（起码 NFT 的世界里），合约代码是必须开源的。</p>\n<p>申请个 etherscan 的 api，放在 .env 里面。</p>\n<p>执行命令</p>\n<pre class="language-bash"><code class="language-bash">npx hardhat verify --network rinkeby 0xF82E39Ce459786cC9AE3602Eed9c288B4FBBE785 <span class="token string">"Veryyoung NFT Simple Demo"</span> <span class="token string">"VNSD"</span> <span class="token string">"<a class="token url-link" href="ipfs://QmPphQMMEhwmXMp3m4sJrtL9xqAX8emiXBZw8UeVGhqZhK/">ipfs://QmPphQMMEhwmXMp3m4sJrtL9xqAX8emiXBZw8UeVGhqZhK/</a>"</span>\n</code></pre>\n<p>请确保 verify 的参数和 deploy 的时候保持一致。</p>\n<p>如果 verify 成功，会有如下输出：</p>\n<pre class="language-bash"><code class="language-bash">Nothing to compile\nCompiling <span class="token number">1</span> <span class="token function">file</span> with <span class="token number">0.8</span>.4\nSuccessfully submitted <span class="token builtin class-name">source</span> code <span class="token keyword">for</span> contract\ncontracts/VeryyoungNFTSimpleDemo.sol:VeryyoungNFTSimpleDemo at 0xF82E39Ce459786cC9AE3602Eed9c288B4FBBE785\n<span class="token keyword">for</span> verification on Etherscan. Waiting <span class="token keyword">for</span> verification result<span class="token punctuation">..</span>.\n\nSuccessfully verified contract VeryyoungNFTSimpleDemo on Etherscan.\n<a class="token url-link" href="https://rinkeby.etherscan.io/address/0xF82E39Ce459786cC9AE3602Eed9c288B4FBBE785">https://rinkeby.etherscan.io/address/0xF82E39Ce459786cC9AE3602Eed9c288B4FBBE785</a><span class="token comment">#code</span>\n</code></pre>\n<p>现在再看，合约已经开源了 <a href="https://rinkeby.etherscan.io/address/0xf82e39ce459786cc9ae3602eed9c288b4fbbe785#code">https://rinkeby.etherscan.io/address/0xf82e39ce459786cc9ae3602eed9c288b4fbbe785#code</a></p>\n<h2 id="9-mint-nft">9. mint NFT<a class="anchor" href="#9-mint-nft">§</a></h2>\n<p>打开刚刚的合约地址，点击 &quot;Connect to Web3&quot; 连上小狐狸，点击 &quot;Write Contract&quot;，找到 mint 函数，第一个参数写 0.1（mint 价格），第二个参数写  mint 数量（1-5 之间），Wirte，然后等待执行。</p>\n<p>执行成功后返回 tx <a href="https://rinkeby.etherscan.io/tx/0x7f29aa3dbccda24a3e1d6ea6b9a7ddffcbd05755f35ec318355e897bd38c93f4">https://rinkeby.etherscan.io/tx/0x7f29aa3dbccda24a3e1d6ea6b9a7ddffcbd05755f35ec318355e897bd38c93f4</a>，可以看到 NFT 已经铸造成功，并打到了我的钱包地址。</p>\n<p>此处用户体验不太适合普通用户进行操作，可以自己开发网页，用 <a href="https://docs.ethers.io/v5/">ethers.js</a> 或者 <a href="https://web3js.readthedocs.io/en/v1.5.2/">web3.js</a> 这样的组件来连接钱包，图形化的进行 mint 操作。</p>\n<h2 id="10-%E4%B8%8A%E6%9E%B6-opensea">10. 上架 opensea<a class="anchor" href="#10-%E4%B8%8A%E6%9E%B6-opensea">§</a></h2>\n<p>打开 <a href="https://testnets.opensea.io/">Opensea 测试网</a> 链接，连接钱包登录。</p>\n<p>点首页的 &quot;Create&quot;，按要求填信息，注意关联上刚刚的 NFT 项目（会自动读取，选择即可）。</p>\n<p>如果想收取版税也可以编辑，&quot;Collect a fee when a user re-sells an item you originally created. This is deducted from the final sale price and paid monthly to a payout address of your choosing.&quot;， NFT 发生交易后会自动转对应百分比的版税到设置的地址。</p>\n<p>完成后 NFT 已经上架成功啦！</p>\n<p><a href="https://testnets.opensea.io/collection/veryyoung-nft-simple-demo">https://testnets.opensea.io/collection/veryyoung-nft-simple-demo</a></p>\n<h2 id="11-%E5%BC%80%E5%9B%BE">11. 开图<a class="anchor" href="#11-%E5%BC%80%E5%9B%BE">§</a></h2>\n<p>生成开图后的图片和 meta info，格式和自己做的盲盒一样，但是可以增加属性，可以根据属性存在的百分比出稀有度排名。</p>\n<p>我使用了 <a href="https://github.com/HashLips/hashlips_art_engine">https://github.com/HashLips/hashlips_art_engine</a> 来合成图片&amp;生成 metadata。</p>\n<p><img src="../assets/images/revealed_images.jpg" alt="revealed images"></p>\n<p>将新的图片和 metadata json 文件上传到 ipfs 之后，得到新的 ipfs 链接 <a href="https://gateway.pinata.cloud/ipfs/QmdNhbTrDmDvzQwefiCCUJZ3JGRNvk2nbkAqYLJEtXqChB">https://gateway.pinata.cloud/ipfs/QmdNhbTrDmDvzQwefiCCUJZ3JGRNvk2nbkAqYLJEtXqChB</a></p>\n<p>CID：QmdNhbTrDmDvzQwefiCCUJZ3JGRNvk2nbkAqYLJEtXqChB</p>\n<p>回到之前部署合约的 etherscan 链接，执行 setBaseURI 函数，参数为 ipfs://QmdNhbTrDmDvzQwefiCCUJZ3JGRNvk2nbkAqYLJEtXqChB/</p>\n<p>调用成功后 metadata 修改成功了。</p>\n<p>由于 opensea 有缓存机制，一定时间后才会刷新到 opensea。</p>\n<p>也可在 opensea 上的 item 里面点击 &quot;Refresh Metadata&quot; 触发刷新。</p>\n<h2 id="12--%E7%99%BD%E5%90%8D%E5%8D%95%E7%BB%B4%E6%8A%A4%E9%A2%84%E5%94%AE%E5%92%8C%E5%85%AC%E5%94%AE">12.  白名单维护，预售和公售<a class="anchor" href="#12--%E7%99%BD%E5%90%8D%E5%8D%95%E7%BB%B4%E6%8A%A4%E9%A2%84%E5%94%AE%E5%92%8C%E5%85%AC%E5%94%AE">§</a></h2>\n<p><a href="../posts/NFT-presale-and-public-dev-tutorial.html">下一篇</a>会详细写</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "NFT \u4ECE\u5F00\u53D1\u5230\u4E0A\u67B6 Opensea \u5168\u6D41\u7A0B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>最近参与了很多 NFT 项目的一级市场 mint 以及交易过程，也阅读了很多 NFT 项目的合约代码，自己还没实操过，并且全网也没找到此主题的文章。</p>\n<p>此文章边做边写，不一定是最佳实践，但所有环节是本人亲自参与过的，keep your hands dirty, let\'s go.</p>\n<p>此教程所有环节在科学上网环境下进行，有任何网络错误相关问题请检查你的科学上网是否流畅。</p>\n<h2 id="1-%E7%94%9F%E6%88%90%E9%92%B1%E5%8C%85%E5%9C%B0%E5%9D%80">1. 生成钱包地址<a class="anchor" href="#1-%E7%94%9F%E6%88%90%E9%92%B1%E5%8C%85%E5%9C%B0%E5%9D%80">§</a></h2>\n<p>部署 NFT 合约的时候需要有一个钱包地址作为合约的 deployer 和 owner，这里使用 <a href="https://metamask.io/">Metamask</a> 作为钱包应用。</p>\n<p>打开 Metamask 官网 <a href="https://metamask.io/">https://metamask.io/</a>，点击 &quot;Download now&quot;，下载 Chrome 插件并安装。</p>\n<p>如果有现成的私钥点击 &quot;Import wallet&quot;，如果没有点击 &quot;Create a Wallet&quot;，设置好密码，保管好助记词，助记词保管参考<a href="https://www.geekmeta.com/article/1220099.html">偷不走的助记词</a></p>\n<h2 id="2-%E9%A2%86%E5%8F%96%E4%BB%A5%E5%A4%AA%E5%B8%81">2. 领取以太币<a class="anchor" href="#2-%E9%A2%86%E5%8F%96%E4%BB%A5%E5%A4%AA%E5%B8%81">§</a></h2>\n<p>打开 Rinkeby 的水龙头 <a href="https://faucet.rinkeby.io/">https://faucet.rinkeby.io/</a>，按照水龙头的 &quot;How does this work?&quot; 领取 Rinkeby 网络的以太币。</p>\n<h2 id="3-%E5%87%86%E5%A4%87%E7%9B%B2%E7%9B%92%E5%9B%BE%E7%89%87%E5%92%8C-meta-info-%E6%96%87%E4%BB%B6">3. 准备盲盒图片和 meta info 文件<a class="anchor" href="#3-%E5%87%86%E5%A4%87%E7%9B%B2%E7%9B%92%E5%9B%BE%E7%89%87%E5%92%8C-meta-info-%E6%96%87%E4%BB%B6">§</a></h2>\n<p>图片尺寸 512x512 px 最佳，上传到 ipfs 上。我这里使用的是 <a href="https://www.pinata.cloud/">https://www.pinata.cloud/</a>，上传后得到图片 URL <a href="https://gateway.pinata.cloud/ipfs/QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv">https://gateway.pinata.cloud/ipfs/QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</a>，文件在 ipfs 上的 cid: QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</p>\n<p>同时准备 N 个 Json 文件， N = 准备发售的 NFT 个数，格式如下</p>\n<pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"Veryyoung NFT Demo #0"</span><span class="token punctuation">,</span>\n  <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">"veryyoung nft demo"</span><span class="token punctuation">,</span>\n  <span class="token string">"image"</span><span class="token operator">:</span> <span class="token string">"<a class="token url-link" href="ipfs://QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv">ipfs://QmQvp2GyrBs5aKkT2UWg4p2cBbF1WDjCYgSBSmzeZzvFvv</a>"</span><span class="token punctuation">,</span>\n  <span class="token string">"attributes"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>名字编号做成自增，description 可以随意写， image 内容填 ipfs://+刚刚准备的文件 cid</p>\n<p>我准备了个脚本来自动生成所有盲盒 json 文件，代码见 <a href="https://github.com/veryyoung/nft-demo/blob/main/scripts/unreveal.js">unreveal.js</a></p>\n<p>执行后效果如下</p>\n<p><img src="../assets/images/not_revealed_metadata.jpg" alt="not revealed metadata"></p>\n<p>将 metadata 上传到 ipfs，得到 folder 的 cid：QmPphQMMEhwmXMp3m4sJrtL9xqAX8emiXBZw8UeVGhqZhK</p>\n<h2 id="4-%E7%BC%96%E5%86%99%E5%90%88%E7%BA%A6%E4%BB%A3%E7%A0%81">4. 编写合约代码<a class="anchor" href="#4-%E7%BC%96%E5%86%99%E5%90%88%E7%BA%A6%E4%BB%A3%E7%A0%81">§</a></h2>\n<p>代码见 <a href="https://github.com/veryyoung/nft-demo/blob/main/contracts/VeryyoungNFTSimpleDemo.sol">VeryyoungNFTSimpleDemo.sol</a></p>\n<p>这里有几个需要注意的：</p>\n<ol>\n<li>留了方法 setBaseURI 来修改 baseurl，用来开图。</li>\n<li>拒绝合约调用，防止使用合约来批量调用（NFT初期很多项目被用合约批量 mint，某数字 DAO 因此一战成名）</li>\n<li>withdraw 方法使用了 call 而不是直接使用 tranfer 函数，防止被恶意利用，具体原因参考 <a href="https://consensys.github.io/smart-contract-best-practices/recommendations/#dont-use-transfer-or-send">Don\'t use transfer() or send()</a></li>\n<li>敏感方法加上了 onlyOwner 修饰符，仅允许合约拥有者(也就是部署合约的那个地址)进行操作</li>\n<li>使用 <a href="https://github.com/chiru-labs/ERC721A">ERC721A</a> 降低 mint 多个的 gas</li>\n</ol>\n<h2 id="6-%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">6. 编写测试<a class="anchor" href="#6-%E7%BC%96%E5%86%99%E6%B5%8B%E8%AF%95">§</a></h2>\n<p>参考 <a href="https://github.com/veryyoung/nft-demo/blob/main/test/simple_demo.spec.js">simple_demo.spec.js</a></p>\n<p>我在本地 <a href="https://trufflesuite.com/ganache/">Ganache</a> 跑的测试，有其他网络需求记得修改 hardhart 配置里的 url 和端口</p>\n<h2 id="7-%E9%83%A8%E7%BD%B2%E5%90%88%E7%BA%A6">7. 部署合约<a class="anchor" href="#7-%E9%83%A8%E7%BD%B2%E5%90%88%E7%BA%A6">§</a></h2>\n<p>先在本地执行部署</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> deploy:simple\n</code></pre>\n<p>部署成功会如下提示：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> run v1.22.10\n$ npx hardhat run scripts/deploy_simple.js\nVeryyoung simple NFT demo contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3\n✨  Done <span class="token keyword">in</span> <span class="token number">3</span>.96s.\n</code></pre>\n<p>部署其他网络需要申请 <a href="https://infura.io/">infura</a>，可以理解为一套远端的以太坊节点，提供了标准的 RPC API 供使用，避免开发者自己在本地跑以太坊节点的麻烦。</p>\n<p>申请后把 key 放到 .env 的 INFURA_KEY 里。</p>\n<p>同时把钱包的助记词放在 .env 的 MNEMONIC 里，一定要注意小心助记词泄露，比如被程序兼听剪切板，比如文件泄露，比如文件随着代码上传到远端。</p>\n<p>一切都配置好后执行</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> deploy:simple\n</code></pre>\n<p>或者</p>\n<pre class="language-bash"><code class="language-bash">npx hardhat run scripts/deploy_simple.js --network rinkeby\n</code></pre>\n<p>成功后会提示：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> run v1.22.10\n$ npx hardhat run scripts/deploy_simple.js --network rinkeby\nVeryyoung simple NFT demo contract deployed to: 0xF82E39Ce459786cC9AE3602Eed9c288B4FBBE785\n✨  Done <span class="token keyword">in</span> <span class="token number">23</span>.47s.\n</code></pre>\n<p>合约部署成功！</p>\n<h2 id="8-%E5%BC%80%E6%BA%90%E4%BB%A3%E7%A0%81">8. 开源代码<a class="anchor" href="#8-%E5%BC%80%E6%BA%90%E4%BB%A3%E7%A0%81">§</a></h2>\n<p>打开 etherscan 可以看到部署的合约 <a href="https://rinkeby.etherscan.io/address/0xf82e39ce459786cc9ae3602eed9c288b4fbbe785">https://rinkeby.etherscan.io/address/0xf82e39ce459786cc9ae3602eed9c288b4fbbe785</a>，</p>\n<p><img src="../assets/images/contract_not_verified.jpg" alt="contract not verified"></p>\n<p>代码是未验证的，也就是未开源的。</p>\n<p>在 Web3 的世界里（起码 NFT 的世界里），合约代码是必须开源的。</p>\n<p>申请个 etherscan 的 api，放在 .env 里面。</p>\n<p>执行命令</p>\n<pre class="language-bash"><code class="language-bash">npx hardhat verify --network rinkeby 0xF82E39Ce459786cC9AE3602Eed9c288B4FBBE785 <span class="token string">"Veryyoung NFT Simple Demo"</span> <span class="token string">"VNSD"</span> <span class="token string">"<a class="token url-link" href="ipfs://QmPphQMMEhwmXMp3m4sJrtL9xqAX8emiXBZw8UeVGhqZhK/">ipfs://QmPphQMMEhwmXMp3m4sJrtL9xqAX8emiXBZw8UeVGhqZhK/</a>"</span>\n</code></pre>\n<p>请确保 verify 的参数和 deploy 的时候保持一致。</p>\n<p>如果 verify 成功，会有如下输出：</p>\n<pre class="language-bash"><code class="language-bash">Nothing to compile\nCompiling <span class="token number">1</span> <span class="token function">file</span> with <span class="token number">0.8</span>.4\nSuccessfully submitted <span class="token builtin class-name">source</span> code <span class="token keyword">for</span> contract\ncontracts/VeryyoungNFTSimpleDemo.sol:VeryyoungNFTSimpleDemo at 0xF82E39Ce459786cC9AE3602Eed9c288B4FBBE785\n<span class="token keyword">for</span> verification on Etherscan. Waiting <span class="token keyword">for</span> verification result<span class="token punctuation">..</span>.\n\nSuccessfully verified contract VeryyoungNFTSimpleDemo on Etherscan.\n<a class="token url-link" href="https://rinkeby.etherscan.io/address/0xF82E39Ce459786cC9AE3602Eed9c288B4FBBE785">https://rinkeby.etherscan.io/address/0xF82E39Ce459786cC9AE3602Eed9c288B4FBBE785</a><span class="token comment">#code</span>\n</code></pre>\n<p>现在再看，合约已经开源了 <a href="https://rinkeby.etherscan.io/address/0xf82e39ce459786cc9ae3602eed9c288b4fbbe785#code">https://rinkeby.etherscan.io/address/0xf82e39ce459786cc9ae3602eed9c288b4fbbe785#code</a></p>\n<h2 id="9-mint-nft">9. mint NFT<a class="anchor" href="#9-mint-nft">§</a></h2>\n<p>打开刚刚的合约地址，点击 &quot;Connect to Web3&quot; 连上小狐狸，点击 &quot;Write Contract&quot;，找到 mint 函数，第一个参数写 0.1（mint 价格），第二个参数写  mint 数量（1-5 之间），Wirte，然后等待执行。</p>\n<p>执行成功后返回 tx <a href="https://rinkeby.etherscan.io/tx/0x7f29aa3dbccda24a3e1d6ea6b9a7ddffcbd05755f35ec318355e897bd38c93f4">https://rinkeby.etherscan.io/tx/0x7f29aa3dbccda24a3e1d6ea6b9a7ddffcbd05755f35ec318355e897bd38c93f4</a>，可以看到 NFT 已经铸造成功，并打到了我的钱包地址。</p>\n<p>此处用户体验不太适合普通用户进行操作，可以自己开发网页，用 <a href="https://docs.ethers.io/v5/">ethers.js</a> 或者 <a href="https://web3js.readthedocs.io/en/v1.5.2/">web3.js</a> 这样的组件来连接钱包，图形化的进行 mint 操作。</p>\n<h2 id="10-%E4%B8%8A%E6%9E%B6-opensea">10. 上架 opensea<a class="anchor" href="#10-%E4%B8%8A%E6%9E%B6-opensea">§</a></h2>\n<p>打开 <a href="https://testnets.opensea.io/">Opensea 测试网</a> 链接，连接钱包登录。</p>\n<p>点首页的 &quot;Create&quot;，按要求填信息，注意关联上刚刚的 NFT 项目（会自动读取，选择即可）。</p>\n<p>如果想收取版税也可以编辑，&quot;Collect a fee when a user re-sells an item you originally created. This is deducted from the final sale price and paid monthly to a payout address of your choosing.&quot;， NFT 发生交易后会自动转对应百分比的版税到设置的地址。</p>\n<p>完成后 NFT 已经上架成功啦！</p>\n<p><a href="https://testnets.opensea.io/collection/veryyoung-nft-simple-demo">https://testnets.opensea.io/collection/veryyoung-nft-simple-demo</a></p>\n<h2 id="11-%E5%BC%80%E5%9B%BE">11. 开图<a class="anchor" href="#11-%E5%BC%80%E5%9B%BE">§</a></h2>\n<p>生成开图后的图片和 meta info，格式和自己做的盲盒一样，但是可以增加属性，可以根据属性存在的百分比出稀有度排名。</p>\n<p>我使用了 <a href="https://github.com/HashLips/hashlips_art_engine">https://github.com/HashLips/hashlips_art_engine</a> 来合成图片&amp;生成 metadata。</p>\n<p><img src="../assets/images/revealed_images.jpg" alt="revealed images"></p>\n<p>将新的图片和 metadata json 文件上传到 ipfs 之后，得到新的 ipfs 链接 <a href="https://gateway.pinata.cloud/ipfs/QmdNhbTrDmDvzQwefiCCUJZ3JGRNvk2nbkAqYLJEtXqChB">https://gateway.pinata.cloud/ipfs/QmdNhbTrDmDvzQwefiCCUJZ3JGRNvk2nbkAqYLJEtXqChB</a></p>\n<p>CID：QmdNhbTrDmDvzQwefiCCUJZ3JGRNvk2nbkAqYLJEtXqChB</p>\n<p>回到之前部署合约的 etherscan 链接，执行 setBaseURI 函数，参数为 ipfs://QmdNhbTrDmDvzQwefiCCUJZ3JGRNvk2nbkAqYLJEtXqChB/</p>\n<p>调用成功后 metadata 修改成功了。</p>\n<p>由于 opensea 有缓存机制，一定时间后才会刷新到 opensea。</p>\n<p>也可在 opensea 上的 item 里面点击 &quot;Refresh Metadata&quot; 触发刷新。</p>\n<h2 id="12--%E7%99%BD%E5%90%8D%E5%8D%95%E7%BB%B4%E6%8A%A4%E9%A2%84%E5%94%AE%E5%92%8C%E5%85%AC%E5%94%AE">12.  白名单维护，预售和公售<a class="anchor" href="#12--%E7%99%BD%E5%90%8D%E5%8D%95%E7%BB%B4%E6%8A%A4%E9%A2%84%E5%94%AE%E5%92%8C%E5%85%AC%E5%94%AE">§</a></h2>\n<p><a href="../posts/NFT-presale-and-public-dev-tutorial.html">下一篇</a>会详细写</p>'
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
                React.createElement("a", { href: "#8-%E5%BC%80%E6%BA%90%E4%BB%A3%E7%A0%81" }, "8. \u5F00\u6E90\u4EE3\u7801")),
            React.createElement("li", null,
                React.createElement("a", { href: "#9-mint-nft" }, "9. mint NFT")),
            React.createElement("li", null,
                React.createElement("a", { href: "#10-%E4%B8%8A%E6%9E%B6-opensea" }, "10. \u4E0A\u67B6 opensea")),
            React.createElement("li", null,
                React.createElement("a", { href: "#11-%E5%BC%80%E5%9B%BE" }, "11. \u5F00\u56FE")),
            React.createElement("li", null,
                React.createElement("a", { href: "#12--%E7%99%BD%E5%90%8D%E5%8D%95%E7%BB%B4%E6%8A%A4%E9%A2%84%E5%94%AE%E5%92%8C%E5%85%AC%E5%94%AE" }, "12.  \u767D\u540D\u5355\u7EF4\u62A4\uFF0C\u9884\u552E\u548C\u516C\u552E")))),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2021-11-30T00:00:00.000Z",
    'updated': "2022-03-18T13:13:53.000Z",
    'excerpt': "最近参与了很多 NFT 项目的一级市场 mint 以及交易过程，也阅读了很多 NFT 项目的合约代码，自己还没实操过，并且全网也没找到此主题的文章。 此文章边做边写，不一定是最佳实践，但所有环节是本人亲自参与过的，keep your han...",
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
                "count": 8
            },
            {
                "name": "crypto",
                "count": 8
            },
            {
                "name": "dev",
                "count": 2
            },
            {
                "name": "NFT",
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
