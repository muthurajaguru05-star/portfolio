const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-card-wrapper">
            <div className="about-card-main">
              <div className="code-header-dots">
                <span className="code-dot dot-red"></span>
                <span className="code-dot dot-yellow"></span>
                <span className="code-dot dot-green"></span>
              </div>
              <div className="code-snippet">
                <p><span className="code-keyword">const</span> developer = &#123;</p>
                <p>&nbsp;&nbsp;<span className="code-prop">name</span>: <span className="code-string">'Muthu Raja Guru'</span>,</p>
                <p>&nbsp;&nbsp;<span className="code-prop">role</span>: <span className="code-string">'Full Stack Developer'</span>,</p>
                <p>&nbsp;&nbsp;<span className="code-prop">stack</span>: [<span className="code-string">'MongoDB'</span>, <span className="code-string">'Express'</span>, <span className="code-string">'React'</span>, <span className="code-string">'Node'</span>],</p>
                <p>&nbsp;&nbsp;<span className="code-prop">location</span>: <span className="code-string">'Rajapalayam, India'</span>,</p>
                <p>&nbsp;&nbsp;<span className="code-prop">status</span>: <span className="code-string">'Building scalable web apps'</span></p>
                <p>&#125;;</p>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-box">
                <div className="stat-number">3+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Exp</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">10+</div>
                <div className="stat-label">Students</div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <div className="section-label">⚡ About Me</div>
            <h3>Passionate Full-Stack Developer Building Scalable Web Apps</h3>
            <p>
              I am a dedicated Full-Stack Developer specializing in the MERN stack
              (MongoDB, Express.js, React.js, Node.js). I build production-ready web applications
              with clean, maintainable code.
            </p>
            <p>
              Beyond coding, I mentor students in full-stack development, helping
              them transition from learners to builders. I believe in continuous
              learning and writing code that makes a real impact.
            </p>

            <div className="highlights-grid">
              <div className="highlight-pill">
                <span className="highlight-icon">✦</span>
                <span>Frontend Development</span>
              </div>
              <div className="highlight-pill">
                <span className="highlight-icon">✦</span>
                <span>Backend API Design</span>
              </div>
              <div className="highlight-pill">
                <span className="highlight-icon">✦</span>
                <span>Database Architecture</span>
              </div>
              <div className="highlight-pill">
                <span className="highlight-icon">✦</span>
                <span>Student Mentorship</span>
              </div>
              <div className="highlight-pill">
                <span className="highlight-icon">✦</span>
                <span>REST API Integration</span>
              </div>
              <div className="highlight-pill">
                <span className="highlight-icon">✦</span>
                <span>Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
