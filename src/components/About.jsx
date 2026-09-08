const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-wrapper">
              <div className="placeholder-avatar">👨‍💻</div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years Exp</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Students</div>
              </div>
            </div>
          </div>

          <div className="about-text">
            <div className="section-label">About Me</div>
            <h3>Passionate Full-Stack Developer Building Scalable Web Apps</h3>
            <p>
              I am a dedicated Full-Stack Developer specializing in the MERN stack
              (MongoDB, Express.js, React.js, Node.js). Currently working at ANJANA
              INFOTECH in Rajapalayam, I build production-ready web applications
              with clean, maintainable code.
            </p>
            <p>
              Beyond coding, I mentor students in full-stack development, helping
              them transition from learners to builders. I believe in continuous
              learning and writing code that makes a real impact.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-dot"></span>
                Frontend Development
              </div>
              <div className="highlight-item">
                <span className="highlight-dot"></span>
                Backend API Design
              </div>
              <div className="highlight-item">
                <span className="highlight-dot"></span>
                Database Architecture
              </div>
              <div className="highlight-item">
                <span className="highlight-dot"></span>
                Student Mentorship
              </div>
              <div className="highlight-item">
                <span className="highlight-dot"></span>
                REST API Integration
              </div>
              <div className="highlight-item">
                <span className="highlight-dot"></span>
                Responsive Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
