
export const TodoAction = ({ Todopendientes, clearTodos }) => {
    return (
        <article className="flex py-4 justify-between px-2 gap-2 dark:bg-gray-600 transition-all duration-1000 bg-white rounded-b-md " >
            <p className="text-xs text-gray-400" >
                Quedan {Todopendientes} pendientes
            </p>
            <button onClick={clearTodos} className="text-xs text-gray-400 cursor-pointer dark:text-gray-400 ">
                Limpiar completados
            </button>
        </article>
    )
}
