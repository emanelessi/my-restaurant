import classes from "./Css/MealItem.module.css";
import MealItemForm from "./MealItemForm.jsx";


export default function MealItem({id,name, description, price}) {
    const prices = `$${price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <p className={classes.description}>{description}</p>
                <p className={classes.price}>{prices}</p>
            </div>
            <div>
                <MealItemForm id={id}/>
            </div>
        </li>
    )
}