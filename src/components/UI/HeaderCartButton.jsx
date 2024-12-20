import classes from "./Css/HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.jsx";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context.jsx";

export default function HeaderCartButton({onCartClick}) {
    const [btnIsHighted,setBtnIsHighted]=useState(false);

    const cartCtx =useContext(CartContext);
    const {items} = cartCtx;

    const numberOfItems =  items.reduce((curNumber,item)=>{
       return curNumber + item.amount;
   },0);
const butClasses =`${classes.button} ${btnIsHighted ? classes.bump : ''}`;
   useEffect(()=>{
        if (items.length === 0){
            return;
        }
        setBtnIsHighted(true)
       const timer =setTimeout(()=>{
           setBtnIsHighted(false)
       },300)
       return()=>{
            clearTimeout(timer)
       }
   }, [items]);
    return (
        <button className={butClasses} onClick={onCartClick}>
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