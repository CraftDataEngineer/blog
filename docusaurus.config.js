/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Data Guru | Data Engineer',
    tagline: 'Data Engineer',
    url: 'https://dataguru.fr/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Data Guru', // Usually your GitHub org/user name.
    projectName: 'blog', // Usually your repo name.
    themeConfig: {
        announcementBar: {
            id: 'support_us',
            content:
                'Inscription ouverte pour la prochaine session profitez des dernières places !',
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
        metadata: [{name: 'keywords', content: 'data, engineer'}, {name: 'keywords', content: 'dataguru, data guru'}],
        navbar: {
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.png',
                width: 80,
                height: 80,
            },
            items: [
                {
                    to: '/',
                    activeBasePath: 'accueil',
                    label: "ACCUEIL",
                    position: 'right',
                },
                {
                    to: 'bootcamp/',
                    activeBasePath: 'docs',
                    label: "BOOTCAMP",
                    position: 'right',
                },
                {
                    to: 'catalogue/',
                    activeBasePath: 'docs',
                    label: 'LES FORMATIONS',
                    position: 'right',
                },
                {
                    to: 'blog/',
                    activeBasePath: 'blog',
                    label: "LE BLOG",
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
            links: [
                {
                    label: 'Facebook',
                    href: 'https://www.facebook.com/DataGuru-108335435294231',
                },
                {
                    label: 'Linkedin',
                    href: 'https://www.linkedin.com/company/dataguru',
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Data Guru, Inc.`,
        },
    },
    customFields: {},
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: false,
                blog: {
                    blogTitle: 'DataGuru Blog',
                    showReadingTime: true,
                    blogSidebarTitle: 'Les posts',
                    blogSidebarCount: 'ALL',
                    postsPerPage: 'ALL',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                }
            },
        ],
    ],
};
