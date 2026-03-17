
function TodoForm() {

    const onHandleSubmit = (e)=>{
        e.preventDefault()
        console.log(e)
    }

  return (
    <form onSubmit={onHandleSubmit}>
        <input type="text"/>
        <input type="submit" value="추가"></input>
    </form>
  )
}

export default TodoForm