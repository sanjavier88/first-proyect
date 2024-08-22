import logo from "./logo.svg";
import "./App.css";
import User from "./user";
import { useState } from "react";

function Header({ children }) {
  return (
    <header>
      <h3>Esto es un header muy bonito</h3>
      {children}
    </header>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
  }
  return (
    <div
      className="App"
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      <Header>
        <ul>
          <li>
            <a href="#">link 1</a>
          </li>
        </ul>
      </Header>
      <User
        counter={counter}
        name="Jorge"
        avatar="https://w7.pngwing.com/pngs/535/79/png-transparent-naruto-uzumaki-sasuke-uchiha-naruto-shippuden-ultimate-ninja-storm-3-art-uzumaki-naruto-photography-fictional-character-naruto-thumbnail.png"
      />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" />
        <input type="text" />
        <input type="submit" />
      </form>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola mundo!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
