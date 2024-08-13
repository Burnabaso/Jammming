import SearchForm from "./SearchForm.jsx";
import Results from "./Results.jsx";
import PlaylistContainer from "./PlaylistContainer.jsx";
export default function MainBody(props){
    return(
        <div
        id="main-body"
        className="bg-second-back dark:bg-second-back-dark w-full mx-auto flex flex-col lg:flex-row flex-wrap pb-7"
      >
        {props.token ? (
          <>
            <div className="w-3/4 sm:w-5/6 md:w-4/6 lg:w-3/6 max-w-[500px] mx-auto mt-14 lg:self-center">
              <SearchForm />
            </div>
            <div className="w-full mx-auto sm:w-5/6 md:w-4/6 lg:w-3/6 max-w-[700px] mt-14 shadow-lg bg-white pb-2">
              <Results />
            </div>
            <div className="w-full sm:w-5/6 md:w-4/6 lg:w-3/6 max-w-[800px] mx-auto mt-14 shadow-lg bg-white ">
              <PlaylistContainer />
            </div>
          </>
        ) : (
          <h1 className="text-4xl h-fit w-full font-bold text-center absolute top-2/4">
            Login to start Ja<span className="text-main-back">mmm</span>ing
          </h1>
        )}
      </div>
    );
}