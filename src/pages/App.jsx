import { useRoutes, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import MyAccount from './MyAccount'
import MyOrder from './MyOrder'
import MyOrders from './MyOrders'
import NotFound from './NotFound'
import { ShopContextProvider } from '../context/ShopContext'
import SignIn from './SignIn'
import NavBar from '../components/NavBar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
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
        <NavBar/>
        <AppRoutes/>
      </BrowserRouter>
    </ShopContextProvider>
  )
}

export default App
