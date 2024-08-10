export default function Results(){
    return(
        <>
        <h2 className="text-5xl text-action font-semibold text-center my-4">Results</h2>
        <div id="trackContainer" className=" rounded-lg bg-main-back mx-2 pl-2 flex gap-4 my-3 shadow-md">
            <div className="w-1/4 m-2">
                <img className="" src="./public/jammmingFavicon.ico"/>
            </div>
            <div className="ml-5 mt-2 w-2/4"> 
            <h3 className="text-2xl text-white">Song Name</h3>
            <p className="mt-2"><span>Artist Name</span> | <span>album Name</span></p>
            </div>
            <div className="ml-5 mt-2 w-1/4 items-center justify-center flex"> 
            <i className="fa-solid fa-plus scale-150 text-action font-bold"></i>
            </div>
        </div>
        </>
    );
}