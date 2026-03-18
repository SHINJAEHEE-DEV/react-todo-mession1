import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
    const { deleteTodo, toggleTodo, editTodo } = useTodos()
    const [isEditMode, setIsEditMode] = useState(false);
    
  return (
    <li className="
      flex items-center justify-between
      p-4 mb-3
      bg-app-bg dark:bg-gray-700
      rounded-2xl
      shadow-sm
      transition-colors
      w-full
      ">
      <input 
        className="
         w-6 h-6
         rounded-full
         border-app-gray
         text-primary
         focus:ring-primary
         cursor-pointer
         accent-primary
         flex-shrink-0
        "
        type="checkbox" 
        onChange={() => toggleTodo(todo.id)}
        id={todo.id} 
        checked={todo.isCompleted} 
      />
      {isEditMode ? 
          <input 
          className="
            bg-white dark:bg-app-dark-bg
            text-[17px] text-app-text dark:text-app-dark-text
            border-none rounded-2xl
            p-4 w-70 
            focus:ring-primary
            focus:outline-none
            transition-shadow"
          type="text" 
          defaultValue={todo.content} 
          id={`edit-${todo.id}`}
          onKeyDown={(e)=>{
            if(e.key === "Enter"){
              setIsEditMode(false)  
              editTodo(todo.id, e.target.value)
            }
          }}
          />
          :
          <>
          <span
            className ={
              `text-[17px] truncate 
              ${todo.isCompleted ? 
                "max-w-70 line-through decoration-2 text-app-sub dark:text-app-dark-sub" : 
                "max-w-70 text-app-text dark:text-app-dark-text"}
              `
            }
          >
            {todo.content}
          </span>
          </>
          }
      <span>
        <button 
        className=" 
          bg-primary text-white font-semibold
          px-3 py-2 rounded-2xl
          hover:opacity-90
          transition-opacity
          whitespace-nowrap
        "
        onClick={() => {
          if(isEditMode){
            editTodo(todo.id, document.getElementById(`edit-${todo.id}`).value)
            setIsEditMode(false);
          }else{
            setIsEditMode(true);
          }
        }}
      >
        {isEditMode ? "저장" : "수정"}
      </button>
      <button 
        className="
        text-white font-semibold
        transition-colors
        ml-1 px-3 py-2 rounded-full
        bg-delete-button 
        hover:opacity-60 
        "
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </button>
      </span>
      
    </li>
  )
}

export default TodoItem