import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({children}){ 

    const initialTodos = [
        {
            id: 1,
            content: "리액트 공부하기",
            isCompleted: false
        }, 
        {
            id: 2,
            content: "점심 먹기",
            isCompleted: true
        }
    ]
    
    const [todos, setTodos] = useState(initialTodos);

    const addTodo = (content)=>{

    }
    const deleteTodo = (id)=>{

    }
    const editTodo = (id, content)=>{

    }
    const toggleTodo = (id)=>{

    }



    const value = {
        addTodo,
        deleteTodo,
        editTodo,
        toggleTodo,
        todos  
        
    }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

//커스텀 훅을 만들어서 useContext를 사용하여 TodoContext의 value값을 반환한다.
// 그렇게 한다면 TodoProvider로 감싸진 컴포넌트에서 useTodos를 사용하면 value값을 사용할 수 있다.
// eslint-disable-next-line react-refresh/only-export-components
export function useTodos(){
    const context = useContext(TodoContext);
    return context; 
}

