const WatchList = ({Title}) => {
  return (
    <div>
     <ol>
       <li type="1"> Movie Name : {Title} <button>Remove from WatchList</button></li>
    </ol>
        
          {/* <div> Releasing Year : {Year}</div>
          <div> IMDBID : {imdbID}</div>
          <img src = {Poster} alt="Movie Poster" /> */}
    </div>
  )
}

export default WatchList