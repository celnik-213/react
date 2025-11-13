import { useState, useEffect, use } from "react";

const TextToogle = () => {
 const[isHello, setIsHello] = useState(true);
    return(
        <div>
            <p>{isHello ? "Hello" : "Goodbye"}</p>
            <button onClick={() => setIsHello(!isHello)}>
                Przełącz tekst
            </button>
        </div>
    );
}
export default TextToogle;