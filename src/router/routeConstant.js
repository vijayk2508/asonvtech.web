import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";
import { link } from "./routeLink";

const route = {
  HOME: {
    name: "Home",
    path: link.HOME,
    component: <Home />,
  },
  ABOUT: {
    name: "About",
    path: link.ABOUT,
    component: <About />,
  },
  CONTACT: {
    name: "Contact",
    path: link.CONTACT,
    component: <Contact />,
  },
  SERVICES: {
    name: "Services",
    path: link.SERVICES,
    component: <Services />,
  },
};

export default route;
