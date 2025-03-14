import React, {useState} from 'react'
import { useEffect } from 'react'
import MovieCard from'./MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddWatchList, handleRemoveWatchList, watchlist}) {
  const [pageNo, setPageNo] = useState(1)

  const [movies, setMovies] = useState([])

  const handlePrev = ()=>{
    if(pageNo===1)
      setPageNo(pageNo)
      else{
        setPageNo(pageNo-1)
      }
  }
  const handleNext = ()=>{
    setPageNo(pageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=572b6251accf496962b79f8f37e33e87&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)      
    })
  }, [pageNo])
  
  return (
    <div className=' '>
        <div className='absolute top-120 text-xl font-bold text-center w-full bg-red-900/60 p-2'>
            Trending Movies
        </div>

        <div className='absolute top-140 flex flex-row flex-wrap justify-around gap-6'>
          {movies.map((movieObj)=>{
            return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddWatchList={handleAddWatchList} handleRemoveWatchList={handleRemoveWatchList} watchlist={watchlist}/>
          })}
          
          {/* https://api.themoviedb.org/3/movie/popular?api_key=572b6251accf496962b79f8f37e33e87&language=en-US&page=1 */}
        </div>
        <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo} />
    </div>
  )
 }
export default Movies