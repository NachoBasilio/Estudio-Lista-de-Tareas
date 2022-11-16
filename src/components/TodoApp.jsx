import React, { useState } from 'react'

export default function TodoApp() {
  const [todoTitle, setTodoTitle] = useState("")

  function handleChange(e){
    setTodoTitle(e.target.value)
  }
  function handleClick(e){
    e.preventDefault()
  }

  return (
    <>
    <div className='todoContainer'>
      <form className='todoCreateForm'>
        <input className='todoInput' type="text" value={todoTitle} onChange={handleChange}/>
        <input className='buttonCreate' type="submit" value="Crear" onClick={handleClick} />
        {todoTitle}
      </form>
    </div>
    </>
  )
}
