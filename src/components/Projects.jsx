const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-label">My Work</div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Real-world applications I have designed, built, and deployed.
          </p>
        </div>

        {/* Featured Project */}
        <div className="project-card">
          <div className="project-banner">
            <div className="project-banner-text">
              🚀 Full-Stack Web Application
            </div>
          </div>

          <div className="project-body">
            <div className="project-meta">
              <span className="meta-badge">📅 Dec 2025 – Jun 2026</span>
              <span className="meta-badge">👨‍💻 Full-Stack Developer</span>
              <span className="meta-badge">✅ Completed & Live</span>
            </div>

            <h3>Full-Stack Web Application</h3>
            <p>
              Developed a complete, end-to-end full-stack web application
              covering both frontend and backend development. Designed and
              implemented a responsive, user-friendly interface using modern
              web technologies, developed backend functionality and APIs,
              integrated the application with a database, and implemented
              authentication, data management, and core application logic.
              Tested, debugged, and optimized the application to ensure a
              smooth and reliable user experience. The project is deployed
              as a live web application.
            </p>

            <div className="project-details-grid">
              <div className="detail-group">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">JWT Auth</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">Git</span>
                </div>
              </div>

              <div className="detail-group">
                <h4>Key Features</h4>
                <ul className="detail-list">
                  <li>Responsive, mobile-friendly UI with modern aesthetics</li>
                  <li>Secure user authentication & authorization</li>
                  <li>Seamless frontend-backend data integration</li>
                  <li>Optimized database schemas for performance</li>
                </ul>
              </div>

              <div className="detail-group">
                <h4>Responsibilities</h4>
                <ul className="detail-list">
                  <li>Engineered client-side & server-side architecture</li>
                  <li>Designed and implemented RESTful API endpoints</li>
                  <li>Integrated MongoDB for data persistence</li>
                  <li>Conducted testing, debugging & performance tuning</li>
                </ul>
              </div>

              <div className="detail-group">
                <h4>Outcomes</h4>
                <ul className="detail-list">
                  <li>Successfully deployed as a live web application</li>
                  <li>Production-ready codebase with clean architecture</li>
                  <li>Suitable for professional portfolio showcasing</li>
                  <li>End-to-end project completed independently</li>
                </ul>
              </div>
            </div>

            <div className="project-actions">
              <a href="#" className="btn btn-primary">Live Demo →</a>
              <a href="#" className="btn btn-outline">GitHub Repository</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
