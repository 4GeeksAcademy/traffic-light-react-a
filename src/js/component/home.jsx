import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("yellow");
  return (
    <>
      <div className="traffic-light">
        <div
          onClick={() => setColor("red")}
          className={"light red" + (color === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setColor("yellow")}
          className={"light yellow" + (color === "yellow" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={"light green" + (color === "green" ? " glow" : "")}
        ></div>
      </div>
      <button onClick={() => setColor("red")} id="btn">
        STOP
      </button>
    </>
  );
};

export default Home;
