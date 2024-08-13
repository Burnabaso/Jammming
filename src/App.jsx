import NavBar from "./NavBar.jsx";
import MainBody from "./MainBody.jsx";

import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const CLIENT_ID = "f6c5499764e5495c832ffbfbe86124b3";
  const REDIRECT_URI = "http://localhost:4000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [theme, setTheme] = useState("light");
  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      // console.log(token); Just to test token is stored
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <NavBar
        token={token}
        CLIENT_ID={CLIENT_ID}
        REDIRECT_URI={REDIRECT_URI}
        AUTH_ENDPOINT={AUTH_ENDPOINT}
        RESPONSE_TYPE={RESPONSE_TYPE}
        handleThemeSwitch={handleThemeSwitch}
        handleLogout={handleLogout}
        theme = {theme}
      />
      <MainBody token={token}/>
    </>
  );
}

export default App;
