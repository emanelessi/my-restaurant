import classes from "./Css/MealItemForm.module.css";
import Input from "../UI/Input.jsx";
import {useContext} from "react";
import CartContext from "../../store/cart-context.jsx";

export default function MealItemForm({id}) {
    const mealCtx = useContext(CartContext);
    const addToCart = (id, amount) => {
        mealCtx.addItem(id, amount);

    }
    return (
        <form className={classes.form}>
            <Input type="number" label='Amount' id={id} max={5} min={1} step={1} defaultValue={1}/>
            <button onClick={addToCart}> + Add to Cart</button>
        </form>
    )
}