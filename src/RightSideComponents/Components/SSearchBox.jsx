import { useEffect, useState } from "react";

const API_url = "http://www.omdbapi.com/?apikey=c9ddef8a";

const SSearchBox = () => {
    const[searchItem,setSearchItem] = useState("");
    const[fetchData,setfetchData] = useState([]);
    
    const searchMovie = async (title) => {
        const response = await fetch(`${API_url}&s=${title}`)
        const data = await response.json();
        setfetchData(data.Search)
    }
//     useEffect(()=>{
    //    searchMovie();
//    },[])
console.log("data" , fetchData)
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
             fetchData.map((item)=>{
              <li><div>item.Year</div> </li>
           })
         ):(
            <div> No data found </div>
         )
        
      }
    </>
  )
}

export default SSearchBox;