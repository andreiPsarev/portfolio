import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
