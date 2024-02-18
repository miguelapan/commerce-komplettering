import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./layouts/RootLayout"
import LoginLayout from "./layouts/LoginLayout"
import Home from './pages/Home'
import Products from './pages/Products'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Userpage from './pages/Userpage'
import Contact from './pages/Contact'
import ProductPage from "./components/ProductPage"


export const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [

        {path: "/", index: true, element: <Home/>},
        {path: "/products", element: <Products/>, children: [
          {path: ":productId", element: <ProductPage/>}
        ]},
        {path: "/contact", index: true, element: <Contact/>},
        {path: "userpage", index: true, element: <Userpage/>},
        {path: "*", element: <NotFound/>}
      ]
    },
    
    {
      path: "/login",
    element: <LoginLayout/>,
    children: [
      {path: "", index: true, element: <Login/>},
      {path: "/login/register", index: true, element: <Register/>},
  ]},
  
  ])