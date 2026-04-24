import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Zustand from './store/Zustand';

const App = () => {

const PrivateRoute = ( {children})=>{
  const data = JSON.parse(localStorage.getItem("user"));
   return data ? children: <Login/>

}

  return (
    <div>
      <BrowserRouter >
      
      <Routes>
        <Route  path='/login' element={<Login/>} />
        <Route  path='/signup' element={<Signup/>} />
        <Route path='/zustand' element={<Zustand />} />
        
          <Route path='/dashboard' element=
          {<PrivateRoute>
             <Dashboard/>
          </PrivateRoute>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
