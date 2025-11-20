import { useState, useEffect, use } from "react";

const WpiszCos = () => {   

    const [text, setText] = useState({text:""});
    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setText({ ...text, [name]: value});
    }
    const handleSumbit = (e) =>{
        e.preventDefault();
        alert(`Text : ${text.text}`)
    }

    return ( 
        <>   
           <form onSumbit={handleSumbit} >
            <input type="text" name="text" value={text.text} onChange = {handleChange} />
           </form>
           <p>{text.text === "" ? "Wpisz coś w pole powyżej" : text.text}</p>
           </> 

    ); 
}; 

export default WpiszCos;