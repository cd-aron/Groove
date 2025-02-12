import React, { useEffect, useState } from "react";
import NavBar from '../components/NavBar'
import Card from "../components/Card";


import styles from "./home.module.css"


export default function Home() {
  const clientId = import.meta.env.VITE_MY_ID;
  const clientSecret = import.meta.env.VITE_MY_SECRET_ID;
  const tokenEndpoint = "https://accounts.spotify.com/api/token";

  const [newReleases, setNewReleases] = useState([]);
  const [search, setSearch] = useState('')

  const [favList, setFavList] = useState(() => {

    const savedFavList = localStorage.getItem("favList");
    return savedFavList ? JSON.parse(savedFavList) : [];
  });

  const getAccessToken = async () => {
    try {
      const response = await fetch(tokenEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: "grant_type=client_credentials",
      });

      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  const fetchNewReleases = async () => {
    const token = await getAccessToken();
    if (!token) return;

    try {
      const response = await fetch("https://api.spotify.com/v1/browse/new-releases", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setNewReleases(data.albums.items || []);
    } catch (error) {
      console.error("Error fetching new releases:", error);
    }
  };

  const handleSearch = async () => {
     const token = await getAccessToken();


     try{
         const response = await fetch(`https://api.spotify.com/v1/search?q=${search}&type=album`,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
         
         })

         const data = await response.json();
         setNewReleases(data.albums.items)
     }catch(error){
       console.error(error)
     }
  }

  const addToFavourite = (album) => {
    if (favList.some((fav) => fav.id === album.id)) {
      
      alert("Album is already in favorites!");
      return;
    }

    const newFav = [...favList, album];
    setFavList(newFav);
    localStorage.setItem("favList", JSON.stringify(newFav));
    alert("Added to Favourite") 
  };

  useEffect(() => {
    fetchNewReleases();
  }, []);


  useEffect(() => {
    fetchNewReleases();
  }, []);

  return (

    <div>
      
      <NavBar />
      <div className={styles.searchContainer}> 
       
      <input type="text" placeholder="Search Your Vibe..." value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={handleSearch} className={styles.searchButton}>
            Search
        </button>

   
      </div>   
  

      <h2 style={{fontFamily:'monospace', fontSize:'23px',margin:'10px 30px'}}>Albums</h2>
      <Card albums={newReleases} onAddToFavourite={addToFavourite} />
       
       

    </div>
  );
}
