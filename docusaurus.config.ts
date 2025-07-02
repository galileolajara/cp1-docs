import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'The Cp1 Programming Language',
  tagline: 'The Minimalistic TypeScript for C',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://cp1-lang.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'galileolajara', // Usually your GitHub org/user name.
  projectName: 'cp1', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/cp1-social-card.png',
    colorMode: {
       defaultMode: 'dark',
       disableSwitch: true,
    },
    navbar: {
      title: 'C plus 1 Programming Language',
      logo: {
        alt: 'Cp1 Programming Language',
        src: 'img/cp1-lang-logo-all-white.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Getting Started',
        },
        {
          href: 'https://github.com/galileolajara/cp1',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__item-github',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'What is Cp1?',
              to: '/docs/start/introduction',
            },
            {
              label: 'Thanks',
              to: '/docs/thanks',
            },
            {
              label: 'Give Feedback',
              to: '/docs/feedback',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/cp1',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/qBtunCNyUS',
            },
            {
              label: 'X',
              href: 'https://x.com/cp1lang',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/galileolajara/cp1',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Cp1 Programming Language, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['cpone'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
