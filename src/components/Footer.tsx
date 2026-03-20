export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-logo">SL <span>Tech</span></div>
        <div className="social-links">
          <a href="https://nl.linkedin.com/in/steven-leunk-144581131" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>&copy; {new Date().getFullYear()} SL Tech (Steven Leunk). All rights reserved.</p>
      </div>
    </footer>
  );
}
