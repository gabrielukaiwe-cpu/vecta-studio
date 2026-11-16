import NavLinks from './NavLinks.jsx';

// The black footer: logo, social icons, menu links and copyright
function Footer() {
  return (
    <footer className="site-footer">
      <img className="footer-logo" src="/images/logo.svg" alt="Loopstudios" />
      <div className="social">
        <a href="#"><img src="/images/icon-facebook.svg" alt="Facebook" /></a>
        <a href="#"><img src="/images/icon-twitter.svg" alt="Twitter" /></a>
        <a href="#"><img src="/images/icon-pinterest.svg" alt="Pinterest" /></a>
        <a href="#"><img src="/images/icon-instagram.svg" alt="Instagram" /></a>
      </div>
      <nav>
        <NavLinks />
      </nav>
      <p>© 2021 Loopstudios. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
