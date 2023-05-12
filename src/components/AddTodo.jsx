import { joinPaths } from '@remix-run/router';
import React from 'react'

const AddTodo = ({ value, name }) => {
    return (
        <div className='filter'>
            <input type='text' value={value} name={name} />
            <div className='add'>+</div>
            <div class="dropdown">
                <button class="dropbtn">Filter</button>
                <div class="dropdown-content">
                    <option>All</option>
                    <option>Completed</option>
                    <option>To do</option>
                </div>
            </div>

        </div>
    )
}

export default AddTodo
