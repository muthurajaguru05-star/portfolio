import { useState } from 'react';

const skills = [
  { icon: '⚛️', name: 'React.js', category: 'frontend' },
  { icon: '📜', name: 'JavaScript', category: 'frontend' },
  { icon: '🟢', name: 'Node.js', category: 'backend' },
  { icon: '🚂', name: 'Express.js', category: 'backend' },
  { icon: '🍃', name: 'MongoDB', category: 'database' },
  { icon: '🌐', name: 'HTML5', category: 'frontend' },
  { icon: '🎨', name: 'CSS3', category: 'frontend' },
  { icon: '🔗', name: 'REST APIs', category: 'backend' },
  { icon: '📦', name: 'Git & GitHub', category: 'tools' },
  { icon: '🔷', name: 'TypeScript', category: 'frontend' },
  { icon: '🐧', name: 'Linux', category: 'tools' },
  { icon: '🗃️', name: 'SQL', category: 'database' },
  { icon: '🧪', name: 'Testing', category: 'tools' },
  { icon: '🐳', name: 'Docker', category: 'tools' },
  { icon: '📱', name: 'Responsive', category: 'frontend' },
  { icon: '⚡', name: 'Vite', category: 'tools' },
];

const Skills = () => {
  const [filter, setFilter] = useState('all');

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-label">⚡ Tech Stack</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I work with to build modern, scalable web applications.
          </p>
        </div>

        <div className="skills-filter">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Tech
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={`filter-btn ${filter === 'database' ? 'active' : ''}`}
            onClick={() => setFilter('database')}
          >
            Database
          </button>
          <button 
            className={`filter-btn ${filter === 'tools' ? 'active' : ''}`}
            onClick={() => setFilter('tools')}
          >
            Tools & DevOps
          </button>
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
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
