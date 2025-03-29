import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const handleAuth = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.get("http://localhost:8080/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="max-w-xl bg-slate-800 flex-col text-center text-white p-4 rounded-xl shadow-xl w-1/3 h-2/3 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex">
        <h1 className="text-3xl font-bold">Guess the song</h1>
        <p>Play guess the song with your friends and see who's the music muse!</p>

      <button onClick={handleAuth} className="rounded-xl drop-shadow-xl bg-green-500 font-bold max-w-52 py-2 px-4 mx-auto my-auto hover:bg-white hover:text-green-500 duration-300">Login with Spotify</button>
      </div>
    </div>
  );
}


export default App;
