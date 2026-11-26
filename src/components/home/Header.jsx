import NavLinks from './NavLinks.jsx';

function Header({ menuOpen, onOpenMenu }) {
  return (
    <header>
      <img className="logo" src="/images/home/logo.svg" alt="Loopstudios" />
      <nav>
        <NavLinks />
      </nav>
      <button
        id="open-menu-btn"
        className="menu-btn open-btn"
        onClick={onOpenMenu}
        aria-controls="mobile-menu"
        aria-label="Open menu"
        aria-expanded={menuOpen}
      >
        <img src="/images/home/icon-hamburger.svg" alt="" />
      </button>
    </header>
  );
}

export default Header;
