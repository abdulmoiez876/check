import React from "react";
import classes from "./Main.module.css";
import Product from "./Product/Product";
import Search from "./Search/Search";
import Customer from "./Customer/Customer";

function Main(props) {
  return (
    <div className={classes.main}>
      <div>
        <Search showCalc={props.showCalc}></Search>
        <Product></Product>
      </div>
      <div>
        <Customer
          showShippingAddress={props.showShippingAddress}
          showNewCustomerProfile={props.showNewCustomerProfile}
          showSearchCustomerProfile={props.showSearchCustomerProfile}
        />
      </div>
    </div>
  );
}

export default Main;
