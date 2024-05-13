const CardrenderComponent = ({Year,Poster,Title,imdbID}) => {

  return (
    <div className="movie" style={{background : "green" , gap: 10}}>
       
          <div> Movie Name : {Title}</div>
          <div> Releasing Year : {Year}</div>
          <div> IMDBID : {imdbID}</div>
          <img src = {Poster} alt="Movie Poster" />
          
    </div>
  )
}

export default CardrenderComponent;