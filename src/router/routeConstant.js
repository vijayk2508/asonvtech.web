import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";
import { link } from "./routeLink";

const routeConstant = [
  {
    name: "Home",
    path: link.HOME,
    component: Home,
  },
  {
    name: "About",
    path: link.ABOUT,
    component: About,
  },
  {
    name: "Contact",
    path: link.CONTACT,
    component: Contact,
  },
  {
    name: "Services",
    path: link.SERVICES,
    component: Services,
  },
];

export default routeConstant;
