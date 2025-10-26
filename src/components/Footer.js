import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>© 2025 Little Lemon. All rights reserved.</p>
        <div className="footer__links">
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
