import React, {useState} from "react";

const albums = [
  { id: 1, title: "Mainstream Freestyle", artist: "Instrumental", cover: "/sample-audio/cover1.jpg", src: "/sample-audio/sample1.mp3" },
  { id: 2, title: "1942", artist: "Instrumental", cover: "/sample-audio/cover2.jpg", src: "/sample-audio/sample2.mp3" }
];

export default function AlbumList() {
  const [playing, setPlaying] = useState(null);

  return (
    <div>
      {albums.map(album => (
        <div key={album.id} style={{
          border: '1px solid #333',
          margin: "10px 0",
          padding: "12px",
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          background: '#1e1e1e'
        }}>
          <img src={album.cover} alt={album.title} style={{ width: 64, height: 64, borderRadius: 6, objectFit: 'cover' }} />
          <div style={{flex:1}}>
            <div style={{fontWeight:600}}>{album.title}</div>
            <div style={{color:'#666'}}>{album.artist}</div>
          </div>
          <div>
            <button onClick={() => {
              const ev = new CustomEvent('play-track', {detail: album});
              window.dispatchEvent(ev);
              setPlaying(album.id);
            }}>
              {playing === album.id ? 'Playing' : 'Play'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
