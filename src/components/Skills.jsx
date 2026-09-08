const skills = [
  { icon: '⚛️', name: 'React.js' },
  { icon: '📜', name: 'JavaScript' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🚂', name: 'Express.js' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '🌐', name: 'HTML5' },
  { icon: '🎨', name: 'CSS3' },
  { icon: '🔗', name: 'REST APIs' },
  { icon: '📦', name: 'Git & GitHub' },
  { icon: '🔷', name: 'TypeScript' },
  { icon: '🐧', name: 'Linux' },
  { icon: '🗃️', name: 'SQL' },
  { icon: '🧪', name: 'Testing' },
  { icon: '🐳', name: 'Docker' },
  { icon: '📱', name: 'Responsive' },
  { icon: '⚡', name: 'Vite' },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-label">My Expertise</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I work with to build modern, scalable web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span className="skill-icon">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
