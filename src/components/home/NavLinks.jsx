import { Link } from 'react-router-dom';

// Only Products is a real page so far; the other links go to the home page until their pages exist.
const links = [
  { label: 'About', to: '/' },
  { label: 'Careers', to: '/' },
  { label: 'Events', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'Support', to: '/' },
];

function NavLinks({ onLinkClick }) {
  return (
    <>
      {links.map((link) => (
        <Link key={link.label} to={link.to} onClick={onLinkClick}>
          {link.label}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
