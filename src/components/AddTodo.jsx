import React from 'react'
import add from '../assets/add.png'
import down from '../assets/down.gif'

const AddTodo = ({value, name}) => {
  return (
    <div className='filter'>
        <input type='text' value={value} name={name}/>
        <div className='add'><img src={add}/></div>
        <div className='down'><img src={down}/></div>
    </div>
  )
}

export default AddTodo