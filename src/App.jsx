import SearchForm from "./SearchForm.jsx";
import Results from "./Results.jsx";
function App() {
  return (
    <>
        <div className="shadow-xl bg-action2 w-full flex justify-center items-center py-5 ">
          <h1 className="text-4xl h-fit font-bold">Ja<span className="text-action">mmm</span>ing</h1>
        </div>
        <div id="main body" className="bg-second-back h-screen flex flex-col">
          <div className="w-3/6 mx-auto mt-14">
          <SearchForm/>
          </div>
          <div className="w-4/6 mx-auto mt-14 shadow-lg bg-white">
          <Results/>
          </div>
        </div>
    </>
  );
}

export default App;
