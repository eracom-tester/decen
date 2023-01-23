import React, { useEffect } from 'react'
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import Dashboard from './Pages/Dashboard/Dashboard';

import { useWeb3React } from "@web3-react/core";
import { injected } from "./wallet/Connect"
import web3 from "web3";
import Sidebar from "./Pages/Sidebar/Sidebar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import AOS from "aos";
import Login from './Pages/Login/Login';
const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <BrowserRouter>
        {/* <Sidebar/> */}
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/login' element={<Login />}></Route>

        </Routes>
        {/* <RegisterPage /> */}
        {/* <Dashboard /> */}
      </BrowserRouter>
    </div>
  )
}

export default App