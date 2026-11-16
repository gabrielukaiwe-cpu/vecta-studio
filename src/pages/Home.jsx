import { useEffect, useState } from 'react';
import MobileMenu from '../components/home/MobileMenu.jsx';
import Hero from '../components/home/Hero.jsx';
import Leader from '../components/home/Leader.jsx';
import Creations from '../components/home/Creations.jsx';
import Footer from '../components/home/Footer.jsx';
import Attribution from '../components/shared/Attribution.jsx';
import '../styles/home.css';

// The home page: it puts all the home components together in order
function Home() {
  // State = information React remembers. Is the mobile menu open?
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  // Set the browser tab title once, when the page first appears
  useEffect(() => {
    document.title = 'Loopstudios | Immersive experiences that deliver';
  }, []);

  // While the menu is open: stop the page scrolling and let the Escape key close the menu
  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    document.body.classList.add('menu-open');

    function handleKey(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleKey);

    // this clean-up runs when the menu closes
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', handleKey);
    };
  }, [menuOpen]);

  return (
    <div className="home">
      <MobileMenu open={menuOpen} onClose={closeMenu} />
      <Hero menuOpen={menuOpen} onOpenMenu={openMenu} />
      <Leader />
      <Creations />
      <Footer />
      <Attribution />
    </div>
  );
}

export default Home;
