"use client"

import React, { useState } from 'react'

const Todo = () => {
    const [list, setList] = useState("")
    const [task, setTask] = useState([])

    const AddTodo = () => {
        setTask([...task, list])
        setList("")
    }

    const DeleteItem = (id) => {
        let updatedItem = task.filter((itm, i) => i !== id)
        setTask(updatedItem)

    }

    return (
        <>
            <div className='wrapper'>
                <h1>Add Your Todo</h1>
                <div className='input_item'>
                    <input type="text"
                        placeholder='Add Todo....'
                        value={list}
                        onChange={(e) => setList(e.target.value)} />

                    <button onClick={AddTodo}>Add</button>
                </div>
            </div>
            <div className='TodoList'>
                {
                    task.map((itm, index) => {
                        return (
                            <div className='items'>
                                <h2 key={index}>{itm}</h2>
                                <button style={{ backgroundColor: "red" }} onClick={() => DeleteItem(index)}>Delete</button>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

export default Todo