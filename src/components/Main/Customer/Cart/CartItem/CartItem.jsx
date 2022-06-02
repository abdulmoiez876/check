import React from 'react';
import styles from './CartItem.module.css';
import cross from '../../../../../assets/crossBlack.png'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../../store/cart-slice';

export default function CartItem(props) {
    const {item} = props;
    const dispatch = useDispatch();
    const onRemoveItem =()=>{
        dispatch(cartActions.removeItem(item.id))
    }
    return (
    <div className={styles.cartItem}>
        <img className={`${styles.flexItem} ${styles.pointer}`} src={cross} alt="cross" width="12" height="12" onClick={onRemoveItem}/>
        <img className={styles.flexItem} src={item.src} alt="item" width="50" height="30" />
        <h3 className={styles.flexItem}>{item.title}</h3>
        <div className={`${styles.flexItem} ${styles.centreButtons}`}>
            <button className={`${styles.button} ${styles.pointer}`}
                onClick={() => {
                    dispatch(cartActions.removeItemFromCart(item.id))
                }}
            >-</button>
            <h3>{item.quantity}</h3>
            <button className={`${styles.button} ${styles.pointer}`}
                onClick={() => {
                    dispatch(cartActions.addItemToCart(item))
                }}
            >+</button>
        </div>
        <h4 className={styles.flexItem}>$ {item.price}</h4>
        <h2 className={styles.flexItem}>$ {item.totalPrice}</h2>
    </div>
    )
}
