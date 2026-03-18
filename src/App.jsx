import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"


function App() {
  return (
    
    /* 바깥쪽 회색 배경 */
    <div
      className="min-h-screen 
      bg-app-bg dark:bg-app-bg 
      text-app-text dark:text-app-dark-text
      transition-colors duration-200
      font-sans font-medium"
    >
      <div
        className="max-w-md"
        >
        <TodoForm/>
        <TodoList/>
      </div>
    </div>
  )
}

export default App
