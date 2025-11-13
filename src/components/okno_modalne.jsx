import { useState, useEffect,} from "react";

const OknoModalne = () => {
    const [isModal, setModal] = useState(false);
    const changeModal = () => {
        setModal(!isModal);   
    };
    return (
        <div>
            <button onClick={changeModal}>
                {isModal ? "Zamknij okienko modalne" : "Otwórz okienko modalne"}
            </button>
            {isModal && ( 
                <div> 
                    <h2>To jest okienko modalne</h2>
                    <button onClick={changeModal}>Zamknij</button>
                </div>
            )}
        </div>    
    );
};    
export default OknoModalne;
