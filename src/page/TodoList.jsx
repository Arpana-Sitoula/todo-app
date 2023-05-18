import React, { useState } from 'react'
import AddTodo from '../components/AddTodo'
import List from '../components/List'


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  return (
    <div>
        <h1>Todo List</h1>
        <AddTodo 
        todos={todos} 
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}/>
        <List 
        todos={todos} 
        setTodos={setTodos}
        filter={filter}
        setFilter={setFilter}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}/>
    </div>
  )
}

export default TodoList