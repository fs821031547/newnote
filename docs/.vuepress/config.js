module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'vue',
        link: '/',
      },
      {
        text: 'math',
        link: '/math/',
      },
      {
        text: 'js',
        link: '/js/',
      },
    ],
    sidebar: [
      {
        title: '算法', // 必要的
        path: '/math/',
      },
      {
        title: 'js',
        path: '/js/',
      },
      {
        title: 'vue',
        path: 'vue/vuepress',
      },
    ],
    displayAllHeaders: true,
  },
  title: 'my-note', // 设置网站标题
  dest: './dist', // 设置输出目录
  base: '/my-note/', // 设置站点根路径
  repo: 'https://github.com/fs821031547/newnote.git', // 添加 github 链接
};
