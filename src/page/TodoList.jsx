import React from 'react'
import AddTodo from '../components/AddTodo'
import List from '../components/List'

const TodoList = () => {
  return (
    <div>
        <h1>Todo List</h1>
        <AddTodo/>
        <List/>
    </div>
  )
}

export default TodoList