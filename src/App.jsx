import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}
