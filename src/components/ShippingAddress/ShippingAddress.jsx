import React, { useState } from "react";
import styles from "./ShippingAddress.module.css";
import cross from "../../assets/crossBlack.png";
import Input from "../UI/Input";
import Modal from "../Modal/Modal";

export default function ShippingAddress(props) {
  const [fName, setFName] = useState('');
  const [fNameError, setFNameError] = useState(false);
  const [lName, setLName] = useState('');
  const [lNameError, setLNameError] = useState(false);
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [data, setData] = useState({});
  console.log(data);
  return (
    <Modal onClose={props.onClose}>
      {/* <div className={`${styles.flexRowMain} ${styles.r0}`}> */}
        <div className={`${styles.flexCol} ${styles.container}`}>
          <div className={`${styles.flexRowTop} ${styles.r1Head}`}>
            <h5>Shipping Address</h5>
            <img className={styles.pointer} src={cross} alt="cross" width="25" height="25" onClick={props.onClose} />
          </div>

          <hr />

          <div className={`${styles.flexRow} ${styles.r2Name}`}>
            <div className={`${styles.flexCol} ${fNameError&&styles.error}`}>
              <h6>First Name *</h6>
              <Input value={fName} onChange={(event) => {
                setFName(event.target.value);
              }} />
            </div>
            <div className={`${styles.flexCol} ${lNameError&&styles.error}`}>
              <h6>Last Name *</h6>
              <Input value={lName} onChange={(event) => {
                setLName(event.target.value);
              }} />
            </div>
          </div>

          <div className={`${styles.flexRow} ${styles.r2Name}`}>
            <div className={`${styles.flexCol}`}>
              <h6>City</h6>
              <Input value={city} onChange={(event) => {
                setCity(event.target.value);
              }} />
            </div>
            <div className={`${styles.flexCol}`}>
              <h6>Post Code</h6>
              <Input value={postCode} onChange={(event) => {
                setPostCode(event.target.value);
              }} />
            </div>
          </div>

          <div className={`${styles.flexRow} ${styles.r2Name}`}>
            <div className={`${styles.flexCol}`}>
              <h6>Country</h6>
              <select className={`${styles.select}`} onChange={(event) => {
                setCountry(event.target.value);
              }}>
                <option className={`${styles.option}`} value="Pakistan">
                  Pakistan
                </option>
                <option className={`${styles.option}`} value="England">
                  England
                </option>
                <option className={`${styles.option}`} value="Australia">
                  Australia
                </option>
                <option className={`${styles.option}`} value="Turkey">
                  Turkey
                </option>
                <option className={`${styles.option}`} value="Canada">
                  Canada
                </option>
                <option className={`${styles.option}`} value="Argentina">
                  Argentina
                </option>
              </select>
            </div>
            <div className={`${styles.flexCol}`}>
              <h6>State</h6>
              <Input value={state} onChange={(event) => {
                setState(event.target.value);
              }} />
            </div>
          </div>

          <div className={`${styles.flexRow} ${styles.r2Name}`}>
            <div className={`${styles.flexCol}`}>
              <h6>Address</h6>
              <Input value={address} onChange={(event) => {
                setAddress(event.target.value);
              }} />
            </div>
          </div>

          <button className={`${styles.btn}`} onClick={() => {
            if((fName.trim().length===0)) {
              setFNameError(true)
            }  
            else if((lName.trim().length===0)) {
              setLNameError(true)
            }
            else {
              setData({
                fName: fName,
                lName: lName,
                city: city,
                postCode: postCode,
                state: state,
                address: address,
                country: country
              })
              setLNameError(false);
              setFNameError(false);
              
              setFName('');
              setLName('');
              setCity('');
              setState('');
              setAddress('');
              setPostCode('');
              setCountry('');
            }  
          }}>Save Shipping Address</button>
        </div>
      {/* </div> */}
    </Modal>
  );
}
