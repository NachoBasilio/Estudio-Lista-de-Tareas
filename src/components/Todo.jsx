import React, { useState } from "react"
import "../style/Todo.css"

export function Todo({item, onUpdate, onDelete}) {
const [isEdit, setIsEdit] = useState(false)


function FormEdit(){
    const [newValue, setNewValue] = useState(item.title)
    function handleSubmit(e){
        e.preventDefault()
        onUpdate(item.id, newValue)
        setIsEdit(false)
    }

    function handleChange(e){
        e.preventDefault()
        setNewValue(e.target.value)
    }

    return (
    <form className="todoUpdate" onSubmit={handleSubmit}>
        <input type="text" className="todoInput" onChange={handleChange} value={newValue} />
        <button className="button">Update</button>
    </form>
    )
}


function TodoElement() {
    return (
    <div className="todoInfo">
        <p className="todoTexto">{item.title}</p> 
        <div>
            <button className="botonEditar" onClick={()=>{setIsEdit(true)}}>Edit</button>
            <button className="botonEliminar" onClick={(e)=>{
                onDelete(item.id)
            }}>Delete</button> 
        </div>
    </div>
    )
}

return (
    <>
        <div className="todo">
            {!isEdit ? (
                <TodoElement/>
            ) : (
                <FormEdit/>
            )}
        </div>
    </>
  )
}
