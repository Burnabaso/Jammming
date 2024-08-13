export default function NavBar(props){
return(
    <>
     <div className="xs:hidden  bg-action2 dark:bg-action2-dark w-full flex justify-between items-center py-5 px-3 md:px-0 md:justify-around">
          {!props.token?
          <a href={`${props.AUTH_ENDPOINT}?client_id=${props.CLIENT_ID}&redirect_uri=${props.REDIRECT_URI}&response_type=${props.RESPONSE_TYPE}`} className="bg-action dark:bg-action-dark text-xl text-center py-3 px-2 rounded-md text-white font-semibold transition-all hover:font-bold">Login to Spotify</a>:
          <button className="bg-action dark:bg-action-dark text-xl text-center py-3 px-2 rounded-md text-white font-semibold transition-all hover:font-bold" onClick={props.handleLogout}>Logout</button>
          }
          <h1 className="text-4xl h-fit font-bold">Ja<span className="text-action">mmm</span>ing</h1> 
          <label className="inline-flex items-center bg-action dark:bg-action-dark p-3 rounded-md shadow-lg">
            <span className="mr-5 text-white font-bold">{props.theme.charAt(0).toUpperCase()+props.theme.slice(1)} Mode</span>
            <input type="checkbox" value="" onClick={props.handleThemeSwitch}  className="sr-only peer"/>
            <div className="relative w-11 h-6 bg-main-back peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
    </div>
    <div className="xs:flex bg-action2 dark:bg-action2-dark w-full hidden justify-between items-center py-5 px-6 md:px-0 md:justify-around">
        <h1 className="text-4xl h-fit font-bold">Ja<span className="text-action">mmm</span>ing</h1> 
        <i className="fa-solid fa-bars text-white font-semibold w-2/5 text-end content-center"></i>
    </div>
    </>
);
}
