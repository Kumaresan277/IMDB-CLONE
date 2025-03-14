import React, { useEffect, useState } from "react";
import genreids from '../utility/Genre'

function WatchList({watchlist, setWatchList, handleRemoveWatchList}) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"])
  const [currentGenre, setGenre] = useState("All Genres")

  let handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  let handleFilter = (genre)=>{
    setGenre(genre)
  }

  let sortIncreseaing = ()=>{
   let sortedIncreasing =  watchlist.sort((movieA, movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedIncreasing])
  }

  let sortDecreasing = ()=>{
    let sortedDecreasing = watchlist.sort((movieA, movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDecreasing])
  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreids[movieObj.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(["All Genres", ...temp])
    console.log(temp)
  }, [watchlist])

  return (
    <>

    <div className="absolute top-15 left-0 flex justify-center flex-wrap m-4 gap-3">
      {genreList.map((genre)=>{
        return <div onClick={()=>handleFilter(genre)} className={currentGenre==genre?"flex left-2 justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl font-bold mx-4" :  "flex justify-center items-center h-[3rem] w-[9rem] bg-orange-400/50 rounded-xl font-bold mx-4" }>
        
         {genre}</div>
      
      })}
      
     
    </div>


    <div className="absolute top-35 left-120 flex items-center justify-center">
      <input onChange={handleSearch}
        type="text"
        placeholder="Search Movies"
        className="text-black h-[2rem] w-[18rem] bg-white outline-none"
      />
    </div>

    <div className='overflow-hidden rounded-lg border border-blue-200  '>
      <table className='absolute top-48 w-full !text-blue-500 text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th className="flex justify-center">
              <div onClick={sortIncreseaing} className="p-2"><i class="fa-solid fa-arrow-up"></i></div>
              <div className="p-2">Ratings</div>
              <div onClick={sortDecreasing} className="p-2"><i class="fa-solid fa-arrow-down"></i></div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>

        </thead>
        
        <tbody>

          {watchlist.filter((movieObj)=>{
            if(currentGenre=="All Genres"){
              return true
            }else{
              return genreids[movieObj.genre_ids[0]]==currentGenre
            }
          }).filter((movieObj)=>{
            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
          }).map((movieObj, index)=>{
            return <tr key={index}className='border-b-2'>
            <td className='flex items-center px-6 py-4'>
              <img className='h-[10rem] w-[10rem]' src={`https://tmdb.org/t/p/original/${movieObj.backdrop_path}`}/>
              <div className='mx-15'>{movieObj.original_title}</div>
            </td>

            <td>{movieObj.vote_average}</td>
            <td>{movieObj.popularity}</td>
            <td>{genreids[movieObj.genre_ids[0]]}</td>
            <td onClick={()=>handleRemoveWatchList(movieObj)} className='text-red-500'>Delete</td>
          </tr>
          })}

          

          

        </tbody>

      </table>
    </div>

    </>  
   
  );
}

export default WatchList;
