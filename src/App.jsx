import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
import SellerList from './Pages/SellerList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Order from './Pages/Order'

function App() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/seller" element={<SellerList/>} />
    </Routes>
  )
}

export default App
