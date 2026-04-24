import React from 'react'
import { useNavigate } from 'react-router-dom';
import { 
  HiUser, 
  HiMail, 
  HiLogout,
  HiChartBar 
} from 'react-icons/hi'

const Dashboard = () => {
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem('user'));

  const handlelogout =()=>{
    localStorage.removeItem("isAuth");
    navigate("/login")
  }

  return (
    <div className="min-h-screen px-4 py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Clean White Card Layout */}
      <div className="max-w-6xl mx-auto">
        <div className="p-8 border border-gray-100 shadow-2xl bg-white/80 backdrop-blur-sm rounded-3xl md:p-12">
          
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text">
              Dashboard
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Welcome back! Here's your profile information
            </p>
          </div>

          {/* User Info Cards */}
          <div className="grid gap-8 mb-16 lg:grid-cols-2">
            <div className="p-8 transition-all duration-300 border border-blue-100 group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center mb-6 space-x-4">
                <div className="flex items-center justify-center w-20 h-20 shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl">
                  <HiUser className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Profile</h3>
                  <p className="text-gray-500">Personal Information</p>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                {data?.username || 'User'}
              </h2>
            </div>

            <div className="p-8 transition-all duration-300 border border-green-100 group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl hover:-translate-y-2">
              <div className="flex items-center mb-6 space-x-4">
                <div className="flex items-center justify-center w-20 h-20 shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
                  <HiMail className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Email</h3>
                  <p className="text-gray-500">Contact Details</p>
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-800 break-all">
                {data?.email || 'email@example.com'}
              </h2>
            </div>
          </div>

          {/* Stats & Logout */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="p-10 text-white transition-all duration-300 shadow-2xl group bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl hover:shadow-3xl hover:-translate-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="mb-2 text-lg font-semibold text-purple-100">Total Sessions</p>
                  <p className="text-5xl font-bold">42</p>
                </div>
                <HiChartBar className="w-16 h-16 opacity-90" />
              </div>
            </div>

            <button 
              onClick={handlelogout}
              className="flex items-center justify-center h-full p-10 space-x-4 text-2xl font-bold text-white transition-all duration-300 shadow-2xl group bg-gradient-to-r from-red-500 to-red-600 rounded-3xl hover:shadow-3xl hover:from-red-600 hover:to-red-700 hover:-translate-y-3"
            >
              <HiLogout className="w-10 h-10 transition-transform group-hover:-translate-x-2" />
              <span>Logout Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard