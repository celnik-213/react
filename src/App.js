import React from 'react'; 
import ItemList from './components/ItemList'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import DarkModeToggle from './components/DarkModeToggle';
import OknoModal from './components/OknoModal';
import OknoModalne from './components/okno_modalne';
import Password from './components/password';

function App() { 

    return ( 

        <div className="container mt-4"> 

            <h1>Task 6</h1> 
            <ItemList />
            <h1>Task 7</h1>
            <DarkModeToggle />
            <h1>Task 8</h1>
            <OknoModalne />
            <h1>Task 9</h1>
            <Password />


        </div> 

    ); 

} 

 

export default App; 
