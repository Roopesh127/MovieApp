import { useState } from "react";
import CardrenderComponent from "./CardrenderComponent";
import WatchList from "./WatchList";

const API_url = "http://www.omdbapi.com/?apikey=c9ddef8a";

const SSearchBox = () => {
    const[searchItem,setSearchItem] = useState("");
    const[fetchData,setfetchData] = useState([]);
    const[watchList,setWatchList] = useState([]);
    

    const searchMovie = async (title) => {
        const response = await fetch(`${API_url}&s=${title}`)
        const data = await response.json();
        setfetchData(data.Search)
    }


    function handleWatchList(item){
      const newList = [...watchList,item]
      setWatchList(newList) 
      console.log("watchList" , newList)
    }

    
  return (
    <>
      <div className="searchBox">
         <input type="text" placeholder="Enter movie name " onChange={(e)=>setSearchItem(e.target.value)} value={searchItem} />
      </div>
      <div>
         <button onClick={()=>searchMovie(searchItem)}>Search Data</button>
      </div>
      {
        fetchData?.length > 0 ?(
             fetchData.map((item,imdbID)=>(
            
              <div  key={imdbID} >
                       <CardrenderComponent  Year={item.Year} Poster={item.Poster} Title={item.Title} imdbID={item.imdbID} />
                       <button onClick={()=>handleWatchList(item)}> Add to WatchList</button>
              </div>
             
             ))
         ):(
            <div> No data found </div>
         )
      }
 
     <ol>
        { 
         watchList.length > 0 ? (
          watchList.map((item,imdbID)=>(
           <li key={imdbID}> <WatchList key={imdbID} Title={item.Title} imdbID={item.imdbID}  watchList={watchList} setWatchList={setWatchList} /> </li> 
          ))
         ) :(<div>No data found</div>)
      }
     </ol>
    </>
  )
}

export default SSearchBox;