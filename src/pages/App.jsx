import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShopContextProvider } from '../context/ShopContext'
import Home from './Home'
import MyAccount from './MyAccount'
import MyOrder from './MyOrder'
import MyOrders from './MyOrders'
import NotFound from './NotFound'
import SignIn from './SignIn'
import NavBar from '../components/NavBar'
import CheckoutSide from '../components/CheckoutSide'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/clothes',
      element: <Home/>
    },
    {
      path: '/electronics',
      element: <Home/>
    },
    {
      path: '/furniture',
      element: <Home/>
    },
    {
      path: '/toys',
      element: <Home/>
    },
    {
      path: '/others',
      element: <Home/>
    },
    {
      path: '/my-account',
      element: <MyAccount/>
    },
    {
      path: '/my-order',
      element: <MyOrder/>
    },
    {
      path: '/my-orders',
      element: <MyOrders/>
    },
    {
      path: '/my-orders/last',
      element: <MyOrder/>
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder/>
    },
    {
      path: '/sign-in',
      element: <SignIn/>
    },
    {
      path: '/*',
      element: <NotFound/>
    },
  ])
  return routes;
}

const App = () => {

  return (
    <ShopContextProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
        <CheckoutSide/>
      </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App
