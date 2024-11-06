import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarWithStyling from "./components/navbar/NavbarWithStyling";
import HomeButton from "./components/button/HomeButton";

function App() {
  const [count, setCount] = useState(0);
  const menu = ["Menu", "About", "Logout"];
  const name = ["Rifqi"];
  const age = ["15"];

  return (
    <>
      <NavbarWithStyling menu={menu} name={name} age={age} />
      <HomeButton children="Click Me!" />
      <NavbarWithStyling menu={["Navbar1"]} name={["Afandi"]} age={["15"]} />
      <NavbarWithStyling
        menu={["Home", "Services", "Contact"]}
        name="John Doe"
        age={30}
        address="123 Street Name, City, Country"
      />
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
