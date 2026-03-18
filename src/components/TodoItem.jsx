import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
    const { deleteTodo, toggleTodo, editTodo } = useTodos()
    const [isEditMode, setIsEditMode] = useState(false);
    
  return (
    <li>
      <input 
        type="checkbox" 
        onChange={() => toggleTodo(todo.id)}
        id={todo.id} 
        checked={todo.isCompleted} 
      />
      {isEditMode ? 
          <input 
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
          <><span>{todo.content}</span><span onClick={() => setIsEditMode(true)}>✏️</span></>
          }
      
      <button 
        onClick={() => deleteTodo(todo.id)}
      >
        삭제
      </button>
    </li>
  )
}

export default TodoItem