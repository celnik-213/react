import React, { useState } from "react";

function ThreeColors() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <p style={{ color, fontSize: "24px" }}>
        Ten tekst zmienia kolor!
      </p>

      <button style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Czerwony</button>
      <button style={{backgroundColor:"green"}} onClick={() => setColor("green")}>Zielony</button>
      <button style={{backgroundColor:"blue"}} onClick={() => setColor("blue")}>Niebieski</button>
    </div>
  );
}

export default ThreeColors;