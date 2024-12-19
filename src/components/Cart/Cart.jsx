import classes from "./Css/Cart.module.css";
import {useState} from "react";
import Modal from "../UI/Modal.jsx";

export default function Cart({onCartClose }) {

    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{id: 'c', name: 'Sushi', amount: 2, price: 12.99}].map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal className={classes.cart} onClose={onCartClose }>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onCartClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};