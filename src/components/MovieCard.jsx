import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddWatchList,
  handleRemoveWatchList,
  watchlist
}) {
  function doesContain(movieObj) {
    for(let i = 0; i < watchlist.length; i++) {
      
      if(watchlist[i].id == movieObj.id) {
        console.log(movieObj)
        return true;
      }
    }
    
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>


{doesContain(movieObj) ? (
  <div
    onClick={()=>handleRemoveWatchList(movieObj)}
    className="m-1 flex justify-center rounded-lg bg-orange-900"
  >
    &#10060;
  </div>
) : (
  <div
    onClick={() => handleAddWatchList(movieObj)}
    className="m-1 flex justify-center rounded-lg bg-orange-900"
  >
    &#128525;
  </div>
)}

       
    
      <div className="mt-42 text-xl w-full text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;

{/* <div onClick={() => handleAddWatchList(movieObj)} className="m-1 flex justify-center rounded-lg bg-orange-900">
        &#128525;
      </div> */}
