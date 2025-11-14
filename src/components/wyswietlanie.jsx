import { useState, useEffect, use } from "react";

const Wyswietlanie = () => {   
    
    const [option, setOption] = useState("");

     return ( 
        <>   
            <select value = {option} onChange = {e => setOption(e.target.value)}> 
                <option disabled selected value>Wybierz opcję</option> 
                <option value="Opcja: A" >Opcja A</option> 
                <option value="Opcja: B" >Opcja B</option> 
                <option value="Opcja: C" >Opcja C</option> 
            </select> 
            
            <h1>{option}</h1> 
        </> 
    ); 
}; 
export default Wyswietlanie; 