export default function SearchForm(props){
   
    return(
        <>
        <form action="#" onSubmit={props.handleSearch} className="flex flex-col"> 
            <input className="text-action2 shadow-lg py-3 text-center font-bold focus:outline-none" id="songName" required type="text" value={props.searchKey} onChange={props.handleInputChange} placeholder="Enter A Song Title"/>
            <button type={"submit"} className="bg-main-back dark:bg-main-back-dark text-white mt-7 w-2/4 py-2 rounded-full mx-auto font-semibold shadow-md text-lg hover:scale-105">Search</button>
        </form>
        </>
    );
}