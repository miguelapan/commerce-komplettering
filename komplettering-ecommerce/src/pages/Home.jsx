import { useEffect } from "react"
import { useContext } from "react"
import { ProductContext} from '../providers/ProductProvider'
import ProductList from "../components/ProductList"
import API_URLS from "../utils/apiURL"

function Home () {

    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts(API_URLS.GET_ALL_PRODUCTS)
    },[])

    return <>
    <ProductList products={products}/>
</>
}

export default Home