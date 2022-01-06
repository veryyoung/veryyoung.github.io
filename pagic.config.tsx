export default {
  srcDir: 'src',
  theme: 'blog',
  plugins: ['blog'],
  title: "veryyoung's blog",
  description: 'Web3 Builder&Crypto Holder',
  github: 'https://github.com/veryyoung',
  nav: [
    {
      text: 'Home',
      link: '/',
      icon: 'czs-home-l'
    },
    // {
    //   text: 'Categories',
    //   link: '/categories/',
    //   icon: 'czs-category-l'
    // },
    {
      text: 'Tags',
      link: '/tags/',
      icon: 'czs-tag-l'
    },
    {
      text: 'About',
      link: '/about/',
      icon: 'czs-about-l'
    },
    // {
    //   text: 'Archives',
    //   link: '/archives/',
    //   icon: 'czs-box-l'
    // },
    // {
    //   text: 'Links',
    //   link: '/links/',
    //   icon: 'czs-link-l'
    // }
  ],
  blog: {
    root: '/posts/',
    author: 'veryyoung',
    social: {
      github: 'veryyoung',
      email: 'veryyoung.me@gmail.com',
      twitter: '0xveryyoung',
    }
  }
};
