import Header from "./components/UI/Header.jsx";
import Meal from "./components/Meals/Meal.jsx";
import Cart from "./components/Cart/Cart.jsx";
import {useState} from "react";
import CartProvider from "./store/CartProvider.jsx";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const toggleCart = () => {
        setCartIsShown(!cartIsShown);
    }

    return (
        <CartProvider>
            {cartIsShown && <Cart onCartClose={toggleCart}/>}
            <Header onCartClick={toggleCart}/>
            <main>
                <Meal/>
            </main>
        </CartProvider>
    )
}

export default App
