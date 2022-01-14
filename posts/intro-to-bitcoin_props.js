import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/intro-to-bitcoin.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/intro-to-bitcoin.html",
    'title': "比特币简介",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>比特币简介</h1>\n<h2 id="%E5%88%9D%E8%AF%86%E6%AF%94%E7%89%B9%E5%B8%81">初识比特币<a class="anchor" href="#%E5%88%9D%E8%AF%86%E6%AF%94%E7%89%B9%E5%B8%81">§</a></h2>\n<p>大约 13-14 年左右就听说过比特币，当时并没有特别的印象，只是把它当成用电脑挖矿开采的“Q 币”，还用当时的破电脑跑过挖矿程序，有没有运行起来并加入网络，有没有挖到过比特币已是毫无印象。</p>\n<p>2015 年大学毕业后去到北京工作，和大学的几个好哥们一起合租，其中有个兄弟在传统互联网大厂离职出来，在火币网做开发(非数字货币交易相关)，因此知道原来数字货币是有交易所的，交易量还挺大的。</p>\n<p>2016 年我加入了某互联网独角兽公司，立志成为一名优秀的架构师，分布式架构是必不可少的部分。那位在火币做开发的朋友已离职，开始从事区块链行业的研发工作，因此知道了区块链这项技术的一点点皮毛，区块链是一种所有节点跑同一份程序来解决分布式协调问题、拜占庭将军问题的分布式方案，当时觉得这个技术挺傻的，太过于冗余了，不实用，对我的分布式架构学习没有太多的参考价值，弃之！</p>\n<p>2017 年的夏天，在 IT 校友们的影响下开始接触数字货币投资，入金了几千块钱，看比特币太贵了不敢买，比特币是数字黄金而 LTC(莱特币) 号称数字白银，第一个币圈投资标的是 LTC，短线搞了几波，勉强平本，后面又玩了 ETC(以太经典，ETH 分叉币)，BCC(比特现金，比特币分叉币，现在代码是 BCH) 等山寨币之王，盈利不少。因此拥有深厚兴趣学习做交易，看了不少技术分析做短线的资料并实践，而大盘一路上涨，比特币涨到了接近 5000 美金一枚，我在追涨杀跌几波后并没有盈利多少，却迎头赶上了币圈大震动的 <a href="https://www.jinse.com/blockchain/458018.html">“94 事件”</a>，亏本近一半割肉离场，并表示永不回来。</p>\n<p>其实已经很多次有机会深入了解这个币种和技术，但都没有深入去学习去了解更多信息，可能因为比特币的名声并不好(时常和诈骗和高倍杠杆绑定在一起)，而区块链技术在我一个互联网技术开发人员看起来又是那么的低效无价值，导致我错过了比特币和区块链好多年，而拥抱它我的人生必然会发生翻天覆地的变化！</p>\n<p>任何关联利益的新行业的兴起都存在很多负面案例，不能因为它超出自己的认知就把它简单的和骗局划上等号。需要的是去深入学习和理解，而不是简单的用旧知识和旧思维去想当然。谨记！</p>\n<h2 id="%E6%AF%94%E7%89%B9%E5%B8%81%E7%AE%80%E4%BB%8B">比特币简介<a class="anchor" href="#%E6%AF%94%E7%89%B9%E5%B8%81%E7%AE%80%E4%BB%8B">§</a></h2>\n<p>2008 年 11 月 1 日，中本聪（Satoshi Nakamoto）发表了比特币白皮书 <a href="https://bitcoin.org/bitcoin.pdf">Bitcoin: A Peer-to-Peer Electronic Cash System</a>，比特币就此诞生。</p>\n<p>比特币是一种点对点的电子现金系统，跟其他货币不一样的是比特币没有特定的发行机构，它的运行是依靠特定的程序，每台部署程序机器的称为「节点」，「节点」之间相互连接形成「网络」。网络之间通过算法形成了共识来维持比特币的发行和交易。</p>\n<p>比特币采用了「分布式账本」来摆脱第三方的制约，这个账本技术被称为「区块链」。区块头 + 区块体(交易集)构成区块，通过区块头中“上一区块哈希”字段，组成了链式数据结构。</p>\n<p>区块链构成了一个不断增长的账本，每个全节点都拥有完整的区块数据，并且节点总是信任最长的区块链，这保障了区块链是不可篡改(理论上可篡改，后面会解释)的。</p>\n<p>节点挖掘新区块的过程被称为「挖矿」，「挖矿」的节点被称为「矿工」。矿工节点会以 Merkle Tree 的形式把交易打包到区块体中，Merkle Root 加上前一区块头、版本、时间戳、当前难度与随机数 nonce 进行 SHA256 计算，直到找到的随机数达到难度要求(SHA256 结果以多少个 0 开头)，视为挖矿成功，形成有效区块。有效区块会广播到全网，其他节点会用 SHA256 算法对区块进行验证，此过程满足<a href="https://wiki.mbalib.com/wiki/%E9%9B%B6%E7%9F%A5%E8%AF%86%E8%AF%81%E6%98%8E">零知识证明</a>，验证通过后写入本地数据库，拼接在之前的区块末尾，并以此为基础进行下一个区块的挖掘。</p>\n<p>这个过程叫做<a href="https://zh.wikipedia.org/wiki/%E5%B7%A5%E4%BD%9C%E9%87%8F%E8%AD%89%E6%98%8E">工作量证明(Proof Of Work)</a>，拥有算力越多，做 SHA256 次数越多的人越容易抢到新区块的打包权，这个设计简明扼要、有效可靠，相对公平，同时也解决了<a href="https://academy.binance.com/zh/articles/double-spending-explained">双花</a>问题。</p>\n<h2 id="%E6%AF%94%E7%89%B9%E5%B8%81%E7%89%B9%E6%80%A7">比特币特性<a class="anchor" href="#%E6%AF%94%E7%89%B9%E5%B8%81%E7%89%B9%E6%80%A7">§</a></h2>\n<h3 id="1-%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96">1. 去中心化<a class="anchor" href="#1-%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96">§</a></h3>\n<p>比特币通过区块链这个去中心化的网络保障了他的铸币和交易过程是第三方中心化体制无法干预的.</p>\n<h3 id="2-%E4%B8%8D%E5%8F%AF%E7%AF%A1%E6%94%B9">2. 不可篡改<a class="anchor" href="#2-%E4%B8%8D%E5%8F%AF%E7%AF%A1%E6%94%B9">§</a></h3>\n<p>区块链依靠安全的哈希算法保证所有区块数据不可更改(下面技术分析会讲到)，而区块链是个单项链表，只能往下蔓延。</p>\n<p>想更改区块链数据需要拥有全网一半以上的算力，这样可形成自己的最长合法链，也就是 <a href="https://academy.binance.com/zh/articles/what-is-a-51-percent-attack">51% 攻击</a>，需要投入大量的计算资源，这基本是不可能发生的。</p>\n<h3 id="3-%E4%BA%A7%E5%9D%97%E6%97%B6%E9%97%B4%E5%9D%87%E8%A1%A1">3. 产块时间均衡<a class="anchor" href="#3-%E4%BA%A7%E5%9D%97%E6%97%B6%E9%97%B4%E5%9D%87%E8%A1%A1">§</a></h3>\n<p>比特币会通过历史产块时间来调整挖矿难度，来维持每个区块产生速度大概是十分钟。</p>\n<h3 id="4-%E9%80%9A%E7%BC%A9">4. 通缩<a class="anchor" href="#4-%E9%80%9A%E7%BC%A9">§</a></h3>\n<p>比特币每开采 210000 个区块后会将新区块奖励减半，按每十分钟一个区块来计算大约是四年。初始区块奖励是 50BTC，目前已发生两次减半，变成了 12.5，随着时间的推移出块奖励会无限趋近于 0。</p>\n<h3 id="5-%E6%80%BB%E9%87%8F%E6%81%92%E5%AE%9A">5. 总量恒定<a class="anchor" href="#5-%E6%80%BB%E9%87%8F%E6%81%92%E5%AE%9A">§</a></h3>\n<p>每四年周期产生的区块数： 6<em>24</em>365*4 = 210240 ≈ 210000</p>\n<p>区块奖励累加： 50+25+12.5+6.25+3.125+1.5625 + .... + 0 = 100</p>\n<p>两者相乘得到比特币总量 210000*100 = 2100W</p>\n<h3 id="6-%E6%94%AF%E4%BB%98%E8%87%AA%E7%94%B1">6. 支付自由<a class="anchor" href="#6-%E6%94%AF%E4%BB%98%E8%87%AA%E7%94%B1">§</a></h3>\n<p>无需受到法币跨境诸多限制，7*24 可交易</p>\n<h3 id="7-%E5%8C%BF%E5%90%8D">7. 匿名<a class="anchor" href="#7-%E5%8C%BF%E5%90%8D">§</a></h3>\n<p>只需要产生一队私钥地址对即拥有一个账户，无需实名认证，更无需税费。这也是比特币被人和 Money Laundering 关联上的原因。</p>\n<h2 id="%E6%AF%94%E7%89%B9%E5%B8%81%E6%8A%80%E6%9C%AF%E5%88%86%E6%9E%90">比特币技术分析<a class="anchor" href="#%E6%AF%94%E7%89%B9%E5%B8%81%E6%8A%80%E6%9C%AF%E5%88%86%E6%9E%90">§</a></h2>\n<h3 id="1-hash-%E7%AE%97%E6%B3%95">1. Hash 算法<a class="anchor" href="#1-hash-%E7%AE%97%E6%B3%95">§</a></h3>\n<h4 id="1-collision-resistance">1. Collision resistance<a class="anchor" href="#1-collision-resistance">§</a></h4>\n<p>Hash 算法是耐碰撞的，虽然从理论上可能存在两个 input 的 hash result 一致，但实际上</p>\n<p>基本不可能发生。注意，hash 算法未被验证过是 collision free 的。</p>\n<h4 id="2-hiding">2. Hiding<a class="anchor" href="#2-hiding">§</a></h4>\n<p>Hash 函数能隐藏输入，即给定 Hash(x) = y, 已知 y 的情况下无法反推 x，只能蛮力求解。此特性实现了 Sealed envelop。</p>\n<h4 id="3--puzzle-friendly">3.  Puzzle friendly<a class="anchor" href="#3--puzzle-friendly">§</a></h4>\n<p>Hash 计算结果不可预测，想要计算出的哈希值落在某个范围内，没有特定的办法去构造输入，只能通过蛮力碰撞。BTC 在挖矿过程中就是改成随机数 nonce 来碰撞 hash 结果，碰撞出来后结果能低成本验证。</p>\n<p>Difficult to solve, but easy to verify.</p>\n<p>这是比特币共识 POW(工作量证明)的依据。</p>\n<h3 id="2--merkle-tree">2.  Merkle Tree<a class="anchor" href="#2--merkle-tree">§</a></h3>\n<p>比特币把交易数据的以 Merkle 树的结构存储，每个叶子节点是每个交易信息的哈希，往上对相邻的两个哈希合并成字符串再哈希，继续类似的操作直到只剩下顶部的一个节点，即Merkle 根，存入区块头。这个设计极易验证某个区块整体的交易是否合法。</p>\n<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hash_Tree.svg/2560px-Hash_Tree.svg.png" alt="Merklle Tree"></p>\n<h3 id="3-%E5%85%AC%E7%A7%81%E9%92%A5%E4%BD%93%E7%B3%BB">3. 公私钥体系<a class="anchor" href="#3-%E5%85%AC%E7%A7%81%E9%92%A5%E4%BD%93%E7%B3%BB">§</a></h3>\n<p>比特币的公钥是由私钥通过<a href="https://zh.wikipedia.org/zh-hans/%E6%A4%AD%E5%9C%86%E6%9B%B2%E7%BA%BF%E5%AF%86%E7%A0%81%E5%AD%A6">椭圆曲线算法</a>导出的。 公钥密码学使用一个公钥和一个私钥来进行消息交换，公钥加密数据私钥可以解密，私钥签名数据公钥可以用来验证签名。</p>\n<h2 id="%E6%AF%94%E7%89%B9%E5%B8%81%E6%80%9D%E8%80%83">比特币思考<a class="anchor" href="#%E6%AF%94%E7%89%B9%E5%B8%81%E6%80%9D%E8%80%83">§</a></h2>\n<p>非常认可李笑来说的一句话：比特币是人类第一次用技术保证私有财产不可侵犯。</p>\n<p>我们存在银行的、放在家里的现金、股票账户甚至埋在地下的黄金都有可能被某个个人或组织无情剥夺。四十年多年前财产大洗牌的事情并不遥远。</p>\n<p>而比特币的特性保障了只要不泄露私钥，你的币永远不会被剥夺，甚至你有多少币外人都无法知道的，这在传统金融体系里面是绝无可能的。</p>\n<p>在读完比特币白皮书之后我才真正的意识到这个物种有多么的美妙，多么的令人惊叹，同时也是兴奋与后悔。</p>\n<p>惊叹中本聪神一般的设计，中本聪在发布白皮书的第一天可能就看到了现在和未来发生的事情，这是开天眼的存在。</p>\n<p>兴奋自己终于找到了一个值得奋斗一生的事业。</p>\n<p>后悔自己落后的观点和弱鸡般的执行力，导致太晚看到这份白皮书。</p>\n<p>中本聪在比特币相对成熟后归隐了，归隐前说他要去做其他事情了。他到底是谁，他去做了什么事，无人知晓。但这并不重要，理解了比特币的人或许人人都是中本聪，作者的消失也让比特币彻底的「去中心化」。</p>\n<p>Coinbase 上市前一天，创始人在推特上说道”Thank you Satoshi. Whoever you are ”，我也想谢谢中本聪，感谢他带来了如此精妙绝伦的技术和体系，让我真正愿意为之奋斗终生，也让我的人生变得不再那么迷惘。</p>\n<p>Thank you Satoshi. Whoever you are.</p>\n<h2 id="%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE">参考文献<a class="anchor" href="#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE">§</a></h2>\n<ul>\n<li>\n<p><a href="https://bitcoin.org/bitcoin.pdf">Bitcoin: A Peer-to-Peer Electronic Cash System</a></p>\n</li>\n<li>\n<p><a href="http://btc.mom/category/ahr999/">囤比特币</a></p>\n</li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6BD4\u7279\u5E01\u7B80\u4ECB"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="%E5%88%9D%E8%AF%86%E6%AF%94%E7%89%B9%E5%B8%81">初识比特币<a class="anchor" href="#%E5%88%9D%E8%AF%86%E6%AF%94%E7%89%B9%E5%B8%81">§</a></h2>\n<p>大约 13-14 年左右就听说过比特币，当时并没有特别的印象，只是把它当成用电脑挖矿开采的“Q 币”，还用当时的破电脑跑过挖矿程序，有没有运行起来并加入网络，有没有挖到过比特币已是毫无印象。</p>\n<p>2015 年大学毕业后去到北京工作，和大学的几个好哥们一起合租，其中有个兄弟在传统互联网大厂离职出来，在火币网做开发(非数字货币交易相关)，因此知道原来数字货币是有交易所的，交易量还挺大的。</p>\n<p>2016 年我加入了某互联网独角兽公司，立志成为一名优秀的架构师，分布式架构是必不可少的部分。那位在火币做开发的朋友已离职，开始从事区块链行业的研发工作，因此知道了区块链这项技术的一点点皮毛，区块链是一种所有节点跑同一份程序来解决分布式协调问题、拜占庭将军问题的分布式方案，当时觉得这个技术挺傻的，太过于冗余了，不实用，对我的分布式架构学习没有太多的参考价值，弃之！</p>\n<p>2017 年的夏天，在 IT 校友们的影响下开始接触数字货币投资，入金了几千块钱，看比特币太贵了不敢买，比特币是数字黄金而 LTC(莱特币) 号称数字白银，第一个币圈投资标的是 LTC，短线搞了几波，勉强平本，后面又玩了 ETC(以太经典，ETH 分叉币)，BCC(比特现金，比特币分叉币，现在代码是 BCH) 等山寨币之王，盈利不少。因此拥有深厚兴趣学习做交易，看了不少技术分析做短线的资料并实践，而大盘一路上涨，比特币涨到了接近 5000 美金一枚，我在追涨杀跌几波后并没有盈利多少，却迎头赶上了币圈大震动的 <a href="https://www.jinse.com/blockchain/458018.html">“94 事件”</a>，亏本近一半割肉离场，并表示永不回来。</p>\n<p>其实已经很多次有机会深入了解这个币种和技术，但都没有深入去学习去了解更多信息，可能因为比特币的名声并不好(时常和诈骗和高倍杠杆绑定在一起)，而区块链技术在我一个互联网技术开发人员看起来又是那么的低效无价值，导致我错过了比特币和区块链好多年，而拥抱它我的人生必然会发生翻天覆地的变化！</p>\n<p>任何关联利益的新行业的兴起都存在很多负面案例，不能因为它超出自己的认知就把它简单的和骗局划上等号。需要的是去深入学习和理解，而不是简单的用旧知识和旧思维去想当然。谨记！</p>\n<h2 id="%E6%AF%94%E7%89%B9%E5%B8%81%E7%AE%80%E4%BB%8B">比特币简介<a class="anchor" href="#%E6%AF%94%E7%89%B9%E5%B8%81%E7%AE%80%E4%BB%8B">§</a></h2>\n<p>2008 年 11 月 1 日，中本聪（Satoshi Nakamoto）发表了比特币白皮书 <a href="https://bitcoin.org/bitcoin.pdf">Bitcoin: A Peer-to-Peer Electronic Cash System</a>，比特币就此诞生。</p>\n<p>比特币是一种点对点的电子现金系统，跟其他货币不一样的是比特币没有特定的发行机构，它的运行是依靠特定的程序，每台部署程序机器的称为「节点」，「节点」之间相互连接形成「网络」。网络之间通过算法形成了共识来维持比特币的发行和交易。</p>\n<p>比特币采用了「分布式账本」来摆脱第三方的制约，这个账本技术被称为「区块链」。区块头 + 区块体(交易集)构成区块，通过区块头中“上一区块哈希”字段，组成了链式数据结构。</p>\n<p>区块链构成了一个不断增长的账本，每个全节点都拥有完整的区块数据，并且节点总是信任最长的区块链，这保障了区块链是不可篡改(理论上可篡改，后面会解释)的。</p>\n<p>节点挖掘新区块的过程被称为「挖矿」，「挖矿」的节点被称为「矿工」。矿工节点会以 Merkle Tree 的形式把交易打包到区块体中，Merkle Root 加上前一区块头、版本、时间戳、当前难度与随机数 nonce 进行 SHA256 计算，直到找到的随机数达到难度要求(SHA256 结果以多少个 0 开头)，视为挖矿成功，形成有效区块。有效区块会广播到全网，其他节点会用 SHA256 算法对区块进行验证，此过程满足<a href="https://wiki.mbalib.com/wiki/%E9%9B%B6%E7%9F%A5%E8%AF%86%E8%AF%81%E6%98%8E">零知识证明</a>，验证通过后写入本地数据库，拼接在之前的区块末尾，并以此为基础进行下一个区块的挖掘。</p>\n<p>这个过程叫做<a href="https://zh.wikipedia.org/wiki/%E5%B7%A5%E4%BD%9C%E9%87%8F%E8%AD%89%E6%98%8E">工作量证明(Proof Of Work)</a>，拥有算力越多，做 SHA256 次数越多的人越容易抢到新区块的打包权，这个设计简明扼要、有效可靠，相对公平，同时也解决了<a href="https://academy.binance.com/zh/articles/double-spending-explained">双花</a>问题。</p>\n<h2 id="%E6%AF%94%E7%89%B9%E5%B8%81%E7%89%B9%E6%80%A7">比特币特性<a class="anchor" href="#%E6%AF%94%E7%89%B9%E5%B8%81%E7%89%B9%E6%80%A7">§</a></h2>\n<h3 id="1-%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96">1. 去中心化<a class="anchor" href="#1-%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96">§</a></h3>\n<p>比特币通过区块链这个去中心化的网络保障了他的铸币和交易过程是第三方中心化体制无法干预的.</p>\n<h3 id="2-%E4%B8%8D%E5%8F%AF%E7%AF%A1%E6%94%B9">2. 不可篡改<a class="anchor" href="#2-%E4%B8%8D%E5%8F%AF%E7%AF%A1%E6%94%B9">§</a></h3>\n<p>区块链依靠安全的哈希算法保证所有区块数据不可更改(下面技术分析会讲到)，而区块链是个单项链表，只能往下蔓延。</p>\n<p>想更改区块链数据需要拥有全网一半以上的算力，这样可形成自己的最长合法链，也就是 <a href="https://academy.binance.com/zh/articles/what-is-a-51-percent-attack">51% 攻击</a>，需要投入大量的计算资源，这基本是不可能发生的。</p>\n<h3 id="3-%E4%BA%A7%E5%9D%97%E6%97%B6%E9%97%B4%E5%9D%87%E8%A1%A1">3. 产块时间均衡<a class="anchor" href="#3-%E4%BA%A7%E5%9D%97%E6%97%B6%E9%97%B4%E5%9D%87%E8%A1%A1">§</a></h3>\n<p>比特币会通过历史产块时间来调整挖矿难度，来维持每个区块产生速度大概是十分钟。</p>\n<h3 id="4-%E9%80%9A%E7%BC%A9">4. 通缩<a class="anchor" href="#4-%E9%80%9A%E7%BC%A9">§</a></h3>\n<p>比特币每开采 210000 个区块后会将新区块奖励减半，按每十分钟一个区块来计算大约是四年。初始区块奖励是 50BTC，目前已发生两次减半，变成了 12.5，随着时间的推移出块奖励会无限趋近于 0。</p>\n<h3 id="5-%E6%80%BB%E9%87%8F%E6%81%92%E5%AE%9A">5. 总量恒定<a class="anchor" href="#5-%E6%80%BB%E9%87%8F%E6%81%92%E5%AE%9A">§</a></h3>\n<p>每四年周期产生的区块数： 6<em>24</em>365*4 = 210240 ≈ 210000</p>\n<p>区块奖励累加： 50+25+12.5+6.25+3.125+1.5625 + .... + 0 = 100</p>\n<p>两者相乘得到比特币总量 210000*100 = 2100W</p>\n<h3 id="6-%E6%94%AF%E4%BB%98%E8%87%AA%E7%94%B1">6. 支付自由<a class="anchor" href="#6-%E6%94%AF%E4%BB%98%E8%87%AA%E7%94%B1">§</a></h3>\n<p>无需受到法币跨境诸多限制，7*24 可交易</p>\n<h3 id="7-%E5%8C%BF%E5%90%8D">7. 匿名<a class="anchor" href="#7-%E5%8C%BF%E5%90%8D">§</a></h3>\n<p>只需要产生一队私钥地址对即拥有一个账户，无需实名认证，更无需税费。这也是比特币被人和 Money Laundering 关联上的原因。</p>\n<h2 id="%E6%AF%94%E7%89%B9%E5%B8%81%E6%8A%80%E6%9C%AF%E5%88%86%E6%9E%90">比特币技术分析<a class="anchor" href="#%E6%AF%94%E7%89%B9%E5%B8%81%E6%8A%80%E6%9C%AF%E5%88%86%E6%9E%90">§</a></h2>\n<h3 id="1-hash-%E7%AE%97%E6%B3%95">1. Hash 算法<a class="anchor" href="#1-hash-%E7%AE%97%E6%B3%95">§</a></h3>\n<h4 id="1-collision-resistance">1. Collision resistance<a class="anchor" href="#1-collision-resistance">§</a></h4>\n<p>Hash 算法是耐碰撞的，虽然从理论上可能存在两个 input 的 hash result 一致，但实际上</p>\n<p>基本不可能发生。注意，hash 算法未被验证过是 collision free 的。</p>\n<h4 id="2-hiding">2. Hiding<a class="anchor" href="#2-hiding">§</a></h4>\n<p>Hash 函数能隐藏输入，即给定 Hash(x) = y, 已知 y 的情况下无法反推 x，只能蛮力求解。此特性实现了 Sealed envelop。</p>\n<h4 id="3--puzzle-friendly">3.  Puzzle friendly<a class="anchor" href="#3--puzzle-friendly">§</a></h4>\n<p>Hash 计算结果不可预测，想要计算出的哈希值落在某个范围内，没有特定的办法去构造输入，只能通过蛮力碰撞。BTC 在挖矿过程中就是改成随机数 nonce 来碰撞 hash 结果，碰撞出来后结果能低成本验证。</p>\n<p>Difficult to solve, but easy to verify.</p>\n<p>这是比特币共识 POW(工作量证明)的依据。</p>\n<h3 id="2--merkle-tree">2.  Merkle Tree<a class="anchor" href="#2--merkle-tree">§</a></h3>\n<p>比特币把交易数据的以 Merkle 树的结构存储，每个叶子节点是每个交易信息的哈希，往上对相邻的两个哈希合并成字符串再哈希，继续类似的操作直到只剩下顶部的一个节点，即Merkle 根，存入区块头。这个设计极易验证某个区块整体的交易是否合法。</p>\n<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hash_Tree.svg/2560px-Hash_Tree.svg.png" alt="Merklle Tree"></p>\n<h3 id="3-%E5%85%AC%E7%A7%81%E9%92%A5%E4%BD%93%E7%B3%BB">3. 公私钥体系<a class="anchor" href="#3-%E5%85%AC%E7%A7%81%E9%92%A5%E4%BD%93%E7%B3%BB">§</a></h3>\n<p>比特币的公钥是由私钥通过<a href="https://zh.wikipedia.org/zh-hans/%E6%A4%AD%E5%9C%86%E6%9B%B2%E7%BA%BF%E5%AF%86%E7%A0%81%E5%AD%A6">椭圆曲线算法</a>导出的。 公钥密码学使用一个公钥和一个私钥来进行消息交换，公钥加密数据私钥可以解密，私钥签名数据公钥可以用来验证签名。</p>\n<h2 id="%E6%AF%94%E7%89%B9%E5%B8%81%E6%80%9D%E8%80%83">比特币思考<a class="anchor" href="#%E6%AF%94%E7%89%B9%E5%B8%81%E6%80%9D%E8%80%83">§</a></h2>\n<p>非常认可李笑来说的一句话：比特币是人类第一次用技术保证私有财产不可侵犯。</p>\n<p>我们存在银行的、放在家里的现金、股票账户甚至埋在地下的黄金都有可能被某个个人或组织无情剥夺。四十年多年前财产大洗牌的事情并不遥远。</p>\n<p>而比特币的特性保障了只要不泄露私钥，你的币永远不会被剥夺，甚至你有多少币外人都无法知道的，这在传统金融体系里面是绝无可能的。</p>\n<p>在读完比特币白皮书之后我才真正的意识到这个物种有多么的美妙，多么的令人惊叹，同时也是兴奋与后悔。</p>\n<p>惊叹中本聪神一般的设计，中本聪在发布白皮书的第一天可能就看到了现在和未来发生的事情，这是开天眼的存在。</p>\n<p>兴奋自己终于找到了一个值得奋斗一生的事业。</p>\n<p>后悔自己落后的观点和弱鸡般的执行力，导致太晚看到这份白皮书。</p>\n<p>中本聪在比特币相对成熟后归隐了，归隐前说他要去做其他事情了。他到底是谁，他去做了什么事，无人知晓。但这并不重要，理解了比特币的人或许人人都是中本聪，作者的消失也让比特币彻底的「去中心化」。</p>\n<p>Coinbase 上市前一天，创始人在推特上说道”Thank you Satoshi. Whoever you are ”，我也想谢谢中本聪，感谢他带来了如此精妙绝伦的技术和体系，让我真正愿意为之奋斗终生，也让我的人生变得不再那么迷惘。</p>\n<p>Thank you Satoshi. Whoever you are.</p>\n<h2 id="%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE">参考文献<a class="anchor" href="#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE">§</a></h2>\n<ul>\n<li>\n<p><a href="https://bitcoin.org/bitcoin.pdf">Bitcoin: A Peer-to-Peer Electronic Cash System</a></p>\n</li>\n<li>\n<p><a href="http://btc.mom/category/ahr999/">囤比特币</a></p>\n</li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%88%9D%E8%AF%86%E6%AF%94%E7%89%B9%E5%B8%81" }, "\u521D\u8BC6\u6BD4\u7279\u5E01")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%AF%94%E7%89%B9%E5%B8%81%E7%AE%80%E4%BB%8B" }, "\u6BD4\u7279\u5E01\u7B80\u4ECB")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%AF%94%E7%89%B9%E5%B8%81%E7%89%B9%E6%80%A7" }, "\u6BD4\u7279\u5E01\u7279\u6027"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#1-%E5%8E%BB%E4%B8%AD%E5%BF%83%E5%8C%96" }, "1. \u53BB\u4E2D\u5FC3\u5316")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#2-%E4%B8%8D%E5%8F%AF%E7%AF%A1%E6%94%B9" }, "2. \u4E0D\u53EF\u7BE1\u6539")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#3-%E4%BA%A7%E5%9D%97%E6%97%B6%E9%97%B4%E5%9D%87%E8%A1%A1" }, "3. \u4EA7\u5757\u65F6\u95F4\u5747\u8861")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#4-%E9%80%9A%E7%BC%A9" }, "4. \u901A\u7F29")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#5-%E6%80%BB%E9%87%8F%E6%81%92%E5%AE%9A" }, "5. \u603B\u91CF\u6052\u5B9A")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#6-%E6%94%AF%E4%BB%98%E8%87%AA%E7%94%B1" }, "6. \u652F\u4ED8\u81EA\u7531")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#7-%E5%8C%BF%E5%90%8D" }, "7. \u533F\u540D")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%AF%94%E7%89%B9%E5%B8%81%E6%8A%80%E6%9C%AF%E5%88%86%E6%9E%90" }, "\u6BD4\u7279\u5E01\u6280\u672F\u5206\u6790"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#1-hash-%E7%AE%97%E6%B3%95" }, "1. Hash \u7B97\u6CD5"),
                        React.createElement("ol", null)),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#2--merkle-tree" }, "2.  Merkle Tree")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#3-%E5%85%AC%E7%A7%81%E9%92%A5%E4%BD%93%E7%B3%BB" }, "3. \u516C\u79C1\u94A5\u4F53\u7CFB")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%AF%94%E7%89%B9%E5%B8%81%E6%80%9D%E8%80%83" }, "\u6BD4\u7279\u5E01\u601D\u8003")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE" }, "\u53C2\u8003\u6587\u732E")))),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2021-09-01T00:00:00.000Z",
    'updated': "2021-12-17T08:10:23.000Z",
    'excerpt': "初识比特币 大约 13-14 年左右就听说过比特币，当时并没有特别的印象，只是把它当成用电脑挖矿开采的“Q 币”，还用当时的破电脑跑过挖矿程序，有没有运行起来并加入网络，有没有挖到过比特币已是毫无印象。 2015 年大学毕业后...",
    'cover': "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hash_Tree.svg/2560px-Hash_Tree.svg.png",
    'tags': [
        "crypto",
        "blockchain"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/suterusu-research-report.md",
                "title": "Suterusu 研究报告",
                "link": "posts/suterusu-research-report.html",
                "date": "2022-01-15T00:00:00.000Z",
                "updated": null,
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
                "updated": "2021-12-31T10:18:44.000Z",
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
