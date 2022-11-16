import React, { useState } from 'react'
import {Todo} from './Todo'

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
      title: todoTitle
    }
    setTodos([...todos, newTodo])
    console.log(todos)
  }

  function changeState(id, text){
    const aux = todos.findIndex((todo)=>todo.id === id)
    todos[aux].title = text
    setTodos([...todos])
  }

  function deteleItem(id){
    const aux = todos.findIndex((todo)=>todo.id === id)
    todos.splice(aux, 1)
    setTodos([...todos])
  }
  return (
    <>
    <div className='todoContainer'>
      <form className='todoCreateForm' onSubmit={handleSubmit}>
        <input className='todoInput' type="text" value={todoTitle} onChange={handleChange}/>
        <input className='buttonCreate' type="submit" value="Crear" />
      </form>
      <div className='todosContainer'>
        {todos.map(todo=>(<Todo key={todo.id} item={todo} onUpdate={changeState} onDelete={deteleItem}/>))}
      </div>
    </div>
    </>
  )
}
