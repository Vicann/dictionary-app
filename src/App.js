import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./assets/book-open.svg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div class="container">
            <img class="book-icon" src={logo} alt="open-book" />{" "}
            <span class="header" className="header-text" src>
              Dictionary App
            </span>
          </div>
        </header>

        <main>
          <Dictionary defaultKeyword="jellyfish" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/Vicann"
              target="_blank"
              rel="noreferrer"
            >
              Victoria Okoro{" "}
            </a>
            and is hosted on{" "}
            <a
              href="https://magnificent-frangollo-f20217.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
