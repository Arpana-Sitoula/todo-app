import React, { useState, useRef } from 'react'
import AddTodo from '../components/AddTodo'
import List from '../components/List'
import Page from '../components/Page'



const TodoList = () => {
  const [inputs, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [editing, setEditing] = useState(null);

  return (
    <div>
      <h1 className='center-div'>Todo List</h1>
      <AddTodo
        inputs={inputs}
        setInput={setInput}
        setTodos={setTodos}
        setFilter={setFilter}
        editing={editing} 
        />

      <List
        inputs={inputs}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        filter={filter}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
        editing={editing}
        setEditing={setEditing} />

    </div>
  )
}

export default TodoList