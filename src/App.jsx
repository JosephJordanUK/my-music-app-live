import React from "react";
import Navbar from "./components/Navbar.jsx";
import AlbumList from "./components/AlbumList.jsx";
import Player from "./components/Player.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "20px", maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{fontFamily: 'Inter, system-ui, Arial'}}>Gypsify</h1>
        <AlbumList />
      </main>
      <Player />
    </div>
  );
}
