import './CardRenderCSS.css';
const CardrenderComponent = ({Year,Poster,Title,imdbID}) => {

  return (
    <div className="parentdiv">
       <div className='upperPart'>
          <img style={{height : 200, width:200}} src = {Poster} alt="Movie Poster" />
       </div>
       <div className='lowerPart'>
          <div> Movie Name : {Title}</div>
          <div> Releasing Year : {Year}</div>
          <div> IMDBID : {imdbID}</div>
       </div>
          
    </div>
  )
}

export default CardrenderComponent;