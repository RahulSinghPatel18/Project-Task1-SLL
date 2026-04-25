import React, { useState } from 'react'
import { HiPlus, HiCheckCircle, HiTrash, HiPencil } from 'react-icons/hi'

const TodoList = () => {
const [Task, setTask] = useState([])
const [inputValue, setinputValue] = useState('')
const [editId, seteditId] = useState(null)
const [completedTasks, setCompletedTasks] = useState([]) 

const addTask = () => {
       setTask([...Task, { id: Date.now(), text: inputValue }])
setinputValue('')
   }

   const editTask = (task)=>{
    seteditId(task.id)
     setinputValue(task.text)
     
   }

   const updateTask = () => {
   setTask(Task.map(t => t.id === editId ? {...t, text: inputValue } : t))
   seteditId(null)
     setinputValue('')
        }

        const deleteTask = (id) => {
          if (window.confirm("Are you sure you want to delete this task?")) {
            setTask(prevTasks => prevTasks.filter(t => t.id !== id))  
            toast.success("Task deleted!")
          }
        }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-4 text-center">
          <h1 className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
            My Todos
          </h1>
          <p className="text-lg text-gray-600">{Task.length} task</p>
        </div>

        {/* Add Form */}
        <div className="p-4 mb-4 border border-indigo-100 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
          <div className="flex gap-3">
            <input
              placeholder="Add new task..."
              value={inputValue}
             onChange={(e) => setinputValue(e.target.value)}
              className="flex-1 p-4 text-lg border border-gray-200 outline-none rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            />
               {editId ? (
                 <button
                    onClick={updateTask}
                    className="flex items-center gap-2 px-4 py-3 text-lg font-bold text-white transition-all duration-300 transform shadow-xl bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl hover:shadow-2xl hover:from-emerald-600 hover:to-teal-600 hover:-translate-y-1"
                     >
                    <HiPencil className="w-5 h-5" />
                    Update 
                    </button>
               ) : (
                     <button
                         onClick={addTask}
                         className="flex items-center gap-2 px-4 py-3 text-lg font-bold text-white transition-all duration-300 transform shadow-xl bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl hover:shadow-2xl hover:from-indigo-600 hover:to-purple-600 hover:-translate-y-1"
                          >
                         <HiPlus className="w-5 h-5" />
                         Add 
                         </button>
                )}
                
          </div>
        </div>

        {/* Todo Items */}
        <div className="space-y-4">
          {/* Active Todo */}
          <div className="p-6 transition-all border shadow-lg bg-white/80 backdrop-blur-sm border-gray-100/50 rounded-2xl hover:shadow-2xl hover:border-indigo-200 hover:bg-white/95 duration-400 hover:-translate-y-2 group">
  <div className="space-y-4">
    {/* Header */}
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
        Today's Tasks
      </h3>
      <div className="flex items-center gap-2 px-3 py-1 text-xs font-medium text-indigo-700 rounded-full bg-indigo-100/50">
       {Task.length} tasks
      </div>
    </div>

    {/* Todos */}
    <div className="pr-2 space-y-3 overflow-y-auto max-h-64 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      {Task.map((task) => (
        <div key={task.id} className="flex items-center gap-4 p-3 transition-all duration-200 group/task rounded-xl hover:bg-indigo-50/50">
          {/* Checkbox */}
          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all duration-200 shadow-sm cursor-pointer rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 hover:shadow-md group-hover:from-indigo-100">
            <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
          </div>

          {/* Task Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-tight text-gray-900 truncate transition-colors group-hover:text-indigo-700">
              {task.text}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 ml-auto transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <button   onClick={()=>editTask(task)}
            className="p-2 text-indigo-600 transition-all duration-200 rounded-lg shadow-sm hover:bg-indigo-100 hover:scale-105">
              <HiPencil className="w-4 h-4" />
            </button>
            <button onClick={()=> deleteTask(task.id)}
             className="p-2 text-red-600 transition-all duration-200 rounded-lg shadow-sm hover:bg-red-100 hover:scale-105">
              <HiTrash className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>

   
  </div>
</div>
       
        </div>

        {/* Stats */}
        <div className="p-4 mt-4 text-center border border-indigo-100 shadow-md bg-white/70 backdrop-blur-sm rounded-2xl">
          <p className="text-xl font-semibold text-gray-800">
            2 completed • 3 remaining
          </p>
        </div>
      </div>
    </div>
  )
}

export default TodoList