import React,{useState, useEffect} from 'react';
import styles from './FeeOrDiscount.module.css';
import Modal from '../../../../../Modal/Modal';
import Input from '../../../../../UI/Input';
import cross from '../../../../../../assets/crossBlack.png';
import leftArrow from '../../../../../../assets/leftArrow.png';

export default function FeeOrDiscount(props) {
    const [totalAmount, setTotalAmount] = useState('1000');
    const [amount, setAmount] = useState('0');
    const [feeOrDiscount, setFeeOrDiscount] = useState('discount');
    const [discountType, setDiscountType] = useState('fixed');
    const [amountToBePaid, setAmountToBePaid] = useState(totalAmount);
    const [reason, setReason] = useState('');

    useEffect(() => {
        if(feeOrDiscount ==='discount' && discountType ==='fixed') {
            if(parseFloat(totalAmount) - parseFloat(amount) < 0) {
                setAmountToBePaid('0');
            }
            else {
                setAmountToBePaid((parseFloat(totalAmount) - parseFloat(amount)));
            }
        }
        
        if((feeOrDiscount==='fee' && discountType==='fixed')) {
            setAmountToBePaid(parseFloat(amount) + parseFloat(totalAmount));
        }
        
        if(feeOrDiscount==='discount' && discountType==='percent') {
            if(parseFloat(totalAmount) - ((parseFloat(totalAmount) / 100) * amount) < 0) {
                setAmountToBePaid('0');
            }
            else {
                setAmountToBePaid(parseFloat(totalAmount) - ((parseFloat(totalAmount) / 100) * amount))
            }
        }
        
        if(feeOrDiscount==='fee' && discountType==='percent') {
            setAmountToBePaid(parseFloat(totalAmount) + ((parseFloat(totalAmount) / 100) * amount))
        }

    },[feeOrDiscount, discountType, amount])

    const clickHandler = (e) => {
        if(e.target.name !== 'pay') {
            if (amount === "0") {
                setAmount("".concat(e.target.name));
            }
            else {
                setAmount(amount.concat(e.target.name));
            }
        }
    }

    const clear = () => {
        setAmount("0");
    };

    const backspace = () => {
        if (amount.length === 1) {
            setAmount("0");
        }
        else {
            setAmount(amount.slice(0, amount.length - 1));
        }
    }

    const popularFeeHandler = (event) => {
        setDiscountType('percent');
        setAmount(event.target.value);
    }

    const reasonChangeHandler = (event) => {
        setReason(event.target.value);
    }

    return (
        <Modal onClose={props.onClose}>
            <div className={`${styles.flexConst} ${styles.flexEnd}`}>
                <img
                className={`${styles.pointer}`}
                src={cross}
                alt="cross"
                width="20"
                height="20"
                onClick={props.onClose}
                />
            </div>

            <div className={`${styles.flexCol} ${styles.container}`}>
                <div className={`${styles.flexConst} ${styles.spaceBetween}`}>
                    <h5>Add Fee Or Discount</h5>
                    <h4>${totalAmount}</h4>
                </div>

                <hr />

                <div className={`${styles.flex}`}>
                    <div className={`${styles.flexCol}`}>
                        <h6>Fee Or Discount</h6>
                        <select
                        name="feeOrDiscount"
                        value={feeOrDiscount}
                        id="dropDown"
                        onChange={(event) => {
                            setFeeOrDiscount(event.target.value);
                        }}
                        className={styles.select}
                        >
                            <option className={`${styles.option}`} value="discount">
                                DISCOUNT
                            </option>
                            <option
                                className={`${styles.option}`}
                                value="fee"
                            >
                                FEE
                            </option>
                        </select>
                    </div>

                    <div className={`${styles.flexCol}`}>
                        <h6>Amount Type</h6>
                        <select
                        name="discountType"
                        value={discountType}
                        id="dropDown"
                        onChange={(event) => {
                            setDiscountType(event.target.value);
                        }}
                        className={styles.select}
                        >
                            <option className={`${styles.option}`} value="fixed">
                                FIXED
                            </option>
                            <option
                                className={`${styles.option}`}
                                value="percent"
                            >
                                PERCENTAGE
                            </option>
                        </select>
                    </div>

                    <div className={`${styles.flexCol}`}>
                        <h6>Amount *</h6>
                        <div>
                            <Input value={amount} type='number' onChange={(event) => {
                                setAmount(event.target.value);
                            }}/>
                        </div>
                    </div>
                </div>

                <br />

                <div className={styles.flex}>
                    <div className={styles.flexCol}>
                        <h6>Reason (optional)</h6>
                        <Input value={reason} onChange={reasonChangeHandler}/>
                    </div>

                    <div className={styles.flexCol}>
                        <h6>Amount To Pay</h6>
                        <div className={styles.cashInHand1}>
                            <h1>$ {amountToBePaid}</h1>
                        </div>
                    </div>
                </div>

                <br />

                <div className={styles.flex}>
                    <div className={styles.flexCol}>
                        <h6>Popular Fees</h6>
                        <div className={`${styles.flex} ${styles.spaceAround}`}>
                            <button value='5' onClick={popularFeeHandler} className={styles.button}>5%</button>
                            <button value='10' onClick={popularFeeHandler} className={styles.button}>10%</button>
                            <button value='15' onClick={popularFeeHandler} className={styles.button}>15%</button>
                            <button value='20' onClick={popularFeeHandler} className={styles.button}>20%</button>
                            <button value='50' onClick={popularFeeHandler} className={styles.button}>50%</button>
                        </div>
                    </div>
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
                    name="updateTotal"
                    onClick={clickHandler}
                    className={`${styles.highlight}`}
                >
                    UPDATE TOTAL
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
        </Modal>
    )
}
