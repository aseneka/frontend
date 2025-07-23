import React, { useState } from 'react';

// ContactFooter Component: Combines the Email Newsletter Signup, Contact Information, and Footer.
const ContactFooter = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [isNewsletterSuccess, setIsNewsletterSuccess] = useState(false);

  const handleNewsletterChange = (e) => {
    setNewsletterEmail(e.target.value);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterMessage('Subscribing...');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const result = await response.json();

      if (response.ok) {
        setNewsletterMessage(result.message || 'Successfully subscribed to newsletter!');
        setIsNewsletterSuccess(true);
        setNewsletterEmail(''); // Clear email field on success
      } else {
        setNewsletterMessage(result.message || 'Failed to subscribe. Please try again.');
        setIsNewsletterSuccess(false);
      }
    } catch (error) {
      console.error('Error submitting newsletter:', error);
      setNewsletterMessage('Network error or server is unreachable. Please try again later.');
      setIsNewsletterSuccess(false);
    }
  };

  return (
    <>
      {/* Email Newsletter Signup Section */}
      <section id="newsletter" className="newsletter-section">
        <div className="newsletter-container">
          <h2 className="section-title newsletter-title">Stay Updated!</h2>
          <p className="section-subtitle newsletter-subtitle">Subscribe to our newsletter for the latest news, events, and special offers.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
              value={newsletterEmail}
              onChange={handleNewsletterChange}
              required
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
          {newsletterMessage && (
            <div className={`form-message ${isNewsletterSuccess ? 'success-message' : 'error-message'}`}>
              {newsletterMessage}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title contact-title">Get in Touch</h2>

          <div className="contact-info-grid">
            {/* Address */}
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <h3 className="contact-item-title">Our Location</h3>
              <p className="contact-item-text">1234 Culinary Ave, Suite 100, Washington, DC 20002</p>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <h3 className="contact-item-title">Call Us</h3>
              <p className="contact-item-text">(202) 555-4567</p>
            </div>

            {/* Email */}
            <div className="contact-item">
              <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 13H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"></path>
              </svg>
              <h3 className="contact-item-title">Email Us</h3>
              <p className="contact-item-text">info@caffefausse.com</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="social-media-links">
            <a href="#" className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.002 3.797.048.85.04 1.488.156 2.075.356.65.23 1.117.49 1.653 1.027.537.536.807 1.003 1.027 1.652.2.587.316 1.224.356 2.075.046 1.013.048 1.371.048 3.797s-.002 2.784-.048 3.797c-.04.85-.156 1.488-.356 2.075-.23.65-.49 1.117-1.027 1.653-.536.537-1.003.807-1.652 1.027-.587.2-1.224.316-2.075.356-1.013.046-1.371.048-3.797.048s-2.784-.002-3.797-.048c-.85-.04-1.488-.156-2.075-.356-.65-.23-1.117-.49-1.653-1.027-.537-.536-.807-1.003-1.027-1.652-.2-.587-.316-1.224-.356-2.075-.046-1.013-.048-1.371-.048-3.797s.002-2.784.048-3.797c.04-.85.156-1.488.356-2.075.23-.65.49-1.117 1.027-1.653.536-.537 1.003-.807 1.652-1.027.587-.2 1.224-.316 2.075-.356C9.526 2.002 9.884 2 12.315 2zm0 2.188c-2.136 0-2.396.009-3.232.048-.78.035-1.2.146-1.488.257-.348.137-.594.31-.83.546-.237.236-.407.482-.545.83-.11.288-.22.709-.257 1.488-.039.836-.048 1.096-.048 3.232s.009 2.396.048 3.232c.035.78.146 1.2.257 1.488.137.348.31.594.546.83.236.237.482.407.83.545.288.11.709.22 1.488.257.836.039 1.096.048 3.232.048s2.396-.009 3.232-.048c.78-.035 1.2-.146 1.488-.257.348-.137.594-.31.83-.546.237-.236.407-.482.545-.83.11-.288.22-.709.257-1.488-.039-.836-.048-1.096-.048-3.232s-.009-2.396-.048-3.232c-.035-.78-.146-1.2-.257-1.488-.137-.348-.31-.594-.546-.83-.236-.237-.407-.482-.545-.83-.288-.11-.709-.22-.257-1.488-.039-.836-.048-1.096-.048-3.232zm0 3.635c-2.403 0-4.35 1.947-4.35 4.35s1.947 4.35 4.35 4.35 4.35-1.947 4.35-4.35-1.947-4.35-4.35-4.35zm0 7.172c-1.554 0-2.812-1.258-2.812-2.812s1.258-2.812 2.812-2.812 2.812 1.258 2.812 2.812-1.258 2.812-2.812 2.812zm3.623-7.535c-.665 0-1.203.538-1.203 1.203s.538 1.203 1.203 1.203 1.203-.538 1.203-1.203-.538-1.203-1.203-1.203z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 10.702v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.188a11.644 11.644 0 006.29 1.843" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Caffe Fausse. All rights reserved.</p>
          <p className="footer-credit">Designed with &hearts; by Your Name/Company</p>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
