import Header from './Header.jsx';

function Hero({ menuOpen, onOpenMenu }) {
  return (
    <section className="hero">
      <Header menuOpen={menuOpen} onOpenMenu={onOpenMenu} />
      <div className="hero-content">
        <h1>Immersive experiences that deliver</h1>
      </div>
    </section>
  );
}

export default Hero;
