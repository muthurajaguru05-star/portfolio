import { handleResumeDownload } from '../utils/downloadResume';

const Resume = () => {
  return (
    <section className="section resume" id="resume">
      <div className="container">
        <div className="resume-banner">
          <div className="section-label">⚡ Resume</div>
          <h2 className="section-title">Download My Resume</h2>
          <p className="section-subtitle">
            Get a comprehensive overview of my skills, experience, and education in a downloadable PDF format.
          </p>
          <div className="resume-cta">
            <a
              href="/Muthu_Raja_Guru_Resume.pdf"
              download="Muthu_Raja_Guru_Resume.pdf"
              onClick={handleResumeDownload}
              className="btn btn-primary"
            >
              <span>Download Resume</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
