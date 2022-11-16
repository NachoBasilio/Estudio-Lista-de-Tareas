import React, { useState } from 'react'

export default function TodoApp() {
  const [todoTitle, setTodoTitle] = useState("")
  const [todos, setTodos] = useState([])

  function handleChange(e){
    setTodoTitle(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    
    const newTodo = {
      id: crypto.randomUUID(),
      title: todoTitle,
    }
    setTodos([...todos, newTodo])
    console.log(todos)
  }

  return (
    <>
    <div className='todoContainer'>
      <form className='todoCreateForm' onSubmit={handleSubmit}>
        <input className='todoInput' type="text" value={todoTitle} onChange={handleChange}/>
        <input className='buttonCreate' type="submit" value="Crear" />
      </form>
      <div className='todosContainer'>
        {todos.map(todo=>(<div key={todo.id}>{todo.title}</div>))}
      </div>
    </div>
    </>
  )
}
