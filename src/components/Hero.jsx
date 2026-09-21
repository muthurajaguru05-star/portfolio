const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-dot"></span>
              <span>Available for Full-Stack Opportunities</span>
            </div>

            <p className="hero-greeting">Hi there, I am</p>
            <h1 className="hero-title">
              <span className="gradient-text">MERN Stack</span><br />
              <span className="highlight">Developer</span>
            </h1>

            <p className="hero-description">
              I am a passionate Full Stack Developer specializing in building responsive,
              user-friendly, and scalable web applications using modern technologies.
              I have hands-on experience in developing real-world projects and creating
              efficient solutions with a strong focus on performance and user experience.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                <span>Explore My Work</span>
                <span>→</span>
              </a>
              <a href="#contact" className="btn btn-outline">
                <span>Let's Connect</span>
              </a>
            </div>

            <div className="hero-social">
              <a href="mailto:muthurajagur05@gmail.com" className="social-pill" aria-label="Email" title="Email">✉</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn" title="LinkedIn">in</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="Twitter" title="Twitter">𝕏</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="GitHub" title="GitHub">⌨</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-container">
              <div className="center-avatar-card">
                <div className="avatar-icon">👨‍💻</div>
                <div className="avatar-name">Muthu Raja Guru</div>
              </div>

              <div className="floating-badge badge-react">
                <span>⚛️</span>
                <span>React 19</span>
              </div>
              <div className="floating-badge badge-node">
                <span>🟢</span>
                <span>Node.js</span>
              </div>
              <div className="floating-badge badge-mongo">
                <span>🍃</span>
                <span>MongoDB</span>
              </div>
              <div className="floating-badge badge-express">
                <span>🚂</span>
                <span>Express</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
