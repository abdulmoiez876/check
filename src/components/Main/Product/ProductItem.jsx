import React,{useState} from "react";
import classes from "./ProductItem.module.css";
import Item from "./Item";
import { useSelector } from "react-redux";

const ProductItem = (props) => {
  const productsToBeShown = useSelector((state)=>state.product.products);

  const itemsToBeDisplayed = (details) => {
    props.onClick2(details);
  }
  return (
    <div className={classes.box}>
      {productsToBeShown.map((p) => {
        return (
          <Item
            src={p.src}
            title={p.title}
            price={p.price}
            cat={p.cat}
            onClick={props.onClick}
            key={p.title}
            details={p.details}
            itemsToBeDisplayed={itemsToBeDisplayed}
          />
        )
      })}
    </div>
  );
};

export default ProductItem;
