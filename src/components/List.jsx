import React, { useEffect, useState } from 'react'
import Page from './Page';


const List = ({ inputs, setInput, todos, setTodos, filter, setFilteredTodos, filteredTodos, setEditing, editing }) => {

  const [displayTodos, setDisplayTodos] = useState([]);


  const deleteTodo = (id) => {
    const remainingTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(remainingTodos);
  }


  useEffect(() => {
    if (filter == "completed") {
      setFilteredTodos(todos.filter((todo) => {
        return todo.complete == true;
      }));
    } else if (filter == "incomplete") {
      setFilteredTodos(todos.filter((todo) => {
        return todo.complete == false;
      }));
    }
    else {
      setFilteredTodos(todos);
    }

  }, [filter, todos])

  const handleCheck = (e, id) => {
    const checked = e.target.checked;
    setTodos(todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          complete: checked
        };
      }
      return todo;
    }))
  }

  const handleEdit = (id, title) => {
    setEditing(id);
    setInput(title);
  }

  const handleUpdate = () => {
    setTodos(todos.map((todo) => {
      if (editing == todo.id) {
        return {
          ...todo,
          title: inputs
        };
      }
      return todo;
    }));
    setEditing(null);
    setInput("");
  }

  const todoItems = displayTodos.map((task) => {
    return <div key={task.id} className='item'>
      <label htmlFor={task.title} id={task.id}>
        <input type='checkbox' checked={task.complete ? true : false} onChange={(e) => handleCheck(e, task.id)} name={task.title} />
        <input className={task.complete ? "completed" : "incomplete"} readOnly={editing == task.id ? false : true} value={editing == task.id ? inputs : task.title} onChange={(e) => setInput(e.target.value)} />
      </label>
      <button className='button' onClick={() => deleteTodo(task.id)}>Delete</button>
      <button className='button' onClick={() => { editing ? handleUpdate() : handleEdit(task.id, task.title) }}>{editing == task.id ? "Save" : "Edit"}</button>
    </div>
  });

  return (
    <div className='center-div'>
      <div>
        <div className='list'>
          {todoItems}
        </div>
        <Page filteredTodos={filteredTodos} displayTodos={displayTodos} setDisplayTodos={setDisplayTodos} />
      </div>
    </div>
  )
}

export default List