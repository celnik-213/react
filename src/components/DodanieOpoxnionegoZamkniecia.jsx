import { useState } from "react";

const Alert = ({message, OnClose}) => {
    return(
        <div className="alert alert-warning alert-dismissible">
            {message}
        </div>
    );
};

const Alert1 = () => {
    const [alertVisible, setAlertVisible] = useState(false);
    const handleClose = () => {
        setAlertVisible(false);
    };

    const handleShowAlert = () => {
        setAlertVisible(true);
        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);
    };

    return(
        <div>
            {alertVisible && <Alert message="To jest alert!" OnClose={handleClose} />}
            <button onClick={handleShowAlert} className="btn btn-primary">Pokaż alert</button>
        </div>
    );
};
export default Alert1;