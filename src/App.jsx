import React from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Zustand from './store/Zustand';
import CRUD from './CRUD/Task2';
import { Toaster } from "react-hot-toast";
import TodoList from './pages/TodoList';
import Gsap from "./pages/Gsap"

const App = () => {
  const PrivateRoute = ({children}) => {
    const data = JSON.parse(localStorage.getItem("user"));
    return data ? children : <Login/>
  }

  // Layout with Navbar
  const Layout = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <main className="pt-4 pb-12">
        <Outlet />
      </main>
    </div>
  )

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Routes (No Navbar) */}
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          
          {/* Protected + Public Routes with Layout */}
          <Route element={<Layout />}>
            <Route path='/dashboard' element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            } />
            <Route path='/zustand' element={<Zustand />} />
            <Route path='/crud' element={<CRUD />} />
            <Route path='/todos' element={<TodoList />} />
            <Route path='/gsap' element={<Gsap />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" />
    </div>
  )
}

export default App