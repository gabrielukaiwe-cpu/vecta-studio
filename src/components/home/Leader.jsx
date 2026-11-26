// "The leader in interactive VR": a picture with some text beside it
function Leader() {
  return (
    <section className="leader">
      <picture>
        {/* phones get the mobile picture, bigger screens get the desktop one */}
        <source media="(max-width: 768px)" srcSet="/images/home/mobile/image-interactive.jpg" />
        <img src="/images/home/desktop/image-interactive.jpg" alt="Person wearing a VR headset" />
      </picture>
      <div className="leader-text">
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for
          some of the best companies around the globe. Our award-winning creations have transformed
          businesses through digital experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}

export default Leader;
