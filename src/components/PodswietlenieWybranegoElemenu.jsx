import { useState } from "react";

const ItemList = ({ items, selectedItem, onSelectItem }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={selectedItem === item ? "active" : ""}
                    onClick={() => onSelectItem(item)}
                    style={{ cursor: "pointer" }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

const App = () => {
    const [selectedItem, setSelectedItem] = useState("Kraków");

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        console.log(`Wybrano: ${item}`);
    };

    return (
        <div>
            
            <h2>Wybierz miasto:</h2>
            <ItemList
                items={["Warszawa", "Kraków", "Gdańsk"]}
                onSelectItem={handleSelectItem} 
                selectedItem={selectedItem}
            />
        </div>
    );
};

export default App;
