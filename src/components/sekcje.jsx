import { useState, useEffect, use } from "react";
const Sekcje = () => {   

    const [ciekawostka, setCiekawostka] = useState(0);
    
    function handleClick(numer) { 
        setCiekawostka(numer);
    }

    return ( 
        <>   
            <h1>Ciekawostki o borsukach</h1> 
            <button onClick={() => handleClick(1)}>1</button> 
            <button onClick={() => handleClick(2)}>2</button> 
            <button onClick={() => handleClick(3)}>3</button> 
            {ciekawostka == 1 && <section > 
                <h2>Ciekawostka 1</h2> 
                <p>Borsuki to ssaki z rodziny łasicowatych.</p> 
            </section>}    
            
            {ciekawostka == 2 &&<section> 
                <h2>Ciekawostka 2</h2> 
                <p>Ich dieta obejmuje owady i rośliny.</p> 
            </section>}

            {ciekawostka == 3 &&<section> 
                <h2>Ciekawostka 3</h2> 
                <p>Borsuki są aktywne nocą.</p> 
            </section> }
        </> 

    ); 
}; 

export default Sekcje;