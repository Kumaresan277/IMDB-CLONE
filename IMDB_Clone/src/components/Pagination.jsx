import React from 'react'

function Pagination({handlePrev, handleNext, pageNo}) {
  return (
    <div className='absolute absolute top-390 bg-gray-400 w-full flex justify-center'>
        
        <div onClick={handlePrev} className="px-8"><i className="fa-solid fa-arrow-left"></i></div>
        <div  className="font-bold">{pageNo}</div>

        <div onClick={handleNext} className="px-8"><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination