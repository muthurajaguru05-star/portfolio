import { handleResumeDownload } from '../utils/downloadResume';

const Resume = () => {
  return (
    <section className="section resume" id="resume">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Download</div>
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle">
            Get a comprehensive overview of my skills, experience, and education.
          </p>
        </div>
        <div className="resume-cta">
          <a
            href="/Muthu_Raja_Guru_Resume.pdf"
            download="Muthu_Raja_Guru_Resume.pdf"
            onClick={handleResumeDownload}
            className="btn btn-primary"
          >
            Download Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
