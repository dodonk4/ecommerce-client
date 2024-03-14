import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Searching from './components/Searching'
import Product from './components/Product'
import { Login } from './components/Login'
import { ProfilePage } from './components/ProfilePage'
import UserProvider from './components/userContext/UserProvider'
import ShoppingCart from './components/ShoppingCart'
import { RequireAuth } from './components/RequireAuth'
import Payment from './components/Payment'
import { Profile } from './components/Profile'
import PaymentSuccesful from './components/PaymentSuccesful'
import Footer from './components/Footer'
import HeaderStatic from './components/HeaderStatic'
import Register from './components/Register'


function App() {

  return (
    <div className='App'>
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header/><Categories /></>}/>
          <Route path="/fafa" element={<><Searching/><Footer/></>}/>
          <Route path="/product" element={<RequireAuth><Product/><Footer/></RequireAuth>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/profile" element={<RequireAuth><ProfilePage/><Footer/></RequireAuth>}></Route>
          <Route path="/shoppingCart" element={<RequireAuth><HeaderStatic/><ShoppingCart/><Footer/></RequireAuth>}></Route>
          {/* <Route path="/payment" element={<Elements stripe={stripePromise}><CardElement options={{style: style}}></CardElement></Elements>}></Route> */}
          <Route path="/payment-2" element={<RequireAuth><Payment></Payment><Footer/></RequireAuth>}></Route>
          <Route path="/payment-succesful" element={<RequireAuth><PaymentSuccesful></PaymentSuccesful><Footer/></RequireAuth>}></Route>
          
          {/* <Route path="/login" element={<Login/>}></Route> */}
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  )
}



export default App
