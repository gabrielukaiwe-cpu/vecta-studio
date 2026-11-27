import { useEffect, useRef } from 'react';
import NavLinks from './NavLinks.jsx';

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

  // While the menu is open, Tab and Shift+Tab loop inside it instead of reaching the page behind
  useEffect(() => {
    if (!open) return undefined;

    function keepFocusInside(event) {
      if (event.key !== 'Tab') return;
      const menu = document.getElementById('mobile-menu');
      const focusable = menu.querySelectorAll('a[href], button:not([disabled])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', keepFocusInside);
    return () => document.removeEventListener('keydown', keepFocusInside);
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
