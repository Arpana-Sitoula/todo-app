import React, {useState, useEffect} from 'react'

const Page = ({todoItems,setFilteredTodos}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setFilteredTodos(todoItems.slice(1,6));
  }, [page,todoItems]);


  const handlePrev = () =>{
    setPage(page-1);
  }
  const handleNext = () =>{
    setPage(page+1);
  }
  const count = 1;
  return (
    <div className='center-div'>
      <div>
        <button className='button' onClick={handlePrev}  disabled={page <= 1}>&lt;&lt;</button>
        <button className='button' onClick={handleNext}>&gt;&gt;</button>
      </div>
    </div>
  )
}

export default Page