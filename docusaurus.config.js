/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Data Guru',
    tagline: 'Améliorez vos compétences grâce à nos formations animées par des consultants-formateurs expérimentés. Chez Data Guru, notre objectif est de vous délivrer des formations de "qualité artisanale" avec des professeurs experts dans chaque domaine',
    url: 'https://dataguru.fr/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/logo.png',
    organizationName: 'Data Guru', // Usually your GitHub org/user name.
    projectName: 'blog', // Usually your repo name.
    themeConfig: {
        announcementBar: {
            id: 'support_us',
            content:
                'Participez à nos prochains webinaires pour vous formez gratuitement ! <a target="_blank" rel="noopener noreferrer" href="https://www.meetup.com/fr-FR/data-guru-meetup-group/">Meetup</a>',
            backgroundColor: '#fafbfc',
            textColor: '#091E42',
            isCloseable: true,
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
        metadata: [{name: 'keywords', content: 'data, engineer'}, {name: 'keywords', content: 'dataguru, data guru , Data guru'}],
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
                    html: ` <a href="https://www.facebook.com/DataGuru-108335435294231" target="_blank" rel="noreferrer noopener" aria-label="DataGuru Facebook">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/640px-Facebook_f_logo_%282021%29.svg.png" alt="facebook" width="25px" height="2px" />
                    </a> `,
                },
                {
                    html: `
                    <a href="https://www.linkedin.com/company/dataguru" target="_blank" rel="noreferrer noopener" aria-label="DataGuru Linkedin">
                      <img src="https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_200_200/0/1638831589865?e=2147483647&v=beta&t=Zq1zixRFUNMSm2Ldgu_hcJAYTL1gWG3VHKXO4kf9lDQ" alt="linkedin" width="25px" height="2px" />
                    </a>
                  `,
                },
                {
                    label: 'Qui sommes-nous ?',
                    href: '/quisommesnous',
                },
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
