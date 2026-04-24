import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem('user'));
  
  const handlelogout =()=>{
    localStorage.removeItem("isAuth");
    navigate("/login")
  }

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Zustand', path: '/zustand' },
    { name: 'Logout', onClick: handlelogout } // Special logout item
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 shadow-lg bg-white/90 backdrop-blur-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + User Info */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                ABC
              </span>
            </Link>
            
            {/* User Greeting */}
            {data && (
              <div className="items-center hidden px-3 py-1 space-x-2 rounded-full md:flex bg-blue-50">
                <span className="text-sm font-medium text-blue-800">Hi, {data.username}</span>
              </div>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-1 md:flex">
            {menuItems.map(({ name, path, onClick }) => (
              path ? (
                <Link
                  key={path}
                  to={path}
                  className="px-4 py-2 font-medium text-gray-700 transition-all duration-200 hover:text-blue-600 rounded-xl hover:bg-blue-50"
                >
                  {name}
                </Link>
              ) : (
                <button
                  key={name}
                  onClick={onClick}
                  className="px-4 py-2 font-medium text-gray-700 transition-all duration-200 hover:text-red-600 rounded-xl hover:bg-red-50"
                >
                  {name}
                </button>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors rounded-lg hover:bg-gray-100"
            >
              <span className="text-xl">{isOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 md:hidden bg-white/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {menuItems.map(({ name, path, onClick }) => (
              path ? (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-gray-700 transition-all duration-200 hover:text-blue-600 rounded-xl hover:bg-blue-50"
                >
                  {name}
                </Link>
              ) : (
                <button
                  key={name}
                  onClick={() => {
                    onClick()
                    setIsOpen(false)
                  }}
                  className="w-full px-4 py-3 text-lg font-medium text-left text-gray-700 transition-all duration-200 hover:text-red-600 rounded-xl hover:bg-red-50"
                >
                  {name}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar