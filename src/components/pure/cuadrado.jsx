import React, { useState } from "react";

const Cuadrado = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [temporizador, settemporizador] = useState(0);

  let color = `${red},${green},${blue}`;

  function setColor(red, green, blue) {
    color = `${red},${green},${blue}`;
  }

  const randomColor = () => {
    settemporizador(
      setInterval(() => {
        setRed(Math.random() * 256);
        setGreen(Math.random() * 256);
        setBlue(Math.random() * 256);
        setColor(red, green, blue);
      }, 350)
    );
  };

  const stopColor = () => {
    clearInterval(temporizador);
  };


  return (
    <div>
      <div
        className="cuadrado"
        style={{ backgroundColor: `rgb(${color})` }}
        onMouseOver={randomColor}
        onMouseLeave={stopColor}
        onDoubleClick={stopColor}
      ></div>
    </div>
  );
};

export default Cuadrado;
