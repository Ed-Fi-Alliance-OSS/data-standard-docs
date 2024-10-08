// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ed-Fi Alliance',
  tagline: 'Connecting Education Data. Seamlessly. Securely.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.ed-fi.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/data-standard-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ed-fi-alliance-oss', // Usually your GitHub org/user name.
  projectName: 'data-standard-docs', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl: `https://github.com/ed-fi-alliance-oss/data-standard-docs/tree/main/docs/`,
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        googleTagManager: {
          containerId: "GTM-KGR2977"
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ed-fi-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Ed-Fi Docs Logo',
          src: 'img/ed-fi-logo.webp',
          srcDark: 'img/ed-fi-logo-light.webp',
        },
        items: [
          {
            href: 'https://docs.ed-fi.org/getting-started',
            label: 'Getting Started',
            position: 'left',
          },
          { href: 'https://docs.ed-fi.org/partners', label: 'Partners', position: 'left' },
          { href: 'https://docs.ed-fi.org/community', label: 'Community', position: 'left' },
          { href: 'https://docs.ed-fi.org/reference', label: 'Reference', position: 'left' },
          { href: 'https://docs.ed-fi.org/blog', label: 'Dev Blog', position: 'left' },
          {
            href: 'https://academy.ed-fi.org/',
            label: 'Academy',
            position: 'right',
          },
          {
            href: 'https://www.ed-fi.org/',
            label: 'ed-fi.org',
            position: 'right',
          },
        ],
      },
      prism: {
        additionalLanguages: ['powershell', 'csharp', 'sql', 'json'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'HFTFG7KSKA',

        // Public API key: it is safe to commit it
        apiKey: 'a58d193c70793d68151589d3cfbdeb6b',

        indexName: 'ed-fi-alliance-ossio',

        // Optional: see doc section below
        contextualSearch: false,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        placeholder: 'Ask me something',

        //... other Algolia params
        headerLinks: [{ search: true }],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { href: 'https://docs.ed-fi.org/getting-started', label: 'Getting Started' },
              { href: 'https://docs.ed-fi.org/partners', label: 'Partners' },
              { href: 'https://docs.ed-fi.org/community', label: 'Community' },
              { href: 'https://docs.ed-fi.org/reference', label: 'Reference' },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                href: 'https://community.ed-fi.org/',
                label: 'Community Hub',
                position: 'right',
              },
              {
                href: 'https://academy.ed-fi.org/',
                label: 'Academy',
                position: 'right',
              },
              {
                href: 'https://exchange.ed-fi.org/',
                label: 'Exchange',
                position: 'right',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Ed-Fi Alliance',
                href: 'https://www.ed-fi.org',
              },
              {
                label: 'Ed-Fi News',
                href: 'https://www.ed-fi.org/blog',
              },
              {
                label: 'Ed-Fi Events',
                href: 'https://www.ed-fi.org/events/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ed-Fi Alliance.`,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap',
      },
    },
  ],
  stylesheets: [
    {
      href: 'https://unpkg.com/@antonz/codapi@0.19.7/dist/snippet.css',
    },
  ],
  scripts: [
    {
      src: 'https://unpkg.com/@antonz/codapi@0.19.7/dist/snippet.js',
      defer: true,
    },
  ],
};

export default config;
