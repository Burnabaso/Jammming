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
        <div className="bg-action2 dark:bg-action2-dark w-full flex justify-between items-center py-5 px-10">
          <h1 className="text-4xl h-fit font-bold">Ja<span className="text-action">mmm</span>ing</h1> 
          <label className="inline-flex items-center cursor-pointer bg-action dark:bg-action-dark p-3 rounded-md shadow-lg">
            <span className="mr-5 text-white font-bold">{theme.charAt(0).toUpperCase()+theme.slice(1)} Mode</span>
            <input type="checkbox" value="" onClick={handleThemeSwitch}  className="sr-only peer"/>
            <div className="relative w-11 h-6 bg-main-back peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
        </div>
        <div id="main body" className="bg-second-back dark:bg-second-back-dark w-full mx-auto flex flex-col lg:flex-row flex-wrap pb-7">
          <div className="w-3/4 sm:w-5/6 md:w-4/6 lg:w-3/6 max-w-[500px] mx-auto mt-14 lg:self-center">
              <SearchForm/>
          </div>
          <div className="w-full mx-auto sm:w-5/6 md:w-4/6 lg:w-3/6 max-w-[700px] mt-14 shadow-lg bg-white pb-2">
              <Results/>
          </div>
          <div className="w-full sm:w-5/6 md:w-4/6 lg:w-3/6 max-w-[800px] mx-auto mt-14 shadow-lg bg-white ">
              <PlaylistContainer/>
          </div>
        </div>
    </>
  );
}

export default App;
