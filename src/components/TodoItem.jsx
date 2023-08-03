import { IconCheck, IconClose } from "./icons"

export const TodoItem = ({ todo, deleteTodo,toggleTodo }) => {
    const { id, completed, title } = todo

    return (
        <article className="px-2 py-4 gap-2  border-b-2 border-b-gray-300 flex items-center dark:border-b-gray-700 transition-all duration-1000" >

            <button className="flex" onClick={()=>toggleTodo(id)} >
                <span className={`justify-center items-center rounded-full border-gray-300 flex border w-5 h-5    ${completed ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' : ''} `} >
                    {completed && (
                        <IconCheck />
                    )}

                </span>
            </button>

            <p className={`flex-grow text-gray-500 dark:text-gray-400  text-sm ${completed ? 'line-through font-semibold ' : ''}  `} >{title}</p>
            <button onClick={() => deleteTodo(id)} >
                <IconClose />
            </button>
        </article>
    )
}
