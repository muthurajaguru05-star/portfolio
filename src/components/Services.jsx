const services = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'Building responsive, interactive, and pixel-perfect user interfaces using React.js, HTML5, CSS3, and modern JavaScript (ES6+). Focused on performance and accessibility.',
  },
  {
    number: '02',
    title: 'Backend API Development',
    description:
      'Designing and developing robust, scalable RESTful APIs using Node.js and Express.js. Implementing authentication, authorization, and secure data handling.',
  },
  {
    number: '03',
    title: 'Database Design & Management',
    description:
      'Architecting efficient database schemas with MongoDB and SQL databases. Ensuring data integrity, optimized queries, and seamless backend integration.',
  },
];

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-label">⚡ What I Offer</div>
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            End-to-end web development services, from concept to deployment.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
