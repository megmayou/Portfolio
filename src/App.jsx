import NavBar from "./components/navbar/NavBar";
import AboutMe from "./components/about-me/AboutMe";
import ImgProjet1 from "../src/assets/pancakes_and_fruits.png";
import Projets from "../src/components/projets/Projets";
import "./App.css";

const listAbout = [
  {
    title: "Projet 1 - Pan'Click",
    description:
      "Premier projet de groupe. L'objectif principal était d'apprendre et appréhender le travail de groupe. De comprendre l'importance de la communication entre les membres d'un groupe et de voir comment organiser son travail sans impacter celui des autres. ",
    technologie: "Javascprit",
    imgSrc: ImgProjet1,
    alt: "Pancakes avec des fruits",
  },
  {
    title: "Projet 2 - MovInder",
    description:
      "Vous avez décidé de faire une soirée film avec votre date, des amis, mais vous n'avez aucunes idées de quel film choisir? Movinder est là pour vous! Choissisez dans une liste de film et voyez si certains match avec votre paternaire de soirée ",
    technologie: "React",
    imgSr: "",
    alt: "",
  },
  {
    title: "Projet 3 - A venir",
    description: "",
    technologie: "",
    imgSrc: "",
    alt: "",
  },
];

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <Projets listAbout={listAbout} />
    </>
  );
}

export default App;
