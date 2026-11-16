import NavLinks from './NavLinks.jsx';

// The logo, the menu links (on big screens) and the hamburger button (on phones)
function Header({ menuOpen, onOpenMenu }) {
  return (
    <header>
      <img className="logo" src="/images/logo.svg" alt="Loopstudios" />
      <nav>
        <NavLinks />
      </nav>
      <button
        className="menu-btn open-btn"
        onClick={onOpenMenu}
        aria-label="Open menu"
        aria-expanded={menuOpen}
      >
        <img src="/images/icon-hamburger.svg" alt="" />
      </button>
    </header>
  );
}

export default Header;
