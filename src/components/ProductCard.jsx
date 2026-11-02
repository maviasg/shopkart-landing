function ProductCard({ name, description, price }) {
  return (
    <li className="product-card">
      <div className="product-card__image" role="img" aria-label={name}>
        <button type="button" className="product-card__link" aria-label={`View ${name}`}>
          ↗
        </button>
      </div>
      <h3 className="product-card__name">{name}</h3>
      <p className="product-card__description">{description}</p>
      <p className="product-card__price">${price}</p>
    </li>
  );
}

export default ProductCard;
