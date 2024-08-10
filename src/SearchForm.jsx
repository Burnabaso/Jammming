import {useState} from "react";
import ResultContainer from "./ResultContainer.jsx";

export default function SearchForm(){
    const [searchQuery, setSearchQuery]= useState('');
    const [results,setResults] = useState([]);
    const handleInputChange = (Event)=>{
        setSearchQuery(Event.target.value);
    }
    const handleSearch = async ()=>{
       const token = localStorage.getItem('spotifyAccessToken');
       const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
       });
       const data = await response.json();
       setResults(data.tracks.items);
    }
    const resultValues =  results.map((track) => (
        <li key={track.id}>{track.name} by {track.artists.map(artist => artist.name).join(', ')}</li>
      ))
    return(
        <>
        <form action="#" onSubmit={handleSearch} className="flex flex-col"> 
            <input className="text-action2 shadow-lg py-3 text-center font-bold focus:outline-none" id="songName" required type="text" value={searchQuery} onChange={handleInputChange} placeholder="Enter A Song Title"/>
            <button type="submit" className="bg-main-back text-white mt-7 w-2/4 py-2 rounded-full mx-auto font-semibold shadow-md text-lg hover:scale-105">Search</button>
        </form>
        <ResultContainer value = {resultValues} />
        </>
    );
}