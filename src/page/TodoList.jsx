import React, { useState } from 'react'
import AddTodo from '../components/AddTodo'
import List from '../components/List'


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
        <h1>Todo List</h1>
        <AddTodo todos={todos} setTodos={setTodos}/>
        <List todos={todos}/>
    </div>
  )
}

export default TodoList