import React, { useState, useEffect } from "react";
import styles from "./Pay.module.css";
import Modal from "../../../../../Modal/Modal";
import cross from "../../../../../../assets/crossBlack.png";
import Input from "../../../../../UI/Input";
import leftArrow from "../../../../../../assets/leftArrow.png";
import { useSelector } from "react-redux";

export default function Pay(props) {
  const TotalAmount = useSelector(state=>state.cart.totalAmount);
  const [result, setResult] = useState("0");
  const [paymentOption, setPaymentOption] = useState("Cash");
  const [data, setData] = useState({});
  const [numberOfOptions, setNumberOfOption] = useState(["1"]);
  const [balance, setBalance] = useState(100);
  const [change, setChange] = useState(100);

  useEffect(() => {
    if (TotalAmount - parseFloat(result) > 0) {
      setBalance((TotalAmount - parseFloat(result)).toFixed(2));
      setChange(0);
    } else {
      setChange((parseFloat(result) - TotalAmount).toFixed(2));
      setBalance(0);
    }
  }, [result,TotalAmount]);

  const clickHandler = (e) => {
    if (e.target.name === "pay" || e.target.name === "back") {
      if (e.target.name === "pay") {
        setData({
          result: result,
          paymentOption: paymentOption,
        });
      }
      setResult("");
      setPaymentOption("cash");
    } else {
      if (result === "0") {
        setResult("".concat(e.target.name));
      } else {
        setResult(result.concat(e.target.name));
      }
    }
  };

  const clear = () => {
    setResult("0");
  };
  const backspace = () => {
    if (result.length === 1) {
      setResult("0");
    } else {
      setResult(result.slice(0, result.length - 1));
    }
  };
  return (
    <Modal onClose={props.onClose}>
      <div className={`${styles.flex} ${styles.flexEnd}`}>
        <img
          className={`${styles.pointer}`}
          src={cross}
          alt="cross"
          width="20"
          height="20"
          onClick={props.onClose}
        />
      </div>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.flexCol}>
            <div>
              <div className={`${styles.flex1} ${styles.spaceBetween}`}>
                <h5>Total due:   </h5>
                <h3>${TotalAmount}</h3>
              </div>
              <br />
              <div className={`${styles.flex1} ${styles.spaceBetween}`}>
                <h5>Paying:   </h5>
                <h3>${result}</h3>
              </div>
            </div>
            <br />
            <div>
              <div className={`${styles.flex1} ${styles.spaceBetween}`}>
                <h5>Balance:   </h5>
                <h3>${balance}</h3>
              </div>
              <br />
              <div className={`${styles.flex1} ${styles.spaceBetween}`}>
                <h5>Change:   </h5>
                <h3>${change}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={`${styles.flexCol} ${styles.container}`}>
            <div className={`${styles.flex} ${styles.spaceBetween}`}>
              <h5>Split Payment</h5>
              <h4>${TotalAmount}</h4>
            </div>

            <hr />
            <div className={`${styles.flex}`}>
              <div className={`${styles.flexCol} ${styles.errors}`}>
                <h6>Paying</h6>
                <div className={styles.cashInHand}>
                  <h1>{result}</h1>
                </div>
              </div>

              <div className={`${styles.flexCol} ${styles.errors}`}>
                <h6>Payment Option</h6>
                <select
                  name="addOrRemove"
                  value={paymentOption}
                  id="dropDown"
                  onChange={(event) => {
                    setPaymentOption(event.target.value);
                  }}
                  className={styles.select}
                >
                  <option className={`${styles.option}`} value="cash">
                    Cash
                  </option>
                  <option
                    className={`${styles.option}`}
                    value="directBankTransfer"
                  >
                    Direct Bank Transfer
                  </option>
                  <option className={`${styles.option}`} value="cheque">
                    Cheque Payments
                  </option>
                  <option className={`${styles.option}`} value="cod">
                    Cash On Delivery
                  </option>
                  <option className={`${styles.option}`} value="chipPin">
                    Chip & Pin
                  </option>
                </select>
              </div>
            </div>

            <br />

            <button className={styles.button}>+ ADD ANOTHER PAYMENT</button>

            <br />

            <div className={styles.flexCol}>
              <h6>Popular Tendered</h6>
              <Input />
            </div>

            <br />

            <div className={styles.keypad}>
              <button name="1" onClick={clickHandler} className={styles.btn}>
                1
              </button>
              <button name="2" onClick={clickHandler} className={styles.btn}>
                2
              </button>
              <button name="3" onClick={clickHandler} className={styles.btn}>
                3
              </button>
              <button
                onClick={clear}
                className={`${styles.special} ${styles.btn}`}
              >
                Clear
              </button>
              <button name="4" onClick={clickHandler} className={styles.btn}>
                4
              </button>
              <button name="5" onClick={clickHandler} className={styles.btn}>
                5
              </button>
              <button name="6" onClick={clickHandler} className={styles.btn}>
                6
              </button>
              <button
                onClick={backspace}
                id="backspace"
                className={`${styles.special} ${styles.btn}`}
              >
                <img src={leftArrow} alt="left arrow" height="15" width="15" />
              </button>
              <button name="7" onClick={clickHandler} className={styles.btn}>
                7
              </button>
              <button name="8" onClick={clickHandler} className={styles.btn}>
                8
              </button>
              <button name="9" onClick={clickHandler} className={styles.btn}>
                9
              </button>
              <button
                name="pay"
                onClick={clickHandler}
                className={`${styles.highlight}`}
              >
                PAY
              </button>
              <button name="0" onClick={clickHandler} className={styles.btn}>
                0
              </button>
              <button name="." onClick={clickHandler} className={styles.btn}>
                .
              </button>
              <button name="00" onClick={clickHandler} className={styles.btn}>
                00
              </button>
              <button
                name="back"
                onClick={clickHandler}
                className={`${styles.result} ${styles.highlight}`}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
