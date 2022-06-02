import React from "react";
import CartItem from "./CartItem/CartItem";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  return (
    <div className={styles.cart}>
      {items.map((item) => (
        <CartItem
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
}
