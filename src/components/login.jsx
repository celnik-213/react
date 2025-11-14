import { useState, useEffect, use } from "react";

const Login = () => {   

    const [login, setLogin] = useState({email:"",password:""});
    
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setLogin({ ...login, [name]: value});
    }
    const handleSumbit = (e) =>{
        e.preventDefault();
        alert(`Email : ${login.email} \n hasło: ${login.password}`)
    }

    return ( 
        <>   
           <form onSumbit={handleSumbit} > 
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={login.email} onChange = {handleChange} />
            <label htmlFor="">Haslo</label>
            <input type="password" name="password" value={login.password} onChange = {handleChange}/>
           <button type="sumbit">Zaloguj </button>
           </form>
           <p>Email :{login.email} <br></br> Hasło: {login.password}</p>
           

        </> 

    ); 
}; 

export default Login;