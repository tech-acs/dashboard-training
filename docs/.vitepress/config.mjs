import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dashboard Dev't Course",
  description: "Dashboards for large-scale field data collection (Censuses and Surveys).",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      /*{ text: 'Examples', link: '/markdown-examples' }*/
    ],

    sidebar: [
      {
        text: 'Fundamentals',
        items: [
            { text: 'Basic Tools', link: '/fundamentals/basic-tools'},
            { text: 'PHP & Laravel', link: '/fundamentals/php-laravel'},
            { text: 'CSPro', link: '/fundamentals/cspro'},
            { text: 'CAPI Apps', link: '/fundamentals/capi-apps'},
        ]
      }, {
        text: '1. Getting Started',
        collapsed: true,
        items: [
            { text: 'Requirements', link: '/getting-started/requirements'},
            { text: 'Training Sandbox', link: '/getting-started/training-sandbox'},
            { text: 'Configuration', link: '/getting-started/configuration'},
        ]
      }, {
        text: '2. Foundation',
        collapsed: true,
        items: [
            { text: 'Architectural Overview', link: '/foundation/architectural-overview'},
            { text: 'Data Sources', link: '/foundation/data-sources'},
            { text: 'Area Hierarchy', link: '/foundation/area-hierarchy'},
            { text: 'Areas', link: '/foundation/areas'},
            { text: 'Reference Values', link: '/foundation/reference-values'},
            { text: 'Dashboard Artefacts', link: '/foundation/dashboard-artefacts'},
            { text: 'Artefact Organization', link: '/foundation/artefact-organization'},
        ]
      }, {
        text: '3. Building a Dashboard',
        collapsed: true,
        items: [
            { text: 'Understanding CSPro Data', link: '/building-a-dashboard/understanding-cspro-data'},
            { text: 'Folder Structure', link: '/building-a-dashboard/folder-structure'},
            { text: 'The Query Builder', link: '/building-a-dashboard/the-query-builder'},
            { text: 'Query Fragments', link: '/building-a-dashboard/query-fragments'},
            { text: 'Scorecards', link: '/building-a-dashboard/scorecards'},
            { text: 'Indicators', link: '/building-a-dashboard/indicators'},
            { text: 'Area Filter', link: '/building-a-dashboard/area-filter'},
            { text: 'Map Indicators', link: '/building-a-dashboard/map-indicators'},
            { text: 'Gauges', link: '/building-a-dashboard/gauges'},
            { text: 'Reports', link: '/building-a-dashboard/reports'},
            { text: 'Area Insights', link: '/building-a-dashboard/area-insights'},
            { text: 'Hierarchical Compatibility', link: '/building-a-dashboard/hierarchical-compatibility'},
        ]
      }, {
        text: '4. Advanced Topics',
        collapsed: true,
        items: [
            { text: 'Developer Mode', link: '/advanced-topics/developer-mode'},
            { text: 'Localization', link: '/advanced-topics/localization'},
            { text: 'Area Restrictions', link: '/advanced-topics/area-restrictions'},
            { text: 'Upgrading Versions', link: '/advanced-topics/upgrading-versions'},
            { text: 'Customizing Branding', link: '/advanced-topics/customizing-branding'},
            { text: 'Reference Value Synthesizers', link: '/advanced-topics/reference-value-synthesizers'},
            { text: 'Caching', link: '/advanced-topics/caching'},
        ]
      }, {
        text: '5. Management',
        collapsed: true,
        items: [
            { text: 'Users', link: '/management/users'},
            { text: 'Permissions & Roles', link: '/management/permissions-roles'},
            { text: 'Announcements', link: '/management/announcements'},
            { text: 'Usage Stats', link: '/management/usage-stats'},
            { text: 'Query Analytics', link: '/management/query-analytics'},
            { text: 'Settings', link: '/management/settings'},
        ]
      },
        { text: 'Exercises', link: ''},
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tech-acs/dashboard-training' }
    ],

    search: {
      provider: 'local'
    }
  }
})
