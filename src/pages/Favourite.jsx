import React, { useState, useEffect } from "react";
import FavCard from "../components/FavCard";
import { Link } from "react-router-dom";

export default function Favourite() {
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    const storedFavList = localStorage.getItem("favList");
    if (storedFavList) {
      setFavList(JSON.parse(storedFavList));
    }
  }, []);

  const removeFromFavourite = (albumId) => {
    const updatedFavList = favList.filter((album) => album.id !== albumId);
    setFavList(updatedFavList);
    localStorage.setItem("favList", JSON.stringify(updatedFavList)); // Update localStorage
  };

  return (
    <div>
      <nav style={{ padding: "10px", backgroundColor: "#f0f0f0", marginBottom: "20px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#4caf50", fontWeight: "bold" }}>
          Back to Home
        </Link>
      </nav>

      <h2 style={{ fontFamily: "monospace", fontSize: "23px", margin: "10px 30px" }}>
        My Favourite Albums
      </h2>

      {favList.length > 0 ? (
        <FavCard favAlbums={favList} onRemoveFromFavourite={removeFromFavourite} />
      ) : (
        <p style={{ margin: "20px 30px", fontSize: "18px", color: "#555" }}>
          No favorite albums yet. Go back and add some!
        </p>
      )}
    </div>
  );
}
