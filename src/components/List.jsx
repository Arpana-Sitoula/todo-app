import React from 'react'


const List = ({ todos }) => {
  const todoItems = todos.map((task) => {
    return <div key={task.id} className='item'>
      <label htmlFor={task.title} id={task.id}>
        <input type='checkbox' />
        <input readonly value={task.title} />
      </label>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  });

  return (
    <div className='item'>
      {todoItems}
    </div>
  )
}

export default List