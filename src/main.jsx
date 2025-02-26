import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact/Contact';
import Layout from './Components/Cart/Layout/Layout';
const router=createBrowserRouter([

  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/products',
        element:<Products></Products>,
      },
      {
        path:'/cart',
        element:<Cart></Cart>,
      },
      
      {
        path:'/contact',
        element:<Contact></Contact>
      }


    ]
  },
   


    
      

     
    
  



])




createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
