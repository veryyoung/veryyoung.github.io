import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "posts/2021-in-review.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/2021-in-review.html",
    'title': "2021 In Review",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>2021 年回顾</h1>\n<h2 id="connect-the-dots">Connect the Dots<a class="anchor" href="#connect-the-dots">§</a></h2>\n<p>刚毕业那几年还会写 &quot;20xx 年总结&quot; 这样的文章，不知道在哪一年已经失去了这个习惯。</p>\n<p>今年发生了太多事情，让我非常有写点东西的想法。</p>\n<p>叫 &quot;总结&quot; 好像过于古板，叫 &quot;回顾&quot; 可能比较合理，毕竟作为技术人，Code Review 是个很重要的环节。</p>\n<p>之前也有想过人生可以用类似 Test-driven 的方法来执行，先写好&quot;断言&quot;，然后按照 tests 去做事情，到了一定的时间手工触发一次断言检测，以此来验证这段时间的工作、学习或者生活的效果。</p>\n<p>但是实体世界的很多事情不是只有对或错，哪怕做错很多事情也没事。当下做错的事情，做错的选择可能以后某一天也会因此受益。</p>\n<p>Steven Jobs 把这种「错误」的尝试叫做「Connect the dots」</p>\n<p>那么我的 dots 有被 connect 起来吗？</p>\n<p>有，今年才算真正的体会到这个感觉。</p>\n<p>我本是一个叛逆的人，不喜欢按照大众的思想来为人处世，很多事情喜欢问一句&quot;为什么？&quot;，&quot;凭什么？&quot;，而区块链是一群叛逆的人一起构建的网络，「金钱自由」和「代码即自由」是我非常令我热血沸腾的事情。</p>\n<p>作为一个技术人，「代码即法律」是一种具有浪漫主义&amp;理想主义色彩，且稳定可靠的理念。</p>\n<p>做传统开发的时候也习惯性的说 &quot;Show me the code&quot;，看到代码才能判断某个系统或工具是否真正可靠，而在区块链的世界，绝大部分东西都是开源的，并且有密码学为基础来保障所有参与者的安全，让想作恶的人无能为力。</p>\n<p>做 Web2.0 研发养成的很多习惯在思维方式也是和 Web3.0 非常 match，比如适应阅读英文文档，习惯找一手资料，用英文提出问题解答问题，和项目方进行沟通。</p>\n<p>更重要的是 DYOR(Do Your Own Research)，这个在 Web2.0 对人说有点不礼貌，但 Web3.0 的世界太正常不过了。</p>\n<p>工具化和逆向能力在 Web3.0 的领域也非常好用，干这类事情的人在 Web3.0 的领域被尊称为&quot;科学家&quot;。</p>\n<p>热情也全部被点燃了，仿佛回到了当初努力做好 Web2.0 工作时的场景，简直焕发第二春。</p>\n<p>适合自己的领域实在是太令人舒服了！</p>\n<h2 id="all-in-crypto">All in crypto<a class="anchor" href="#all-in-crypto">§</a></h2>\n<p>今年最大的收获是 All in cryto :)</p>\n<p><img src="../assets/images/sequoia_capital_all_in_crypto.jpg" alt="All in Cryto"></p>\n<h3 id="all-in-%E4%BA%86%E5%93%AA%E4%BA%9B%E4%B8%9C%E8%A5%BF">All in 了哪些东西？<a class="anchor" href="#all-in-%E4%BA%86%E5%93%AA%E4%BA%9B%E4%B8%9C%E8%A5%BF">§</a></h3>\n<p>金钱和精力。</p>\n<p>今年已经是大仓位在 Crypto 上了，以后也会把 Crypto 当主要的投资方向。</p>\n<p>Web2.0 的事情基本不再干了，也提不起太多兴趣，参与了一个百倍币的研发工作，和家人们组成了一个 DAO，未来也会把主要精力放在做 Web3 的建设，Crypto 的研究与投资方面。</p>\n<h3 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81-all-in">为什么要 All in？<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81-all-in">§</a></h3>\n<p>今年的 Crypto 市场和以往已完全不一样。</p>\n<p>今天可以说是 Web3.0 完成了萌芽，应用场景已经完成了 MVP，未来充满了想象力。</p>\n<h4 id="dex">DEX<a class="anchor" href="#dex">§</a></h4>\n<p>DEX 上币无须许可，冲击了 CEX传统的审核收费上币模式，任何人在 DEX 上添加流动性即可完成上币，上币完毕立马可交易。</p>\n<p>AMM(自动做市商)的出现让做市变得无比简单，添加流动资金即可，剩下的事情程序会帮你搞定。</p>\n<p>DEX 让交易变得简单安全透明可靠且便宜（暂时忽略 ETH 的高 gas，哈哈）。</p>\n<p>DEX 交易额也开始逐渐超过 CEX，可以预见未来 DEX 将会慢慢替代掉 CEX。</p>\n<h4 id="defi">DeFi<a class="anchor" href="#defi">§</a></h4>\n<p>DeFi Summer 之后 DeFi TVL(总锁仓量)开始井喷式增长，已经成了链上最重要的应用场景之一。</p>\n<p>DeFi 相比传统金融更加公开透明安全，无需信用背书、无需中心化的准入，资金来龙去脉一清二楚，逻辑都在公开的代码里面，简简单单的几百行代码就能完成传统银行几千甚至万人才能做成的事情。</p>\n<h4 id="nft">NFT<a class="anchor" href="#nft">§</a></h4>\n<p>今年是 NFT 爆发的一年。</p>\n<p>最出圈的是以 BAYC 和 CryptoPunks 为代表的 PFP 类，这类应用场景很直接，但更具有想象力的是有使用价值的 NFT，比如身份认证、产权所有权等，同时也期待更多音频、视频等创意作品在链上出现。</p>\n<h4 id="gamefi">GameFi<a class="anchor" href="#gamefi">§</a></h4>\n<p>GameFi 是非常有想象空间的事情，把传统游戏的货币体系和物品属性用 Erc20 和 Erc721 Token 代替，能真正做到资产真正属于游戏玩家。</p>\n<p>今年有不少链上游戏火爆市场，以 Axie Infinity 为主。</p>\n<h4 id="dao">DAO<a class="anchor" href="#dao">§</a></h4>\n<p>DAO 是我非常喜欢的东西， 一群志同道合的人聚在一起，为了共同的目标，可以碰撞出很多火花。</p>\n<p>今年蹦出来好多有意思的 DAO，或许 DAO 会成为接下来市场的重点方向。</p>\n<h4 id="alt-blockchain">Alt Blockchain<a class="anchor" href="#alt-blockchain">§</a></h4>\n<p>今天以太坊竞争公链、侧链、L2 也出现了一定程度的爆发。</p>\n<p>平行网络，多链齐发！</p>\n<h4 id="metaverse">Metaverse<a class="anchor" href="#metaverse">§</a></h4>\n<p>Metaverse 是今年最热的词之一了，热到 Web2.0 甚至传统行业的公司都在讨论这个事情。</p>\n<p>Facebook All in Metaverse 是这个圈子最大的事情，除此之外并没有激起太大的火花，但可以肯定这是未来的重点方向。</p>\n<h4 id="%E5%BA%94%E7%94%A8%E5%B0%8F%E7%BB%93">应用小结<a class="anchor" href="#%E5%BA%94%E7%94%A8%E5%B0%8F%E7%BB%93">§</a></h4>\n<p>以上这些应用场景或多或少存在问题。</p>\n<p>DEX 上土狗币横飞；DeFi 往往是随着挖提卖币价被砸下去导致 APR 和 TVL 一起下降的死亡螺旋；GameFi 的游戏非常粗糙，品质远低于 Web2.0，随着游戏币的暴跌结束了短暂的生命周期；土狗 DAO 横飞，给各种链上玩家甚至 Web2.0 产品空投土狗币，一堆打着 DAO 的幌子做中心化事情的组织；公链质量参差不齐，甚至出现某公链宕机超过 24h 的滑稽事情。</p>\n<p>但这些只是开始，从这些应用已经能让人有很多想象空间了，未来一定会更好。</p>\n<h4 id="%E4%BA%BA%E6%89%8D%E6%B5%81%E5%85%A5%E8%B5%84%E6%9C%AC%E5%85%B3%E6%B3%A8">人才流入&amp;资本关注<a class="anchor" href="#%E4%BA%BA%E6%89%8D%E6%B5%81%E5%85%A5%E8%B5%84%E6%9C%AC%E5%85%B3%E6%B3%A8">§</a></h4>\n<p>优秀人才的大量流入，资本的关注是赛道蓬勃发展的标志之一，过去一年人才和资本纷纷涌入 Web3.0 领域。</p>\n<p>谁谁谁进军元宇宙，某某机构 All in crypto 已是常事。</p>\n<h2 id="love-and-lose">Love and lose<a class="anchor" href="#love-and-lose">§</a></h2>\n<p>Steven Jobs 说：&quot;You’ve got to find what you love&quot;，今年我确实找到了，并且沉迷其中。</p>\n<p>沉迷其中也让我失去很多，对传统的工作提不起兴趣，和传统行业的朋友或从事传统投资的朋友有了很大的割裂感，交流都快有困难了。</p>\n<p>有些事情会慢慢忘记，有些人也会消失在记忆里，思想的隔阂是极难克服的，也是没必要克服的，每个人都有自己要走的路，都有自己的圈子。</p>\n<p>但我依旧很开心全身心投入这个行业，我也有一群理想主义者的 DAO 家人无话不谈，这就够了。</p>\n<blockquote>\n<p>Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma — which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.</p>\n</blockquote>\n<p>遵循自己内心的想法，并按之行动，别的并不是那么重要。</p>\n<h2 id="budil">#BUDIL<a class="anchor" href="#budil">§</a></h2>\n<p>今年有段时间花在撸毛赚钱上的时间太多，学习和建设的时间太少。这是个很不好的现象，这甚至有点违背我喜欢的做事风格，『但行好事，莫问前程』。</p>\n<p>好在年末算上强迫自己纠正过来了，每天沉迷各种项目研究无法自拔，this is what I love.</p>\n<blockquote>\n<p>重点是 #BUDIL，赚钱只是附赠，不要本末倒置。牢记！</p>\n</blockquote>\n<p>这是我今年元旦发的推特，希望能执行好。</p>\n<p>最近看到一篇文章 <a href="https://mirror.xyz/0x0E58bB9795a9D0F065e3a8Cc2aed2A63D6977d8A/fsrtEeVftvNA4OGRTrQ7aZqqPWQ09foExSRDqeNxETc">道路的选择，为什么Web3革命不会出现在中国？</a>，内容非常杀人诛心。</p>\n<p>核心结论：</p>\n<blockquote>\n<p>中国不会触及Web3。 无论从文化历史的角度还是从国家战略的角度，Web3都与中国根本不相容。</p>\n</blockquote>\n<p>很无奈的事实是 Web3.0 在迸发更多创新可能性，在颠覆着整个互联网，而跟中国基本没啥关系。</p>\n<p>中国早晚会迎头追上，但目前看起来毫无希望。</p>\n<p>虽然革命不会出现在中国，但这又怎样呢？</p>\n<p>我们有一帮的革命先驱，他们就是敢于逆流而上，他们本是互联网或金融或其他领域的的精英人士，本可以拥有外人羡慕的那种很光明的生活，但是他们就是为了热爱一头扎进去，头也不回。</p>\n<p>以一首最近很喜欢的歌结束这篇文章。</p>\n<blockquote>\n<p>爱你孤身走暗巷</p>\n</blockquote>\n<blockquote>\n<p>爱你不跪的模样</p>\n</blockquote>\n<blockquote>\n<p>爱你对峙过绝望</p>\n</blockquote>\n<blockquote>\n<p>不肯哭一场</p>\n</blockquote>\n<blockquote>\n<p>爱你来自于蛮荒</p>\n</blockquote>\n<blockquote>\n<p>一生不借谁的光</p>\n</blockquote>\n<blockquote>\n<p>你将造你的城邦</p>\n</blockquote>\n<blockquote>\n<p>在废墟之上</p>\n</blockquote>\n<blockquote>\n<p>去吗 去啊 以最卑微的梦</p>\n</blockquote>\n<blockquote>\n<p>战吗 战啊 以最孤高的梦</p>\n</blockquote>\n<blockquote>\n<p>致那黑夜中的呜咽与怒吼</p>\n</blockquote>\n<blockquote>\n<p>谁说站在光里的才算英雄</p>\n</blockquote>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/Hlp8XD0R5qo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "2021 \u5E74\u56DE\u987E"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="connect-the-dots">Connect the Dots<a class="anchor" href="#connect-the-dots">§</a></h2>\n<p>刚毕业那几年还会写 &quot;20xx 年总结&quot; 这样的文章，不知道在哪一年已经失去了这个习惯。</p>\n<p>今年发生了太多事情，让我非常有写点东西的想法。</p>\n<p>叫 &quot;总结&quot; 好像过于古板，叫 &quot;回顾&quot; 可能比较合理，毕竟作为技术人，Code Review 是个很重要的环节。</p>\n<p>之前也有想过人生可以用类似 Test-driven 的方法来执行，先写好&quot;断言&quot;，然后按照 tests 去做事情，到了一定的时间手工触发一次断言检测，以此来验证这段时间的工作、学习或者生活的效果。</p>\n<p>但是实体世界的很多事情不是只有对或错，哪怕做错很多事情也没事。当下做错的事情，做错的选择可能以后某一天也会因此受益。</p>\n<p>Steven Jobs 把这种「错误」的尝试叫做「Connect the dots」</p>\n<p>那么我的 dots 有被 connect 起来吗？</p>\n<p>有，今年才算真正的体会到这个感觉。</p>\n<p>我本是一个叛逆的人，不喜欢按照大众的思想来为人处世，很多事情喜欢问一句&quot;为什么？&quot;，&quot;凭什么？&quot;，而区块链是一群叛逆的人一起构建的网络，「金钱自由」和「代码即自由」是我非常令我热血沸腾的事情。</p>\n<p>作为一个技术人，「代码即法律」是一种具有浪漫主义&amp;理想主义色彩，且稳定可靠的理念。</p>\n<p>做传统开发的时候也习惯性的说 &quot;Show me the code&quot;，看到代码才能判断某个系统或工具是否真正可靠，而在区块链的世界，绝大部分东西都是开源的，并且有密码学为基础来保障所有参与者的安全，让想作恶的人无能为力。</p>\n<p>做 Web2.0 研发养成的很多习惯在思维方式也是和 Web3.0 非常 match，比如适应阅读英文文档，习惯找一手资料，用英文提出问题解答问题，和项目方进行沟通。</p>\n<p>更重要的是 DYOR(Do Your Own Research)，这个在 Web2.0 对人说有点不礼貌，但 Web3.0 的世界太正常不过了。</p>\n<p>工具化和逆向能力在 Web3.0 的领域也非常好用，干这类事情的人在 Web3.0 的领域被尊称为&quot;科学家&quot;。</p>\n<p>热情也全部被点燃了，仿佛回到了当初努力做好 Web2.0 工作时的场景，简直焕发第二春。</p>\n<p>适合自己的领域实在是太令人舒服了！</p>\n<h2 id="all-in-crypto">All in crypto<a class="anchor" href="#all-in-crypto">§</a></h2>\n<p>今年最大的收获是 All in cryto :)</p>\n<p><img src="../assets/images/sequoia_capital_all_in_crypto.jpg" alt="All in Cryto"></p>\n<h3 id="all-in-%E4%BA%86%E5%93%AA%E4%BA%9B%E4%B8%9C%E8%A5%BF">All in 了哪些东西？<a class="anchor" href="#all-in-%E4%BA%86%E5%93%AA%E4%BA%9B%E4%B8%9C%E8%A5%BF">§</a></h3>\n<p>金钱和精力。</p>\n<p>今年已经是大仓位在 Crypto 上了，以后也会把 Crypto 当主要的投资方向。</p>\n<p>Web2.0 的事情基本不再干了，也提不起太多兴趣，参与了一个百倍币的研发工作，和家人们组成了一个 DAO，未来也会把主要精力放在做 Web3 的建设，Crypto 的研究与投资方面。</p>\n<h3 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81-all-in">为什么要 All in？<a class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81-all-in">§</a></h3>\n<p>今年的 Crypto 市场和以往已完全不一样。</p>\n<p>今天可以说是 Web3.0 完成了萌芽，应用场景已经完成了 MVP，未来充满了想象力。</p>\n<h4 id="dex">DEX<a class="anchor" href="#dex">§</a></h4>\n<p>DEX 上币无须许可，冲击了 CEX传统的审核收费上币模式，任何人在 DEX 上添加流动性即可完成上币，上币完毕立马可交易。</p>\n<p>AMM(自动做市商)的出现让做市变得无比简单，添加流动资金即可，剩下的事情程序会帮你搞定。</p>\n<p>DEX 让交易变得简单安全透明可靠且便宜（暂时忽略 ETH 的高 gas，哈哈）。</p>\n<p>DEX 交易额也开始逐渐超过 CEX，可以预见未来 DEX 将会慢慢替代掉 CEX。</p>\n<h4 id="defi">DeFi<a class="anchor" href="#defi">§</a></h4>\n<p>DeFi Summer 之后 DeFi TVL(总锁仓量)开始井喷式增长，已经成了链上最重要的应用场景之一。</p>\n<p>DeFi 相比传统金融更加公开透明安全，无需信用背书、无需中心化的准入，资金来龙去脉一清二楚，逻辑都在公开的代码里面，简简单单的几百行代码就能完成传统银行几千甚至万人才能做成的事情。</p>\n<h4 id="nft">NFT<a class="anchor" href="#nft">§</a></h4>\n<p>今年是 NFT 爆发的一年。</p>\n<p>最出圈的是以 BAYC 和 CryptoPunks 为代表的 PFP 类，这类应用场景很直接，但更具有想象力的是有使用价值的 NFT，比如身份认证、产权所有权等，同时也期待更多音频、视频等创意作品在链上出现。</p>\n<h4 id="gamefi">GameFi<a class="anchor" href="#gamefi">§</a></h4>\n<p>GameFi 是非常有想象空间的事情，把传统游戏的货币体系和物品属性用 Erc20 和 Erc721 Token 代替，能真正做到资产真正属于游戏玩家。</p>\n<p>今年有不少链上游戏火爆市场，以 Axie Infinity 为主。</p>\n<h4 id="dao">DAO<a class="anchor" href="#dao">§</a></h4>\n<p>DAO 是我非常喜欢的东西， 一群志同道合的人聚在一起，为了共同的目标，可以碰撞出很多火花。</p>\n<p>今年蹦出来好多有意思的 DAO，或许 DAO 会成为接下来市场的重点方向。</p>\n<h4 id="alt-blockchain">Alt Blockchain<a class="anchor" href="#alt-blockchain">§</a></h4>\n<p>今天以太坊竞争公链、侧链、L2 也出现了一定程度的爆发。</p>\n<p>平行网络，多链齐发！</p>\n<h4 id="metaverse">Metaverse<a class="anchor" href="#metaverse">§</a></h4>\n<p>Metaverse 是今年最热的词之一了，热到 Web2.0 甚至传统行业的公司都在讨论这个事情。</p>\n<p>Facebook All in Metaverse 是这个圈子最大的事情，除此之外并没有激起太大的火花，但可以肯定这是未来的重点方向。</p>\n<h4 id="%E5%BA%94%E7%94%A8%E5%B0%8F%E7%BB%93">应用小结<a class="anchor" href="#%E5%BA%94%E7%94%A8%E5%B0%8F%E7%BB%93">§</a></h4>\n<p>以上这些应用场景或多或少存在问题。</p>\n<p>DEX 上土狗币横飞；DeFi 往往是随着挖提卖币价被砸下去导致 APR 和 TVL 一起下降的死亡螺旋；GameFi 的游戏非常粗糙，品质远低于 Web2.0，随着游戏币的暴跌结束了短暂的生命周期；土狗 DAO 横飞，给各种链上玩家甚至 Web2.0 产品空投土狗币，一堆打着 DAO 的幌子做中心化事情的组织；公链质量参差不齐，甚至出现某公链宕机超过 24h 的滑稽事情。</p>\n<p>但这些只是开始，从这些应用已经能让人有很多想象空间了，未来一定会更好。</p>\n<h4 id="%E4%BA%BA%E6%89%8D%E6%B5%81%E5%85%A5%E8%B5%84%E6%9C%AC%E5%85%B3%E6%B3%A8">人才流入&amp;资本关注<a class="anchor" href="#%E4%BA%BA%E6%89%8D%E6%B5%81%E5%85%A5%E8%B5%84%E6%9C%AC%E5%85%B3%E6%B3%A8">§</a></h4>\n<p>优秀人才的大量流入，资本的关注是赛道蓬勃发展的标志之一，过去一年人才和资本纷纷涌入 Web3.0 领域。</p>\n<p>谁谁谁进军元宇宙，某某机构 All in crypto 已是常事。</p>\n<h2 id="love-and-lose">Love and lose<a class="anchor" href="#love-and-lose">§</a></h2>\n<p>Steven Jobs 说：&quot;You’ve got to find what you love&quot;，今年我确实找到了，并且沉迷其中。</p>\n<p>沉迷其中也让我失去很多，对传统的工作提不起兴趣，和传统行业的朋友或从事传统投资的朋友有了很大的割裂感，交流都快有困难了。</p>\n<p>有些事情会慢慢忘记，有些人也会消失在记忆里，思想的隔阂是极难克服的，也是没必要克服的，每个人都有自己要走的路，都有自己的圈子。</p>\n<p>但我依旧很开心全身心投入这个行业，我也有一群理想主义者的 DAO 家人无话不谈，这就够了。</p>\n<blockquote>\n<p>Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma — which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.</p>\n</blockquote>\n<p>遵循自己内心的想法，并按之行动，别的并不是那么重要。</p>\n<h2 id="budil">#BUDIL<a class="anchor" href="#budil">§</a></h2>\n<p>今年有段时间花在撸毛赚钱上的时间太多，学习和建设的时间太少。这是个很不好的现象，这甚至有点违背我喜欢的做事风格，『但行好事，莫问前程』。</p>\n<p>好在年末算上强迫自己纠正过来了，每天沉迷各种项目研究无法自拔，this is what I love.</p>\n<blockquote>\n<p>重点是 #BUDIL，赚钱只是附赠，不要本末倒置。牢记！</p>\n</blockquote>\n<p>这是我今年元旦发的推特，希望能执行好。</p>\n<p>最近看到一篇文章 <a href="https://mirror.xyz/0x0E58bB9795a9D0F065e3a8Cc2aed2A63D6977d8A/fsrtEeVftvNA4OGRTrQ7aZqqPWQ09foExSRDqeNxETc">道路的选择，为什么Web3革命不会出现在中国？</a>，内容非常杀人诛心。</p>\n<p>核心结论：</p>\n<blockquote>\n<p>中国不会触及Web3。 无论从文化历史的角度还是从国家战略的角度，Web3都与中国根本不相容。</p>\n</blockquote>\n<p>很无奈的事实是 Web3.0 在迸发更多创新可能性，在颠覆着整个互联网，而跟中国基本没啥关系。</p>\n<p>中国早晚会迎头追上，但目前看起来毫无希望。</p>\n<p>虽然革命不会出现在中国，但这又怎样呢？</p>\n<p>我们有一帮的革命先驱，他们就是敢于逆流而上，他们本是互联网或金融或其他领域的的精英人士，本可以拥有外人羡慕的那种很光明的生活，但是他们就是为了热爱一头扎进去，头也不回。</p>\n<p>以一首最近很喜欢的歌结束这篇文章。</p>\n<blockquote>\n<p>爱你孤身走暗巷</p>\n</blockquote>\n<blockquote>\n<p>爱你不跪的模样</p>\n</blockquote>\n<blockquote>\n<p>爱你对峙过绝望</p>\n</blockquote>\n<blockquote>\n<p>不肯哭一场</p>\n</blockquote>\n<blockquote>\n<p>爱你来自于蛮荒</p>\n</blockquote>\n<blockquote>\n<p>一生不借谁的光</p>\n</blockquote>\n<blockquote>\n<p>你将造你的城邦</p>\n</blockquote>\n<blockquote>\n<p>在废墟之上</p>\n</blockquote>\n<blockquote>\n<p>去吗 去啊 以最卑微的梦</p>\n</blockquote>\n<blockquote>\n<p>战吗 战啊 以最孤高的梦</p>\n</blockquote>\n<blockquote>\n<p>致那黑夜中的呜咽与怒吼</p>\n</blockquote>\n<blockquote>\n<p>谁说站在光里的才算英雄</p>\n</blockquote>\n<iframe width="560" height="315" src="https://www.youtube.com/embed/Hlp8XD0R5qo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#connect-the-dots" }, "Connect the Dots")),
            React.createElement("li", null,
                React.createElement("a", { href: "#all-in-crypto" }, "All in crypto"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#all-in-%E4%BA%86%E5%93%AA%E4%BA%9B%E4%B8%9C%E8%A5%BF" }, "All in \u4E86\u54EA\u4E9B\u4E1C\u897F\uFF1F")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81-all-in" }, "\u4E3A\u4EC0\u4E48\u8981 All in\uFF1F"),
                        React.createElement("ol", null)))),
            React.createElement("li", null,
                React.createElement("a", { href: "#love-and-lose" }, "Love and lose")),
            React.createElement("li", null,
                React.createElement("a", { href: "#budil" }, "#BUDIL")))),
    'author': "veryyoung",
    'contributors': [
        "veryyoung"
    ],
    'date': "2022-01-04T00:00:00.000Z",
    'updated': "2022-01-14T19:37:11.000Z",
    'excerpt': "Connect the Dots 刚毕业那几年还会写 \"20xx 年总结\" 这样的文章，不知道在哪一年已经失去了这个习惯。 今年发生了太多事情，让我非常有写点东西的想法。 叫 \"总结\" 好像过于古板，叫 \"回顾\" 可能比较合理，毕竟作为技术人，Co...",
    'cover': "../assets/images/sequoia_capital_all_in_crypto.jpg",
    'tags': [
        "crypto",
        "blockchain",
        "life"
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
