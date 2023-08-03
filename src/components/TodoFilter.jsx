
export const TodoFilter = ({setform,form}) => {
  return (
    <section className="mt-4 bg-white transition-all duration-1000 dark:bg-gray-600 rounded-md py-4 px-2 flex justify-center gap-2 mb-6 "  >
      <button onClick={()=>setform('all')} className={`font-semibold text-sm ${form==='all' ? 'text-blue-600 ' : 'text-gray-400 hover:text-blue-600 '} `} >All</button>
      <button onClick={()=>setform('active')}className={`font-semibold text-sm ${form==='active' ? 'text-blue-600 ' : 'text-gray-400 hover:text-blue-600 '} `}  >Active</button>
      <button onClick={()=>setform('completed')} className={`font-semibold text-sm ${form==='completed' ? 'text-blue-600 ' : 'text-gray-400 hover:text-blue-600 '} `} >Completed</button> 
    </section>
    )
}
