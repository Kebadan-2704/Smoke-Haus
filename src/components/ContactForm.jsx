import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.target);
    // Replace YOUR_ACCESS_KEY_HERE with a real Web3Forms access key in production
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        console.error("Error", data);
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMsg('Network error. Please try again later.');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successMsg}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h3>Message Sent</h3>
        <p>Thanks for reaching out! We'll get back to you as soon as we finish tending the smoker.</p>
        <button className={`btn btn-line ${styles.sendAnotherBtn}`} onClick={() => setStatus('idle')}>
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} aria-label="Contact form">
      {status === 'error' && (
        <div className={styles.errorBanner} role="alert">
          {errorMsg}
        </div>
      )}

      <div className={styles.group}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your name" />
      </div>
      
      <div className={styles.group}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="you@example.com" />
      </div>
      
      <div className={styles.group}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows="4" placeholder="How can we help?"></textarea>
      </div>
      
      <button 
        type="submit" 
        className={`btn btn-ember ${styles.submitBtn}`}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
