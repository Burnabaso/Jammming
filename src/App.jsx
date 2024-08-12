import SearchForm from "./SearchForm.jsx";
import Results from "./Results.jsx";
import PlaylistContainer from "./PlaylistContainer.jsx";
import { useState, useEffect } from "react";
function App() {
  const [theme, setTheme] = useState('light');
  useEffect(()=>{
    if(theme==='dark'){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[theme]);
  const handleThemeSwitch = ()=>{
    setTheme(theme === "dark" ? "light":"dark");

  };
  return (
    <>
        <div className="shadow-xl bg-action2 w-full flex justify-between items-center py-5 px-10">
          <h1 className="text-4xl h-fit font-bold">Ja<span className="text-action">mmm</span>ing</h1> 
          <label className="inline-flex items-center cursor-pointer bg-action p-3 rounded-md shadow-lg">
            <span className="mr-5 text-white font-bold">Dark Mode</span>
            <input type="checkbox" value="" onClick={handleThemeSwitch}  className="sr-only peer"/>
            <div className="relative w-11 h-6 bg-main-back peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
        <div id="main body" className="bg-second-back flex flex-col pb-7">
          <div className="w-3/6 mx-auto mt-14">
              <SearchForm/>
          </div>
          <div className="w-4/6 mx-auto mt-14 shadow-lg bg-white">
              <Results/>
          </div>
          <div className="w-4/6 mx-auto mt-14 shadow-lg bg-white">
              <PlaylistContainer/>
          </div>
        </div>
    </>
  );
}

export default App;
