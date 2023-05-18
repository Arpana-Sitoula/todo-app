import React from 'react'



const List = ({ todos, setTodos }) => {

  const deleteTodo = (id) =>{
    const remainingTods = todos.filter((todo)=>{
      return todo.id !== id;
    });
    setTodos(remainingTods);
  }

  const todoItems = todos.map((task) => {
    return <div key={task.id} className='item'>
      <label htmlFor={task.title} id={task.id}>
        <input type='checkbox' />
        <input readOnly value={task.title} />
      </label>
      <button onClick={()=> deleteTodo(task.id)}>Delete</button>
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