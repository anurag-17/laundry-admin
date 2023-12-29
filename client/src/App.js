import React from 'react'
import Login from './admin-module/login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admindashboard from './admin-module/admin-dashboard';
import './index.css';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/admin-dashboard" element={<Admindashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
