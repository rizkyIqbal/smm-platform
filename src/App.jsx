import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Register from './Pages/Register'
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
    </Routes>
  )
}

export default App
