import React from "react";
import "./App.css";

function App() {
  let rand = (num: number) => Math.floor(Math.random() * num - 1 + 1);

  const loadParticles = () => {
    let particles = [];

    for (let i = 0; i < 400; i++) {
      let animDuration = 1+(0.01*rand(200)) ;
      particles.push(
        <div
          key={i}
          className={"particle"}
          style={{
            transform: `translate(${rand(100)}vw, ${rand(100)}vh)`,
            background: `hsl(${rand(360)}, 100%, 65%)`,
            animationDuration: animDuration + "s",
            animationDelay:  (-0.01*rand(100))*animDuration+ "s"
          }}
        ></div>
      );
    }

    return particles;
  };

  return <div className={"container"}>{loadParticles()}</div>;
}

export default App;
