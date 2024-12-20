import classes from "./Css/MealItemForm.module.css";
import Input from "../UI/Input.jsx";
import { useRef, useState} from "react";

const MealItemForm =(props)=> {
    const [amountIsValid ,setAmountIsValid] =useState();
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef}
                   type="number"
                   label='Amount'
                   id={props.id}
                   min="1"
                   max="5"
                   step="1"
                   defaultValue="1"/>
            <button> + Add to Cart</button>
        </form>
    )
}


export default MealItemForm;