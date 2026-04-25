import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Loader from '../WhatsupLoader/page'

const Task2 = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [editId, setEditId] = useState(null)
  const [username, setUsername] = useState('')

  const API = import.meta.env.VITE_API_URL
  
  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await axios.get( API)
      setUsers(res.data)
    } catch (err) {
      toast.error("Failed to Fetch Users")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const addUser = () => {
    const trimmedName = name.trim()
    const trimmedUsername = username.trim()
    
    if (!trimmedName || !trimmedUsername) {
      toast.error("Name and username required!")
      return
    }

    const newUser = { id: Date.now(), name: trimmedName, username: trimmedUsername }
    setUsers([...users, newUser])
    setName('')
    setUsername('')
    toast.success("User Added Successfully!")
  }

  const editUser = (user) => {
    setEditId(user.id)
    setName(user.name)
    setUsername(user.username)
  }

  const updateUser = () => {
    setUsers(users.map(u => u.id === editId ? { ...u, name, username } : u))
    setEditId(null)
    setName('')
    setUsername('')
    toast.success("User Updated Successfully!")
  }

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(prev => prev.filter(u => u.id !== id))
      toast.success("User Deleted Successfully!")
    }
  }

  return (
    <div className="min-h-screen px-4 py-4 bg-gradient-to-br from-indigo-50 via-white to-pink-50 sm:px-6 lg:px-8">
      
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <Loader />
        </div>
      )}

      <div className="mx-auto max-w-8xl">
     

        {/* Add/Edit Form */}
        <div className="p-4 mb-4 border border-indigo-100 shadow-2xl bg-white/80 backdrop-blur-xl rounded-3xl">
          <div className="grid gap-4 mb-4 md:grid-cols-4">
            <input
              className="p-4 text-lg transition-all duration-200 border border-gray-200 shadow-sm outline-none rounded-2xl focus:ring-4 focus:ring-indigo-500 focus:border-transparent hover:shadow-md md:col-span-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
            />
            <input
              className="p-4 text-lg transition-all duration-200 border border-gray-200 shadow-sm outline-none rounded-2xl focus:ring-4 focus:ring-indigo-500 focus:border-transparent hover:shadow-md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
             <div className="flex flex-col gap-4 sm:flex-row">
            {editId ? (
              <button
                onClick={updateUser}
                className="flex-1 p-4 text-lg font-bold text-white transition-all duration-300 transform shadow-xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl hover:shadow-2xl hover:from-emerald-600 hover:to-teal-600 hover:-translate-y-1"
              >
                Update User
              </button>
            ) : (
              <button
                onClick={addUser}
                className="flex-1 px-8 py-5 text-lg font-bold text-white transition-all duration-300 transform shadow-xl bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl hover:shadow-2xl hover:from-indigo-600 hover:to-purple-600 hover:-translate-y-1"
              >
                Add User
              </button>
            )}
            {editId && (
              <button
                onClick={() => {
                  setEditId(null)
                  setName('')
                  setUsername('')
                }}
                className="px-8 py-5 font-bold text-gray-800 transition-all duration-200 bg-gray-200 hover:bg-gray-300 rounded-2xl"
              >
                Cancel
              </button>
            )}
          </div>
          </div>
          
         
        </div>

        {/* Modern Table */}
        <div className="overflow-hidden border border-gray-200 shadow-2xl bg-white/90 backdrop-blur-xl rounded-3xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <th className="px-8 py-6 text-xs font-bold tracking-wider text-left text-white uppercase">
                    Name
                  </th>
                  <th className="px-8 py-6 text-xs font-bold tracking-wider text-left text-white uppercase">
                    Username
                  </th>
                  <th className="px-8 py-6 text-xs font-bold tracking-wider text-left text-white uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {!loading && users.map((user) => (
                  <tr key={user.id} className="transition-all duration-200 border-b border-gray-100 group hover:bg-indigo-50/50 last:border-b-0">
                    <td className="px-8 py-6">
                      <div className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-indigo-600">
                        {user.name}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-800 transition-colors bg-indigo-100 rounded-2xl group-hover:bg-indigo-200">
                        {user.username}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => editUser(user)}
                          className="p-3 text-indigo-600 transition-all duration-200 hover:bg-indigo-100 rounded-2xl hover:scale-105 group-hover:text-indigo-700"
                          title="Edit"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-3l3-3z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="p-3 text-red-600 transition-all duration-200 hover:bg-red-100 rounded-2xl hover:scale-105 group-hover:text-red-700"
                          title="Delete"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1V3a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {!loading && users.length === 0 && (
            <div className="py-20 text-center">
              <div className="mb-4 text-6xl">👥</div>
              <h3 className="mb-2 text-2xl font-bold text-gray-600">No users found</h3>
              <p className="text-gray-500">Add your first user above</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Task2