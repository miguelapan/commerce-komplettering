import { useEffect } from "react"
import { useContext } from "react"
import { ProductContext } from "../providers/ProductProvider"
import { useParams, useSearchParams } from 'react-router-dom'
import { useState } from "react";
import API_URLS from "../utils/apiURL";

function ProductPage () {

    const { productId } = useParams();
    const {product, getOneProduct} = useContext(ProductContext)
    const [quantity, setQuantity] = useState(1)


    const addToCart = () => {
            const cartItemsJSON = localStorage.getItem('cart');
            let cartItems = [];

            if(cartItemsJSON) {
                cartItems = JSON.parse(cartItemsJSON)
            }
            cartItems.push({ product, quantity})
            localStorage.setItem('cart', JSON.stringify(cartItems))
    }

    const quantityHandler = e => {
        setQuantity(e.target.value)
    }
    
    useEffect(() => {
        getOneProduct(API_URLS.GET_ALL_PRODUCTS, productId)
    },[productId])
    

    return <>
    {product &&
        <div className="product-description-box">
        <p className="product-title">{product.name}</p>
        <div className="product-content">
        <p className="product-description">{product.description}</p>
        <img className="product-image" src={product.images[0]} alt="" />
        </div>
        
        <div className="add-to-cart-content">
        <p className="product-price">PRICE: {product.price}</p>
        <label htmlFor="quantity-select">QUANTITY</label>
<select name="quantity-select" id="quantity-select" onChange={quantityHandler}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
</select>
        <button onClick={addToCart} >ADD TO CART</button>
        </div>
            </div>}
    </>
}

export default ProductPage