import { useRoutes, BrowserRouter } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import MyAccount from './MyAccount'
import MyOrder from './MyOrder'
import MyOrders from './MyOrders'
import NotFound from './NotFound'
import SignIn from './SignIn'
import './App.css'
import NavBar from '../components/NavBar'

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
    <BrowserRouter>
      <NavBar/>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
