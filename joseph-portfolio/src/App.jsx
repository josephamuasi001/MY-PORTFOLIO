import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
      </main>

    </div>
  );
}

export default App;