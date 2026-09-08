const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I am a</p>
          <h1 className="hero-title">
            <span className="stroke-text">MERN Stack</span><br />
            <span className="highlight">Developer</span><br />
            Based In India.
          </h1>
          <p className="hero-description">
  I am a passionate Full Stack Developer specializing in building responsive,
  user-friendly, and scalable web applications using modern technologies.
  I have hands-on experience in developing real-world projects and creating
  efficient solutions with a strong focus on performance and user experience.
</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <div className="hero-social">
            <a href="mailto:contact@pandikani.dev" className="social-link" aria-label="Email" title="Email">✉</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn" title="LinkedIn">in</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter" title="Twitter">𝕏</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub" title="GitHub">⌨</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-illustration">
            <div className="circle-bg"></div>
            <div className="code-float top-right">{'{ React }'}</div>
            <div className="code-float bottom-left">{'< Node.js />'}</div>
            <div className="code-float center">Full-Stack Dev</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
