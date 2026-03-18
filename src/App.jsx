import Header from "./components/Header"
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
      {/* 가운데 정렬되는 모바일 앱 느낌의 컨테이너 */}
      <div
        className="max-w-lg mx-auto min-h-screen 
        bg-white dark:bg-app-dark-card
        shadow-app dark:shadow-app-dark
        flex flex-col transition-colors duration-200"
        >
          <Header/>
           {/* 메인 콘텐츠 */}
          <main className="flex-1 p-6 relative
            flex flex-col items-center
            w-full 
          ">  
          {/* Todo Items */}
            <div className="w-full flex flex-col mt-2">  
               <h2 className="text-xl font-bold mb-6 text-app-text dark:text-app-dark-text mt-2 px-1">오늘의 할 일</h2>
              <TodoForm/>
              <TodoList/>
            </div>
          </main>
      </div>
    </div>
  )
}

export default App
