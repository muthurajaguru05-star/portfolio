const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Career Path</div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey as a developer.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-date">2025 – Present</div>
              <h3>Full Stack Developer</h3>
              <p className="company">ANJANA INFOTECH, Rajapalayam</p>
              <p>
                 Joined ANJANA INFOTECH to learn and gain practical experience
                 in Full Stack Development using the MERN stack. Developed hands-on
                 knowledge of building web applications, working with frontend and 
                 backend technologies, REST APIs, authentication systems, databases,
                 and responsive web design. Gained valuable real-world experience 
                 through practical projects and modern web development practices.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-date">Dec 2025 – Jun 2026</div>
              <h3>Full-Stack Web Application Project</h3>
              <p className="company">End-to-End Development</p>
              <p>
                Independently designed, developed, and deployed a complete
                full-stack web application. Covered frontend UI/UX, backend API
                development, database integration, authentication, and
                production deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
