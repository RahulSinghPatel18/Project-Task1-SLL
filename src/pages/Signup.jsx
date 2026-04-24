import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [data, setdata] = useState({ email:"", password:"", username:""})
  const navigate = useNavigate();

  const handleSubmit =(e)=>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(data))
    console.log(data , "print all data")
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black py-12 px-4">
      <div className="w-full max-w-6xl flex bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
        {/* Video Section */}
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-indigo-900/10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover"
          >
        <source src="/public/Team working on project.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Create Account</h3>
            <p className="text-lg opacity-90">Join us today</p>
          </div>
        </div>
        
        {/* Form Section */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Sign Up
            </h2>
            <p className="text-gray-300 text-lg">Create your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder='Enter your name'
                className="w-full px-5 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-lg"
                onChange={(e)=> setdata({...data, username:e.target.value})} 
              />
            </div>

            <div>
              <input 
                type="email" 
                placeholder='Enter your email'
                className="w-full px-5 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-lg"
                onChange={(e)=> setdata({...data, email:e.target.value})}
              />
            </div>

            <div>
              <input 
                type="password" 
                placeholder='Enter your password'
                className="w-full px-5 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-lg"
                onChange={(e)=> setdata({...data, password:e.target.value})}
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center mt-8">
            <Link 
              to="/login" 
              className="text-blue-300 hover:text-blue-200 font-medium text-lg transition-all duration-200 hover:underline"
            >
              Already have account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup