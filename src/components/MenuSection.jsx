import MenuItem from "./MenuItem";

function MenuSection({ title, items }) {
  return (
    <section className="menu-section">
      <h2 className="menu-section__title">{title}</h2>
      <ul className="menu-section__list">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
    </section>
  );
}

export default MenuSection;
