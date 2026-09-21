import { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Message Sent!',
      text: `Thank you ${formData.name}. Your message has been sent successfully.`,
      icon: 'success',
      confirmButtonText: 'OK',
      background: '#0d111a',
      color: '#f8fafc',
      confirmButtonColor: '#06b6d4',
    });

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-label">⚡ Get In Touch</div>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind or an open opportunity? Let's work together.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>Let's Build Something Great</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="contact-detail-tile">
              <div className="contact-icon-wrapper">📧</div>
              <div>
                <h4>Email</h4>
                <p>muthurajagur05@gmail.com</p>
              </div>
            </div>

            <div className="contact-detail-tile">
              <div className="contact-icon-wrapper">📍</div>
              <div>
                <h4>Location</h4>
                <p>Rajapalayam, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <span>{submitted ? '✓ Message Sent!' : 'Send Message'}</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;