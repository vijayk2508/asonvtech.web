import { link } from './routeLink'

const routeConstant = [
  {
    name: 'Home',
    path: link.HOME,
    exact: true,
    visible: true,
    accessibility: true,
    routeComponentParent: "pages",
    routeComponentPath: "home",
  },
  {
    name: 'About',
    path: link.ABOUT,
    exact: true,
    visible: true,
    accessibility: true,
    routeComponentParent: "pages",
    routeComponentPath: "about",
  },
  {
    name: 'Blog',
    visible: true,
    exact: true,
    path: link.BLOG,
    accessibility: true,
    routeComponentParent: "pages",
    routeComponentPath: "blog",
  },
  {
    name: 'BlogDetail',
    visible: false,
    exact: true,
    path: `${link.BLOG}/:id`,
    accessibility: true,
    routeComponentParent: "pages",
    routeComponentPath: "components/blog/detail",
  },
  {
    name: 'Products',
    path: link.PRODUCTS,
    exact: true,
    visible: false,
    accessibility: false,
    routeComponentParent: "pages",
    routeComponentPath: "products",
  },
  {
    name: 'Services',
    path: link.SERVICES,
    exact: true,
    visible: true,
    accessibility: true,
    routeComponentParent: "pages",
    routeComponentPath: "services",
  },
  {
    name: 'Contact Us',
    path: link.CONTACT,
    exact: true,
    visible: false,
    accessibility: false,
    routeComponentParent: "pages",
    routeComponentPath: "contactus",
  },
  {
    name: 'Faq',
    visible: false,
    exact: true,
    path: link.FAQ,
    accessibility: true,
    routeComponentParent: "pages",
    routeComponentPath: "faq",
  },

  {
    name: '404',
    visible: false,
    exact: false,
    path: link.Error404,
    accessibility: true,
    routeComponentParent: "pages",
    routeComponentPath: "error404",
  },
]

export default routeConstant
