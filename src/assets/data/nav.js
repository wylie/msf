import Comics from "../../pages/comics";
import Home from "../../pages/home";
import Illustration from "../../pages/illustration";
import JupiterJak from "../../pages/jupiterJak";
import Particle17 from "../../pages/particle17";
import PlutoPlot from "../../pages/plutoPlot";

const nav = [
  {
    text: "Home",
    component: Home,
    url: "/"
  },
  {
    text: "Illustration",
    component: Illustration,
    url: "/illustration"
  },
  {
    text: "Comics",
    component: Comics,
    url: "/comics"
  },
  {
    text: "JupiterJak",
    component: JupiterJak,
    url: "/jupiterjak"
  },
  {
    text: "Particle17",
    component: Particle17,
    url: "/particle17"
  },
  {
    text: "Pluto Plot",
    component: PlutoPlot,
    url: "/plutoplot"
  }
];

export { nav };
