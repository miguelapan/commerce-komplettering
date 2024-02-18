import { Outlet, Link } from "react-router-dom"

function Products () {

    return <>

<div>CHOOSE A PRODUCT IN <Link to={"/"}>HOME</Link></div>

<Outlet />
    
    </>
}

export default Products