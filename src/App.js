import React from 'react'; 
import ItemList from './components/ItemList'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import DarkModeToggle from './components/DarkModeToggle';
import OknoModal from './components/OknoModal';
import OknoModalne from './components/okno_modalne';
import Password from './components/password';
import TextToogle from './components/TextToogle';
import ShowNumber from './components/showNumber';
import Wiadomosc from './components/Wiadomosc';
import Wyswietlanie from './components/wyswietlanie';
import Sekcje from './components/sekcje';
import Login  from './components/login';  
import Timer from './components/Timer';
import ClickAndChangeColor from './components/ClickAndChangeColor';
import WpiszCos from './components/WpiszCos';   

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
            <h1>Task 10</h1>
            <TextToogle />
            <h1>Task 11</h1>
            <ShowNumber />
            <h1>Task 12</h1>
            <Wiadomosc />
            <h1>Task 13</h1>
            <Wyswietlanie />
            <h1>Task 14</h1>
            <Sekcje />
            <h1>Task 15</h1>
            <Login />
            <h1>Task 16</h1>
            <Timer />
            <h1>Task 17</h1>
            <ClickAndChangeColor />
            <h1>Task 18</h1>
            <WpiszCos />

        </div> 

    ); 

} 

 

export default App; 
