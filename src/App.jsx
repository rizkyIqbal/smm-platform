import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import SellerList from './Pages/SellerList'
import Faq from './Pages/Faq'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Order from './Pages/Order'
import SellerDetail from './Pages/SellerDetail'
import SMMOrder from './Pages/SMMOrder'
import AboutUs from './Pages/AboutUs'
import Profile from './Pages/Profile'
import EditProfile from './Pages/EditProfile'
import InfluencerOrder from './Pages/InfluencerOrder'
import ContactUs from './Pages/ContactUs'

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/order" element={<Order />} />
      <Route path="/seller" element={<SellerList/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/sellerdetail" element={<SellerDetail/>} />
      <Route path="/order/smm" element={<SMMOrder />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit" element={<EditProfile />} />
      <Route path="/order/influencer" element={<InfluencerOrder />} />
    </Routes>
  )
}

export default App
