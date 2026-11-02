import { useState } from "react";

const PRODUCTS = ["Product 1", "Product 2", "Product 3", "Product 4"];

function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__topbar">
        <span>Free Delivery | Return Policy</span>
        <span>Login | Follow Us</span>
      </div>

      <div className="header__main">
        <span className="header__logo">ShopKart</span>

        <button
          type="button"
          className="header__burger"
          aria-label="Open menu"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          ☰
        </button>

        <nav className="header__nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <div
            className="header__dropdown"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <a href="#products">Our Products</a>
            {isProductsOpen && (
              <ul className="header__dropdown-menu">
                {PRODUCTS.map((product) => (
                  <li key={product}>{product}</li>
                ))}
              </ul>
            )}
          </div>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="header__actions">
          <span>Wishlist (0)</span>
          <span>Bag (0)</span>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button
            type="button"
            className="mobile-menu__close"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>
          <span className="mobile-menu__logo">ShopKart</span>
          <nav className="mobile-menu__nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Our Products</a>
            <a href="#contact">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
