import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="jellyfish" />
        </main>
        <footer className="App-footer">
          <small>Coded by Victoria Okoro</small>
        </footer>
      </div>
    </div>
  );
}
