import { createContext, useContext, useEffect, useRef, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({children}){ 

    
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });
    //useRef 사용시 새로고침하면 id가 초기화됨 중복 id가 생길수 있음
    // const lastId = useRef(0);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const addTodo = (content)=>{

        // const id = lastId.current + 1;
        // lastId.current = id;

        const id = Date.now();

        const todo = {
            id,
            content,   
            isCompleted: false
        }
        setTodos([...todos, todo]);
    }
    const deleteTodo = (id)=>{
        setTodos(todos.filter(todo => todo.id !== id));
    }
    const editTodo = (id, content)=>{

        setTodos(todos.map(todo => {
            if(todo.id === id){
                return {...todo, content}
            }
            return todo;
        }));

    }
    const toggleTodo = (id)=>{
        setTodos(todos.map(todo => {
            if(todo.id === id){
                return {...todo, isCompleted: !todo.isCompleted}
            }
            return todo;
        }))    
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

