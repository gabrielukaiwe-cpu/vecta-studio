import CreationCard from './CreationCard.jsx';
import creations from '../../data/creations.js';

// The "Our creations" section: a title, a "See all" button and the grid of cards
function Creations() {
  return (
    <section className="creations">
      <div className="creations-top">
        <h2>Our creations</h2>
        <a href="#" className="see-all see-all-desktop">See all</a>
      </div>
      <div className="gallery">
        {/* one CreationCard for every item in the creations list */}
        {creations.map((creation) => (
          <CreationCard key={creation.title} title={creation.title} image={creation.image} />
        ))}
      </div>
      <a href="#" className="see-all see-all-mobile">See all</a>
    </section>
  );
}

export default Creations;
