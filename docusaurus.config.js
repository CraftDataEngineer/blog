/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Data Guru',
  tagline: 'En cours de réalisation',
  url: 'https://blog.craft-data-engineer.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CraftDataEngineer', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'support_us',
      content:
          'Inscription ouverte pour la prochaine session profité des dernières places !',
      backgroundColor: '#fafbfc',
      textColor: 'black',
      isCloseable: false,
    },
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
        src: 'img/logo.png'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: "Blog",
          position: 'right',
        },
        {
          to: 'form/',
          activeBasePath: 'docs',
          label: 'Nous Contacter',
          position: 'right',
        }
        ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Qualiopi',
        src: 'img/footer/qce.png',
        width: 400,
        height: 400,
      },
      /* links: [
        {
          label: 'Facebook',
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
      ],*/
      copyright: `Copyright © ${new Date().getFullYear()} Data Guru, Inc.`,
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
