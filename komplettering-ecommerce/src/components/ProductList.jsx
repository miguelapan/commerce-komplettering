import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import ProductBox from './ProductBox';

function ProductList ({ products, selectedCategory }) {

    const navigate = useNavigate();

    function productHandler(productId){
        navigate(`/products/${productId}`)
    }

    return <>
    <div className='product-list-grid'>
    {products && products
    .map((product) =>  (
                <ProductBox key={product._id} product={product} productHandler={productHandler}/>
            )
        )}
        </div>
    </>
}

export default ProductList