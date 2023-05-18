import React from 'react'



const List = ({ todos, setTodos }) => {

  const deleteTodo = (id) => {
    const remainingTods = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(remainingTods);
  }

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

  const todoItems = todos.map((task) => {
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