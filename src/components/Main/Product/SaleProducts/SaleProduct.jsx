import React from "react";
import classes from "./SaleProduct.module.css";
import AddCard from "../../AddProduct/AddCard";
import Item from "../Item";
import { useSelector } from "react-redux";

const SaleProduct = () => {
  const productsToBeShown = useSelector((state) => state.product.products);
  let arr = [];
  for (let x of productsToBeShown) {
    for (let y of x.details) {
      if (y.sale === true) {
        arr.push(y);
      }
    }
  }
  return (
    <div className={classes.box}>
      {arr.map((item) => (
        <Item
        src={item.src}
        title={item.title}
        price={item.price}
        cat={item.cat}
        ></Item>
      ))}
      <AddCard></AddCard>
    </div>
  );
};

export default SaleProduct;
