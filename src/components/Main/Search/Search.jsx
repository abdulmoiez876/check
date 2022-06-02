import React from 'react'
import classes from "./Search.module.css"
import logo from '../../../assets/logo.jpeg'
import calc from "../../../assets/calculator.png"
import Searchbar from '../../../Searchbar/Searchbar'
function Search(props) {
  return (
    <div className={classes.container}>
        <div className={classes.logo}>
            <img src={logo} alt="logo" width={80} className={classes.image} />
            <h2 className={classes.heading}>Point Of Sale</h2>
        </div>
        <Searchbar></Searchbar>
        <div>
            <img src={calc} alt="calculator" width={40} onClick={props.showCalc}/>
        </div>
    </div>
  )
}

export default Search