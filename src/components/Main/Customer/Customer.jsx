import React, {useState} from 'react';
import styles from './Customer.module.css';
import cartPic from '../../../assets/cart.png';
import customerPic from '../../../assets/customer.png';
import addressPic from '../../../assets/address.png';
import CartAction from './CartAction/CartAction';
import CartTotal from './CartTotal/CartTotal';
import Cart from './Cart/Cart';

export default function Customer(props) {
    const [showAll,setShowAll]=useState(true);
    const [cart,setCart]=useState(false);
    const [customer,setCustomer]=useState(false);
    const [address,setAddress]=useState(false);

    const allhandler=()=>{
        setShowAll(true)
        setCart(false);
        setCustomer(false);
        setAddress(false);
    }
    const cartHandler=()=>{
        setShowAll(false)
        setCart(true);
        setCustomer(false);
        setAddress(false);
    }
    const customerHandler=()=>{
        setShowAll(false)
        setCart(false);
        setCustomer(true);
        setAddress(false);
    }
    const addressHandler=()=>{
        setShowAll(false)
        setCart(false);
        setCustomer(false);
        setAddress(true);
    }
    return (
        <div className={styles.rightBox}>
            <div className={styles.rightTop}>
                <div className={styles.btns}>
                    <button className={`${styles.btn} ${styles.active}`}>
                        <img src={cartPic} alt="cart" width='20' height='20' />
                        Cart
                    </button>
                    <button className={`${styles.btn}`}
                        onClick={() => {
                            props.showSearchCustomerProfile();
                        }}
                    >
                        <img src={customerPic} alt="customer" width='20' height='20' />
                        Customer
                    </button>
                    <button className={`${styles.btn}`} onClick={()=> {
                        props.showShippingAddress();
                    }
                    } >
                        <img src={addressPic} alt="address" width='20' height='20' />
                        Address
                    </button>
                </div>
                <div className={styles.selectedProducts}>
                    <Cart></Cart>
                </div>
            </div>

            <div className={styles.rightBottom}>
                <CartTotal></CartTotal>   
                <CartAction></CartAction>
            </div>
        </div>
    )
}
