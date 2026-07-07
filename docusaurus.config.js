// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '中国近代史时间轴',
  tagline: '从鸦片战争到新中国成立（1840-1949）',
  favicon: 'img/favicon.ico',

  url: 'https://chxu11.github.io',
  // baseUrl  需要改成你的仓库名，如果你启用了GitHub Pages，请改成你的仓库名,默认是/
  baseUrl: '/timelineWeb/',
  // 对于死链接，默认是warn，可以改成其他的选项，比如ignore,throw
  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"], // 支持中英文
        indexBlog: true, // 是否索引博客
        indexDocs: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false, // 禁用博客
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '中国近代史时间轴',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          
          {
            to: '/docs/0',
            label: '📘文档',
            position: 'left',
          },
          // 类型3：下拉菜单
          {
            type: 'dropdown',
            label: '更多',
            position: 'left',
            items: [
              // {
              //   label: 'github',
              //   to: 'https://github.com/wxhzhwxhzh',
              // },
              {
                label: '文档',
                to: '/docs/0',
              },
              // {
              //   label: 'AIChatOS',
              //   href: 'https://cht18.aichatosclx.com/',
              // },

            ],
          },
          //右边链接
          // 类型6：搜索框
          {
            type: 'search',
            position: 'right',
          },

          // 类型7：语言切换
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/chxu11/timelineWeb',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 中国近代史时间轴`,
      },

      prism: {
        theme: themes.github,
        darkTheme: themes.nightOwl,
      },
      // -----------插件----------
      plugins: [
        '@docusaurus/plugin-search',
        // 其他插件...
      ],

      // ---------- 公告栏 ----------
      announcementBar: {
        id: 'support_us',
        content:
            '⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ <a href="https://github.com/chxu11/timelineWeb" target="_blank" rel="noopener noreferrer">GitHub 仓库</a> ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },

    }),
};

module.exports = config;