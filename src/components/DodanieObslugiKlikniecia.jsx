import { useState, useEffect, use } from "react";

const List = ({ items, heading }) => { 
    return (
        
        <div>
            <h2>{heading}</h2>
            {items.length===0 ? 
            <p>Brak elementów do wyświetlenia.</p> 
            : 
            <ul> 
                {items.map((item, index) => ( 
                    <li key={index} onClick={() => console.log("Kliknięto: ", item)} style={{cursor: "pointer"}}>{item}</li> 
                ))} 
            </ul>
        }
        </div>
          
    ); 
};
const App = () => { 
    return ( 
        <div> 
            <List heading="Miasta" items={["Nowy Jork", "Londyn", "Paryż"]} /> 
            <List heading="Imiona" items={["Anna", "Kamil", "Ola"]} /> 
            <List heading="Kolory" items={["Czerwony", "Zielony", "Niebieski"]} /> 
        </div> 
    ); 
}; 
export default App; 