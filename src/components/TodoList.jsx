import { TodoItem } from "./TodoItem"

export const TodoList = ({todos,deleteTodo,toggleTodo}) => {
  return (
    <section className="bg-white rounded-md  dark:bg-gray-600 transition-all duration-1000 ">
        {todos.map((todo,id)=>(
        <TodoItem key={id} todo={todo}  toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
    </section>
  )
}
