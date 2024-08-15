export default function Results(props) {
  const handleAddTrack = (e) => {
    

  }
  return props.tracksData.slice(0,5).map(track => (
    <>
      <div
        key={track.id}
        className=" rounded-lg max-w-[700px] sm:w-5/6 sm:mx-auto bg-main-back dark:bg-main-back-dark mx-2 pl-2 flex gap-4 my-3 shadow-md"
      >
        <div className="w-1/4 m-2">
          {track.album.images?<img className="self-center" src={track.album.images[1].url}/>:<div>No Image</div>}
        </div>
        <div className="ml-5 mt-2 w-2/4">
          <h3 className="text-2xl text-white">{track.name}</h3>
          <p className="mt-2 text-white">
            <span className="text-white">{track.artists[0].name}</span> |
            <span className="text-white">{track.album.name}</span>
          </p>
        </div>
        <div className="ml-5 mt-2 w-1/4 items-center justify-center flex">
          <i onClick={handleAddTrack}  className="fa-solid fa-plus scale-150 text-action font-bold"></i>
        </div>
      </div>
    </>
  ));
}
