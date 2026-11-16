import NavLinks from './NavLinks.jsx';

// The full black menu on phones. The "open" class (see home.css) makes it appear.
function MobileMenu({ open, onClose }) {
  return (
    <div className={open ? 'mobile-menu open' : 'mobile-menu'}>
      <div className="mobile-menu-top">
        <img className="logo" src="/images/logo.svg" alt="Loopstudios" />
        <button className="menu-btn" onClick={onClose} aria-label="Close menu">
          <img src="/images/icon-close.svg" alt="" />
        </button>
      </div>
      <div className="mobile-menu-links">
        <NavLinks onLinkClick={onClose} />
      </div>
    </div>
  );
}

export default MobileMenu;
