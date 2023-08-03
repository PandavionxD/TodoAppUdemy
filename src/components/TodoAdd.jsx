import { useState } from "react"

export const TodoAdd = ({ addTodo }) => {

  const [title, settitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!title.trim()){
      return settitle('')
    }
    addTodo(title)
    settitle('')
  }

  return (
    <form onSubmit={handleSubmit} className=" bg-white flex w-full mb-4 overflow-hidden px-2 rounded-md items-center gap-2 dark:bg-gray-600 transition-all duration-1000  " >
      <span className="rounded-full border-gray-300 border w-5 h-5 " >
      </span>
      <input 
      value={title}
      onChange={(e)=>settitle(e.target.value)}
      type="text"
       placeholder="Crear un nuevo Todo..." 
       className="w-full  p-2  outline-none text-gray-400 dark:bg-gray-600 dark:text-gray-300 transition-all duration-1000  " />
    </form>
  )
}
