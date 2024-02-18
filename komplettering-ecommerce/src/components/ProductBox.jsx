function ProductBox ({products, productHandler, setFilter}) {
    return<>
    {products && products
    .filter((product) => setFilter ? product.category === setFilter : true)
    .map((product) => {
        return ( 
            <div className='product-box' onClick={() => productHandler(product._id)} key={product._id}>
        <p>{product.name}</p>
        <img src={product.images[0]} alt="" />
        <p>{product.price}</p>
        </div>
            )
        })}
        </>
}

export default ProductBox