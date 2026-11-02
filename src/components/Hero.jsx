// Decorative radiating lines behind the hero image, approximating the
// starburst graphic in the design (not exportable without Figma edit access).
function Starburst() {
  const lines = Array.from({ length: 16 });
  return (
    <svg className="hero__starburst" viewBox="0 0 200 200" aria-hidden="true">
      {lines.map((_, i) => {
        const angle = (i / lines.length) * 360;
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2="100"
            y2="10"
            stroke="currentColor"
            strokeWidth="1"
            transform={`rotate(${angle} 100 100)`}
          />
        );
      })}
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1 className="hero__title">Fresh</h1>
        <span className="hero__year">2026</span>
        <h1 className="hero__title">Look</h1>
        <a href="#products" className="hero__cta">
          See more ↗
        </a>
      </div>

      <div className="hero__visual">
        <Starburst />
        <div className="hero__block" />
        <div className="hero__image">
          <img
            src="https://picsum.photos/seed/shopkart-hero/500/650"
            alt="Model wearing the Oregon Jacket"
          />
        </div>
        <div className="hero__caption">
          <p>Oregon Jacket</p>
          <p>$124</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
