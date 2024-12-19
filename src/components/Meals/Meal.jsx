import {Fragment} from "react";
import MealsSummary from "./MealsSummary.jsx";
import AvailableMeals from "./AvailableMeals.jsx";

export default function Meal(){
    return(
        <Fragment>
                <MealsSummary/>
                <AvailableMeals/>
        </Fragment>
    )

}