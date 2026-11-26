import NavLinks from './NavLinks.jsx';

// Social links go to each network's home page because the studio has no profiles yet
const socials = [
  { name: 'Facebook', url: 'https://www.facebook.com' },
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Pinterest', url: 'https://www.pinterest.com' },
  { name: 'Instagram', url: 'https://www.instagram.com' },
];

// The black footer: logo, social icons, menu links and copyright
function Footer() {
  return (
    <footer className="site-footer">
      <img className="footer-logo" src="/images/home/logo.svg" alt="Loopstudios" />
      <div className="social">
        {socials.map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
            <img src={`/images/home/icon-${social.name.toLowerCase()}.svg`} alt={social.name} />
          </a>
        ))}
      </div>
      <nav>
        <NavLinks />
      </nav>
      <p>© {new Date().getFullYear()} Loopstudios. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
