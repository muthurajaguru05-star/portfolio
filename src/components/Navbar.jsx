import { useState, useEffect } from 'react';
import { handleResumeDownload, RESUME_URL, RESUME_FILE_NAME } from '../utils/downloadResume';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }

      const sections = ['about', 'skills', 'services', 'experience', 'education', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const handleResumeClick = (e) => {
    handleResumeDownload(e, () => setMenuOpen(false));
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <div className="container">
        <a href="#" className="nav-logo">
          <span className="logo-badge">M</span>
          <span>Muthu Raja Guru</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={handleNavClick}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={handleNavClick}>Skills</a>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={handleNavClick}>Services</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={handleNavClick}>Experience</a>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={handleNavClick}>Education</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={handleNavClick}>Projects</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={handleNavClick}>Contact</a>

          <a href={RESUME_URL} download={RESUME_FILE_NAME} onClick={handleResumeClick} 
          className="btn-resume"><span>Resume</span><span>↓</span></a>
          
        </div>
        <div
          className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
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