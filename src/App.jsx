import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Favourite from "./pages/Favourite"

export default function App() {
 
  return (
    <Router basename="/Groove">
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/favourite" element={<Favourite />}/>
    </Routes>
  </Router>  
  );
}
