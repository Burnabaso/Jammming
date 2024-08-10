import SearchForm from "./SearchForm.jsx";
import AuthComponent from "./AuthComponent.jsx";
function App() {
  return (
    <>
        <div className="shadow-xl bg-action2 w-full flex justify-center items-center py-5 ">
          <h1 className="text-4xl h-fit font-bold">Ja<span className="text-action">mmm</span>ing</h1>
        </div>
        <div id="main body" className="bg-second-back h-screen flex flex-col">
          <AuthComponent/>
          <div className="w-3/6 mx-auto mt-14">
          <SearchForm/>
          </div>
        </div>
    </>
  );
}

export default App;
