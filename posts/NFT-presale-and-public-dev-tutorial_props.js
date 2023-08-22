import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/NFT-presale-and-public-dev-tutorial.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/NFT-presale-and-public-dev-tutorial.html",
    'title': "NFT 预售和公售开发教程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>NFT 预售和公售开发教程</h1>\n<p>上文组成了 NFT 基本的流程，一般的发售够用了，但现在主流做法是搞预售和公售。</p>\n<p>预售可以起到给项目预热的作用，也可以在 Discord 里举办 AMA(Ask me anything) 让投资者更好的了解这个项目，项目方会有一定的要求，完成任务后可以得到白名单，白名单一般可以提前 mint NFT，以比较低的价格，也可以避免 gas war。</p>\n<p>预售完就是公售，预售效果如果好公售会引发哄抢，是 gas war 和科学家的战斗(如上文所说，禁止合约调用后科学家基本退出了抢公售的舞台)。</p>\n<p>我参与了很多项目的预售环节，可以发现目前很多 NFT 项目方的开发者的水平是明显存在问题的，很多项目受到严重影响，甚至因为技术原因直接死掉。</p>\n<p>本文我会整理下常见的问题，并给出解决方案，最后会附上一份示例代码仅供参考。</p>\n<h2 id="%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">常见问题<a class="anchor" href="#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">§</a></h2>\n<h3 id="%E5%BE%AA%E7%8E%AF%E9%81%8D%E5%8E%86-list-%E6%9D%A5%E5%88%A4%E6%96%AD%E7%99%BD%E5%90%8D%E5%8D%95">循环遍历 list 来判断白名单<a class="anchor" href="#%E5%BE%AA%E7%8E%AF%E9%81%8D%E5%8E%86-list-%E6%9D%A5%E5%88%A4%E6%96%AD%E7%99%BD%E5%90%8D%E5%8D%95">§</a></h3>\n<p>示例代码如下</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">isWhitelisted</span><span class="token punctuation">(</span>address _user<span class="token punctuation">)</span> public view returns <span class="token punctuation">(</span>bool<span class="token punctuation">)</span> {\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>uint256 i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment">; i &lt; whitelistedAddresses.length; i++) {</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>whitelistedAddresses<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> _user<span class="token punctuation">)</span> {\n            return <span class="token boolean">true</span><span class="token comment">;</span>\n        }\n    }\n    return <span class="token boolean">false</span><span class="token comment">;</span>\n}\n</code></pre>\n<p>白名单地址一般会有几千个，这样一趟下来 gas 直接拉满，导致大面积的人 mint 失败，极少数排在 list 前面的地址能侥幸成功。</p>\n<p>解决方案：一般项目使用 map 来判断，好的项目使用签名或 Merkle tree 判断，狗屎项目不判断，lmao.</p>\n<h3 id="%E5%8D%95%E6%AC%A1%E6%93%8D%E4%BD%9C%E8%BF%87%E5%A4%A7">单次操作过大<a class="anchor" href="#%E5%8D%95%E6%AC%A1%E6%93%8D%E4%BD%9C%E8%BF%87%E5%A4%A7">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">whitelistUsers</span><span class="token punctuation">(</span>address<span class="token punctuation">[</span><span class="token punctuation">]</span> calldata _users<span class="token punctuation">)</span> public onlyOwner {\n    delete whitelistedAddresses<span class="token comment">;</span>\n    whitelistedAddresses <span class="token operator">=</span> _users<span class="token comment">;</span>\n}\n</code></pre>\n<p>几千个白单一次性函数交互到链上</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">airdropWhitelistTokens</span><span class="token punctuation">(</span><span class="token punctuation">)</span> public onlyOwner {\n    <span class="token function">require</span><span class="token punctuation">(</span>!airdropped<span class="token punctuation">,</span> <span class="token string">"Whitelist Tokens have already been airdroped."</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>!paused<span class="token punctuation">,</span> <span class="token string">"The contract is paused"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>!whitelistMint<span class="token punctuation">,</span> <span class="token string">"Whitelist sale is still running"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    airdropped <span class="token operator">=</span> <span class="token boolean">true</span><span class="token comment">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>uint256 i<span class="token comment">; i &lt; whitelistTokens.length; i++) {</span>\n        <span class="token function">transferFrom</span><span class="token punctuation">(</span>\n            whitelistWallet<span class="token punctuation">,</span>\n            whitelistTokensOwners<span class="token punctuation">[</span>whitelistTokens<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            whitelistTokens<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n        <span class="token punctuation">)</span><span class="token comment">;</span>\n    }\n}\n</code></pre>\n<p>一次性空投 NFT 给白单地址</p>\n<p>太大的操作是极难成功的，就算成功也要烧掉很多的 gas。</p>\n<h4 id="%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">解决方案<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">§</a></h4>\n<p>尽量避免这样的大操作，如果非要执行请分批次执行。</p>\n<h3 id="%E5%90%88%E7%BA%A6%E9%87%8D%E5%85%A5">合约重入<a class="anchor" href="#%E5%90%88%E7%BA%A6%E9%87%8D%E5%85%A5">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">mintTokens</span><span class="token punctuation">(</span>uint256 count<span class="token punctuation">)</span> external payable {\n    <span class="token operator">/</span><span class="token operator">/</span> Gas optimization\n    uint256 _nextTokenId <span class="token operator">=</span> nextTokenId<span class="token comment">;</span>\n\n    <span class="token operator">/</span><span class="token operator">/</span> Make sure presale has been set up\n    SaleConfig memory _saleConfig <span class="token operator">=</span> saleConfig<span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>_saleConfig<span class="token punctuation">.</span>startTime <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"TheSevens: sale not configured"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n\n    <span class="token function">require</span><span class="token punctuation">(</span>treasury !<span class="token operator">=</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"TheSevens: treasury not set"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>tokenPrice <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"TheSevens: token price not set"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>count <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"TheSevens: invalid count"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>timestamp <span class="token operator">>=</span> _saleConfig<span class="token punctuation">.</span>startTime<span class="token punctuation">,</span> <span class="token string">"TheSevens: sale not started"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n\n    <span class="token function">require</span><span class="token punctuation">(</span>\n        count <span class="token operator">&lt;=</span>\n            <span class="token punctuation">(</span>\n                block<span class="token punctuation">.</span>timestamp <span class="token operator">>=</span> _saleConfig<span class="token punctuation">.</span>maxCountUnlockTime\n                    <span class="token operator">?</span> _saleConfig<span class="token punctuation">.</span>unlockedMaxCount\n                    <span class="token punctuation">:</span> _saleConfig<span class="token punctuation">.</span>initMaxCount\n            <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token string">"TheSevens: max count per tx exceeded"</span>\n    <span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>_nextTokenId <span class="token operator">+</span> count <span class="token operator">&lt;=</span> maxSupply<span class="token punctuation">,</span> <span class="token string">"TheSevens: max supply exceeded"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>tokenPrice <span class="token operator">*</span> count <span class="token operator">==</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token string">"TheSevens: incorrect Ether value"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n\n    <span class="token operator">/</span><span class="token operator">/</span> The contract never holds any Ether<span class="token punctuation">.</span> Everything gets redirected <span class="token keyword">to</span> treasury directly<span class="token punctuation">.</span>\n    treasury<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token comment">;</span>\n\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>uint256 ind <span class="token operator">=</span> <span class="token number">0</span><span class="token comment">; ind &lt; count; ind++) {</span>\n        <span class="token function">_safeMint</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> _nextTokenId <span class="token operator">+</span> ind<span class="token punctuation">)</span><span class="token comment">;</span>\n    }\n    nextTokenId <span class="token operator">+=</span> count<span class="token comment">;</span>\n\n    emit <span class="token function">SaleMint</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token comment">;</span>\n}\n</code></pre>\n<p>合约代码中原本通过 count、unlockedMaxCount、initMaxCount，限制单地址单笔交易的能获得 token 的个数，但是科学家通过部署合约 A，在 A 内部循环用 count = 1 调用 mintToken，在同一个区块内，限制条件为能生效。</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">mint</span><span class="token punctuation">(</span>uint256 num<span class="token punctuation">)</span> public payable <span class="token function">whenMintNotPaused</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n    uint256 supply <span class="token operator">=</span> <span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    uint256 tokenCount <span class="token operator">=</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span> num <span class="token operator">&lt;=</span> <span class="token number">12</span><span class="token punctuation">,</span>                                                             <span class="token string">"GalaxyEggs: You can mint a maximum of 12 Galaxy Eggs"</span> <span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span> tokenCount <span class="token operator">+</span> num <span class="token operator">&lt;=</span> <span class="token number">13</span><span class="token punctuation">,</span>                                                <span class="token string">"GalaxyEggs: You can mint a maximum of 13 Galaxy Eggs per wallet"</span> <span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span> supply <span class="token operator">+</span> num <span class="token operator">&lt;=</span> TOTAL_NUMBER_OF_GALAXY_EGGS <span class="token operator">-</span> giveaway_reserved<span class="token punctuation">,</span>       <span class="token string">"GalaxyEggs: Exceeds maximum Galaxy Eggs supply"</span> <span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span> msg<span class="token punctuation">.</span>value <span class="token operator">>=</span> PRICE <span class="token operator">*</span> num<span class="token punctuation">,</span>                                              <span class="token string">"GalaxyEggs: Ether sent is less than PRICE * num"</span> <span class="token punctuation">)</span><span class="token comment">;</span>\n\n    <span class="token function">for</span><span class="token punctuation">(</span>uint256 i<span class="token comment">; i &lt; num; i++){</span>\n        <span class="token function">_safeMint</span><span class="token punctuation">(</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> supply <span class="token operator">+</span> i <span class="token punctuation">)</span><span class="token comment">;</span>\n    }\n}\n</code></pre>\n<p>合约代码量，限制了地址 balance + 单次 mint num 限制单地址不超过 13 个。科学家部署合约，mint 后把 NFT 转移到自己钱包，绕过了单地址限制。</p>\n<h4 id="%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-1">解决方案<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-1">§</a></h4>\n<p>禁止合约调用，加上如下代码</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token function">require</span><span class="token punctuation">(</span>\n    !Address<span class="token punctuation">.</span><span class="token function">isContract</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">"Contracts are not allowed."</span>\n<span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>\n<h3 id="%E9%99%90%E5%88%B6%E5%8D%95%E4%B8%AA%E9%92%B1%E5%8C%85%E4%BD%99%E9%A2%9D%E6%95%B0%E9%87%8F">限制单个钱包余额数量<a class="anchor" href="#%E9%99%90%E5%88%B6%E5%8D%95%E4%B8%AA%E9%92%B1%E5%8C%85%E4%BD%99%E9%A2%9D%E6%95%B0%E9%87%8F">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">canMint</span><span class="token punctuation">(</span>uint _numberOfItemsToMint<span class="token punctuation">)</span> public view returns <span class="token punctuation">(</span>bool<span class="token punctuation">)</span> {\n    \n    <span class="token operator">/</span><span class="token operator">/</span> Enforce started rule\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>block<span class="token punctuation">.</span>timestamp <span class="token operator">&lt;</span> start<span class="token punctuation">)</span>{\n        return <span class="token boolean">false</span><span class="token comment">;</span>\n    }\n\n    <span class="token operator">/</span><span class="token operator">/</span> Enforce max per call rule\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>_numberOfItemsToMint <span class="token operator">></span> MAX_MINT_PER_CALL<span class="token punctuation">)</span> {\n        return <span class="token boolean">false</span><span class="token comment">;</span>\n    }\n\n    <span class="token operator">/</span><span class="token operator">/</span> Authenticate\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>!isPublic <span class="token operator">&amp;</span><span class="token operator">&amp;</span> !<span class="token function">IAuthenticator</span><span class="token punctuation">(</span>whitelist<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    {\n        return <span class="token boolean">false</span><span class="token comment">;</span>\n    }\n\n    <span class="token operator">/</span><span class="token operator">/</span> Enforce max per address rule\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">IERC721Enumerable</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span> <span class="token operator">+</span> _numberOfItemsToMint<span class="token punctuation">)</span> <span class="token operator">></span> MAX_MINT_PER_ADDRESS<span class="token punctuation">)</span> {\n        return <span class="token boolean">false</span><span class="token comment">;</span>\n    }\n\n    <span class="token operator">/</span><span class="token operator">/</span> Enforce max token rule\n    return <span class="token function">IERC721Enumerable</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>MAX_SUPPLY <span class="token operator">-</span> _numberOfItemsToMint<span class="token punctuation">)</span><span class="token comment">;</span>\n}\n</code></pre>\n<p>合约限制了钱包余额数量和 mint 数量不大于 MAX_MINT_PER_ADDRESS，可以在 mint 后把 NFT 转到别的地址，继续 mint。</p>\n<h4 id="%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-2">解决方案<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-2">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit"><span class="token function">mapping</span><span class="token punctuation">(</span>address <span class="token operator">=</span><span class="token operator">></span> uint256<span class="token punctuation">)</span> private _claimed\n</code></pre>\n<p>用 mapping 存已 mint 过的地址和 mint 个数。</p>\n<h3 id="%E4%B8%8A%E4%BC%A0%E7%99%BD%E5%8D%95%E6%B6%88%E8%80%97%E5%A4%A7%E9%87%8F-gas">上传白单消耗大量 gas<a class="anchor" href="#%E4%B8%8A%E4%BC%A0%E7%99%BD%E5%8D%95%E6%B6%88%E8%80%97%E5%A4%A7%E9%87%8F-gas">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit"><span class="token function">mapping</span><span class="token punctuation">(</span>address <span class="token operator">=</span><span class="token operator">></span> bool<span class="token punctuation">)</span> private _pre_sale_minters<span class="token comment">;</span>\n\nfunction <span class="token function">setPreMintRole</span><span class="token punctuation">(</span>address calldata _address<span class="token punctuation">)</span> external onlyOwner {\n    _pre_sale_minters<span class="token punctuation">[</span>_address<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token comment">;</span>\n}\n</code></pre>\n<p>每个白单需要和以太坊交互一次，消耗大量 gas。 某个项目方哭着说每个白单我需要花 0.01 ETH 上传，而你们却不 mint，他哭我 LoL，谁让你的技术这么菜，转我 10E 我把你解决这个问题，lmao..</p>\n<h4 id="%E4%B8%B4%E6%97%B6%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">临时解决方案<a class="anchor" href="#%E4%B8%B4%E6%97%B6%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">§</a></h4>\n<p>按批次上传</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">setPreMintRoleBatch</span><span class="token punctuation">(</span>address<span class="token punctuation">[</span><span class="token punctuation">]</span> calldata _addresses<span class="token punctuation">)</span> external onlyOwner {\n    <span class="token function">for</span><span class="token punctuation">(</span>uint256 i<span class="token comment">; i &lt; _addresses.length; i++){</span>\n        _pre_sale_minters<span class="token punctuation">[</span>_addresses<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token comment">;</span>\n    }\n}\n</code></pre>\n<h4 id="%E5%A5%BD%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">好的解决方案<a class="anchor" href="#%E5%A5%BD%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">§</a></h4>\n<p>参考下文</p>\n<h2 id="%E6%8E%A8%E8%8D%90%E7%9A%84%E5%88%A4%E6%96%AD%E7%99%BD%E5%8D%95%E6%96%B9%E6%B3%95">推荐的判断白单方法<a class="anchor" href="#%E6%8E%A8%E8%8D%90%E7%9A%84%E5%88%A4%E6%96%AD%E7%99%BD%E5%8D%95%E6%96%B9%E6%B3%95">§</a></h2>\n<h3 id="%E4%BD%BF%E7%94%A8%E7%AD%BE%E5%90%8D">使用签名<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E7%AD%BE%E5%90%8D">§</a></h3>\n<p>前端跟后端交互，后端判断是否在钱包地址是否属于白名单，如果属于则用私钥生成签名，返回给前端。前端调用合约进行 mint，合约判断签名是否有效。</p>\n<p>此做法不需要上传白单，超省 gas；缺点是判断过程是中心化的，没法零知识证明所有地址都是公开的那些，没有作恶。</p>\n<h3 id="%E4%BD%BF%E7%94%A8-merkle-tree">使用 Merkle tree<a class="anchor" href="#%E4%BD%BF%E7%94%A8-merkle-tree">§</a></h3>\n<p><a href="https://zh.wikipedia.org/wiki/%E5%93%88%E5%B8%8C%E6%A0%91">Merkle tree</a> 是非常适合做验证工作的，把所有白名单地址生成一个 Merkle Root，上传到合约上， mint 的时候可以很方便的进行验证。</p>\n<p>此做法只需要一次链上操作。</p>\n<h3 id="%E4%B8%A4%E8%80%85%E4%BC%98%E7%BC%BA%E7%82%B9">两者优缺点<a class="anchor" href="#%E4%B8%A4%E8%80%85%E4%BC%98%E7%BC%BA%E7%82%B9">§</a></h3>\n<p>Merkle tree 和签名有几个使用场景的区别：</p>\n<ol>\n<li>签名需要用到 private key，所以签名的过程只能在后端进行，如果是实时生成签名就需要用到后端服务。Mekle Tree 生成可以在前端进行，可以利用用户的浏览器资源，不需要消耗服务器</li>\n<li>Merkle Tree 一旦生成，后续白名单修改起来不是很方便，每改一次就需要重新设置 root，而签名更灵活一些，对于新增的钱包直接生成新的签名就行了</li>\n</ol>\n<p>From shep.eth</p>\n<h2 id="%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81">示例代码<a class="anchor" href="#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81">§</a></h2>\n<p>见 <a href="https://github.com/veryyoung/nft-demo/blob/main/contracts/VeryyoungNFTDemo.sol">VeryyoungNFTDemo.sol</a></p>\n<h2 id="%E8%87%B4%E6%95%AC">致敬<a class="anchor" href="#%E8%87%B4%E6%95%AC">§</a></h2>\n<p>感谢 NextDAO 家人们的一起讨论技术，共享财富密码，无偿分享代码，无偿分享复盘资料，respect！</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "NFT \u9884\u552E\u548C\u516C\u552E\u5F00\u53D1\u6559\u7A0B"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>上文组成了 NFT 基本的流程，一般的发售够用了，但现在主流做法是搞预售和公售。</p>\n<p>预售可以起到给项目预热的作用，也可以在 Discord 里举办 AMA(Ask me anything) 让投资者更好的了解这个项目，项目方会有一定的要求，完成任务后可以得到白名单，白名单一般可以提前 mint NFT，以比较低的价格，也可以避免 gas war。</p>\n<p>预售完就是公售，预售效果如果好公售会引发哄抢，是 gas war 和科学家的战斗(如上文所说，禁止合约调用后科学家基本退出了抢公售的舞台)。</p>\n<p>我参与了很多项目的预售环节，可以发现目前很多 NFT 项目方的开发者的水平是明显存在问题的，很多项目受到严重影响，甚至因为技术原因直接死掉。</p>\n<p>本文我会整理下常见的问题，并给出解决方案，最后会附上一份示例代码仅供参考。</p>\n<h2 id="%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">常见问题<a class="anchor" href="#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">§</a></h2>\n<h3 id="%E5%BE%AA%E7%8E%AF%E9%81%8D%E5%8E%86-list-%E6%9D%A5%E5%88%A4%E6%96%AD%E7%99%BD%E5%90%8D%E5%8D%95">循环遍历 list 来判断白名单<a class="anchor" href="#%E5%BE%AA%E7%8E%AF%E9%81%8D%E5%8E%86-list-%E6%9D%A5%E5%88%A4%E6%96%AD%E7%99%BD%E5%90%8D%E5%8D%95">§</a></h3>\n<p>示例代码如下</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">isWhitelisted</span><span class="token punctuation">(</span>address _user<span class="token punctuation">)</span> public view returns <span class="token punctuation">(</span>bool<span class="token punctuation">)</span> {\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>uint256 i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment">; i &lt; whitelistedAddresses.length; i++) {</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>whitelistedAddresses<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> _user<span class="token punctuation">)</span> {\n            return <span class="token boolean">true</span><span class="token comment">;</span>\n        }\n    }\n    return <span class="token boolean">false</span><span class="token comment">;</span>\n}\n</code></pre>\n<p>白名单地址一般会有几千个，这样一趟下来 gas 直接拉满，导致大面积的人 mint 失败，极少数排在 list 前面的地址能侥幸成功。</p>\n<p>解决方案：一般项目使用 map 来判断，好的项目使用签名或 Merkle tree 判断，狗屎项目不判断，lmao.</p>\n<h3 id="%E5%8D%95%E6%AC%A1%E6%93%8D%E4%BD%9C%E8%BF%87%E5%A4%A7">单次操作过大<a class="anchor" href="#%E5%8D%95%E6%AC%A1%E6%93%8D%E4%BD%9C%E8%BF%87%E5%A4%A7">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">whitelistUsers</span><span class="token punctuation">(</span>address<span class="token punctuation">[</span><span class="token punctuation">]</span> calldata _users<span class="token punctuation">)</span> public onlyOwner {\n    delete whitelistedAddresses<span class="token comment">;</span>\n    whitelistedAddresses <span class="token operator">=</span> _users<span class="token comment">;</span>\n}\n</code></pre>\n<p>几千个白单一次性函数交互到链上</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">airdropWhitelistTokens</span><span class="token punctuation">(</span><span class="token punctuation">)</span> public onlyOwner {\n    <span class="token function">require</span><span class="token punctuation">(</span>!airdropped<span class="token punctuation">,</span> <span class="token string">"Whitelist Tokens have already been airdroped."</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>!paused<span class="token punctuation">,</span> <span class="token string">"The contract is paused"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>!whitelistMint<span class="token punctuation">,</span> <span class="token string">"Whitelist sale is still running"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    airdropped <span class="token operator">=</span> <span class="token boolean">true</span><span class="token comment">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>uint256 i<span class="token comment">; i &lt; whitelistTokens.length; i++) {</span>\n        <span class="token function">transferFrom</span><span class="token punctuation">(</span>\n            whitelistWallet<span class="token punctuation">,</span>\n            whitelistTokensOwners<span class="token punctuation">[</span>whitelistTokens<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            whitelistTokens<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n        <span class="token punctuation">)</span><span class="token comment">;</span>\n    }\n}\n</code></pre>\n<p>一次性空投 NFT 给白单地址</p>\n<p>太大的操作是极难成功的，就算成功也要烧掉很多的 gas。</p>\n<h4 id="%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">解决方案<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">§</a></h4>\n<p>尽量避免这样的大操作，如果非要执行请分批次执行。</p>\n<h3 id="%E5%90%88%E7%BA%A6%E9%87%8D%E5%85%A5">合约重入<a class="anchor" href="#%E5%90%88%E7%BA%A6%E9%87%8D%E5%85%A5">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">mintTokens</span><span class="token punctuation">(</span>uint256 count<span class="token punctuation">)</span> external payable {\n    <span class="token operator">/</span><span class="token operator">/</span> Gas optimization\n    uint256 _nextTokenId <span class="token operator">=</span> nextTokenId<span class="token comment">;</span>\n\n    <span class="token operator">/</span><span class="token operator">/</span> Make sure presale has been set up\n    SaleConfig memory _saleConfig <span class="token operator">=</span> saleConfig<span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>_saleConfig<span class="token punctuation">.</span>startTime <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"TheSevens: sale not configured"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n\n    <span class="token function">require</span><span class="token punctuation">(</span>treasury !<span class="token operator">=</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"TheSevens: treasury not set"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>tokenPrice <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"TheSevens: token price not set"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>count <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"TheSevens: invalid count"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span>timestamp <span class="token operator">>=</span> _saleConfig<span class="token punctuation">.</span>startTime<span class="token punctuation">,</span> <span class="token string">"TheSevens: sale not started"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n\n    <span class="token function">require</span><span class="token punctuation">(</span>\n        count <span class="token operator">&lt;=</span>\n            <span class="token punctuation">(</span>\n                block<span class="token punctuation">.</span>timestamp <span class="token operator">>=</span> _saleConfig<span class="token punctuation">.</span>maxCountUnlockTime\n                    <span class="token operator">?</span> _saleConfig<span class="token punctuation">.</span>unlockedMaxCount\n                    <span class="token punctuation">:</span> _saleConfig<span class="token punctuation">.</span>initMaxCount\n            <span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token string">"TheSevens: max count per tx exceeded"</span>\n    <span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>_nextTokenId <span class="token operator">+</span> count <span class="token operator">&lt;=</span> maxSupply<span class="token punctuation">,</span> <span class="token string">"TheSevens: max supply exceeded"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span>tokenPrice <span class="token operator">*</span> count <span class="token operator">==</span> msg<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token string">"TheSevens: incorrect Ether value"</span><span class="token punctuation">)</span><span class="token comment">;</span>\n\n    <span class="token operator">/</span><span class="token operator">/</span> The contract never holds any Ether<span class="token punctuation">.</span> Everything gets redirected <span class="token keyword">to</span> treasury directly<span class="token punctuation">.</span>\n    treasury<span class="token punctuation">.</span><span class="token function">transfer</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token comment">;</span>\n\n    <span class="token keyword">for</span> <span class="token punctuation">(</span>uint256 ind <span class="token operator">=</span> <span class="token number">0</span><span class="token comment">; ind &lt; count; ind++) {</span>\n        <span class="token function">_safeMint</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> _nextTokenId <span class="token operator">+</span> ind<span class="token punctuation">)</span><span class="token comment">;</span>\n    }\n    nextTokenId <span class="token operator">+=</span> count<span class="token comment">;</span>\n\n    emit <span class="token function">SaleMint</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token comment">;</span>\n}\n</code></pre>\n<p>合约代码中原本通过 count、unlockedMaxCount、initMaxCount，限制单地址单笔交易的能获得 token 的个数，但是科学家通过部署合约 A，在 A 内部循环用 count = 1 调用 mintToken，在同一个区块内，限制条件为能生效。</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">mint</span><span class="token punctuation">(</span>uint256 num<span class="token punctuation">)</span> public payable <span class="token function">whenMintNotPaused</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n    uint256 supply <span class="token operator">=</span> <span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">;</span>\n    uint256 tokenCount <span class="token operator">=</span> <span class="token function">balanceOf</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span> num <span class="token operator">&lt;=</span> <span class="token number">12</span><span class="token punctuation">,</span>                                                             <span class="token string">"GalaxyEggs: You can mint a maximum of 12 Galaxy Eggs"</span> <span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span> tokenCount <span class="token operator">+</span> num <span class="token operator">&lt;=</span> <span class="token number">13</span><span class="token punctuation">,</span>                                                <span class="token string">"GalaxyEggs: You can mint a maximum of 13 Galaxy Eggs per wallet"</span> <span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span> supply <span class="token operator">+</span> num <span class="token operator">&lt;=</span> TOTAL_NUMBER_OF_GALAXY_EGGS <span class="token operator">-</span> giveaway_reserved<span class="token punctuation">,</span>       <span class="token string">"GalaxyEggs: Exceeds maximum Galaxy Eggs supply"</span> <span class="token punctuation">)</span><span class="token comment">;</span>\n    <span class="token function">require</span><span class="token punctuation">(</span> msg<span class="token punctuation">.</span>value <span class="token operator">>=</span> PRICE <span class="token operator">*</span> num<span class="token punctuation">,</span>                                              <span class="token string">"GalaxyEggs: Ether sent is less than PRICE * num"</span> <span class="token punctuation">)</span><span class="token comment">;</span>\n\n    <span class="token function">for</span><span class="token punctuation">(</span>uint256 i<span class="token comment">; i &lt; num; i++){</span>\n        <span class="token function">_safeMint</span><span class="token punctuation">(</span> msg<span class="token punctuation">.</span>sender<span class="token punctuation">,</span> supply <span class="token operator">+</span> i <span class="token punctuation">)</span><span class="token comment">;</span>\n    }\n}\n</code></pre>\n<p>合约代码量，限制了地址 balance + 单次 mint num 限制单地址不超过 13 个。科学家部署合约，mint 后把 NFT 转移到自己钱包，绕过了单地址限制。</p>\n<h4 id="%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-1">解决方案<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-1">§</a></h4>\n<p>禁止合约调用，加上如下代码</p>\n<pre class="language-autoit"><code class="language-autoit"><span class="token function">require</span><span class="token punctuation">(</span>\n    !Address<span class="token punctuation">.</span><span class="token function">isContract</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">"Contracts are not allowed."</span>\n<span class="token punctuation">)</span><span class="token comment">;</span>\n</code></pre>\n<h3 id="%E9%99%90%E5%88%B6%E5%8D%95%E4%B8%AA%E9%92%B1%E5%8C%85%E4%BD%99%E9%A2%9D%E6%95%B0%E9%87%8F">限制单个钱包余额数量<a class="anchor" href="#%E9%99%90%E5%88%B6%E5%8D%95%E4%B8%AA%E9%92%B1%E5%8C%85%E4%BD%99%E9%A2%9D%E6%95%B0%E9%87%8F">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">canMint</span><span class="token punctuation">(</span>uint _numberOfItemsToMint<span class="token punctuation">)</span> public view returns <span class="token punctuation">(</span>bool<span class="token punctuation">)</span> {\n    \n    <span class="token operator">/</span><span class="token operator">/</span> Enforce started rule\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>block<span class="token punctuation">.</span>timestamp <span class="token operator">&lt;</span> start<span class="token punctuation">)</span>{\n        return <span class="token boolean">false</span><span class="token comment">;</span>\n    }\n\n    <span class="token operator">/</span><span class="token operator">/</span> Enforce max per call rule\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>_numberOfItemsToMint <span class="token operator">></span> MAX_MINT_PER_CALL<span class="token punctuation">)</span> {\n        return <span class="token boolean">false</span><span class="token comment">;</span>\n    }\n\n    <span class="token operator">/</span><span class="token operator">/</span> Authenticate\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>!isPublic <span class="token operator">&amp;</span><span class="token operator">&amp;</span> !<span class="token function">IAuthenticator</span><span class="token punctuation">(</span>whitelist<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    {\n        return <span class="token boolean">false</span><span class="token comment">;</span>\n    }\n\n    <span class="token operator">/</span><span class="token operator">/</span> Enforce max per address rule\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token function">IERC721Enumerable</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">balanceOf</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span>sender<span class="token punctuation">)</span> <span class="token operator">+</span> _numberOfItemsToMint<span class="token punctuation">)</span> <span class="token operator">></span> MAX_MINT_PER_ADDRESS<span class="token punctuation">)</span> {\n        return <span class="token boolean">false</span><span class="token comment">;</span>\n    }\n\n    <span class="token operator">/</span><span class="token operator">/</span> Enforce max token rule\n    return <span class="token function">IERC721Enumerable</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token punctuation">(</span>MAX_SUPPLY <span class="token operator">-</span> _numberOfItemsToMint<span class="token punctuation">)</span><span class="token comment">;</span>\n}\n</code></pre>\n<p>合约限制了钱包余额数量和 mint 数量不大于 MAX_MINT_PER_ADDRESS，可以在 mint 后把 NFT 转到别的地址，继续 mint。</p>\n<h4 id="%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-2">解决方案<a class="anchor" href="#%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88-2">§</a></h4>\n<pre class="language-autoit"><code class="language-autoit"><span class="token function">mapping</span><span class="token punctuation">(</span>address <span class="token operator">=</span><span class="token operator">></span> uint256<span class="token punctuation">)</span> private _claimed\n</code></pre>\n<p>用 mapping 存已 mint 过的地址和 mint 个数。</p>\n<h3 id="%E4%B8%8A%E4%BC%A0%E7%99%BD%E5%8D%95%E6%B6%88%E8%80%97%E5%A4%A7%E9%87%8F-gas">上传白单消耗大量 gas<a class="anchor" href="#%E4%B8%8A%E4%BC%A0%E7%99%BD%E5%8D%95%E6%B6%88%E8%80%97%E5%A4%A7%E9%87%8F-gas">§</a></h3>\n<pre class="language-autoit"><code class="language-autoit"><span class="token function">mapping</span><span class="token punctuation">(</span>address <span class="token operator">=</span><span class="token operator">></span> bool<span class="token punctuation">)</span> private _pre_sale_minters<span class="token comment">;</span>\n\nfunction <span class="token function">setPreMintRole</span><span class="token punctuation">(</span>address calldata _address<span class="token punctuation">)</span> external onlyOwner {\n    _pre_sale_minters<span class="token punctuation">[</span>_address<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token comment">;</span>\n}\n</code></pre>\n<p>每个白单需要和以太坊交互一次，消耗大量 gas。 某个项目方哭着说每个白单我需要花 0.01 ETH 上传，而你们却不 mint，他哭我 LoL，谁让你的技术这么菜，转我 10E 我把你解决这个问题，lmao..</p>\n<h4 id="%E4%B8%B4%E6%97%B6%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">临时解决方案<a class="anchor" href="#%E4%B8%B4%E6%97%B6%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">§</a></h4>\n<p>按批次上传</p>\n<pre class="language-autoit"><code class="language-autoit">function <span class="token function">setPreMintRoleBatch</span><span class="token punctuation">(</span>address<span class="token punctuation">[</span><span class="token punctuation">]</span> calldata _addresses<span class="token punctuation">)</span> external onlyOwner {\n    <span class="token function">for</span><span class="token punctuation">(</span>uint256 i<span class="token comment">; i &lt; _addresses.length; i++){</span>\n        _pre_sale_minters<span class="token punctuation">[</span>_addresses<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token comment">;</span>\n    }\n}\n</code></pre>\n<h4 id="%E5%A5%BD%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">好的解决方案<a class="anchor" href="#%E5%A5%BD%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88">§</a></h4>\n<p>参考下文</p>\n<h2 id="%E6%8E%A8%E8%8D%90%E7%9A%84%E5%88%A4%E6%96%AD%E7%99%BD%E5%8D%95%E6%96%B9%E6%B3%95">推荐的判断白单方法<a class="anchor" href="#%E6%8E%A8%E8%8D%90%E7%9A%84%E5%88%A4%E6%96%AD%E7%99%BD%E5%8D%95%E6%96%B9%E6%B3%95">§</a></h2>\n<h3 id="%E4%BD%BF%E7%94%A8%E7%AD%BE%E5%90%8D">使用签名<a class="anchor" href="#%E4%BD%BF%E7%94%A8%E7%AD%BE%E5%90%8D">§</a></h3>\n<p>前端跟后端交互，后端判断是否在钱包地址是否属于白名单，如果属于则用私钥生成签名，返回给前端。前端调用合约进行 mint，合约判断签名是否有效。</p>\n<p>此做法不需要上传白单，超省 gas；缺点是判断过程是中心化的，没法零知识证明所有地址都是公开的那些，没有作恶。</p>\n<h3 id="%E4%BD%BF%E7%94%A8-merkle-tree">使用 Merkle tree<a class="anchor" href="#%E4%BD%BF%E7%94%A8-merkle-tree">§</a></h3>\n<p><a href="https://zh.wikipedia.org/wiki/%E5%93%88%E5%B8%8C%E6%A0%91">Merkle tree</a> 是非常适合做验证工作的，把所有白名单地址生成一个 Merkle Root，上传到合约上， mint 的时候可以很方便的进行验证。</p>\n<p>此做法只需要一次链上操作。</p>\n<h3 id="%E4%B8%A4%E8%80%85%E4%BC%98%E7%BC%BA%E7%82%B9">两者优缺点<a class="anchor" href="#%E4%B8%A4%E8%80%85%E4%BC%98%E7%BC%BA%E7%82%B9">§</a></h3>\n<p>Merkle tree 和签名有几个使用场景的区别：</p>\n<ol>\n<li>签名需要用到 private key，所以签名的过程只能在后端进行，如果是实时生成签名就需要用到后端服务。Mekle Tree 生成可以在前端进行，可以利用用户的浏览器资源，不需要消耗服务器</li>\n<li>Merkle Tree 一旦生成，后续白名单修改起来不是很方便，每改一次就需要重新设置 root，而签名更灵活一些，对于新增的钱包直接生成新的签名就行了</li>\n</ol>\n<p>From shep.eth</p>\n<h2 id="%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81">示例代码<a class="anchor" href="#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81">§</a></h2>\n<p>见 <a href="https://github.com/veryyoung/nft-demo/blob/main/contracts/VeryyoungNFTDemo.sol">VeryyoungNFTDemo.sol</a></p>\n<h2 id="%E8%87%B4%E6%95%AC">致敬<a class="anchor" href="#%E8%87%B4%E6%95%AC">§</a></h2>\n<p>感谢 NextDAO 家人们的一起讨论技术，共享财富密码，无偿分享代码，无偿分享复盘资料，respect！</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98" }, "\u5E38\u89C1\u95EE\u9898"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%BE%AA%E7%8E%AF%E9%81%8D%E5%8E%86-list-%E6%9D%A5%E5%88%A4%E6%96%AD%E7%99%BD%E5%90%8D%E5%8D%95" }, "\u5FAA\u73AF\u904D\u5386 list \u6765\u5224\u65AD\u767D\u540D\u5355")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%8D%95%E6%AC%A1%E6%93%8D%E4%BD%9C%E8%BF%87%E5%A4%A7" }, "\u5355\u6B21\u64CD\u4F5C\u8FC7\u5927"),
                        React.createElement("ol", null)),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%90%88%E7%BA%A6%E9%87%8D%E5%85%A5" }, "\u5408\u7EA6\u91CD\u5165"),
                        React.createElement("ol", null)),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E9%99%90%E5%88%B6%E5%8D%95%E4%B8%AA%E9%92%B1%E5%8C%85%E4%BD%99%E9%A2%9D%E6%95%B0%E9%87%8F" }, "\u9650\u5236\u5355\u4E2A\u94B1\u5305\u4F59\u989D\u6570\u91CF"),
                        React.createElement("ol", null)),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%B8%8A%E4%BC%A0%E7%99%BD%E5%8D%95%E6%B6%88%E8%80%97%E5%A4%A7%E9%87%8F-gas" }, "\u4E0A\u4F20\u767D\u5355\u6D88\u8017\u5927\u91CF gas"),
                        React.createElement("ol", null)))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%8E%A8%E8%8D%90%E7%9A%84%E5%88%A4%E6%96%AD%E7%99%BD%E5%8D%95%E6%96%B9%E6%B3%95" }, "\u63A8\u8350\u7684\u5224\u65AD\u767D\u5355\u65B9\u6CD5"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BD%BF%E7%94%A8%E7%AD%BE%E5%90%8D" }, "\u4F7F\u7528\u7B7E\u540D")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BD%BF%E7%94%A8-merkle-tree" }, "\u4F7F\u7528 Merkle tree")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%B8%A4%E8%80%85%E4%BC%98%E7%BC%BA%E7%82%B9" }, "\u4E24\u8005\u4F18\u7F3A\u70B9")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81" }, "\u793A\u4F8B\u4EE3\u7801")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E8%87%B4%E6%95%AC" }, "\u81F4\u656C")))),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2021-12-31T00:00:00.000Z",
    'updated': null,
    'excerpt': "上文组成了 NFT 基本的流程，一般的发售够用了，但现在主流做法是搞预售和公售。 预售可以起到给项目预热的作用，也可以在 Discord 里举办 AMA(Ask me anything) 让投资者更好的了解这个项目，项目方会有一定的要求，完成任务后...",
    'cover': undefined,
    'tags': [
        "dev",
        "crypto",
        "blockchain"
    ],
    'blog': {
        "isPost": true,
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
            },
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
