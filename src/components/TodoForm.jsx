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
    <form onSubmit={onHandleSubmit}>
        <input type="text" name="content"/>
        <input type="submit" value="추가"></input>
    </form>
  )
}

export default TodoForm