import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"
import { ProductContext} from '../providers/ProductProvider'
import API_URLS from "../utils/apiURL"

function Userpage () {
    const {logout, isAuthenticated} = useContext(AuthContext)
    const {getOrder, orders} = useContext(ProductContext)
    
    // AUTHENTICATE 
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
          navigate("/");
        } else {
          const accessToken = localStorage.getItem("accessToken");
          getOrder(API_URLS.GET_ORDER, accessToken);
        }
      }, [isAuthenticated]);

    // LOG OUT 

    function logOutFunction() {
        logout()
        navigate('/')
    }

    return (
        <>
            <h1>USERPAGE</h1>
            <h2>HERE IS WHAT YOU HAVE BOUGHT</h2>
            {orders && orders.map((order) => (
                <ul key={order._id}>
                    {order.products.map((product) => (
                        <li key={product._id}>
                            <p>{product.product.name}</p>
                        </li>
                    ))}
                </ul>
            ))}
            <button onClick={() => logOutFunction()}>LOG OUT</button>
        </>
    );
    
}

export default Userpage