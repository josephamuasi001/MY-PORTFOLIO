import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useEffect, useState } from "react";





function App() {

  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
  document.documentElement.setAttribute(
    "data-theme",
    theme
  );

  localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;