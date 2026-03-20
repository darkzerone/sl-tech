import { useState } from 'react';
import { m } from 'framer-motion';
import { Linkedin } from 'lucide-react';

export default function Contact() {
  const [btnText, setBtnText] = useState('Send Message');
  const [btnStyle, setBtnStyle] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get form data object
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    setBtnText('Sending...');
    
    // Ajax submit to FormSubmit.co static endpoint (Secure Alias)
    fetch("https://formsubmit.co/ajax/a5d4d9410d850e9ef5da805effd9cd42", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) throw new Error('Form submission failed');
        return response.json();
    })
    .then(() => {
        setBtnText('Message Sent!');
        setBtnStyle({ background: 'linear-gradient(135deg, #10b981, #059669)' });
        
        setTimeout(() => {
          form.reset();
          setBtnText('Send Message');
          setBtnStyle({});
        }, 3000);
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        setBtnText('Error Sending!');
        setBtnStyle({ background: 'linear-gradient(135deg, #ef4444, #dc2626)' });
        
        setTimeout(() => {
          setBtnText('Send Message');
          setBtnStyle({});
        }, 3000);
    });
  };

  return (
    <section id="contact" className="section bg-alt">
      <div className="container">
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Let's <span>Talk</span>
        </m.h2>
        
        <div className="contact-content">
          <m.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="contact-info"
          >
            <h3>Get In Touch</h3>
            <p>I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="contact-details">
              <a href="https://nl.linkedin.com/in/steven-leunk-144581131" target="_blank" rel="noopener noreferrer" className="contact-item">
                <Linkedin size={24} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </m.div>
          
          <m.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="contact-form" 
            id="contactForm"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="Hello Steven..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={btnStyle}>
              {btnText}
            </button>
          </m.form>
        </div>
      </div>
    </section>
  );
}
