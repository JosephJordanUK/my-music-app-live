import React from "react";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      background: "#121212",
      color: "#fff"
    }}>
      <div style={{fontWeight:700}}>🎵 My Music App</div>
      <div>
        <button style={{ marginRight: "10px", padding: '8px 12px' }}>Sign Up</button>
        <button style={{ padding: '8px 12px' }}>Log In</button>
      </div>
    </nav>
  );
}
