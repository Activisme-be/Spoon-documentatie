module.exports = {
    base: '/Spoon-documentatie/',
    title: 'Activisme_BE Spoon',
    description: 'De documentatie omtrent onze starter template genaamd spoon.',

    themeConfig: {
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'Activisme-be/Spoon',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Github',

        // Optional options for generating "Edit this page" link

        // if your docs are in a different repo from your main project:
        docsRepo: 'Activisme-be/Spoon-documentatie',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // default value is true. Allows to hide next page links on all pages
        nextLinks: true,
        // default value is true. Allows to hide prev page links on all pages
        prevLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help ons de documentatie te verbeteren!',

        displayAllHeaders: true,
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Changelog', link: '/' },
            { text: 'Community', link: '/' }
        ]
    }
}