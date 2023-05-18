import React, { useState } from 'react'
import uuid from 'react-uuid';

const AddTodo = ({setTodos}) => {
    const [inputs, setInput] = useState("");
   

    const handleAdd = (e) =>{
        e.preventDefault();
        setTodos((prev)=>{
            return[
                ...prev,
                {
                    id:uuid(),
                    title: inputs,
                    complete:false
                }
            ]
        });
        setInput("");
    }

    return (
        <div className='center-div'>
            <form className='filter' onSubmit={handleAdd}>
            <input type='text' value={inputs} onChange={(e)=> setInput(e.target.value)}/>
            <button type='submit' className='add'>+</button>
            <div className="dropdown">
                <button className="dropbtn">Filter</button>
                <div className="dropdown-content">
                    <option >All</option>
                    <option >Completed</option>
                    <option >To do</option>
                </div>
            </div>
            </form>

        </div>
    )
}

export default AddTodo
