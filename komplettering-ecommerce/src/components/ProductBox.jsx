function ProductBox ({product, productHandler}) {
    return <>
    {<div className='product-box' onClick={() => productHandler(product._id)} key={product._id}>
                    <p>{product.name}</p>
                    <img src={product.images[0]} alt="" />
                    <p>{product.price}</p>
                </div>}
    </>
}

export default ProductBox