import { useTodos } from "../context/TodoContext";


function TodoForm() {
    
    const { addTodo } = useTodos();
    
    const onHandleSubmit = (e)=>{
        e.preventDefault()
        const content = e.target.content.value;
        if(content.trim() !== ""){
            addTodo(content)
            e.target.content.value = ""
        }else{
            alert("할 일을 입력해주세요.")
        }
    }

  return (
    <form onSubmit={onHandleSubmit}
        className="flex w-full space-x-2 mb-6"
    >
        <input
         className="flex-1 
         bg-app-bg dark:bg-gray-700
         text-app-text dark:text-app-dark-text
         border-none rounded-2xl
         p-4
         focus:ring-primary
         focus:outline-none
         transition-shadow
         "
         type="text" 
         name="content"
         placeholder="새로운 할 일을 입력하세요!"
         />
        <input
            className="bg-primary text-white font-semibold
             px-6 py-4 rounded-2xl
             hover:opacity-90
             transition-opacity
             whitespace-nowrap
             "
            type="submit" value="추가"></input>
    </form>
  )
}

export default TodoForm