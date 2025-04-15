// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FunBlocks AI',
  tagline: 'You ultimate AI workspace for creativity and productivity',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://funblocks.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/', // 让 docs 成为 /docs/ 下的根路径
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: 'FunBlocks AI Blog: Insights and Innovations',
          blogDescription: 'Explore tips, tricks, and insights to maximize your FunBlocks AI experience!',
          postsPerPage: 1,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 1,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'thinking-matters', // 唯一ID，用于URL和引用
        path: 'thinking-matters', // 文档的物理路径
        routeBasePath: 'thinking-matters', // URL路径前缀
        sidebarPath: require.resolve('./sidebars-thinking-matters.js'), // API文档的侧边栏配置
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'FunBlocks',
        logo: {
          alt: 'FunBlocks Logo',
          src: 'img/icon.png',
        },
        items: [
          { to: '/aiflow', label: 'AIFlow', position: 'left' },
          { to: 'https://www.funblocks.net/aitools', label: 'AI Tools', position: 'left' },
          { to: '/slides', label: 'AI Slides', position: 'left' },
          { to: '/aidocs', label: 'AI Docs', position: 'left' },
          { to: '/welcome_extension', label: 'AI Extension', position: 'left' },
          { to: 'https://app.funblocks.net/#/aiplans', label: 'Pricing', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'thinkingMattersSidebar',
            position: 'right',
            label: 'Thinking Matters',
            docsPluginId: 'thinking-matters', // 指定使用哪个文档插件
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',     // 默认为 light 模式
        disableSwitch: true,      // 禁用切换按钮
        respectPrefersColorScheme: false, // 忽略系统偏好
      },
      metadata: [
        { name: 'keywords', content: 'FunBlocks AI, AI Tools, Mindmap generator, infographic generator, brainstorming, AI ideation, AI writing, AI reading, AI image generate, FunBlocks AIFlow' },
      ]
    }),
};

export default config;
