// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";


function App() {
  const [searchData, setSearchData] = useState();
  return (
    <>
      <NavBar searchData={searchData}/>
      <Hero/>
    </>
  );
}

export default App;
