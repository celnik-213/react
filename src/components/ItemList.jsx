import { useState, useEffect } from "react";

const ItemList = () => {
  const [isLightOn, setIsLightOn] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = isLightOn ? "#FFFFFF" : "#000000";
  }, [isLightOn]);

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        border: "1px solid black",
        padding: "10px",
        textAlign: "center",
        backgroundColor: isLightOn ? "#FFFFFF" : "#000000",
        color: isLightOn ? "#000000" : "#FFFFFF",
      }}
    >
      <button onClick={toggleLight}>Włącznik światła</button>
    </div>
  );
};

export default ItemList;