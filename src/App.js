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
import ThreeColors from './components/ThreeColors';
import AddList from './components/AddList'; 
import CountTo0 from './components/CountTo0';
import DomyslnaWartosc from './components/DomyslnaWartosc';
import DodanieObslugiKlikniecia from './components/DodanieObslugiKlikniecia';
import PodswietlenieWybranegoElemenu from './components/PodswietlenieWybranegoElemenu';
import Licznik from './components/Licznik';
import PrzelaczanieMotywu from './components/PrzelaczanieMotywu';
import Alert from './components/DynamicznaKlasa';
import Card from './components/KomponentCardChildren';
import ObslugaZdarzeniaPodwojneKlikniecie from './components/ObslugaZdarzeniaPodwojneKlikniecie';

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
            <h1>Task 19</h1>
            <ThreeColors />
            <h1>Task 20</h1>
            <AddList />
            <h1>Task 21</h1>
            <CountTo0 />
            <h1>Rozdział 7</h1>
            <h1>Task 1</h1>
            <DomyslnaWartosc />
            <h1>Task 2</h1>
            <DodanieObslugiKlikniecia />
            <h1>Rozdział 8</h1>
            <h1>Task 1</h1>
            <PodswietlenieWybranegoElemenu />
            <h1>Rozdział 9</h1>
            <h1>Task 1</h1>
            <Licznik />
            <h1>Task 2</h1>
            <PrzelaczanieMotywu />
            <h1>Rozdział 10</h1>
            <h1>Task 1</h1>
            <Alert>
                <strong>Błąd!</strong>To jest błąd.
            </Alert>
            <h1>Task 2</h1>
            <Card> 
                <h2>Nagłówek karty</h2>
                <p>To jest zawartość karty.</p>
            </Card>
            <h1>Rozdział 12</h1>
            <h1>Task 1</h1>
            <ObslugaZdarzeniaPodwojneKlikniecie />
        </div>

    ); 

} 

 

export default App; 
