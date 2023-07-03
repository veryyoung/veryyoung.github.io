import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/intro-to-ethereum.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/intro-to-ethereum.html",
    'title': "以太坊简介",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>以太坊简介</h1>\n<h2 id="%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%AE%80%E4%BB%8B">以太坊简介<a class="anchor" href="#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%AE%80%E4%BB%8B">§</a></h2>\n<p>2013 年底，19 岁的 Vitalik Buterin(以下简称 V 神) 发布了<a href="https://ethereum.org/en/whitepaper/">以太坊白皮书</a>，以太坊就此诞生。</p>\n<p>白皮书的副标题是 &quot;A Next-Generation Smart Contract and Decentralized Application Platform&quot;(下一代智能合约智能合约和去中心化应用平台)，可以看出以太坊和比特币的定位不一样，比特币是一个点对点的电子现金系统，以太坊是想打造一个去中心化的应用平台。</p>\n<h2 id="v-%E7%A5%9E%E7%AE%80%E4%BB%8B">V 神简介<a class="anchor" href="#v-%E7%A5%9E%E7%AE%80%E4%BB%8B">§</a></h2>\n<p>V 神是个 94 年出生在俄罗斯的“小朋友”，父母都是计算机相关专业背景，V 神从小就沉迷编程，6 岁的时候举家搬迁到了加拿大。少年时候的 V 神是编程天才，数学天才，直到他迷上了网络游戏 《魔兽世界》。</p>\n<p>如同一般的网瘾少年，V 神沉迷游戏好几年，直到魔兽做版本变更，把 V 神最喜欢的英雄“术士”的技能“生命虹吸”移除了，V 神多次找暴雪工程师投诉未果，从此放弃了心爱的网游，投入到比特币的研究之中。</p>\n<p>研究比特币后，V 神深深陷入去中心化的世界，无法自拔，最终也走上了很多编程大佬会选择的路：辍学。</p>\n<p>比特币有一些“局限”，V 神便开始自研一套新的去中心化平台(也就是后来的以太坊)的工作。</p>\n<h2 id="%E6%AF%94%E7%89%B9%E5%B8%81%E7%9A%84%E5%B1%80%E9%99%90">比特币的局限<a class="anchor" href="#%E6%AF%94%E7%89%B9%E5%B8%81%E7%9A%84%E5%B1%80%E9%99%90">§</a></h2>\n<p>比特币作为一个去中心化电子现金系统已经足够完美，这样一个 <a href="https://en.wikipedia.org/wiki/Bug_bounty_program">Bug Bounty</a>(发现并利用漏洞能得到奖励)的系统在不更新(没有大更新)的情况下运行了十几年没有出现问题在传统计算机领域已经算得上是奇迹了。</p>\n<p>但还是有一些局限</p>\n<ol>\n<li>支付速度太慢</li>\n</ol>\n<p>比特币每个区块产生速度大概是十分钟，为了安全起见一般要等六个区块确认才认为交易生效，这需要大概一小时。这个问题可以用<a href="https://zh.wikipedia.org/wiki/%E9%97%AA%E7%94%B5%E7%BD%91%E7%BB%9C">闪电网络</a>解决，这套机制在使用比特币作为法币的<a href="https://zh.wikipedia.org/zh/%E8%90%A8%E5%B0%94%E7%93%A6%E5%A4%9A">萨尔瓦多</a>运行得非常良好。</p>\n<ol start="2">\n<li>脚本语言不完善</li>\n</ol>\n<p>比特币的定位是一个现金系统，所以只设计了一个简单的非<a href="https://baike.baidu.com/item/%E5%9B%BE%E7%81%B5%E5%AE%8C%E5%A4%87/4634934">图灵完备</a>可编程平台，没法基于它构建复杂的去中心化应用。</p>\n<ol start="3">\n<li>PoW 太耗电</li>\n</ol>\n<p>虽然耗电，但确实相对公平，共识也更加稳固，这个见仁见智了。</p>\n<p>以下是 V 神在白皮书里总结的比特币脚本的局限：</p>\n<ol>\n<li>缺乏图灵完备</li>\n</ol>\n<p>尽管比特币脚本语言可以支持多种计算，但并不能支持循环语句。不支持循环语句的目的是为了避免交易确认时出现死循环。理论上来说可以用多重 if 语句来代替，但效率极低，编码难度也非常高。例如实现一个椭圆曲线签名算法需要 256 次重复的乘法，且每次都需要单独编码。</p>\n<ol start="2">\n<li>Value-blindness</li>\n</ol>\n<p><a href="https://en.wikipedia.org/wiki/Unspent_transaction_output">UTXO</a> 脚本无法对可提取的额度进行精细的控制。例如预言机合约(Oracle Contract)的一个强大应用是对冲合约。 A 和 B 投入价值 1000 美金的 BTC，30 天后脚本将价值 1000 美元的 BTC 发送给 A，其余的发送给 B。这将需要一个预言机来确定 1 BTC 价值多少美元。但即便如此，与现在可用的完全中心化的解决方案相比，在信任和基础设施要求方面也有了巨大的改进。然而 UTXO 要么全有要么全无(all-or-nothing)，所以实现这一点的唯一方法是通过拥有许多不同面额的 UTXO（例如有一个 2^k 的 UTXO, k 最大为 30）并让 O 选择哪个 UTXO 发送给 A，哪个发送给 B.</p>\n<ol start="3">\n<li>状态缺乏</li>\n</ol>\n<p>UTXO 只能是已花费或者未花费这两种状态，这就没有给需要任何其它内部状态的多阶段合约或者脚本留出生机会。这让实现多阶段期权合约、去中心化报价协议或者两阶段加密承诺协议（对确保计算奖励非常必要）非常困难。这也意味着 UTXO 只能用于建立简单的一次性的合约，而不能用于构建去中心化组织等更复杂的“有状态”的合约，并使元协议也难以实现。二元状态与 Value-blindness 结合在一起意味着另一个重要的应用“取款限额”是不可能实现的。</p>\n<ol start="4">\n<li>Blockchain-blindness</li>\n</ol>\n<p>UTXO 对随机数、时间戳、前一个区块哈希等区块数据是不可见的。通过剥夺脚本语言基于随机性拥有的潜在价值，严重限制了博彩等应用场景的可能性。</p>\n<h2 id="%E4%BB%A5%E5%A4%AA%E5%9D%8A%E8%AE%BE%E8%AE%A1">以太坊设计<a class="anchor" href="#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E8%AE%BE%E8%AE%A1">§</a></h2>\n<p>以太坊的目的是为构建去中心化应用创建一个替代协议，使得开发者能够随意创建去中心化应用。以太坊提供了图灵完备、value-awareness、blockchain-awareness 和多状态的编程语言，基于以太坊开发域名币只需要两行代码，货币体系也能在 20 行代码内解决，一个完备的转账功能只需要一行代码。</p>\n<h3 id="%E8%B4%A6%E6%88%B7%E4%BD%93%E7%B3%BB">账户体系<a class="anchor" href="#%E8%B4%A6%E6%88%B7%E4%BD%93%E7%B3%BB">§</a></h3>\n<p>在以太坊中，状态是由叫做“账户”的对象组成的，每个账户都有一个二十位长的地址，状态转换是账户之间价值和信息的直接转移。\n一个账户包含以下四个字段：</p>\n<ul>\n<li>nonce 随机数，用于确定每笔交易只能被处理一次的计数器</li>\n<li>账户当前的以太币余额</li>\n<li>账户的合约代码(合约账户才有)</li>\n<li>账户的存储(默认为空)</li>\n</ul>\n<p>以太币(Ether，缩写 ETH) 是以太坊内部的加密燃料，用于支付交易费和合约执行费用。</p>\n<p>账户分为两类：</p>\n<ul>\n<li>外部账户：普通用户用私钥控制的账户</li>\n<li>合约账户：拥有合约代码的账户，它不属于任何人，没有私钥能控制它</li>\n</ul>\n<p>当合约账户收到消息时，合约内部的代码会被激活，允许对它内部的存储进行读写，发送消息或者创建其他合约。</p>\n<h3 id="%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6">智能合约<a class="anchor" href="#%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6">§</a></h3>\n<p>智能合约是运行在以太坊上的程序，与传统程序不一样的是智能合约会在以太坊网络上的每一个节点都运行，且结果完全一致。</p>\n<p>以太坊提供了一个虚拟机 EVM(Ethereum Virtual Machine)，将大大的提高兼容性，安全性和可扩展性。(可以参考 <a href="https://baike.baidu.com/item/JVM/2902369">JVM</a>)</p>\n<p>智能合约使用为以太坊定制的 Solidity 语言，它是图灵完备的高级语言。</p>\n<h3 id="%E6%B6%88%E6%81%AF%E5%92%8C%E4%BA%A4%E6%98%93">消息和交易<a class="anchor" href="#%E6%B6%88%E6%81%AF%E5%92%8C%E4%BA%A4%E6%98%93">§</a></h3>\n<p>以太坊的消息某种程度上类似比特币的交易，但也有不同。</p>\n<ol>\n<li>以太坊的消息可以由外部创建或者合约创建，而比特币交易只能由外部创建.</li>\n<li>以太坊消息可以包含数据，比特币不能</li>\n<li>以太坊消息可能会有回执</li>\n</ol>\n<p>以太坊中的“交易”是指从外部账户发出的“消息”签名数据包。消息包含如下内容：</p>\n<ol>\n<li>消息发送者(隐式包含)</li>\n<li>消息接受者</li>\n<li>发送的以太币金额</li>\n<li>数据(可选)</li>\n<li>Gas 执行交易需要的燃料费</li>\n</ol>\n<h3 id="%E6%8C%96%E7%9F%BF">挖矿<a class="anchor" href="#%E6%8C%96%E7%9F%BF">§</a></h3>\n<p>以太坊挖矿过程和比特币大抵是类似的，都是基于工作量证明(PoW)竞争区块打包权，执行交易，获得区块奖励和手续费。</p>\n<p>但也有一些不同：</p>\n<ol>\n<li>以太坊的矿工节点不仅仅要执行交易，还要执行合约。</li>\n<li>合约执行时需要扣除 Gas 费，如果 Gas 消耗殆尽，扣取 Gas，但回滚交易</li>\n<li>每个区块时间从大约十分钟改为了大约 15 秒</li>\n<li>以太坊不限制区块大小，只使用了 Gas 来限制，比特币区块大小上限是 1M</li>\n<li>出块奖励不同，比特币每个区块奖励是 50BTC，每四年减半；ETH 最开始是 5ETH，后面改成了 3，现在是 2，而且出块奖励不是自动调节的，是 hardcode 的</li>\n<li>由第 5 点可以看出，以太坊不像比特币一样总量有限或通缩(不排除 Gas 燃烧太快导致通缩，或者后续迭代修改奖励机制)</li>\n<li>以太坊为了降低出块时间大大缩减带来的分叉不稳定可能性以及奖励挖矿者，会提供叔父区块奖励</li>\n<li>以太坊正在将共识机制从工作量证明(PoW)改成权证明(<a href="https://zh.wikipedia.org/zh/%E6%8C%81%E6%9C%89%E9%87%8F%E8%AD%89%E6%98%8E">PoS</a>)</li>\n</ol>\n<h3 id="pos"><a href="https://zh.wikipedia.org/zh/%E6%8C%81%E6%9C%89%E9%87%8F%E8%AD%89%E6%98%8E">PoS</a><a class="anchor" href="#pos">§</a></h3>\n<p>以太坊正在将共识机制从工作量证明(PoW)改成权证明(PoS)，持续了多年的计划和讨论，暂时没落地，预计 21 年年底切换。</p>\n<p>PoS 不再需要 PoW 来消耗算力和能源产生新区块，而是通过质押 ETH 来获得成为验证者的资格。验证者被随机选择去创建区块，并且检查和确认其他验证者打包的区块。\n验证者离线或者作恶会被扣除质押金，直到失去股权。</p>\n<p>PoS 依然存在 51% 攻击的可能性，但攻击成本非常高，需要掌握 51% 的验证者股权，这不仅仅是一笔巨款，发生攻击后自己的 ETH 也会大幅贬值。</p>\n<h3 id="gas-%E4%BD%93%E7%B3%BB">Gas 体系<a class="anchor" href="#gas-%E4%BD%93%E7%B3%BB">§</a></h3>\n<p>跟比特币一样，ETH 交易也需要手续费。以太坊网络上执行智能合约需要消耗全网的计算资源，Gas 可以当做消耗资源的付费。</p>\n<p>Gas 也可以避免网络被垃圾消息和交易攻击，因为执行操作是要付出代价的。</p>\n<h3 id="%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%8A%B6%E6%80%81%E6%9C%BA">以太坊状态机<a class="anchor" href="#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%8A%B6%E6%80%81%E6%9C%BA">§</a></h3>\n<p>以太坊网络是个全局统一状态的状态机，已打包的区块的账户、交易、合约等状态是全网统一且透明的。</p>\n<p><img src="https://sanfranciscotribe.com/Home/wp-content/uploads/2020/05/Ethereum-Ground-Up.png" alt="Ethereum State Transition Function"></p>\n<p>以太坊的状态转移函数：</p>\n<blockquote>\n<p>APPLY(S,TX) -&gt; S\'</p>\n</blockquote>\n<p>可以定义如下:</p>\n<ol>\n<li>检查交易格式是否正确(比如数值是否正确)、签名是否有效、nonce 是否和发送者的账户保持一致。如果不是，返回错误。</li>\n<li>计算交易费用 STARTGAS * GASPRICE，并从签名中确定发送者的地址。从发送人的账户余额中减去费用并 nonce + 1。如果余额不足，返回错误。</li>\n<li>初始化变量 GAS = STARTGAS，并根据交易中的字节数支付一定数量的 Gas 费用。</li>\n<li>将交易金额从发送方账户转移到接收方账户。如果接收帐户尚不存在，创建一个。如果接收账户是一个合约，则运行合约的代码直到完成或消耗完 Gas。</li>\n<li>如果发送者没有足够的钱而导致价值转移失败，或者代码执行耗尽了 Gas，则恢复除支付费用外的所有状态变化，并将费用转移到矿工的账户中。</li>\n<li>否则将所有剩余的 Gas 返回给发送者，消耗掉的 Gas 作为交易费用发送给矿工。</li>\n</ol>\n<h2 id="%E4%BB%A5%E5%A4%AA%E5%9D%8A%E5%BA%94%E7%94%A8">以太坊应用<a class="anchor" href="#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E5%BA%94%E7%94%A8">§</a></h2>\n<p>基于以太坊的平台能开发出丰富的应用，分为金融应用(货币，金融衍生品，对冲合约，储蓄钱包，遗嘱)、半金融应用(悬赏系统等)、非金融应用(在线投票系统、去中心化治理等)。</p>\n<p>下面是一些例子。</p>\n<h3 id="token-%E7%B3%BB%E7%BB%9F">Token 系统<a class="anchor" href="#token-%E7%B3%BB%E7%BB%9F">§</a></h3>\n<p>基于以太坊平台可以极其容易的发行代币，Alice 转账 X 个代币给 Bob 只需要从 Alice 账户余额减去 X， Bob 账户余额加上 Y。</p>\n<p>用 Serphant 语言编写一个转账函数的伪代码如下：</p>\n<pre class="language-js"><code class="language-js">def <span class="token function">send</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token operator">:</span>\n    <span class="token keyword control-flow">if</span> self<span class="token punctuation">.</span><span class="token property-access">storage</span><span class="token punctuation">[</span>msg<span class="token punctuation">.</span><span class="token property-access">sender</span><span class="token punctuation">]</span> <span class="token operator">>=</span> value<span class="token operator">:</span>\n        self<span class="token punctuation">.</span><span class="token property-access">storage</span><span class="token punctuation">[</span>msg<span class="token punctuation">.</span><span class="token property-access">sender</span><span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span><span class="token property-access">storage</span><span class="token punctuation">[</span>msg<span class="token punctuation">.</span><span class="token property-access">sender</span><span class="token punctuation">]</span> <span class="token operator">-</span> value\n        self<span class="token punctuation">.</span><span class="token property-access">storage</span><span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span><span class="token property-access">storage</span><span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">+</span> value\n</code></pre>\n<p>代币发行也有了标准协议</p>\n<ul>\n<li>\n<p><a href="https://ethereum.org/zh/developers/docs/standards/tokens/erc-20/">Erc-20</a> 是主要的同质化代币发行标准。</p>\n</li>\n<li>\n<p><a href="https://ethereum.org/zh/developers/docs/standards/tokens/erc-721/">ERC-721</a> 是主要的 <a href="https://en.wikipedia.org/wiki/Non-fungible_token">NFT</a>(非质化代币)发行标准</p>\n</li>\n</ul>\n<h3 id="%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E5%AD%98%E5%82%A8">去中心化存储<a class="anchor" href="#%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E5%AD%98%E5%82%A8">§</a></h3>\n<p>传统的存储提供商存在偷窥用户隐私的情况，也有厂商因为技术问题或运维问题弄丢用户的文件，服务不稳定的情况也时常发生。</p>\n<p>基于以太坊可以构建去中心化存储系统，<a href="https://zh.wikipedia.org/wiki/%E6%98%9F%E9%99%85%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F">IPFS</a>(星际文件系统)就是其中的代表。</p>\n<h3 id="%E5%9F%9F%E5%90%8D%E6%B3%A8%E5%86%8C">域名注册<a class="anchor" href="#%E5%9F%9F%E5%90%8D%E6%B3%A8%E5%86%8C">§</a></h3>\n<p>以太坊可以被用作去中心化域名注册数据库，采取“先到先得”(first-to-file)的策略。</p>\n<p><a href="https://ens.domains/">ENS</a> 是常用的去中心化域名服务。</p>\n<h3 id="dao%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E8%87%AA%E6%B2%BB%E7%BB%84%E7%BB%87"><a href="https://www.chainnews.com/articles/134595625934.htm">DAO</a>(去中心化自治组织)<a class="anchor" href="#dao%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E8%87%AA%E6%B2%BB%E7%BB%84%E7%BB%87">§</a></h3>\n<p>DAO 由编写好的智能合约来执行组织的决策，或由代币持有者(股东)投票决定，不用依赖任何集权，也没有层次结构。</p>\n<h3 id="defi%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E9%87%91%E8%9E%8D"><a href="https://zh.wikipedia.org/wiki/%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E9%87%91%E8%9E%8D">DeFi</a>(去中心化金融)<a class="anchor" href="#defi%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E9%87%91%E8%9E%8D">§</a></h3>\n<p>基于以太坊网络可以实现去中心化金融，无需依赖交易所、银行、券商等传统金融机构以及他们提供的工具。DeFi 依赖智能合约进行金融活动，可以完成借款、存款生息、交易所、保险、机枪池、金融衍生品等金融业务。</p>\n<h3 id="dex%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E4%BA%A4%E6%98%93%E6%89%80"><a href="https://www.chaindd.com/3458457.html">Dex</a>(去中心化交易所)<a class="anchor" href="#dex%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E4%BA%A4%E6%98%93%E6%89%80">§</a></h3>\n<p>Dex 全称 DecentralizedExchange，是采用智能合约构建出的交易所。于传统中心化交易所相比有如下特点</p>\n<ul>\n<li>无需做市商：Dex 本身不提供市场交易需要的资产，只提供智能合约，普通用户为 Dex 提供流动性可以得到交易的手续费分成。</li>\n<li>上币门槛低：任何人都能在 Dex 上提供流动性，币种有流动性等于上币成功</li>\n<li>无需 KYC：Dex 无需注册、KYC 等一系列泄露隐私的操作，仅需要一个钱包</li>\n</ul>\n<h3 id="play-to-earn">Play To Earn<a class="anchor" href="#play-to-earn">§</a></h3>\n<p>区块链的世界里玩游戏可以赚钱，龙头链游 <a href="https://axieinfinity.com/">Axie Infinity</a> 曾经好几个季度营收超过传统游戏龙头《王者荣耀》，用户在享受游戏带来的乐趣的同时还能得到代币奖励。</p>\n<h3 id="metaverse%E5%85%83%E5%AE%87%E5%AE%99"><a href="https://baike.baidu.com/item/Metaverse/3594112">Metaverse</a>(元宇宙)<a class="anchor" href="#metaverse%E5%85%83%E5%AE%87%E5%AE%99">§</a></h3>\n<p>元宇宙是沉浸式的虚拟空间，用户可在其中进行文化、社 交、娱乐活动，元宇宙的核心在于对虚拟资产和虚拟身份的承载。话题太大，还远远没有成熟，这里不展开介绍。</p>\n<h2 id="%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%80%BB%E7%BB%93">以太坊总结<a class="anchor" href="#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%80%BB%E7%BB%93">§</a></h2>\n<p>比特币带来了去中心化的交易系统，以太坊带来了去中心化的应用开发运行平台，也为 Web3.0 打下了基础。</p>\n<p>区块链的世界一下子有了更多的想象力，围绕以太坊能衍生出非常多的应用场景，这些区块链网络和应用终究会让互联网甚至世界变成更好的地方(Make the world a better place)。</p>\n<p>打个比方，Web2.0 时代没有能够实现的全网统一登录，在 DApps 里面实现了，在 Web3.0 的世界也有可能成为现实！</p>\n<p>未来会怎么样不知道，以太坊会存在多少年不清楚，但未来的世界里一定会有以太坊这样的去中心化应用平台，有丰富多彩的去中心化应用进入大众的视野，区块链会真正改变人们的生活。</p>\n<p>Let\'s see what will happen!</p>\n<h2 id="%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE">参考文献<a class="anchor" href="#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE">§</a></h2>\n<ul>\n<li>\n<p><a href="https://ethereum.org/en/whitepaper/">Ethereum Whitepaper</a></p>\n</li>\n<li>\n<p><a href="https://ethereum.github.io/yellowpaper/paper.pdf">Ethereum Yello paper</a></p>\n</li>\n<li>\n<p><a href="https://book.douban.com/subject/33424766/">精通以太坊：开发智能合约和去中心化应用</a></p>\n</li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u4EE5\u592A\u574A\u7B80\u4ECB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%AE%80%E4%BB%8B">以太坊简介<a class="anchor" href="#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%AE%80%E4%BB%8B">§</a></h2>\n<p>2013 年底，19 岁的 Vitalik Buterin(以下简称 V 神) 发布了<a href="https://ethereum.org/en/whitepaper/">以太坊白皮书</a>，以太坊就此诞生。</p>\n<p>白皮书的副标题是 &quot;A Next-Generation Smart Contract and Decentralized Application Platform&quot;(下一代智能合约智能合约和去中心化应用平台)，可以看出以太坊和比特币的定位不一样，比特币是一个点对点的电子现金系统，以太坊是想打造一个去中心化的应用平台。</p>\n<h2 id="v-%E7%A5%9E%E7%AE%80%E4%BB%8B">V 神简介<a class="anchor" href="#v-%E7%A5%9E%E7%AE%80%E4%BB%8B">§</a></h2>\n<p>V 神是个 94 年出生在俄罗斯的“小朋友”，父母都是计算机相关专业背景，V 神从小就沉迷编程，6 岁的时候举家搬迁到了加拿大。少年时候的 V 神是编程天才，数学天才，直到他迷上了网络游戏 《魔兽世界》。</p>\n<p>如同一般的网瘾少年，V 神沉迷游戏好几年，直到魔兽做版本变更，把 V 神最喜欢的英雄“术士”的技能“生命虹吸”移除了，V 神多次找暴雪工程师投诉未果，从此放弃了心爱的网游，投入到比特币的研究之中。</p>\n<p>研究比特币后，V 神深深陷入去中心化的世界，无法自拔，最终也走上了很多编程大佬会选择的路：辍学。</p>\n<p>比特币有一些“局限”，V 神便开始自研一套新的去中心化平台(也就是后来的以太坊)的工作。</p>\n<h2 id="%E6%AF%94%E7%89%B9%E5%B8%81%E7%9A%84%E5%B1%80%E9%99%90">比特币的局限<a class="anchor" href="#%E6%AF%94%E7%89%B9%E5%B8%81%E7%9A%84%E5%B1%80%E9%99%90">§</a></h2>\n<p>比特币作为一个去中心化电子现金系统已经足够完美，这样一个 <a href="https://en.wikipedia.org/wiki/Bug_bounty_program">Bug Bounty</a>(发现并利用漏洞能得到奖励)的系统在不更新(没有大更新)的情况下运行了十几年没有出现问题在传统计算机领域已经算得上是奇迹了。</p>\n<p>但还是有一些局限</p>\n<ol>\n<li>支付速度太慢</li>\n</ol>\n<p>比特币每个区块产生速度大概是十分钟，为了安全起见一般要等六个区块确认才认为交易生效，这需要大概一小时。这个问题可以用<a href="https://zh.wikipedia.org/wiki/%E9%97%AA%E7%94%B5%E7%BD%91%E7%BB%9C">闪电网络</a>解决，这套机制在使用比特币作为法币的<a href="https://zh.wikipedia.org/zh/%E8%90%A8%E5%B0%94%E7%93%A6%E5%A4%9A">萨尔瓦多</a>运行得非常良好。</p>\n<ol start="2">\n<li>脚本语言不完善</li>\n</ol>\n<p>比特币的定位是一个现金系统，所以只设计了一个简单的非<a href="https://baike.baidu.com/item/%E5%9B%BE%E7%81%B5%E5%AE%8C%E5%A4%87/4634934">图灵完备</a>可编程平台，没法基于它构建复杂的去中心化应用。</p>\n<ol start="3">\n<li>PoW 太耗电</li>\n</ol>\n<p>虽然耗电，但确实相对公平，共识也更加稳固，这个见仁见智了。</p>\n<p>以下是 V 神在白皮书里总结的比特币脚本的局限：</p>\n<ol>\n<li>缺乏图灵完备</li>\n</ol>\n<p>尽管比特币脚本语言可以支持多种计算，但并不能支持循环语句。不支持循环语句的目的是为了避免交易确认时出现死循环。理论上来说可以用多重 if 语句来代替，但效率极低，编码难度也非常高。例如实现一个椭圆曲线签名算法需要 256 次重复的乘法，且每次都需要单独编码。</p>\n<ol start="2">\n<li>Value-blindness</li>\n</ol>\n<p><a href="https://en.wikipedia.org/wiki/Unspent_transaction_output">UTXO</a> 脚本无法对可提取的额度进行精细的控制。例如预言机合约(Oracle Contract)的一个强大应用是对冲合约。 A 和 B 投入价值 1000 美金的 BTC，30 天后脚本将价值 1000 美元的 BTC 发送给 A，其余的发送给 B。这将需要一个预言机来确定 1 BTC 价值多少美元。但即便如此，与现在可用的完全中心化的解决方案相比，在信任和基础设施要求方面也有了巨大的改进。然而 UTXO 要么全有要么全无(all-or-nothing)，所以实现这一点的唯一方法是通过拥有许多不同面额的 UTXO（例如有一个 2^k 的 UTXO, k 最大为 30）并让 O 选择哪个 UTXO 发送给 A，哪个发送给 B.</p>\n<ol start="3">\n<li>状态缺乏</li>\n</ol>\n<p>UTXO 只能是已花费或者未花费这两种状态，这就没有给需要任何其它内部状态的多阶段合约或者脚本留出生机会。这让实现多阶段期权合约、去中心化报价协议或者两阶段加密承诺协议（对确保计算奖励非常必要）非常困难。这也意味着 UTXO 只能用于建立简单的一次性的合约，而不能用于构建去中心化组织等更复杂的“有状态”的合约，并使元协议也难以实现。二元状态与 Value-blindness 结合在一起意味着另一个重要的应用“取款限额”是不可能实现的。</p>\n<ol start="4">\n<li>Blockchain-blindness</li>\n</ol>\n<p>UTXO 对随机数、时间戳、前一个区块哈希等区块数据是不可见的。通过剥夺脚本语言基于随机性拥有的潜在价值，严重限制了博彩等应用场景的可能性。</p>\n<h2 id="%E4%BB%A5%E5%A4%AA%E5%9D%8A%E8%AE%BE%E8%AE%A1">以太坊设计<a class="anchor" href="#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E8%AE%BE%E8%AE%A1">§</a></h2>\n<p>以太坊的目的是为构建去中心化应用创建一个替代协议，使得开发者能够随意创建去中心化应用。以太坊提供了图灵完备、value-awareness、blockchain-awareness 和多状态的编程语言，基于以太坊开发域名币只需要两行代码，货币体系也能在 20 行代码内解决，一个完备的转账功能只需要一行代码。</p>\n<h3 id="%E8%B4%A6%E6%88%B7%E4%BD%93%E7%B3%BB">账户体系<a class="anchor" href="#%E8%B4%A6%E6%88%B7%E4%BD%93%E7%B3%BB">§</a></h3>\n<p>在以太坊中，状态是由叫做“账户”的对象组成的，每个账户都有一个二十位长的地址，状态转换是账户之间价值和信息的直接转移。\n一个账户包含以下四个字段：</p>\n<ul>\n<li>nonce 随机数，用于确定每笔交易只能被处理一次的计数器</li>\n<li>账户当前的以太币余额</li>\n<li>账户的合约代码(合约账户才有)</li>\n<li>账户的存储(默认为空)</li>\n</ul>\n<p>以太币(Ether，缩写 ETH) 是以太坊内部的加密燃料，用于支付交易费和合约执行费用。</p>\n<p>账户分为两类：</p>\n<ul>\n<li>外部账户：普通用户用私钥控制的账户</li>\n<li>合约账户：拥有合约代码的账户，它不属于任何人，没有私钥能控制它</li>\n</ul>\n<p>当合约账户收到消息时，合约内部的代码会被激活，允许对它内部的存储进行读写，发送消息或者创建其他合约。</p>\n<h3 id="%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6">智能合约<a class="anchor" href="#%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6">§</a></h3>\n<p>智能合约是运行在以太坊上的程序，与传统程序不一样的是智能合约会在以太坊网络上的每一个节点都运行，且结果完全一致。</p>\n<p>以太坊提供了一个虚拟机 EVM(Ethereum Virtual Machine)，将大大的提高兼容性，安全性和可扩展性。(可以参考 <a href="https://baike.baidu.com/item/JVM/2902369">JVM</a>)</p>\n<p>智能合约使用为以太坊定制的 Solidity 语言，它是图灵完备的高级语言。</p>\n<h3 id="%E6%B6%88%E6%81%AF%E5%92%8C%E4%BA%A4%E6%98%93">消息和交易<a class="anchor" href="#%E6%B6%88%E6%81%AF%E5%92%8C%E4%BA%A4%E6%98%93">§</a></h3>\n<p>以太坊的消息某种程度上类似比特币的交易，但也有不同。</p>\n<ol>\n<li>以太坊的消息可以由外部创建或者合约创建，而比特币交易只能由外部创建.</li>\n<li>以太坊消息可以包含数据，比特币不能</li>\n<li>以太坊消息可能会有回执</li>\n</ol>\n<p>以太坊中的“交易”是指从外部账户发出的“消息”签名数据包。消息包含如下内容：</p>\n<ol>\n<li>消息发送者(隐式包含)</li>\n<li>消息接受者</li>\n<li>发送的以太币金额</li>\n<li>数据(可选)</li>\n<li>Gas 执行交易需要的燃料费</li>\n</ol>\n<h3 id="%E6%8C%96%E7%9F%BF">挖矿<a class="anchor" href="#%E6%8C%96%E7%9F%BF">§</a></h3>\n<p>以太坊挖矿过程和比特币大抵是类似的，都是基于工作量证明(PoW)竞争区块打包权，执行交易，获得区块奖励和手续费。</p>\n<p>但也有一些不同：</p>\n<ol>\n<li>以太坊的矿工节点不仅仅要执行交易，还要执行合约。</li>\n<li>合约执行时需要扣除 Gas 费，如果 Gas 消耗殆尽，扣取 Gas，但回滚交易</li>\n<li>每个区块时间从大约十分钟改为了大约 15 秒</li>\n<li>以太坊不限制区块大小，只使用了 Gas 来限制，比特币区块大小上限是 1M</li>\n<li>出块奖励不同，比特币每个区块奖励是 50BTC，每四年减半；ETH 最开始是 5ETH，后面改成了 3，现在是 2，而且出块奖励不是自动调节的，是 hardcode 的</li>\n<li>由第 5 点可以看出，以太坊不像比特币一样总量有限或通缩(不排除 Gas 燃烧太快导致通缩，或者后续迭代修改奖励机制)</li>\n<li>以太坊为了降低出块时间大大缩减带来的分叉不稳定可能性以及奖励挖矿者，会提供叔父区块奖励</li>\n<li>以太坊正在将共识机制从工作量证明(PoW)改成权证明(<a href="https://zh.wikipedia.org/zh/%E6%8C%81%E6%9C%89%E9%87%8F%E8%AD%89%E6%98%8E">PoS</a>)</li>\n</ol>\n<h3 id="pos"><a href="https://zh.wikipedia.org/zh/%E6%8C%81%E6%9C%89%E9%87%8F%E8%AD%89%E6%98%8E">PoS</a><a class="anchor" href="#pos">§</a></h3>\n<p>以太坊正在将共识机制从工作量证明(PoW)改成权证明(PoS)，持续了多年的计划和讨论，暂时没落地，预计 21 年年底切换。</p>\n<p>PoS 不再需要 PoW 来消耗算力和能源产生新区块，而是通过质押 ETH 来获得成为验证者的资格。验证者被随机选择去创建区块，并且检查和确认其他验证者打包的区块。\n验证者离线或者作恶会被扣除质押金，直到失去股权。</p>\n<p>PoS 依然存在 51% 攻击的可能性，但攻击成本非常高，需要掌握 51% 的验证者股权，这不仅仅是一笔巨款，发生攻击后自己的 ETH 也会大幅贬值。</p>\n<h3 id="gas-%E4%BD%93%E7%B3%BB">Gas 体系<a class="anchor" href="#gas-%E4%BD%93%E7%B3%BB">§</a></h3>\n<p>跟比特币一样，ETH 交易也需要手续费。以太坊网络上执行智能合约需要消耗全网的计算资源，Gas 可以当做消耗资源的付费。</p>\n<p>Gas 也可以避免网络被垃圾消息和交易攻击，因为执行操作是要付出代价的。</p>\n<h3 id="%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%8A%B6%E6%80%81%E6%9C%BA">以太坊状态机<a class="anchor" href="#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%8A%B6%E6%80%81%E6%9C%BA">§</a></h3>\n<p>以太坊网络是个全局统一状态的状态机，已打包的区块的账户、交易、合约等状态是全网统一且透明的。</p>\n<p><img src="https://sanfranciscotribe.com/Home/wp-content/uploads/2020/05/Ethereum-Ground-Up.png" alt="Ethereum State Transition Function"></p>\n<p>以太坊的状态转移函数：</p>\n<blockquote>\n<p>APPLY(S,TX) -&gt; S\'</p>\n</blockquote>\n<p>可以定义如下:</p>\n<ol>\n<li>检查交易格式是否正确(比如数值是否正确)、签名是否有效、nonce 是否和发送者的账户保持一致。如果不是，返回错误。</li>\n<li>计算交易费用 STARTGAS * GASPRICE，并从签名中确定发送者的地址。从发送人的账户余额中减去费用并 nonce + 1。如果余额不足，返回错误。</li>\n<li>初始化变量 GAS = STARTGAS，并根据交易中的字节数支付一定数量的 Gas 费用。</li>\n<li>将交易金额从发送方账户转移到接收方账户。如果接收帐户尚不存在，创建一个。如果接收账户是一个合约，则运行合约的代码直到完成或消耗完 Gas。</li>\n<li>如果发送者没有足够的钱而导致价值转移失败，或者代码执行耗尽了 Gas，则恢复除支付费用外的所有状态变化，并将费用转移到矿工的账户中。</li>\n<li>否则将所有剩余的 Gas 返回给发送者，消耗掉的 Gas 作为交易费用发送给矿工。</li>\n</ol>\n<h2 id="%E4%BB%A5%E5%A4%AA%E5%9D%8A%E5%BA%94%E7%94%A8">以太坊应用<a class="anchor" href="#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E5%BA%94%E7%94%A8">§</a></h2>\n<p>基于以太坊的平台能开发出丰富的应用，分为金融应用(货币，金融衍生品，对冲合约，储蓄钱包，遗嘱)、半金融应用(悬赏系统等)、非金融应用(在线投票系统、去中心化治理等)。</p>\n<p>下面是一些例子。</p>\n<h3 id="token-%E7%B3%BB%E7%BB%9F">Token 系统<a class="anchor" href="#token-%E7%B3%BB%E7%BB%9F">§</a></h3>\n<p>基于以太坊平台可以极其容易的发行代币，Alice 转账 X 个代币给 Bob 只需要从 Alice 账户余额减去 X， Bob 账户余额加上 Y。</p>\n<p>用 Serphant 语言编写一个转账函数的伪代码如下：</p>\n<pre class="language-js"><code class="language-js">def <span class="token function">send</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token operator">:</span>\n    <span class="token keyword control-flow">if</span> self<span class="token punctuation">.</span><span class="token property-access">storage</span><span class="token punctuation">[</span>msg<span class="token punctuation">.</span><span class="token property-access">sender</span><span class="token punctuation">]</span> <span class="token operator">>=</span> value<span class="token operator">:</span>\n        self<span class="token punctuation">.</span><span class="token property-access">storage</span><span class="token punctuation">[</span>msg<span class="token punctuation">.</span><span class="token property-access">sender</span><span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span><span class="token property-access">storage</span><span class="token punctuation">[</span>msg<span class="token punctuation">.</span><span class="token property-access">sender</span><span class="token punctuation">]</span> <span class="token operator">-</span> value\n        self<span class="token punctuation">.</span><span class="token property-access">storage</span><span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">=</span> self<span class="token punctuation">.</span><span class="token property-access">storage</span><span class="token punctuation">[</span>to<span class="token punctuation">]</span> <span class="token operator">+</span> value\n</code></pre>\n<p>代币发行也有了标准协议</p>\n<ul>\n<li>\n<p><a href="https://ethereum.org/zh/developers/docs/standards/tokens/erc-20/">Erc-20</a> 是主要的同质化代币发行标准。</p>\n</li>\n<li>\n<p><a href="https://ethereum.org/zh/developers/docs/standards/tokens/erc-721/">ERC-721</a> 是主要的 <a href="https://en.wikipedia.org/wiki/Non-fungible_token">NFT</a>(非质化代币)发行标准</p>\n</li>\n</ul>\n<h3 id="%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E5%AD%98%E5%82%A8">去中心化存储<a class="anchor" href="#%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E5%AD%98%E5%82%A8">§</a></h3>\n<p>传统的存储提供商存在偷窥用户隐私的情况，也有厂商因为技术问题或运维问题弄丢用户的文件，服务不稳定的情况也时常发生。</p>\n<p>基于以太坊可以构建去中心化存储系统，<a href="https://zh.wikipedia.org/wiki/%E6%98%9F%E9%99%85%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F">IPFS</a>(星际文件系统)就是其中的代表。</p>\n<h3 id="%E5%9F%9F%E5%90%8D%E6%B3%A8%E5%86%8C">域名注册<a class="anchor" href="#%E5%9F%9F%E5%90%8D%E6%B3%A8%E5%86%8C">§</a></h3>\n<p>以太坊可以被用作去中心化域名注册数据库，采取“先到先得”(first-to-file)的策略。</p>\n<p><a href="https://ens.domains/">ENS</a> 是常用的去中心化域名服务。</p>\n<h3 id="dao%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E8%87%AA%E6%B2%BB%E7%BB%84%E7%BB%87"><a href="https://www.chainnews.com/articles/134595625934.htm">DAO</a>(去中心化自治组织)<a class="anchor" href="#dao%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E8%87%AA%E6%B2%BB%E7%BB%84%E7%BB%87">§</a></h3>\n<p>DAO 由编写好的智能合约来执行组织的决策，或由代币持有者(股东)投票决定，不用依赖任何集权，也没有层次结构。</p>\n<h3 id="defi%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E9%87%91%E8%9E%8D"><a href="https://zh.wikipedia.org/wiki/%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E9%87%91%E8%9E%8D">DeFi</a>(去中心化金融)<a class="anchor" href="#defi%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E9%87%91%E8%9E%8D">§</a></h3>\n<p>基于以太坊网络可以实现去中心化金融，无需依赖交易所、银行、券商等传统金融机构以及他们提供的工具。DeFi 依赖智能合约进行金融活动，可以完成借款、存款生息、交易所、保险、机枪池、金融衍生品等金融业务。</p>\n<h3 id="dex%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E4%BA%A4%E6%98%93%E6%89%80"><a href="https://www.chaindd.com/3458457.html">Dex</a>(去中心化交易所)<a class="anchor" href="#dex%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E4%BA%A4%E6%98%93%E6%89%80">§</a></h3>\n<p>Dex 全称 DecentralizedExchange，是采用智能合约构建出的交易所。于传统中心化交易所相比有如下特点</p>\n<ul>\n<li>无需做市商：Dex 本身不提供市场交易需要的资产，只提供智能合约，普通用户为 Dex 提供流动性可以得到交易的手续费分成。</li>\n<li>上币门槛低：任何人都能在 Dex 上提供流动性，币种有流动性等于上币成功</li>\n<li>无需 KYC：Dex 无需注册、KYC 等一系列泄露隐私的操作，仅需要一个钱包</li>\n</ul>\n<h3 id="play-to-earn">Play To Earn<a class="anchor" href="#play-to-earn">§</a></h3>\n<p>区块链的世界里玩游戏可以赚钱，龙头链游 <a href="https://axieinfinity.com/">Axie Infinity</a> 曾经好几个季度营收超过传统游戏龙头《王者荣耀》，用户在享受游戏带来的乐趣的同时还能得到代币奖励。</p>\n<h3 id="metaverse%E5%85%83%E5%AE%87%E5%AE%99"><a href="https://baike.baidu.com/item/Metaverse/3594112">Metaverse</a>(元宇宙)<a class="anchor" href="#metaverse%E5%85%83%E5%AE%87%E5%AE%99">§</a></h3>\n<p>元宇宙是沉浸式的虚拟空间，用户可在其中进行文化、社 交、娱乐活动，元宇宙的核心在于对虚拟资产和虚拟身份的承载。话题太大，还远远没有成熟，这里不展开介绍。</p>\n<h2 id="%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%80%BB%E7%BB%93">以太坊总结<a class="anchor" href="#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%80%BB%E7%BB%93">§</a></h2>\n<p>比特币带来了去中心化的交易系统，以太坊带来了去中心化的应用开发运行平台，也为 Web3.0 打下了基础。</p>\n<p>区块链的世界一下子有了更多的想象力，围绕以太坊能衍生出非常多的应用场景，这些区块链网络和应用终究会让互联网甚至世界变成更好的地方(Make the world a better place)。</p>\n<p>打个比方，Web2.0 时代没有能够实现的全网统一登录，在 DApps 里面实现了，在 Web3.0 的世界也有可能成为现实！</p>\n<p>未来会怎么样不知道，以太坊会存在多少年不清楚，但未来的世界里一定会有以太坊这样的去中心化应用平台，有丰富多彩的去中心化应用进入大众的视野，区块链会真正改变人们的生活。</p>\n<p>Let\'s see what will happen!</p>\n<h2 id="%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE">参考文献<a class="anchor" href="#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE">§</a></h2>\n<ul>\n<li>\n<p><a href="https://ethereum.org/en/whitepaper/">Ethereum Whitepaper</a></p>\n</li>\n<li>\n<p><a href="https://ethereum.github.io/yellowpaper/paper.pdf">Ethereum Yello paper</a></p>\n</li>\n<li>\n<p><a href="https://book.douban.com/subject/33424766/">精通以太坊：开发智能合约和去中心化应用</a></p>\n</li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%AE%80%E4%BB%8B" }, "\u4EE5\u592A\u574A\u7B80\u4ECB")),
            React.createElement("li", null,
                React.createElement("a", { href: "#v-%E7%A5%9E%E7%AE%80%E4%BB%8B" }, "V \u795E\u7B80\u4ECB")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%AF%94%E7%89%B9%E5%B8%81%E7%9A%84%E5%B1%80%E9%99%90" }, "\u6BD4\u7279\u5E01\u7684\u5C40\u9650")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E8%AE%BE%E8%AE%A1" }, "\u4EE5\u592A\u574A\u8BBE\u8BA1"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E8%B4%A6%E6%88%B7%E4%BD%93%E7%B3%BB" }, "\u8D26\u6237\u4F53\u7CFB")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6" }, "\u667A\u80FD\u5408\u7EA6")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%B6%88%E6%81%AF%E5%92%8C%E4%BA%A4%E6%98%93" }, "\u6D88\u606F\u548C\u4EA4\u6613")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E6%8C%96%E7%9F%BF" }, "\u6316\u77FF")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#pos" }, "PoS")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#gas-%E4%BD%93%E7%B3%BB" }, "Gas \u4F53\u7CFB")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%8A%B6%E6%80%81%E6%9C%BA" }, "\u4EE5\u592A\u574A\u72B6\u6001\u673A")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E5%BA%94%E7%94%A8" }, "\u4EE5\u592A\u574A\u5E94\u7528"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#token-%E7%B3%BB%E7%BB%9F" }, "Token \u7CFB\u7EDF")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E5%AD%98%E5%82%A8" }, "\u53BB\u4E2D\u5FC3\u5316\u5B58\u50A8")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E5%9F%9F%E5%90%8D%E6%B3%A8%E5%86%8C" }, "\u57DF\u540D\u6CE8\u518C")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#dao%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E8%87%AA%E6%B2%BB%E7%BB%84%E7%BB%87" }, "DAO(\u53BB\u4E2D\u5FC3\u5316\u81EA\u6CBB\u7EC4\u7EC7)")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#defi%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E9%87%91%E8%9E%8D" }, "DeFi(\u53BB\u4E2D\u5FC3\u5316\u91D1\u878D)")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#dex%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96%E4%BA%A4%E6%98%93%E6%89%80" }, "Dex(\u53BB\u4E2D\u5FC3\u5316\u4EA4\u6613\u6240)")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#play-to-earn" }, "Play To Earn")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#metaverse%E5%85%83%E5%AE%87%E5%AE%99" }, "Metaverse(\u5143\u5B87\u5B99)")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E4%BB%A5%E5%A4%AA%E5%9D%8A%E6%80%BB%E7%BB%93" }, "\u4EE5\u592A\u574A\u603B\u7ED3")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE" }, "\u53C2\u8003\u6587\u732E")))),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2021-09-22T00:00:00.000Z",
    'updated': "2021-12-26T13:14:32.000Z",
    'excerpt': "以太坊简介 2013 年底，19 岁的 Vitalik Buterin(以下简称 V 神) 发布了以太坊白皮书，以太坊就此诞生。 白皮书的副标题是 \"A Next-Generation Smart Contract and Decentralized Application Platform\"(下一代智能合约智能合约...",
    'cover': "https://sanfranciscotribe.com/Home/wp-content/uploads/2020/05/Ethereum-Ground-Up.png",
    'tags': [
        "crypto",
        "blockchain"
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
