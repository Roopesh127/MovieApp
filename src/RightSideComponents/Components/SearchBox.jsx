// import  { useEffect, useState } from "react";

// const SearchBox = () => {
//    const [searchData, setSearchData] = useState([]);
//    const [search, setSearch] = useState("");
//    const [isButtoClicked, setIsButtonClicked]=useState(false)


//    useEffect(() => {
  
//     const fetchData = async () => {
//          try {
//             const res = await fetch("http://www.omdbapi.com/?apikey=c9ddef8a");
//             const data = await res.json();
//             setSearchData(data);
//          } catch (error) {
//             console.error("Error fetching data:", error);
//          }
//       };

//    fetchData()
//    }, [search]);

//    function handleChange(e) {
//       setSearch(e.target.value);
//    }
// const handleClick=()=>{
// setIsButtonClicked(true)
// }

// console.log("searchdata", searchData)

//    return (
//       <div className="searchBox" style={{ border: "3px solid silver", borderRadius: 10, display: "flex", gap: 100 }}>
//          <div className="searchLogo"> Search Logo </div>
//          <form>
//             <input className="searchInputField" type="text" placeholder="Enter Text To search" value={search} onChange={handleChange} />
//             <button type="submit" className="searchButton" onClick={handleClick}>Search Button</button>
//          </form>
//          <div>
//             {/* {searchData?.map((item) => (
//                <li key={item.id}>{item.title}</li>
//             ))} */}
// {

// JSON.stringify(searchData)}
//          </div>
//       </div>
//    );
// };

// export default SearchBox;
