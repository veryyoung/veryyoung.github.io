export default {
  srcDir: 'src',
  theme: 'blog',
  plugins: ['blog'],
  title: "veryyoung's blog",
  description: '技术研发，投资和生活方面的自言自语，并不一定能形成体系，并不一定能给你带来帮助，但希望你能 enjoy it.',
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
