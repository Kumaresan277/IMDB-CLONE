import React from 'react'

function Banner() {
  return (
    <div className= 'absolute top-14  flex items-center w-full h-[100vh] md:h-[70vh] bg-cover  bg-center flex items-end' 
    style={{backgroundImage: 'url(https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg)'}} >
      <div class= 'text-white text-xl text-center w-full bg-red-900/60 p-2'>
        Avengers Endgame
      </div>    
    </div>
  )
}

export default Banner