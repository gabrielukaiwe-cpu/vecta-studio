import { Link } from 'react-router-dom';

// The five menu links. They are used in three places: the top bar, the mobile menu and the footer.
// onLinkClick is optional. The mobile menu uses it to close itself when a link is clicked.
function NavLinks({ onLinkClick }) {
  return (
    <>
      <a href="#" onClick={onLinkClick}>About</a>
      <a href="#" onClick={onLinkClick}>Careers</a>
      <a href="#" onClick={onLinkClick}>Events</a>
      {/* target="_blank" opens the products page in a new tab */}
      <Link to="/products" target="_blank" rel="noopener noreferrer" onClick={onLinkClick}>
        Products
      </Link>
      <a href="#" onClick={onLinkClick}>Support</a>
    </>
  );
}

export default NavLinks;
