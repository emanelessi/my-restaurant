import classes from "./Css/HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.jsx";
import {useContext} from "react";
import CartContext from "../../store/cart-context.jsx";

export default function HeaderCartButton({onCartClick}) {
   const cartCtx =useContext(CartContext);
   const numberOfItems = cartCtx.items.reduce((curNumber,item)=>{
       return curNumber + item.amount;
   },0);
    return (
        <button className={classes.button} onClick={onCartClick}>
            <span className={classes.icon}>
                            <CartIcon/>

            </span>
            Your Cart
            <div className={classes.badge}>
                {numberOfItems}
            </div>
        </button>
    )
}