import SearchForm from "./SearchForm.jsx";
import Results from "./Results.jsx";
import PlaylistContainer from "./PlaylistContainer.jsx";
import { useState, useEffect } from "react";
function App() {
  const CLIENT_ID = 'f6c5499764e5495c832ffbfbe86124b3';
  const REDIRECT_URI = 'http://localhost:4000';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  const [theme, setTheme] = useState('light');
  const [token,setToken] = useState("");
  useEffect(()=>{
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      // console.log(token); Just to test token is stored
      window.location.hash="";
      window.localStorage.setItem("token",token);
      setToken(token);
    }

  },[]);
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
  const handleLogout = ()=>{
    setToken('')
    window.localStorage.removeItem("token");
  }
  
  return (
    <>
        <div className="bg-action2 dark:bg-action2-dark w-full flex justify-between items-center py-5 px-3 md:px-0 md:justify-around">
          {!token?
          <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="bg-action dark:bg-action-dark text-xl text-center py-3 px-2 rounded-md text-white font-semibold transition-all hover:font-bold">Login to Spotify</a>:
          <button className="bg-action dark:bg-action-dark text-xl text-center py-3 px-2 rounded-md text-white font-semibold transition-all hover:font-bold" onClick={handleLogout}>Logout</button>
          }
          <h1 className="text-4xl h-fit font-bold">Ja<span className="text-action">mmm</span>ing</h1> 
          <label className="inline-flex items-center bg-action dark:bg-action-dark p-3 rounded-md shadow-lg">
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
