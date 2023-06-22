import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/ERC721A-analysis.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/ERC721A-analysis.html",
    'title': "ERC721A 介绍及原理分析",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>ERC721A 介绍及原理分析</h1>\n<h2 id="%E4%BB%8B%E7%BB%8D">介绍<a class="anchor" href="#%E4%BB%8B%E7%BB%8D">§</a></h2>\n<p><a href="https://www.erc721a.org/">ERC721A</a> 是 <a href="https://opensea.io/collection/azuki">Azuki</a> 项目方研发的一个 ERC721 协议的实现，能在 mint 多个 NFT 的时候节省大量的 gas，甚至能做到 gas 成本基本与铸造单个 NFT 基本相同。</p>\n<h2 id="erc721a-%E4%BD%BF%E7%94%A8">ERC721A 使用<a class="anchor" href="#erc721a-%E4%BD%BF%E7%94%A8">§</a></h2>\n<ol>\n<li>引入 ERC721A 依赖</li>\n</ol>\n<pre class="language-shell"><code class="language-shell"><span class="token function">npm</span> <span class="token function">install</span> --save-dev erc721a\n</code></pre>\n<ol start="2">\n<li>合约导入 ERC721A 依赖</li>\n</ol>\n<pre class="language-js"><code class="language-js"><span class="token keyword module">import</span> <span class="token string">"erc721a/contracts/ERC721A.sol"</span><span class="token punctuation">;</span>\n</code></pre>\n<ol start="3">\n<li>修改循环调用 _safeMint 为按 quantity mint</li>\n</ol>\n<p>完整代码如下</p>\n<pre class="language-js"><code class="language-js">pragma solidity <span class="token operator">^</span><span class="token number">0.8</span><span class="token number">.4</span><span class="token punctuation">;</span>\n\n<span class="token keyword module">import</span> <span class="token string">"erc721a/contracts/ERC721A.sol"</span><span class="token punctuation">;</span>\n\ncontract <span class="token maybe-class-name">Azuki</span> is <span class="token constant">ERC721A</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token constant">ERC721A</span><span class="token punctuation">(</span><span class="token string">"Azuki"</span><span class="token punctuation">,</span> <span class="token string">"AZUKI"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token keyword">function</span> <span class="token function">mint</span><span class="token punctuation">(</span><span class="token parameter">uint256 quantity</span><span class="token punctuation">)</span> external payable <span class="token punctuation">{</span>\n    <span class="token comment">// _safeMint\'s second argument now takes in a quantity, not a tokenId.</span>\n    <span class="token function">_safeMint</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token property-access">sender</span><span class="token punctuation">,</span> quantity<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="erc721a-gas-%E6%B5%8B%E9%87%8F">ERC721A gas 测量<a class="anchor" href="#erc721a-gas-%E6%B5%8B%E9%87%8F">§</a></h2>\n<p>这是官方的测量结果</p>\n<p><img src="https://camo.githubusercontent.com/d13739d5ecfd5dc882b0cb7089a770b55f4bb1a1abf98067b94e1c21864fb261/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f464964494c4b7056514145515f35553f666f726d61743d6a7067266e616d653d6d656469756d" alt="MEASUREMENTS"></p>\n<p>可以看出使用 ERC721A 实现相比较于 <a href="https://docs.openzeppelin.com/contracts/4.x/erc721">openzeppelin</a> 的实现，mint 一只 NFT 能节省大约 50% gas，mint 越多越省，mint 五只节省的 gas 高达 7 倍，接近于 mint 一只的成本。</p>\n<h2 id="erc721a-%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90">ERC721A 原理分析<a class="anchor" href="#erc721a-%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90">§</a></h2>\n<ol>\n<li>去掉了没必要的存储</li>\n</ol>\n<p>openzeppelin 的实现用 _allTokens 这个数组存储了所有的 token 情况，而 ERC721A 实现放弃了这个存储，设定 token index 从 0 开始自增。</p>\n<p>openzeppelin 的 totalSupply 方法需要从 _allTokens 查</p>\n<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/**\n * <span class="token keyword">@dev</span> See <span class="token punctuation">{</span>IERC721Enumerable-totalSupply<span class="token punctuation">}</span>.\n */</span>\n<span class="token keyword">function</span> <span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> view virtual override <span class="token function">returns</span> <span class="token punctuation">(</span><span class="token parameter">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> _allTokens<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>而 ERC721A 实现可以根据 index 算出来</p>\n<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/**\n * <span class="token keyword">@dev</span> Burned tokens are calculated here, use _totalMinted() if you want to count just minted tokens.\n */</span>\n<span class="token keyword">function</span> <span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> view <span class="token function">returns</span> <span class="token punctuation">(</span><span class="token parameter">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Counter underflow is impossible as _burnCounter cannot be incremented</span>\n    <span class="token comment">// more than _currentIndex - _startTokenId() times</span>\n    unchecked <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">return</span> _currentIndex <span class="token operator">-</span> _burnCounter <span class="token operator">-</span> <span class="token function">_startTokenId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n * Returns the total amount of tokens minted in the contract.\n */</span>\n<span class="token keyword">function</span> <span class="token function">_totalMinted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> internal view <span class="token function">returns</span> <span class="token punctuation">(</span><span class="token parameter">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Counter underflow is impossible as _currentIndex does not decrement,</span>\n    <span class="token comment">// and it is initialized to _startTokenId()</span>\n    unchecked <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">return</span> _currentIndex <span class="token operator">-</span> <span class="token function">_startTokenId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<ol start="2">\n<li>只在批量 mint 后更新 owner 的余额，而不是每只 mint 后更新</li>\n</ol>\n<pre class="language-js"><code class="language-js">_addressData<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">balance</span> <span class="token operator">+=</span> <span class="token function">uint64</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span><span class="token punctuation">;</span>\n_addressData<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">numberMinted</span> <span class="token operator">+=</span> <span class="token function">uint64</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<ol start="3">\n<li>按批写入 NFT 的 owner，而不是每只 mint 后都更新</li>\n</ol>\n<pre class="language-js"><code class="language-js">_ownerships<span class="token punctuation">[</span>startTokenId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">addr</span> <span class="token operator">=</span> to<span class="token punctuation">;</span>\n_ownerships<span class="token punctuation">[</span>startTokenId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">startTimestamp</span> <span class="token operator">=</span> <span class="token function">uint64</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span><span class="token property-access">timestamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这样在 mint 时候确实能节省大量存储 token 所属人的成本，但是查询 token 所属人的时候也要做相应的更改</p>\n<pre class="language-js"><code class="language-js">\n<span class="token doc-comment comment">/**\n * Gas spent here starts off proportional to the maximum mint batch size.\n * It gradually moves to O(1) as tokens get transferred around in the collection over time.\n */</span>\n<span class="token keyword">function</span> <span class="token function">_ownershipOf</span><span class="token punctuation">(</span><span class="token parameter">uint256 tokenId</span><span class="token punctuation">)</span> internal view <span class="token function">returns</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token maybe-class-name">TokenOwnership</span> memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    uint256 curr <span class="token operator">=</span> tokenId<span class="token punctuation">;</span>\n\n    unchecked <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token function">_startTokenId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> curr <span class="token operator">&amp;&amp;</span> curr <span class="token operator">&lt;</span> _currentIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token maybe-class-name">TokenOwnership</span> memory ownership <span class="token operator">=</span> _ownerships<span class="token punctuation">[</span>curr<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ownership<span class="token punctuation">.</span><span class="token property-access">burned</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>ownership<span class="token punctuation">.</span><span class="token property-access">addr</span> <span class="token operator">!=</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword control-flow">return</span> ownership<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token comment">// Invariant:</span>\n                <span class="token comment">// There will always be an ownership that has an address and is not burned</span>\n                <span class="token comment">// before an ownership that does not have an address and is not burned.</span>\n                <span class="token comment">// Hence, curr will not underflow.</span>\n                <span class="token keyword control-flow">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    curr<span class="token operator">--</span><span class="token punctuation">;</span>\n                    ownership <span class="token operator">=</span> _ownerships<span class="token punctuation">[</span>curr<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>ownership<span class="token punctuation">.</span><span class="token property-access">addr</span> <span class="token operator">!=</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token keyword control-flow">return</span> ownership<span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    revert <span class="token function"><span class="token maybe-class-name">OwnerQueryForNonexistentToken</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>如果 ownership 找不到，递归往前寻找到第一个有效地址为止，而之前只需要从 _ownedTokens 这个 mapping 中获取。</p>\n<p>这会导致查询 token owner 的 gas 成本增加。</p>\n<p>所以在 NFT 转账和销毁场景消耗的 gas 是更多的，这点 ERC721A 在介绍和文档里并没有提到。</p>\n<h2 id="erc721a-%E7%BC%BA%E7%82%B9">ERC721A 缺点<a class="anchor" href="#erc721a-%E7%BC%BA%E7%82%B9">§</a></h2>\n<ol>\n<li>转账和销毁 gas 提升</li>\n</ol>\n<p>正如上所说，转账和销毁 gas 会增加，大约会增加 40%，但由于转账的 gas 并不高，这缺点可以忍受。</p>\n<ol start="2">\n<li>无法自定义 tokenId</li>\n</ol>\n<p>ERC721A 的 tokenId 只能是从 0 开始自增。在大部分 NFT 的 tokenId 都是从 0 自增的情况下，这个缺点也不是那么关键。</p>\n<h2 id="erc721a-%E6%84%8F%E4%B9%89">ERC721A 意义<a class="anchor" href="#erc721a-%E6%84%8F%E4%B9%89">§</a></h2>\n<p>ERC721A 可以大大降低 mint NFT 的成本，这对 NFT 一级市场参与者，对 NFT 项目方，都是很大的利好。</p>\n<p>参与者在 mint NFT 的成本降低会降低参与者参与 NFT 的风险，也会促进 NFT 项目更快的将 NFT 卖完。</p>\n<p>对 NFT 整个行业都有着促进作用，而市场似乎也很认可这点，截止到当前 Azuki 的地板价已到达 26 ETH，除了 Azuki 精美的艺术、良好的社区氛围和团队运营，恐怕技术也有一定的作用。</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "ERC721A \u4ECB\u7ECD\u53CA\u539F\u7406\u5206\u6790"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E4%BB%8B%E7%BB%8D">介绍<a class="anchor" href="#%E4%BB%8B%E7%BB%8D">§</a></h2>\n<p><a href="https://www.erc721a.org/">ERC721A</a> 是 <a href="https://opensea.io/collection/azuki">Azuki</a> 项目方研发的一个 ERC721 协议的实现，能在 mint 多个 NFT 的时候节省大量的 gas，甚至能做到 gas 成本基本与铸造单个 NFT 基本相同。</p>\n<h2 id="erc721a-%E4%BD%BF%E7%94%A8">ERC721A 使用<a class="anchor" href="#erc721a-%E4%BD%BF%E7%94%A8">§</a></h2>\n<ol>\n<li>引入 ERC721A 依赖</li>\n</ol>\n<pre class="language-shell"><code class="language-shell"><span class="token function">npm</span> <span class="token function">install</span> --save-dev erc721a\n</code></pre>\n<ol start="2">\n<li>合约导入 ERC721A 依赖</li>\n</ol>\n<pre class="language-js"><code class="language-js"><span class="token keyword module">import</span> <span class="token string">"erc721a/contracts/ERC721A.sol"</span><span class="token punctuation">;</span>\n</code></pre>\n<ol start="3">\n<li>修改循环调用 _safeMint 为按 quantity mint</li>\n</ol>\n<p>完整代码如下</p>\n<pre class="language-js"><code class="language-js">pragma solidity <span class="token operator">^</span><span class="token number">0.8</span><span class="token number">.4</span><span class="token punctuation">;</span>\n\n<span class="token keyword module">import</span> <span class="token string">"erc721a/contracts/ERC721A.sol"</span><span class="token punctuation">;</span>\n\ncontract <span class="token maybe-class-name">Azuki</span> is <span class="token constant">ERC721A</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token constant">ERC721A</span><span class="token punctuation">(</span><span class="token string">"Azuki"</span><span class="token punctuation">,</span> <span class="token string">"AZUKI"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token keyword">function</span> <span class="token function">mint</span><span class="token punctuation">(</span><span class="token parameter">uint256 quantity</span><span class="token punctuation">)</span> external payable <span class="token punctuation">{</span>\n    <span class="token comment">// _safeMint\'s second argument now takes in a quantity, not a tokenId.</span>\n    <span class="token function">_safeMint</span><span class="token punctuation">(</span>msg<span class="token punctuation">.</span><span class="token property-access">sender</span><span class="token punctuation">,</span> quantity<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h2 id="erc721a-gas-%E6%B5%8B%E9%87%8F">ERC721A gas 测量<a class="anchor" href="#erc721a-gas-%E6%B5%8B%E9%87%8F">§</a></h2>\n<p>这是官方的测量结果</p>\n<p><img src="https://camo.githubusercontent.com/d13739d5ecfd5dc882b0cb7089a770b55f4bb1a1abf98067b94e1c21864fb261/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f464964494c4b7056514145515f35553f666f726d61743d6a7067266e616d653d6d656469756d" alt="MEASUREMENTS"></p>\n<p>可以看出使用 ERC721A 实现相比较于 <a href="https://docs.openzeppelin.com/contracts/4.x/erc721">openzeppelin</a> 的实现，mint 一只 NFT 能节省大约 50% gas，mint 越多越省，mint 五只节省的 gas 高达 7 倍，接近于 mint 一只的成本。</p>\n<h2 id="erc721a-%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90">ERC721A 原理分析<a class="anchor" href="#erc721a-%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90">§</a></h2>\n<ol>\n<li>去掉了没必要的存储</li>\n</ol>\n<p>openzeppelin 的实现用 _allTokens 这个数组存储了所有的 token 情况，而 ERC721A 实现放弃了这个存储，设定 token index 从 0 开始自增。</p>\n<p>openzeppelin 的 totalSupply 方法需要从 _allTokens 查</p>\n<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/**\n * <span class="token keyword">@dev</span> See <span class="token punctuation">{</span>IERC721Enumerable-totalSupply<span class="token punctuation">}</span>.\n */</span>\n<span class="token keyword">function</span> <span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> view virtual override <span class="token function">returns</span> <span class="token punctuation">(</span><span class="token parameter">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> _allTokens<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>而 ERC721A 实现可以根据 index 算出来</p>\n<pre class="language-js"><code class="language-js"><span class="token doc-comment comment">/**\n * <span class="token keyword">@dev</span> Burned tokens are calculated here, use _totalMinted() if you want to count just minted tokens.\n */</span>\n<span class="token keyword">function</span> <span class="token function">totalSupply</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">public</span> view <span class="token function">returns</span> <span class="token punctuation">(</span><span class="token parameter">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Counter underflow is impossible as _burnCounter cannot be incremented</span>\n    <span class="token comment">// more than _currentIndex - _startTokenId() times</span>\n    unchecked <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">return</span> _currentIndex <span class="token operator">-</span> _burnCounter <span class="token operator">-</span> <span class="token function">_startTokenId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n * Returns the total amount of tokens minted in the contract.\n */</span>\n<span class="token keyword">function</span> <span class="token function">_totalMinted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> internal view <span class="token function">returns</span> <span class="token punctuation">(</span><span class="token parameter">uint256</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Counter underflow is impossible as _currentIndex does not decrement,</span>\n    <span class="token comment">// and it is initialized to _startTokenId()</span>\n    unchecked <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">return</span> _currentIndex <span class="token operator">-</span> <span class="token function">_startTokenId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<ol start="2">\n<li>只在批量 mint 后更新 owner 的余额，而不是每只 mint 后更新</li>\n</ol>\n<pre class="language-js"><code class="language-js">_addressData<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">balance</span> <span class="token operator">+=</span> <span class="token function">uint64</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span><span class="token punctuation">;</span>\n_addressData<span class="token punctuation">[</span>to<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">numberMinted</span> <span class="token operator">+=</span> <span class="token function">uint64</span><span class="token punctuation">(</span>quantity<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<ol start="3">\n<li>按批写入 NFT 的 owner，而不是每只 mint 后都更新</li>\n</ol>\n<pre class="language-js"><code class="language-js">_ownerships<span class="token punctuation">[</span>startTokenId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">addr</span> <span class="token operator">=</span> to<span class="token punctuation">;</span>\n_ownerships<span class="token punctuation">[</span>startTokenId<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">startTimestamp</span> <span class="token operator">=</span> <span class="token function">uint64</span><span class="token punctuation">(</span>block<span class="token punctuation">.</span><span class="token property-access">timestamp</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>这样在 mint 时候确实能节省大量存储 token 所属人的成本，但是查询 token 所属人的时候也要做相应的更改</p>\n<pre class="language-js"><code class="language-js">\n<span class="token doc-comment comment">/**\n * Gas spent here starts off proportional to the maximum mint batch size.\n * It gradually moves to O(1) as tokens get transferred around in the collection over time.\n */</span>\n<span class="token keyword">function</span> <span class="token function">_ownershipOf</span><span class="token punctuation">(</span><span class="token parameter">uint256 tokenId</span><span class="token punctuation">)</span> internal view <span class="token function">returns</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token maybe-class-name">TokenOwnership</span> memory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    uint256 curr <span class="token operator">=</span> tokenId<span class="token punctuation">;</span>\n\n    unchecked <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token function">_startTokenId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> curr <span class="token operator">&amp;&amp;</span> curr <span class="token operator">&lt;</span> _currentIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token maybe-class-name">TokenOwnership</span> memory ownership <span class="token operator">=</span> _ownerships<span class="token punctuation">[</span>curr<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ownership<span class="token punctuation">.</span><span class="token property-access">burned</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>ownership<span class="token punctuation">.</span><span class="token property-access">addr</span> <span class="token operator">!=</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword control-flow">return</span> ownership<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token comment">// Invariant:</span>\n                <span class="token comment">// There will always be an ownership that has an address and is not burned</span>\n                <span class="token comment">// before an ownership that does not have an address and is not burned.</span>\n                <span class="token comment">// Hence, curr will not underflow.</span>\n                <span class="token keyword control-flow">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    curr<span class="token operator">--</span><span class="token punctuation">;</span>\n                    ownership <span class="token operator">=</span> _ownerships<span class="token punctuation">[</span>curr<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>ownership<span class="token punctuation">.</span><span class="token property-access">addr</span> <span class="token operator">!=</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token keyword control-flow">return</span> ownership<span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    revert <span class="token function"><span class="token maybe-class-name">OwnerQueryForNonexistentToken</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>如果 ownership 找不到，递归往前寻找到第一个有效地址为止，而之前只需要从 _ownedTokens 这个 mapping 中获取。</p>\n<p>这会导致查询 token owner 的 gas 成本增加。</p>\n<p>所以在 NFT 转账和销毁场景消耗的 gas 是更多的，这点 ERC721A 在介绍和文档里并没有提到。</p>\n<h2 id="erc721a-%E7%BC%BA%E7%82%B9">ERC721A 缺点<a class="anchor" href="#erc721a-%E7%BC%BA%E7%82%B9">§</a></h2>\n<ol>\n<li>转账和销毁 gas 提升</li>\n</ol>\n<p>正如上所说，转账和销毁 gas 会增加，大约会增加 40%，但由于转账的 gas 并不高，这缺点可以忍受。</p>\n<ol start="2">\n<li>无法自定义 tokenId</li>\n</ol>\n<p>ERC721A 的 tokenId 只能是从 0 开始自增。在大部分 NFT 的 tokenId 都是从 0 自增的情况下，这个缺点也不是那么关键。</p>\n<h2 id="erc721a-%E6%84%8F%E4%B9%89">ERC721A 意义<a class="anchor" href="#erc721a-%E6%84%8F%E4%B9%89">§</a></h2>\n<p>ERC721A 可以大大降低 mint NFT 的成本，这对 NFT 一级市场参与者，对 NFT 项目方，都是很大的利好。</p>\n<p>参与者在 mint NFT 的成本降低会降低参与者参与 NFT 的风险，也会促进 NFT 项目更快的将 NFT 卖完。</p>\n<p>对 NFT 整个行业都有着促进作用，而市场似乎也很认可这点，截止到当前 Azuki 的地板价已到达 26 ETH，除了 Azuki 精美的艺术、良好的社区氛围和团队运营，恐怕技术也有一定的作用。</p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%8B%E7%BB%8D" }, "\u4ECB\u7ECD")),
            React.createElement("li", null,
                React.createElement("a", { href: "#erc721a-%E4%BD%BF%E7%94%A8" }, "ERC721A \u4F7F\u7528")),
            React.createElement("li", null,
                React.createElement("a", { href: "#erc721a-gas-%E6%B5%8B%E9%87%8F" }, "ERC721A gas \u6D4B\u91CF")),
            React.createElement("li", null,
                React.createElement("a", { href: "#erc721a-%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90" }, "ERC721A \u539F\u7406\u5206\u6790")),
            React.createElement("li", null,
                React.createElement("a", { href: "#erc721a-%E7%BC%BA%E7%82%B9" }, "ERC721A \u7F3A\u70B9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#erc721a-%E6%84%8F%E4%B9%89" }, "ERC721A \u610F\u4E49")))),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2022-04-07T00:00:00.000Z",
    'updated': null,
    'excerpt': "介绍 ERC721A 是 Azuki 项目方研发的一个 ERC721 协议的实现，能在 mint 多个 NFT 的时候节省大量的 gas，甚至能做到 gas 成本基本与铸造单个 NFT 基本相同。 ERC721A 使用 1. 引入 ERC721A 依赖 npm install --save-dev erc72...",
    'cover': "https://camo.githubusercontent.com/d13739d5ecfd5dc882b0cb7089a770b55f4bb1a1abf98067b94e1c21864fb261/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f464964494c4b7056514145515f35553f666f726d61743d6a7067266e616d653d6d656469756d",
    'tags': [
        "crypto",
        "blockchain",
        "NFT"
    ],
    'blog': {
        "isPost": true,
        "posts": [
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
                "name": "NFT",
                "count": 2
            },
            {
                "name": "layer2",
                "count": 1
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
