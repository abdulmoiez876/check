import React, { useState , useContext} from "react";
import classes from "./Location.module.css";
import { useNavigate } from "react-router-dom";


function Location() {
  const [register,setRegister] = useState("");
  const [store,setStore] = useState("");
    const navigate = useNavigate();

    const storeSubmitHandler =(event)=>{
        event.preventDefault();
        navigate("/home");
    };
    const registerHandler =(e)=>{
      setRegister(e.target.value);
    }
    
    const storeHandler =(e)=>{
      setStore(e.target.value);
    }
    
    
  return (
    <div className={classes.screen}>
      <div className={classes.box}>
        <div className={classes.container_main}>
          <div className={classes.container}>
            <h1 className={classes.head}>POINT OF SALE</h1>
            <span>T-Tech Solutions Lab, Islamabad</span>
          </div>
          <h1 className={classes.heading}>Choose Store and Register</h1>
        </div>
        <form onSubmit={storeSubmitHandler}>
          <div className={classes.input}>
            <select name="store" id="store" className={classes.input_feild} onChange={storeHandler}>
              <option value="store">Choose Store</option>
              <option value="Rawalpindi">Rawalpindi Store</option>
              <option value="Sharjah">Sharjah Store</option>
              <option value="Islamabad">Islamabad Store</option>
            </select>
          </div>
          <div className={classes.input}>
            <select name="register" id="register" className={classes.input_feild} onChange={registerHandler}>
              <option value="register">Choose Register</option>
              <option value="Morning">Morning Register</option>
              <option value="Evening">Evening Register</option>
            </select>
          </div>
          <div>
            <button className={classes.btn}>Choose Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Location;
