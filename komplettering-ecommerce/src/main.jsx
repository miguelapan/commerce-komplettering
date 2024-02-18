import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ProductProvider } from './providers/ProductProvider'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
    <RouterProvider router={router}/>
    </ProductProvider>
  </React.StrictMode>,
)
