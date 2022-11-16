import React, { useState } from "react"

export function Todo({item, onUpdate, onDelete}) {
const [isEdit, setIsEdit] = useState(false)

//Componente editar
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

//Componente normal
function TodoElement() {
    return (
    <div className="todoInfo">
        <p>{item.title}</p> 
        <button onClick={()=>{setIsEdit(true)}}>Edit</button>
        <button onClick={(e)=>{
            onDelete(item.id)
        }}>Delete</button>   
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
