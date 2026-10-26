import menu from "./data/menu";
import MenuSection from "./components/MenuSection";
import "./App.css";

function App() {
  return (
    <main className="page">
      <header className="page__header">
        <h1>Our Menu</h1>
        <p className="page__subtitle">Freshly made, every day</p>
      </header>

      {menu.map((section) => (
        <MenuSection
          key={section.id}
          title={section.title}
          items={section.items}
        />
      ))}
    </main>
  );
}

export default App;
