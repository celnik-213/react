import { useState } from "react"; 
import PropTypes from "prop-types";

const Alert = ({ message, onClose, type="danger" }) => { 

    return ( 

        <div className={`alert alert-${type} alert-dismissible`.trim()}> 
            {message} 
            <button className="btn-close" onClick={onClose}></button> 
        </div> 
    ); 
}; 

Alert.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(["primary","danger", "success", "warning"]),
    className: PropTypes.string
};

const Alert2 = () => { 

    const [alertVisible, setAlertVisible] = useState(false); 
    return ( 
        <div> 
            {alertVisible && <Alert message="Uwaga!" onClose={() => setAlertVisible(false)} />} 
            <button className="btn btn-primary" onClick={() => setAlertVisible(true)}> 
                Pokaż Alert 
            </button> 
        </div> 
    ); 

}; 
export default Alert2;