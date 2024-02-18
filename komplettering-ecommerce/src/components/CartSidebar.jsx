import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { ProductContext } from "../providers/ProductProvider";
import API_URLS from "../utils/apiURL";

function CartSidebar({ close }) {
    const { postOrder, validationMessage } = useContext(ProductContext);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [total, setTotal] = useState(0);
    const [token, setToken] = useState('');

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        setToken(accessToken);
    }, []);

    useEffect(() => {
        const newTotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
        setTotal(newTotal);
    }, [cartItems]); 

    const removeItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    };

    function handleOrder() {
        const order = {
            products: cartItems.map(item => ({
                productId: item.product._id,
                quantity: item.quantity
            }))
        }
        postOrder(API_URLS.POST_ORDER, order, token)
        setCartItems([])
        localStorage.removeItem('cart')
    }

    return (
        <div className="shopping-cart-sidebar">
            <h2>SHOPPING CART</h2>
            <ul>
                {cartItems && cartItems.map((item, index) => (
                    <li key={index}>{item.product.name} QUANTITY: {item.quantity} <button onClick={() => removeItem(index)}>REMOVE</button></li>
                ))}
            </ul>
            <p>TOTAL: ${total.toFixed(2)}</p>
            <button onClick={handleOrder}>CHECKOUT</button>
            <button onClick={close}>CLOSE</button>
            {validationMessage && <div className="confirm-message">{validationMessage}</div>}
        </div>
    );
}

export default CartSidebar