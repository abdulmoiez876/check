import React, { useState } from "react";
import Calculator from "../components/Calculator/Calculator";
import CashManage from "../components/CashManage/CashManage";
import Main from "../components/Main/Main";
import classes from "./Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import ShippingAddress from '../components/ShippingAddress/ShippingAddress';
import NewCustomerProfile from '../components/CustomerProfile/NewCustomerProfile/NewCustomerProfile';
import SearchCustomerProfile from '../components/CustomerProfile/SearchCustomerProfile/SearchCustomerProfile';

function Home() {
  const [cashIsShown, setCashIsShown] = useState(false);
  const [shippingAddressIsShown, setShippingAddressIsShown] = useState(false);
  const [newCustomerProfileIsShown, setNewCustomerProfileIsShown] =
    useState(false);
  const [searchCustomerProfileIsShown, setSearchCustomerProfileIsShown] =
    useState(false);

  const showCashHandler = () => {
    setCashIsShown(true);
  };

  const hideCashHandler = () => {
    setCashIsShown(false);
  };
  const [calcIsShown, setCalcIsShown] = useState(false);

  const showCalcHandler = () => {
    setCalcIsShown(true);
  };

  const hideCalcHandler = () => {
    setCalcIsShown(false);
  };

  const hideShippingAddress = () => {
    setShippingAddressIsShown(false);
  };

  const showShippingAddress = () => {
    setShippingAddressIsShown(true);
  };

  const showNewCustomerProfile = () => {
    setNewCustomerProfileIsShown(true);
  };

  const hideNewCustomerProfile = () => {
    setNewCustomerProfileIsShown(false);
  };

  const showSearchCustomerProfile = () => {
    setSearchCustomerProfileIsShown(true);
  };

  const hideSearchCustomerProfile = () => {
    setSearchCustomerProfileIsShown(false);
  };

  return (
    <React.Fragment>
      {searchCustomerProfileIsShown && (
        <SearchCustomerProfile
          onClose={hideSearchCustomerProfile}
          showNewCustomerProfile={showNewCustomerProfile}
        />
      )}
      {newCustomerProfileIsShown && (
        <NewCustomerProfile onClose={hideNewCustomerProfile}>
          {" "}
        </NewCustomerProfile>
      )}
      {shippingAddressIsShown&&<ShippingAddress onClose={hideShippingAddress}/>}
      {calcIsShown && <Calculator onClose={hideCalcHandler}></Calculator>}
      {cashIsShown && <CashManage onClose={hideCashHandler}></CashManage>}
      <div className={classes.container}>
        <Navbar onShowCash={showCashHandler} />
        <Main
          showCalc={showCalcHandler}
          showShippingAddress={showShippingAddress}
          showNewCustomerProfile={showNewCustomerProfile}
          showSearchCustomerProfile={showSearchCustomerProfile}
        ></Main>
      </div>
    </React.Fragment>
  );
}

export default Home;
