import React from "react";
import "./About.css";

function About({ name, age, address }) {
  return (
    <div className="about">
      <h2>About {name}</h2>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
    </div>
  );
}

export default About;
