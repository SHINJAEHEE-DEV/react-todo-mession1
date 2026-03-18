import { useTodos } from "../context/TodoContext"

function TodoItem({ todo }) {
    const { deleteTodo, toggleTodo } = useTodos()
    
  return (
    <li>
      <input 
        type="checkbox" 
        onChange={() => toggleTodo(todo.id)}
        id={todo.id} 
        checked={todo.isCompleted} 
      />
      <span>{todo.content}</span>
      <button 
        onClick={() => deleteTodo(todo.id)}
      >
        삭제
      </button>
    </li>
  )
}

export default TodoItem