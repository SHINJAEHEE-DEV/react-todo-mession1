
function TodoForm() {

    const onHandleSubmit = (e)=>{
        e.preventDefault()
        const content = e.target.content
        
    }

  return (
    <form onSubmit={onHandleSubmit}>
        <input type="text" name="content"/>
        <input type="submit" value="추가"></input>
    </form>
  )
}

export default TodoForm