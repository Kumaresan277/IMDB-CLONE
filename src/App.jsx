import { useState } from "react";
import { useEffect } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from './components/Banner'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchList] = useState([])

  let handleAddWatchList = (movieObj)=>{
    let newWatchList = [...watchlist, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let handleRemoveWatchList = (movieObj)=>{
    let filteredWatchList = watchlist.filter((movie)=>{
        return movie.id != movieObj.id
    })
    setWatchList(filteredWatchList)
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchList))
    console.log(filteredWatchList)
  }

  useEffect(()=>{
    
    let moviesFromLocalStorage = localStorage.getItem('moviesApp') 
   
    if(!moviesFromLocalStorage){
      return 
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  }, []);

  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner/> <Movies handleAddWatchList={handleAddWatchList} handleRemoveWatchList = {handleRemoveWatchList} watchlist={watchlist} /></>} />
          <Route path="/watchlist" element={<WatchList   watchlist={watchlist} setWatchList={setWatchList} handleRemoveWatchList={handleRemoveWatchList}/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
