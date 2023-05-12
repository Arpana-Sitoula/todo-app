import React from 'react'

const ITEM = [
 {id:1, name:"Yoga", completed: false},
 {id:2, name:"Drink Water", completed: true},
 {id:3, name:"Journals", completed: true},
 {id:4, name:"Learn React", completed: false},
 {id:5, name:"Walk", completed: true}
]

const Item = () => {
  return (
    <div className='item'>
 {ITEM.map((items) =>{
          return(

            // append class name by checking state i.e numbers and compairing it with number.id 
            //use explicit prop names
            <div  key={items.id}>{items.id} {items.name}</div>
          )
        })}
    </div>
  )
}

export default Item