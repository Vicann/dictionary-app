import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div class="container">
            <span class="header" className="header-text" src>
              Dictionary
            </span>
          </div>
        </header>

        <main>
          <Dictionary defaultKeyword="sunset" />
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
              href="https://docs.google.com/document/d/1dkG1O5LzweMguYs_THxkTzDSvn5oNOH4YB9muTyMdRA/edit?usp=sharing"
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
