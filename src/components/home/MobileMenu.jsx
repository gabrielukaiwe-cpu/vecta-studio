import { useEffect, useRef } from 'react';
import NavLinks from './NavLinks.jsx';

// The full black menu on phones. The "open" class (see home.css) makes it appear.
function MobileMenu({ open, onClose }) {
  const closeButton = useRef(null);
  const wasOpen = useRef(false);

  // Keyboard users: move focus into the menu when it opens, and back to the hamburger when it closes
  useEffect(() => {
    if (open) {
      closeButton.current.focus();
    } else if (wasOpen.current) {
      document.getElementById('open-menu-btn')?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  return (
    <div id="mobile-menu" className={open ? 'mobile-menu open' : 'mobile-menu'}>
      <div className="mobile-menu-top">
        <img className="logo" src="/images/home/logo.svg" alt="Loopstudios" />
        <button ref={closeButton} className="menu-btn" onClick={onClose} aria-label="Close menu">
          <img src="/images/home/icon-close.svg" alt="" />
        </button>
      </div>
      <div className="mobile-menu-links">
        <NavLinks onLinkClick={onClose} />
      </div>
    </div>
  );
}

export default MobileMenu;
