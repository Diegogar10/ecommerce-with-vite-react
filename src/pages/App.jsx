import React from 'react'
import Home from './Home'
import MyAccount from './MyAccount'
import MyOrder from './MyOrder'
import MyOrders from './MyOrders'
import NotFound from './NotFound'
import SignIn from './SignIn'
import './App.css'

function App() {

  return (
    <div className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500">
      <Home/>
      <MyAccount/>
      <MyOrder/>
      <MyOrders/>
      <NotFound/>
      <SignIn/>
    </div>
  )
}

export default App
