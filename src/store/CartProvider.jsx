import CartContext from "./cart-context.jsx";

const CartProvider = props => {
    const addItemConstHandler = (item) => {

    };
    const removeItemConstHandler = (id) => {

    }
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemConstHandler,
        removeItem: removeItemConstHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;
