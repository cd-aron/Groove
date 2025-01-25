import React,{useState} from "react";
import { Link } from "react-router-dom"

import logo from "../assets/logo.png"
import styles from "./navbar.module.css"


export default function navigationBar(){

    return(
        <div className={styles.container}>

             <nav>
              <div style={{display:'flex'}}><img src={logo} alt="logo" className={styles.img}/> <h2 style={{margin:'8px 10px', fontWeight:'bold'}}>Groove</h2></div>
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/favourite">Favourites</Link></li>
        
                     
            </nav>       
           
        </div>
    )
}