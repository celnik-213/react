import { useState, useEffect, use } from "react";
const Wiadomosc = () => {   

    const [message, setMessage] = useState(false);

    function handleClick(score) { 
        if (score === 5) { 
           setMessage("Bardzo dziękujemy! :)"); 
        } else if (score > 2) { 
            setMessage("Dziękujemy!"); 
        } else { 
            setMessage("Przykro nam :("); 
        } 
    }
    return ( 
        <>   
            <h1> 
                Oceń usługę: 
            </h1> 
            <button onClick={() => handleClick(1)}>1</button> 
            <button onClick={() => handleClick(2)}>2</button> 
            <button onClick={() => handleClick(3)}>3</button> 
            <button onClick={() => handleClick(4)}>4</button> 
            <button onClick={() => handleClick(5)}>5</button>  
            <h2>{message}</h2> 
        </> 
    );
}; 
export default Wiadomosc;