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
import Register from './components/Register'
import Hero from './components/Hero'
import ContentAfterHero from './components/ContentAfterHero'
import SearchBar from './components/SearchBar'

function App() {

  return (
    <div className='App'>
      <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/categories" element={<><Header/><SearchBar/><Categories/><Footer/></>}/>
          <Route path="/categories/:category" element={<><Header/><SearchBar/><Categories/><Footer/></>}/>
          <Route path="/" element={<><Header/><SearchBar/><Hero/><ContentAfterHero/><Footer/></>}/>
          <Route path="/search" element={<><Header/><SearchBar/><Searching/><Footer/></>}/>
          <Route path="/product" element={<RequireAuth><Header/><Product/><Footer/></RequireAuth>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/profile" element={<RequireAuth><ProfilePage/><Footer/></RequireAuth>}></Route>
          <Route path="/shoppingCart" element={<RequireAuth><Header/><ShoppingCart/><Footer/></RequireAuth>}></Route>
          {/* <Route path="/payment" element={<Elements stripe={stripePromise}><CardElement options={{style: style}}></CardElement></Elements>}></Route> */}
          <Route path="/payment-2" element={<RequireAuth><Header/><Payment></Payment><Footer/></RequireAuth>}></Route>
          <Route path="/payment-succesful" element={<RequireAuth><Header/><PaymentSuccesful></PaymentSuccesful><Footer/></RequireAuth>}></Route>
          
          {/* <Route path="/login" element={<Login/>}></Route> */}
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  )
}



export default App
