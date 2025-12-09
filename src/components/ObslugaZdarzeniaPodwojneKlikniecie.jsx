import { useRef } from "react";

const Button = ({ text = "Kliknij mnie", onClick, onDoubleClick, color = "warning" }) => {
    const validColors = ["primary", "secondary", "success", "danger", "warning", "info"];
    const buttonColor = validColors.includes(color) ? color : "success";

    const clickTimer = useRef(null);
    const delay = 250; // czas na wykrycie double click

    const handleClick = () => {
        if (clickTimer.current) {
            // DRUGIE kliknięcie → DOUBLE CLICK
            clearTimeout(clickTimer.current);
            clickTimer.current = null;

            if (onDoubleClick) onDoubleClick();
            else console.log("Podwójne kliknięcie!");

            return;
        }

        // PIERWSZE kliknięcie → czekamy, czy będzie drugie
        clickTimer.current = setTimeout(() => {
            clickTimer.current = null;

            if (onClick) onClick();
            else console.log("Pojedyncze kliknięcie!");
        }, delay);
    };

    return (
        <button
            className={`btn btn-${buttonColor}`}
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default Button;
