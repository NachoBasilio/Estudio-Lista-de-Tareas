import React, { useState } from 'react'

export function Todo({item}) {
const [isEdit, setIsEdit] = useState(false)

    return (
    <div>
        <p>{item.title}</p> 
        <button onClick={()=>{setIsEdit(true)}}>Edit</button>
        <button>Delete</button>   
    </div>
  )
}
