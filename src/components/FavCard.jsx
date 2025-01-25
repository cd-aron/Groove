import React from "react";

export default function FavCard({ favAlbums, onRemoveFromFavourite }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
        gap: "20px",
        padding: "20px",
      }}
    >
      {favAlbums.map((album) => (
        <div
          key={album.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={album.images?.[0]?.url}
            alt={album.name}
            style={{
              width: "100%",
              height: "200px", 
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          />
          <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{album.name}</h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            <strong>Artists:</strong>{" "}
            {album.artists?.map((artist) => artist.name).join(", ") || "Unknown"}
          </p>
          <button
            onClick={() => onRemoveFromFavourite(album.id)}
            style={{
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
}
