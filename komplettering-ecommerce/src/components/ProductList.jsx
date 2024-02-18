import { useNavigate } from 'react-router-dom'
import ProductBox from './ProductBox';
import CategoryChooser from './CategoryChooser'
import { useState } from 'react';
import { useEffect } from 'react';


function ProductList ({ products }) {

    const [filter, setFilter] = useState(null)

    const navigate = useNavigate();

    function productHandler(productId){
        navigate(`/products/${productId}`)
    }
    return <>
    <div className='product-list-grid'>
        <CategoryChooser onCategorySelect={setFilter}/>
    {products && <ProductBox products={products} productHandler={productHandler} setFilter={filter}/>
         }
        </div>
    </>
}

export default ProductList