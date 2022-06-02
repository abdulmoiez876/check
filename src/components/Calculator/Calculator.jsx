import React, { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./Calculator.module.css"

function Calculator(props) {
  const [result, setResult] = useState("");
  const clickHandler =(e)=>{
    setResult(result.concat(e.target.name));
  }
  const clear =()=>{
    setResult("");
  }
  const backspace = ()=>{
    setResult(result.slice(0,result.length-1))
  }
  const calculate = ()=>{
    setResult(eval(result).toString())
  }
  return (
    <Modal onClose={props.onClose}>
        <form>
          <input type="text" value={result} className={classes.input}></input>
        </form>
        <div className={classes.keypad}>
          <button onClick={clear} className={`${classes.clear} ${classes.highlight}` } >Clear</button>
          <button onClick={backspace} id="backspace" className={`${classes.highlight}`}>C</button>
          <button name="/" onClick={clickHandler} className={`${classes.highlight}`}>/</button>
          <button name="7" onClick={clickHandler} className={classes.btn}>7</button>
          <button name="8" onClick={clickHandler} className={classes.btn}>8</button>
          <button name="9" onClick={clickHandler} className={classes.btn}>9</button>
          <button name="*" onClick={clickHandler} className={`${classes.highlight}`}>*</button>
          <button name="4" onClick={clickHandler} className={classes.btn}>4</button>
          <button name="5" onClick={clickHandler} className={classes.btn}>5</button>
          <button name="6" onClick={clickHandler} className={classes.btn}>6</button>
          <button name="-" onClick={clickHandler} className={`${classes.highlight}`}>-</button>
          <button name="1" onClick={clickHandler} className={classes.btn}>1</button>
          <button name="2" onClick={clickHandler} className={classes.btn}>2</button>
          <button name="3" onClick={clickHandler} className={classes.btn}>3</button>
          <button name="+" onClick={clickHandler} className={`${classes.highlight}`}>+</button>
          <button name="0" onClick={clickHandler} className={classes.btn}>0</button>
          <button name="." onClick={clickHandler} className={classes.btn}>.</button>
          <button onClick={calculate} className={`${classes.result} ${classes.highlight}`}>=</button>
        </div>
    </Modal>
  );
}

export default Calculator;
