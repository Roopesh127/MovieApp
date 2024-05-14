const WatchList = ({Title,imdbID,setWatchList,watchList}) => {
   const removeList = (imdbID) =>{
         const newWatchList = watchList.filter((item)=>item.imdbID !== imdbID)
              setWatchList(newWatchList);
            //   setwatchListid(imdbID);
           //   console.log("imdbID",imdbID);
    }
  return (
    <div> Movie Name {imdbID} : {Title} <button onClick={()=>removeList(imdbID)}>Remove from WatchList</button></div>
  )
}

export default WatchList