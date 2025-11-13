import { useState } from "react";

const ShowNumber = () => {
  const [showNumber, setShowNumber] = useState(false);

  function handleClick() {
    setShowNumber(true);
  }

  return (
    <>
      <h1>Jan Kowalski</h1>

      <button onClick={handleClick}>Pokaż numer telefonu</button>

      {showNumber && <h2>Numer telefonu: 888 999 000</h2>}
    </>
  );
}
export default ShowNumber;