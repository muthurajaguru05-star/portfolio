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

    // Show SweetAlert success message
    Swal.fire({
      title: 'Message Sent!',
      text: `Thank you ${formData.name}. Your message has been sent successfully.`,
      icon: 'success',
      confirmButtonText: 'OK',
      draggable: true,
    });

    setSubmitted(true);

    // Reset button after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

    // Clear form
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
          <div className="section-label">Get In Touch</div>

          <h2 className="section-title">Contact</h2>

          <p className="section-subtitle">
            Have a project in mind? Let's work together.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Build Something Great</h3>

            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="contact-detail">
              <div className="contact-icon">📧</div>

              <div>
                <h4>Email</h4>
                <p>muthurajagur05@gmail.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">📍</div>

              <div>
                <h4>Location</h4>
                <p>Rajapalayam, Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
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

            <button type="submit" className="btn btn-primary">
              {submitted ? '✓ Message Sent!' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;