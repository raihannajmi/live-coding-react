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
      {/* <NavbarWithStyling menu={menu} name={name} age={age} />
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
      </p> */}
      <header className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-blue-800">Binar Car Rental</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700">
              Our Services
            </a>
            <a href="#" className="text-gray-700">
              Why Us
            </a>
            <a href="#" className="text-gray-700">
              Testimonial
            </a>
            <a href="#" className="text-gray-700">
              FAQ
            </a>
          </nav>
        </div>
        <button className="px-4 py-2 text-white bg-green-500 rounded-md">
          Register
        </button>
      </header>

      <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {" "}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="p-4 border rounded-md bg-white shadow-md">
            {" "}
            <img
              src="/path-to-image/car.png"
              alt="Car"
              className="w-full h-40 object-cover mb-4"
            />{" "}
            <h3 className="font-semibold">Nama/Tipe Mobil</h3>{" "}
            <p className="text-green-500 font-bold">Rp 430.000 / hari</p>{" "}
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>{" "}
            <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
              {" "}
              <span>4 orang</span> <span>Manual</span> <span>Tahun 2020</span>{" "}
            </div>{" "}
            <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
              Pilih Mobil
            </button>{" "}
          </div>
        ))}{" "}
      </section>
    </>
  );
}

export default App;
