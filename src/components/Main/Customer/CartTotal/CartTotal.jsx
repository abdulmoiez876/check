import React from 'react'
import classes from "./CartTotal.module.css"
import { useSelector } from 'react-redux'
const CartTotal = () => {
  const cartTotal = useSelector(state=>state.cart.totalAmount)
  return (
    <div className={classes.box}>
        <div className={classes.subtotal}>
            <span>Subtotal</span>
            <span>Rs {cartTotal}</span>
        </div>
        <hr className={classes.line}></hr>
        <div className={classes.total}>
            <h1>Total</h1>
            <h1>Rs {cartTotal}</h1>
        </div>
    </div>
  )
}

export default CartTotal