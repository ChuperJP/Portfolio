import Header from "./components/Header";
import About from "./components/About";
import Competences from "./components/Competences";
import Projets from "./components/Projets";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <About />
      <Competences />
      <Projets />
      <Contact />
    </main>
  );
}
