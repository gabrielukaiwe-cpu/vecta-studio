// One picture card in "Our creations". title and image are props: the data it receives.
function CreationCard({ title, image }) {
  return (
    <a href="#" className="card">
      <picture>
        <source media="(max-width: 768px)" srcSet={`/images/home/mobile/${image}`} />
        <img src={`/images/home/desktop/${image}`} alt="" />
      </picture>
      <h3>{title}</h3>
    </a>
  );
}

export default CreationCard;
