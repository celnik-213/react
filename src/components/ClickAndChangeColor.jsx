import { useState, useEffect, use } from "react";

const ClickAndChangeColor = () => {
    const randomColor = () => {
        let randomColorString = '#';
        const arrayOfColorFunctions = "0123456789abcdef";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * arrayOfColorFunctions.length);
            randomColorString += arrayOfColorFunctions[randomIndex];
        }
        return randomColorString;
        
    };
    const [color ,setColor] = useState("#ffffff");

    const handleClick = () => {
        setColor(randomColor());
        document.body.style.backgroundColor = color;
    };

    return(
        
        <div>
        <button onClick={handleClick}>Kliknij przycisk, aby zmienić kolor tła</button>
        </div>
    );
};
export default ClickAndChangeColor;