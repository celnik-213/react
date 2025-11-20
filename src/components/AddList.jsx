import { useState, useEffect, use } from "react";

const AddList = () => {   
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handleAddItem = () => {
        if (inputValue.trim() !== "") {
            setItems([...items, inputValue]);
            setInputValue("");
        }
    };

     return (
        <>
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Wpisz nowy element"
            />
            <button onClick={handleAddItem}>Dodaj element</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default AddList;