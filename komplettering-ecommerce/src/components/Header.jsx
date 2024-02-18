import { useState } from 'react';
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'
import CartSidebar from './CartSidebar';

function Header () {

    const {isLoggedIn} = useContext(AuthContext);
    const [isCartOpen, setIsCartOpen] = useState(false)
    
    return <>
    <header>
        <Link to={'/'}><h1 className="logo">BMERKETO</h1></Link>
        <ul className="navbar">
            <Link to={'/'}>HOME</Link>
            <Link to={'/products'}>PRODUCTS</Link>
            <Link to={'/contact'}>CONTACTS</Link>
        </ul>

        {/* LOGIN AND CART  */}

        <div className="side-login-cart">
        {!isLoggedIn ? <Link to={'/login'}>LOG IN</Link> : <Link to={"/userpage"}>PERSONAL PAGE</Link>  }
        <button onClick={() => setIsCartOpen(true)} >CART</button>
        </div>
    </header>

    {isCartOpen && <CartSidebar close={() => setIsCartOpen(false)}/>}
    </>
}

export default Header