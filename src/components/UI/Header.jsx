import classes from "./Css/Header.module.css";
import mealsImg from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton.jsx";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meal</h1>
                <HeaderCartButton onCartClick={props.onCartClick}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt={"img"}/>
            </div>
        </>
    )
}

export default Header;