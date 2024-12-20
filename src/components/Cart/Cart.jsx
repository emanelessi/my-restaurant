import classes from '../Cart/Css/Cart.module.css';
import {useContext, useState} from "react";
import Modal from "../UI/Modal.jsx";
import CartContext from "../../store/cart-context.jsx";
import CartItem from "../Cart/CartItem.jsx";

const Cart=({onCartClose })=> {
const CartCtx = useContext(CartContext);
    const totalAmount = `$${(CartCtx.totalAmount || 0).toFixed(2)}`;
    const hasItems = CartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        CartCtx.removeItem(id);
    }
    const cartItemAddHandler = (item) => {
            CartCtx.addItem({...item ,amount: 1});
    }
    const cartItems = (
        <ul className={classes['cart-items']}>
            {CartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal className={classes.cart} onClose={onCartClose }>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onCartClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};


export default Cart;