import {useState} from "react";
export default function SearchForm(){
    const [searchQuery, setSearchQuery]= useState('');
    const handleInputChange = (Event)=>{
        setSearchQuery(Event.target.value);
    }
    const handleSearch = ()=>{
        console.log('Searching for: ',searchQuery);
    }
    return(
        <>
        <form action="#" onSubmit={handleSearch} className="flex flex-col"> 
            <input className="text-action2 shadow-lg py-3 text-center font-bold" id="songName" required type="text" onChange={handleInputChange} placeholder="Enter A Song Title"/>
            <button type="submit" className="bg-main-back text-white mt-7 w-2/4 py-2 rounded-full mx-auto font-semibold shadow-md text-lg hover:scale-105">Search</button>
        </form>
        </>
    );
}