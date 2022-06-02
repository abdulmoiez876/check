import React, { useState , useContext} from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";


function Login() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const authSubmitHandler =(event)=>{
        event.preventDefault();
        navigate("/store");
    };
    const emailHandler =(e)=>{
      setUsername(e.target.value);
    }
    
    const passwordHandler =(e)=>{
      setPassword(e.target.value);
    }
    
    
  return (
    <div className={classes.screen}>
      <div className={classes.box}>
        <div className={classes.container_main}>
          <div className={classes.container}>
            <h1 className={classes.head}>POINT OF SALE</h1>
            <span>T-Tech Solutions Lab, Islamabad</span>
          </div>
          <h1 className={classes.heading}>Login</h1>
        </div>
        <form onSubmit={authSubmitHandler}>
          <div className={classes.input}>
            <input type="text" placeholder="Username or Email address*" onChange={emailHandler} value={username} className={classes.input_feild}/>
          </div>
          <div className={classes.input}>
            <input type="password" placeholder="Password" onChange={passwordHandler} value={password} className={classes.input_feild}/>
          </div>
          <div className={classes.check}>
              <input type="checkbox" />
              <span className={classes.text}>Remember me</span>
          </div>
          <div>
            <button className={classes.btn}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
