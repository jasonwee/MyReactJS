export const routes: IBestAFSRoute[] = [
  {
    path: '/welcome',
    component: 'IndexPage',
    name: 'Welcome', // compatible with this writing
    icon: 'testicon',
    // more features view
    // https://beta-pro.ant.design/docs/advanced-menu
    // ---
    // open path in new tab
    target: '_blank',
    // Do not show top bar
    headerRender: false,
    // Do not show footer
    footerRender: false,
    // Do not show the menu
    menuRender: false,
    // Do not show the menu top bar
    menuHeaderRender: false,
    // Permission configuration, need to be used in conjunction with plugin-access
    access: 'canRead',
    // hide child nodes
    hideChildrenInMenu: true,
    // hide yourself and child nodes
    hideInMenu: true,
    // hide in breadcrumbs
    hideInBreadcrumb: true,
    // The child item is raised up and still displayed,
    flatMenu: true,
  },
];
