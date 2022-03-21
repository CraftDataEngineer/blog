/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Craft Data Engineer',
  tagline: 'En cours de réalisation',
  url: 'https://blog.craft-data-engineer.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CraftDataEngineer', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    algolia: {
      apiKey: 'b72d4e9e38b1ae07487893bad95e433c',
      indexName: 'blog',
      appId: 'Z1AMGAQA6Q',
      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'BLOG',
          position: 'left',
        }
        ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          label: 'Stack Overflow',
          href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        },
        {
          label: 'Linkedin',
          href: 'https://discordapp.com/invite/docusaurus',
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/docusaurus',
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Craft Data Engineer, Inc.`,
    },
  },
  customFields: {
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/CraftDataEngineer/blog/'
        },
        gtag: {
          trackingID: 'G-XN0PYBT2T9',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/CraftDataEngineer/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
