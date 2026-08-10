import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Services from "./sections/Services";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Skills />
      </main>

    </div>
  );
}

export default App;