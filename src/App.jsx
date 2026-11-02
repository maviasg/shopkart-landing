import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import products from "./data/products";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <ProductGrid products={products} />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
