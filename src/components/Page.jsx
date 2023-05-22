import React, {useState, useEffect} from 'react'

const Page = ({filteredTodos, displayTodos, setDisplayTodos}) => {
  const [page, setPage] = useState(1);

  const startIndex = (page - 1) * 6;
  console.log("start Index"+startIndex);
  const endIndex = startIndex + 6;
  console.log("End Index"+endIndex);

  useEffect(() => {
   setDisplayTodos(filteredTodos.slice(startIndex,endIndex));

  }, [page,filteredTodos]);


  const handlePrev = async() =>{
    setPage(page-1);
  }
  const handleNext = async() =>{
    setPage(page+1);
  }

  console.log("diff"+(filteredTodos.length - displayTodos.length))
  return (
    <div className='center-div'>
      {(filteredTodos.length > 6) &&
      <div>
        <button className='button' onClick={handlePrev}  disabled={page <= 1}>&lt;&lt;</button>
        <button className='button' onClick={handleNext} disabled={endIndex >= filteredTodos.length}>&gt;&gt;</button>
      </div>}
    </div>
  )
}

export default Page