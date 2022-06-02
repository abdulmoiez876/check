import React, { useState } from "react";
import styles from "./AddNewProduct.module.css";
import Modal from "../../../Modal/Modal";
import Input from "../../../UI/Input";
import cross from "../../../../assets/crossBlack.png";
import { useDispatch } from "react-redux";
import { productActions } from "../../../../store/product-slice";

export default function AddNewProduct(props) {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [sku, setSku] = useState("");
  const [taxStatus, setTaxStatus] = useState("");
  const [taxClass, setTaxClass] = useState("");
  const [productNameError, setProductNameError] = useState(false);
  const [regularPrice, setRegularPrice] = useState("");
  const [regularPriceError, setRegularPriceError] = useState(false);
  const [stock, setStock] = useState('');
  const [quantityInStock, setQuantityInStock] = useState("");
  const [syncWithWoo, setSyncWithWoo] = useState('');
  const dispatch = useDispatch();

  return (
    <Modal onClose={props.onClose}>
      <div className={`${styles.flexCol} ${styles.container}`}>
        <div className={`${styles.flexRowTop} ${styles.r1Head}`}>
          <h5>Add a new product</h5>
          <img
            className={styles.pointer}
            src={cross}
            alt="cross"
            width="25"
            height="25"
            onClick={props.onClose}
          />
        </div>

        <hr />

        {/* r1 */}
        <div className={`${styles.flexRow} ${styles.r2Name}`}>
          <div
            className={`${styles.flexCol} ${productNameError && styles.error}`}
          >
            <h6>Product Name *</h6>
            <Input
              value={productName}
              onChange={(event) => {
                setProductName(event.target.value);
              }}
            />
          </div>

          <div className={`${styles.flexCol}`}>
            <h6>Product Category</h6>
            <select
              value={productCategory}
              className={`${styles.select}`}
              onChange={(event) => {
                setProductCategory(event.target.value);
              }}
            >
              <option className={`${styles.option}`} value="">
                Search a category
              </option>
            </select>
          </div>

          <div
            className={`${styles.flexCol}`}
          >
            <h6>SKU</h6>
            <Input
              value={sku}
              onChange={(event) => {
                setSku(event.target.value);
              }}
            />
          </div>
        </div>

        {/* r2 */}
        <div className={`${styles.flexRow} ${styles.r2Name}`}>
          <div className={`${styles.flexCol}`}>
            <h6>Tax Status:</h6>
            <select
              value={taxStatus}
              className={`${styles.select}`}
              onChange={(event) => {
                setTaxStatus(event.target.value);
              }}
            >
              <option className={`${styles.option}`} value="enabled">
                Enabled
              </option>
              <option className={`${styles.option}`} value="shippingOnly">
                Shipping Only
              </option>
              <option className={`${styles.option}`} value="none">
                None
              </option>
            </select>
          </div>
          <div className={`${styles.flexCol}`}>
            <h6>Tax Class:</h6>
            <select
              value={taxClass}
              className={`${styles.select}`}
              onChange={(event) => {
                setTaxClass(event.target.value);
              }}
            >
              <option className={`${styles.option}`} value="">
                Select...
              </option>
            </select>
          </div>
          <div className={`${styles.flexCol} ${regularPriceError && styles.error}`}>
            <h6>Regular Price *</h6>
            <Input
              value={regularPrice}
              onChange={(event) => {
                setRegularPrice(event.target.value);
              }}
            />
          </div>
        </div>

        {/* r3 */}
        <div className={`${styles.flexRow} ${styles.r2Name}`}>
          <div className={`${styles.flexCol}`}>
            <h6>Stock</h6>
            <select
              value={stock}
              className={`${styles.select}`}
              onChange={(event) => {
                setStock(event.target.value);
              }}
            >
              <option className={`${styles.option}`} value="disabled">
                Disabled
              </option>
              <option className={`${styles.option}`} value="enabled">
                Enabled
              </option>
            </select>
          </div>

          <div className={`${styles.flexCol}`}>
            <h6>Quantity in stock:</h6>
            <Input
              value={quantityInStock}
              onChange={(event) => {
                setQuantityInStock(event.target.value);
              }}
            />
          </div>

          <div className={`${styles.flexCol}`}>
            <h6>Sync with WooCommerce</h6>
            <select
              value={syncWithWoo}
              className={`${styles.select}`}
              onChange={(event) => {
                setSyncWithWoo(event.target.value);
              }}
            >
              <option className={`${styles.option}`} value="disabled">
                Disabled
              </option>
              <option className={`${styles.option}`} value="enabled">
                Enabled
              </option>
            </select>
          </div>
        </div>

        <button
          className={`${styles.btn}`}
          onClick={() => {
            if (productName.trim().length === 0) {
              setProductNameError(true);
              if (regularPrice.trim().length === 0) {
                setRegularPriceError(true);
              }
              else {
                setRegularPriceError(false);
              }
            }
            else if (regularPrice.trim().length === 0) {
              setRegularPriceError(true);
              if (productName.trim().length === 0) {
                setProductNameError(true);
              }
              else {
                setProductNameError(false);
              }
            }
            else {

              dispatch(productActions.addItemToProduct({
                title:productName,
                price:regularPrice,
                id:sku,
              }));
              setProductNameError(false);
              setRegularPriceError(false);
              setProductName("");
              setProductCategory("");
              setSku("");
              setTaxStatus("");
              setTaxClass("");
              setStock("");
              setSyncWithWoo("");
              setRegularPrice("");
              setQuantityInStock("");
            }
          }}
        >
          Create Product
        </button>
      </div>
    </Modal>
  );
}
