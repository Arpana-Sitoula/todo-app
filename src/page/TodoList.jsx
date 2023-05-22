import React, { useState, useReducer } from 'react'
import AddTodo from '../components/AddTodo'
import List from '../components/List'


const reducer = (state, action) => {
  switch (action.type) {
    case 'set_Input':
      return { ...state, inputs: action.payload };
    case 'set_Todos':
      return { ...state, todos: action.payload };
    case 'set_filter':
      return { ...state, filter: action.payload };
    case 'set_FilteredTodos':
      return { ...state, filteredTodos: action.payload };
    case 'set_Editing':
      return { ...state, editing: action.payload };
    default:
      return;

  }
}


const TodoList = () => {
 const InitialState = [
    {
      inputs: "",
      todos: [],
      filter: "all",
      filteredTodos: [],
      editing: null
    }
  ]

  const [state, dispatch] = useReducer(reducer, InitialState);

  // const [inputs, setInput] = useState("");
  // const [todos, setTodos] = useState([]);
  // const [filter, setFilter] = useState("all");
  // const [filteredTodos, setFilteredTodos] = useState([]);
  // const [editing, setEditing] = useState(null);


  return (
    <div>
      <h1 className='center-div'>Todo List</h1>
      <AddTodo
        inputs={state.inputs}
        setInput={(inputs) => dispatch({ type: 'set_Input', payload: inputs })}
        setTodos={(todos) => dispatch({ type: 'set_Todos', payload: todos })}
        setFilter={(filter) => dispatch({ type: 'set_Filter', payload: filter })}
        editing={state.editing}
      />

      <List
        inputs={state.inputs}
        setInput={(inputs) => dispatch({ type: 'set_Inputs', payload: inputs })}
        todos={state.todos}
        setTodos={(todos) => dispatch({ type: 'set_Todos', payload: todos })}
        filter={state.filter}
        filteredTodos={state.filteredTodos}
        setFilteredTodos={(filteredTodos) => dispatch({ type: 'set_Filter', payload: filteredTodos })}
        editing={state.editing}
        setEditing={(editing) => dispatch({ type: 'set_Editing', payload: editing })} />

    </div>
  )
}

export default TodoList