import React from 'react'
import classes from './Item.module.css'
import { useDispatch} from 'react-redux'
import { cartActions } from '../../../store/cart-slice'

const Item = (props) => {
  const dispatch = useDispatch();
  const {title , price ,src , id} = props;
  const clickHandler = () => {
    if(props.cat) {
      props.itemsToBeDisplayed(props.details);
      props.onClick();
    }
    else {
      dispatch(cartActions.addItemToCart({
        id:id,
        title:title,
        price:price,
        src:src
      }))
    }
    
  }
  
  return (
    <div className={classes.item} onClick={clickHandler}>
      <img src={props.src} alt="foodpicture" className={classes.pic} />
      <div className={classes.tag}>
          <p>{props.title}</p>
          {!props.cat&&<p>Rs {props.price}</p>}
      </div>
    </div>
  )
}

export default Item