import "./Navbar.css";

export default function Navbar({ toggleTheme, darkMode }) {
  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="logo">Gowthami</div>

      <ul className="nav-links">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Recommendations</li>
      </ul>

      <div className="right-icons">
        <a href="/resume.pdf" download className="resume-btn">
          <i className="fa-solid fa-download">  Download</i> Resume
        </a>

        <div className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </div>
      </div>
    </nav>
  );
}
