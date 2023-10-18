import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import SellerList from './Pages/SellerList'
import Faq from './Pages/Faq'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Order from './Pages/Order'
import SMMOrder from './Pages/SMMOrder'
import InfluencerOrder from './Pages/InfluencerOrder'

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/order" element={<Order />} />
      <Route path="/seller" element={<SellerList/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/order/smm" element={<SMMOrder />} />
      <Route path="/order/influencer" element={<InfluencerOrder />} />
    </Routes>
  )
}

export default App
