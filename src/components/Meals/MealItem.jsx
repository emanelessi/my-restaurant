import classes from "./Css/MealItem.module.css";
import MealItemForm from "./MealItemForm.jsx";
import {useContext} from "react";
import CartContext from "../../store/cart-context.jsx";


export default function MealItem({id, name, description, price}) {
    const CartCtx = useContext(CartContext);
    const prices = `$${price.toFixed(2)}`;
    const addToCartHandler = amount => {
        CartCtx.addItem(
            {
                id: id,
                name: name,
                amount: amount,
                price: price
            }

        )
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <p className={classes.description}>{description}</p>
                <p className={classes.price}>{prices}</p>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}