const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">Muthu Raja Guru</div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a href="mailto:muthurajagur05@gmail.com" aria-label="Email">✉</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">⌨</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Muthu Raja Guru. All rights reserved. Built with React & modern web design aesthetics.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
