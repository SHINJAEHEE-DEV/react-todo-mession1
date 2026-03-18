import { useTodos } from "../context/TodoContext"

function TodoItem({ todo }) {
    const { deleteTodo, toggleTodo } = useTodos()
    
  return (
    <li>
      <input type="checkbox" name="todoCheckbox" id={todo.id} checked={todo.isCompleted} 
      onChange={() => toggleTodo(todo.id)}
      />
      {todo.content}
      <button onClick={() => deleteTodo(todo.id)}>삭제</button>
    </li>
  )
}

export default TodoItem