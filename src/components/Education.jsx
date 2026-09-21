const Education = () => {
  return (
    <section className="section education" id="education">
      <div className="container">
        <div className="section-header">
          <div className="section-label">⚡ Academic Background</div>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-grid">
          <div className="education-card">
            <div className="edu-badge-header">
              <span className="edu-year">2021 – 2024</span>
              <span className="edu-icon">🎓</span>
            </div>
            <h3>B.Com</h3>
            <p className="institution">Aditanar College of Arts & Science</p>
            <p>
              Studied core computer science subjects including data structures,
              algorithms, database management, software engineering, and web
              development. Built a strong foundation for a career in full-stack
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
