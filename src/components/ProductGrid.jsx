import { useState } from "react";
import ProductCard from "./ProductCard";

const FILTERS = ["Apparel", "Accessories", "Best sellers", "50% off"];

function ProductGrid({ products }) {
  const [activeFilter, setActiveFilter] = useState("Accessories");

  return (
    <section className="product-grid" id="products">
      <div className="product-grid__header">
        <h2>New products</h2>
        <div className="product-grid__nav">
          <button type="button" aria-label="Previous products">
            ←
          </button>
          <button type="button" aria-label="Next products">
            →
          </button>
        </div>
      </div>

      <div className="product-grid__body">
        <ul className="product-grid__filters">
          {FILTERS.map((filter) => (
            <li key={filter}>
              <button
                type="button"
                className={filter === activeFilter ? "is-active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <ul className="product-grid__list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductGrid;
