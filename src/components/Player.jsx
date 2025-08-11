import React, {useEffect, useRef, useState} from "react";

export default function Player(){
  const audioRef = useRef(null);
  const [track, setTrack] = useState(null);

  useEffect(()=>{
    const handler = (e) => setTrack(e.detail);
    window.addEventListener('play-track', handler);
    return ()=> window.removeEventListener('play-track', handler);
  },[]);

  useEffect(()=>{
    if(track && audioRef.current){
      audioRef.current.src = track.src || '';
      audioRef.current.play().catch(()=>{});
    }
  },[track]);

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "#181818",
      color: "#fff",
      padding: "10px",
      borderTop: "1px solid #333",
      textAlign: "center"
    }}>
      <div style={{maxWidth:900, margin:'0 auto', display:'flex', alignItems:'center', gap:12}}>
        <div style={{flex:1, textAlign:'left'}}>
          <strong>{track ? `${track.title} — ${track.artist}` : 'No track selected'}</strong>
        </div>
        <div style={{flex:'0 0 400px'}}>
          <audio ref={audioRef} controls sstyle={{ width: '100%', filter: 'invert(1)' }}>
            <source src="" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}
