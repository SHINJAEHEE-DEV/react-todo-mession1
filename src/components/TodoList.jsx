import { useTodos } from "../context/TodoContext"
import TodoItem from "./TodoItem"

function TodoList() {
    const { todos } = useTodos()
  return (
    <ul>
        {todos.map(todo => (
            <li key={todo.id}>{todo.content}</li>
        ))}
    </ul>
  )
}

export default TodoList