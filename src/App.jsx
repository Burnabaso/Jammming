import SearchForm from "./SearchForm";
function App() {
  return (
    <>
        <div className="shadow-lg bg-action2 w-full flex justify-center items-center py-5 ">
          <h1 className="text-4xl h-fit font-bold">Ja<span className="text-action">mmm</span>ing</h1>
        </div>
        <div id="main body" className="bg-second-back h-screen">
          <SearchForm/>
        </div>
    </>
  );
}

export default App;
