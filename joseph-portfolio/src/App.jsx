import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>

    </div>
  );
}

export default App;