import React, { useState } from "react";
import Detail from "../Detail/Detail";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
import Feature from "./Feature/Feature";
import classes from "./Product.module.css";
import ProductItem from "./ProductItem";
import SaleProduct from "./SaleProducts/SaleProduct";

function Product() {
  const [showAll, setShowAll] = useState(true);
  const [onSale, setOnSale] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const [scan, setScan] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [itemsToBeDisplayed, setItemsToBeDisplayed] = useState([]);

  const allhandler = () => {
    setShowAll(true);
    setOnSale(false);
    setFeatured(false);
    setAddProduct(false);
    setScan(false);
  };
  const salehandler = () => {
    setShowAll(false);
    setOnSale(true);
    setFeatured(false);
    setAddProduct(false);
    setScan(false);
    setShowDetail(false);
  };
  const featurehandler = () => {
    setShowAll(false);
    setOnSale(false);
    setFeatured(true);
    setAddProduct(false);
    setScan(false);
    setShowDetail(false);
  };
  const producthandler = () => {
    setAddProduct(true);
  };
  const scanhandler = () => {
    setShowAll(false);
    setOnSale(false);
    setFeatured(false);
    setAddProduct(false);
    setScan(true);
    setShowDetail(false);
  };

  const onDetailHandler = () => {
    setShowDetail(true);
  };
  const backHandler = () => {
    setShowDetail(false);
    setShowAll(true);
  };

  const clickItemHandler = (details) => {
    setItemsToBeDisplayed(details);
  };

  const hideAddProduct = () => {
      setAddProduct(false);
  }

  return (
    <div className={classes.box}>
      <div className={classes.btns}>
        <button
          className={`${classes.btn} ${showAll ? classes.active : ""}`}
          onClick={allhandler}
        >
          All
        </button>
        <button
          className={`${classes.btn} ${onSale ? classes.active : ""}`}
          onClick={salehandler}
        >
          On Sale
        </button>
        <button
          className={`${classes.btn} ${featured ? classes.active : ""}`}
          onClick={featurehandler}
        >
          Featured
        </button>
        <button
          className={`${classes.btn} ${addProduct ? classes.active : ""}`}
          onClick={producthandler}
        >
          + Add Product
        </button>
        <button
          className={`${classes.btn} ${scan ? classes.active : ""}`}
          onClick={scanhandler}
        >
          Scan Product
        </button>
      </div>
      {!showDetail && showAll && (
        <ProductItem onClick={onDetailHandler} onClick2={clickItemHandler} />
      )}
      {!showDetail && onSale && <SaleProduct />}
      {!showDetail && featured && <Feature />}
      {addProduct && <AddNewProduct onClose={hideAddProduct}/>}
      {showDetail && (
        <Detail onBack={backHandler} itemsToBeDisplayed={itemsToBeDisplayed} />
      )}
    </div>
  );
}

export default Product;
