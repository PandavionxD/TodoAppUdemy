import { useEffect, useState } from "react"
import { Header, TodoAction, TodoAdd, TodoFilter, TodoList } from "./components"

const todosArray = [
  {
    id: 1,
    title: 'Seguir con el curso de React.',
    completed: true
  }, {
    id: 2,
    title: 'Sacar al perrito mas tarde.',
    completed: false
  }, {
    id: 3,
    title: 'Ver como sigue Paris.',
    completed: false
  }, {
    id: 4,
    title: 'Ver si omi necesita algo.',
    completed: false
  }, {
    id: 5,
    title: 'Ir por una fruta abajo y agua.',
    completed: false
  },
]

export const App = () => {
  const [todos, settodos] = useState( JSON.parse(localStorage.getItem('todos',)) || [] )

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])
  

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false
    }
    settodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    settodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    const newArray = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    settodos(newArray)
  }

  const clearTodos = () => {
    const newArray = todos.filter(todo => !todo.completed)
    settodos(newArray)
  }

  const Todopendientes = todos.filter(todo => !todo.completed).length

  const [form, setform] = useState('all')

  const filterTodos = () => {
    if (form === 'all') {
      return todos
    } else if (form === 'completed') {
      return todos.filter(todo => todo.completed)
    } else if (form === 'active') {
      return todos.filter(todo => !todo.completed)
    } else {
      return todos
    }
  }


  return (
    <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-gray-200
    min-h-screen bg-contain dark:bg-gray-800 dark:bg-[url(./assets/images/bg-mobile-dark.jpg)] transition-all duration-1000 md:bg-[url(./assets/images/bg-desktop-light.jpg)] md:dark:bg-[url(./assets/images/bg-desktop-dark.jpg)]  " >
      <main className="container mx-auto px-4 py-2 max-w-md "  >
        <Header />
        <TodoAdd addTodo={addTodo} />
        <TodoList todos={filterTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        <TodoAction Todopendientes={Todopendientes} clearTodos={clearTodos} />
        <TodoFilter form={form} setform={setform} />
        <footer >
          <p className="text-gray-600 font-semibold text-sm  text-center  ">
            Drag and drop to recorder list
          </p>
        </footer>
      </main>
    </div>
  )
}
