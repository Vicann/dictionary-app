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
        <footer className="App-footer">
          <small>
            Take a look at my{" "}
            <a
              href="https://lucid.app/lucidspark/8d61a4e0-d4af-476b-85fb-c369b3e0d27d/edit?viewport_loc=-1163%2C-2223%2C4410%2C2409%2C0_0&invitationId=inv_7b54be63-5d30-46ae-be49-b8921bb747ae"
              target="_blank"
              rel="noreferrer"
            >
              wireframe!
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
