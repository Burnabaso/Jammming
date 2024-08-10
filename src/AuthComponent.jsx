const AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = 'f6c5499764e5495c832ffbfbe86124b3';
const REDIRECT_URI = 'http://localhost:4000/callback';
const SCOPES = 'playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-library-read';

export default function AuthComponent(){
  const login = () => {
    window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=code`;
  };

  return (
    <>
      <button className="bg-main-back text-white mt-7 w-2/4 py-2 rounded-full mx-auto font-semibold shadow-md text-lg hover:scale-105" onClick={login}>Authorize with Spotify</button>
    </>
  );
};

 
