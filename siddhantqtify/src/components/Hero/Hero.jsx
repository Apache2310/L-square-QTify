import React from 'react';
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={require("../../assets/HeroLogo.png")} width={112} alt="headphones" />
      </div>
    </div>
  )
}

export default Hero;