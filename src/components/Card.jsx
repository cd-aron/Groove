import React from "react";
import styles from "./card.module.css"

export default function Card({ albums, onAddToFavourite, onRemoveFromFavourite }) {

  return (
    <div className={styles.container}>
      {albums.map((album) => (
        <div
          key={album.id}
          className={styles.albums}
        >
          <img
            src={album.images?.[0]?.url}
            alt={album.name}
            className={styles.img}
          />
          <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{album.name}</h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            <strong>Artists:</strong>{" "}
            {album.artists?.map((artist) => artist.name).join(", ") || "Unknown"}
          </p>
          {onAddToFavourite && (
            <button
              onClick={() => onAddToFavourite(album)}
              className={styles.btn}
            >
              Add to Favorites
            </button>
          )}
          {onRemoveFromFavourite && (
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
          )}
        </div>
      ))}
    </div>
  );
}
