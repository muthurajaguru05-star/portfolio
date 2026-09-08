import { useState } from 'react';
import { handleResumeDownload } from '../utils/downloadResume';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const handleResumeClick = (e) => {
    handleResumeDownload(e, () => setMenuOpen(false));
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <a href="#" className="nav-logo">
          <span className="logo-accent">M</span>
          uthu Raja Guru
        </a>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#services" onClick={handleNavClick}>Services</a>
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
          <a
            href="/Muthu_Raja_Guru_Resume.pdf"
            download="Muthu_Raja_Guru_Resume.pdf"
            onClick={handleResumeClick}
            className="btn-resume"
          >
            Resume ↓
          </a>
        </div>

        <div
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
