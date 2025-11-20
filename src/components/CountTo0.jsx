import { useState, useEffect, use } from "react";

const CountTo0 = () => {
    const [count, setCount] = useState(10);
    const zmniejsz = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <h1>Liczba: {count}</h1>
            <button style={{color:"red", background:"blue"}} onClick={zmniejsz}>Zmniejsz</button>
        </div>
    );
};
export default CountTo0;