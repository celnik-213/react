import React, { useState } from "react";

function ThreeColors() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <p style={{ color, fontSize: "24px" }}>
        Ten tekst zmienia kolor!
      </p>

      <button onClick={() => setColor("red")}>Czerwony</button>
      <button onClick={() => setColor("green")}>Zielony</button>
      <button onClick={() => setColor("blue")}>Niebieski</button>
    </div>
  );
}

export default ThreeColors;