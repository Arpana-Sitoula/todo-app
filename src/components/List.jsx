import React, { useEffect } from 'react'



const List = ({ todos, setTodos, filter,setFilteredTodos,filteredTodos }) => {

  const deleteTodo = (id) => {
    const remainingTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(remainingTodos);
  }

  useEffect(()=>{
    if(filter=="completed"){
      setFilteredTodos(todos.filter((todo)=>{
        return todo.complete == true;
      }));
    } else if(filter == "incomplete"){
      setFilteredTodos(todos.filter((todo)=>{
        return todo.complete == false;
      }));
    }
    else{
      setFilteredTodos(todos);
    }

  },[filter, todos])

  const handleCheck = (e, id) => {
    const checked = e.target.checked;
    setTodos(todos.map((todo)=>{
      if(todo.id == id){
        return {
          ...todo,
          complete: checked
        };
      }
      return todo;
    }))
  }

  const todoItems = filteredTodos.map((task) => {
    return <div key={task.id} className='item'>
      <label htmlFor={task.title} id={task.id}>
        <input type='checkbox'  checked={task.complete ? true : false} onChange={(e) => handleCheck(e, task.id)} name={task.title} />
        <input className = {task.complete? "completed": "incomplete"} readOnly value={task.title} />
      </label>
      <button onClick={() => deleteTodo(task.id)}>Delete</button>
      <button>Edit</button>
    </div>
  });

  return (
    <div className='center-div'>
      <div className='item'>
        {todoItems}
      </div>
    </div>
  )
}

export default List