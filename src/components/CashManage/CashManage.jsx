import React, {useState} from 'react';
import styles from './CashManage.module.css';
import Modal from '../Modal/Modal';
import Input from '../UI/Input';
import cross from '../../assets/crossBlack.png';
import leftArrow from '../../assets/leftArrow.png';
import { useDispatch } from 'react-redux';
import { registerActions } from '../../store/register-slice';

export default function CashManage(props) {
  const [result, setResult] = useState("");
  const [cash, setCash] = useState("ADD");
  const [reason, setReason] = useState("");
  const dispatch = useDispatch();
  // const [data, setData] = useState({});


  const clickHandler =(e)=>{
    if(e.target.name==='saveCash' || e.target.name==='back') {
      if(e.target.name==='saveCash') {
        // setData({
        //   result:result,
        //   cash: cash,
        //   reason: reason
        // })
        dispatch(registerActions.calculate({
          cash:result,
          act:cash,
          reason:reason,
        }));


        
      }
      setResult('');
      // to see data comment props.close() first :)
      // console.log(data);
      props.onClose();
    }else{
      setResult(result.concat(e.target.name));
    }
  }
  const clear =()=>{
    setResult("");
  }
  const backspace = ()=>{
    setResult(result.slice(0,result.length-1))
  }
  
  return (
    <Modal onClose={props.onClose}>
      <div className={`${styles.flexCol} ${styles.container}`}>
          <div className={`${styles.flexRowTop} ${styles.r1Head}`}>
              <h5>Add Cash In Hand</h5>
              <img
                  className={styles.pointer}
                  src={cross}
                  alt="cross"
                  width="25"
                  height="25"
                  onClick={props.onClose}
              />
          </div>

          <hr />

          <div className={`${styles.flexRow} ${styles.r2Name}`}>
            <div className={`${styles.flexCol} ${styles.errors}`}>
            <h6>Add or Remove Cash</h6>
            <select name="addOrRemove" value={cash} id="dropDown" onChange= {
              (event) => {
                setCash(event.target.value);
              }
            } className={styles.select}>
              <option value="ADD" className={styles.select}>+ Add
              </option>
              <option value="REMOVE" className={styles.select}>- Remove
              </option>
            </select>
            </div>
            <div className={`${styles.flexCol} ${styles.errors}`}>
              <h6>Cash In Hand</h6>
              <div className={styles.cashInHand}>
                <h1>{result}</h1>
              </div>
            </div>
          </div>

          <div className={`${styles.flexRow} ${styles.r2Name}`}>
            <div className={`${styles.flexCol} ${styles.errors}`}>
            <h6>Reason</h6>
              <Input
                value={reason}
                onChange={(event) => {
                  setReason(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.keypad}>
            <button name="1" onClick={clickHandler} className={styles.btn}>1</button>
            <button name="2" onClick={clickHandler} className={styles.btn}>2</button>
            <button name="3" onClick={clickHandler} className={styles.btn}>3</button>
            <button onClick={clear} className={`${styles.special} ${styles.btn}`} >Clear</button>
            <button name="4" onClick={clickHandler} className={styles.btn}>4</button>
            <button name="5" onClick={clickHandler} className={styles.btn}>5</button>
            <button name="6" onClick={clickHandler} className={styles.btn}>6</button>
            <button onClick={backspace} id="backspace" className={`${styles.special} ${styles.btn}`}>
              <img src={leftArrow} alt="left arrow" height='15' width='15' />
            </button>
            <button name="7" onClick={clickHandler} className={styles.btn}>7</button>
            <button name="8" onClick={clickHandler} className={styles.btn}>8</button>
            <button name="9" onClick={clickHandler} className={styles.btn}>9</button>
            <button name="saveCash" onClick={clickHandler} className={`${styles.highlight}`}>Save Cash</button>
            <button name="0" onClick={clickHandler} className={styles.btn}>0</button>
            <button name="." onClick={clickHandler} className={styles.btn}>.</button>
            <button name="00" onClick={clickHandler} className={styles.btn}>00</button>
            <button name="back"  onClick={clickHandler} className={`${styles.result} ${styles.highlight}`}>Back</button>
          </div>
      </div>
    </Modal>
  )
}
