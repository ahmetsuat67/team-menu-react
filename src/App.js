import './App.css';
import Toggle from "./components/Toggle"
import Category from "./components/Category"
import Menu from "./components/Menu"

function App() {

  return (
    <main>
      <Toggle/>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category/>
        <Menu/>
      </section>
    </main>
  );
}

export default App;