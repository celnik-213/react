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
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectItem = (item) => {
        setSelectedItem(item);    // zapisujemy wybrany element w stanie App
        console.log(`Wybrano: ${item}`);
    };

    return (
        <div>
            <h2>Wybierz miasto:</h2>
            <ItemList
                items={["Warszawa", "Kraków", "Gdańsk"]}
                selectedItem={selectedItem}
                onSelectItem={handleSelectItem}
            />
        </div>
    );
};

export default App;
