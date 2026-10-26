// Stateless, presentational: one menu item row.
function MenuItem({ name, description, price }) {
  return (
    <li className="menu-item">
      <div className="menu-item__row">
        <h3 className="menu-item__name">{name}</h3>
        <span className="menu-item__price">${price}</span>
      </div>
      <p className="menu-item__description">{description}</p>
    </li>
  );
}

export default MenuItem;
