import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { httpService } from "../httpService";

const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [products, setProducts] = useState(null)
    const [product, setProduct] = useState(null)
    const [orders, setOrders] = useState(null)
    const [validationMessage, setValidationMessage] = useState(null)

    // GET ALL ORDERS 
  
    async function getProducts(url){
        try{
                const {data} = await httpService.get(`${url}`)
                setProducts(data)
        }catch(error){
            console.error(error)
        }
    }

    // GET ONE 

    async function getOneProduct(url, id){
        try{
                const {data} = await httpService.get(`${url}/${id}`)
                setProduct(data)
            }catch(error){
                console.error(error)
            }
        }
        
        // GET ORDER 
        
        async function getOrder(url, token){
            try{
                const {data} = await httpService.get(url, token)
                    setOrders(data)
        }catch(error){
            console.error(error)
        }
    }

    // POST AN ORDER 

    async function postOrder(url, order, token){
        try{
            const {data} = await httpService.post(url, order, token)
            setValidationMessage(data.message)
            console.log(data)
        }catch(error){
            console.error(error)
        }
    }

    // POST A MESSAGE 

    async function postMessage(url, message){
        try{
            const {data} = await httpService.post(url, message)
            console.log(data)
            setValidationMessage(data.message)
        }catch(error){
            console.error(error)
        }
    }

    // REGISTER A NEW USER 

    async function registerUser(url, user){
        try{
            const {data} = await httpService.post(url, user)
            setValidationMessage(data.message)
        }catch(error){
            console.error(error)
        }
    }

return (
    <ProductContext.Provider value={{ products, product, getOrder, orders, postOrder, getProducts, getOneProduct, postMessage, validationMessage, registerUser}}>
        {children}
    </ProductContext.Provider>
)
}

export { ProductContext, ProductProvider}