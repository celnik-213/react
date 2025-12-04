import React, { useState } from "react";

function ThreeColors() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <p style={{ color, fontSize: "24px" }}>
        Ten tekst zmienia kolor!
      </p>

      <button style={{backgroundColor:"red", color:"white"}} onClick={() => setColor("red")}>Czerwony</button>
      <button style={{backgroundColor:"green", color:"white"}} onClick={() => setColor("green")}>Zielony</button>
      <button style={{backgroundColor:"blue", color:"white"}} onClick={() => setColor("blue")}>Niebieski</button>
    </div>
  );
}

export default ThreeColors;