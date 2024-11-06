import React, { useState } from "react";
import "./NavbarWithStyling.css";
import About from "../about/About";

function NavbarWithStyling({ menu, name, age, address }) {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  let List;

  if (menu && isMenuVisible) {
    List = (
      <ul className="navbar-menu">
        {menu.map((item, index) => (
          <li key={index} className="navbar-item">
            {item}
          </li>
        ))}
      </ul>
    );
  } else {
    List = <h1>Menu tidak ditemukan</h1>;
  }

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-title">FSW 2 {name}</h1>
        <button className="navbar-toggle" onClick={toggleMenu}>
          {isMenuVisible ? "Hide Menu" : "Show Menu"}
        </button>
        {List}
      </nav>
      <About name={name} age={age} address={address} />
    </>
  );
}

export default NavbarWithStyling;
