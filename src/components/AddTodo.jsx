import React from 'react'
import uuid from 'react-uuid';

const AddTodo = ({inputs, setInput, setTodos,setFilter,editing}) => {
   
   

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
            <input type='text' value={editing? "":inputs} onChange={(e)=> setInput(e.target.value)}/>
            <button type='submit' className='add'>+</button>
            <div className="dropdown">
                <button className="dropbtn">Filter</button>
                <div className="dropdown-content">
                    <option value="all" onClick={(e)=> {setFilter(e.target.value)}}>All</option>
                    <option value="completed" onClick={(e)=> {setFilter(e.target.value)}}>Completed</option>
                    <option value="incomplete" onClick={(e)=> {setFilter(e.target.value)}}>Todo</option>
                </div>
            </div>
            </form>

        </div>
    )
}

export default AddTodo
