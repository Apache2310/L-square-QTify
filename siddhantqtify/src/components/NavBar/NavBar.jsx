import React from 'react';
import Logo from "../../components/Logo/Logo.jsx";
import Search from "../../components/Search/Search.jsx";
import Button from "../../components/Button/Button.jsx";
import styles from "./NavBar.module.css";

const NavBar = ({ searchData }) => {
  return (
      <nav className={styles.navbar}> 
        <a href='/'>
              <Logo />
        </a>
        <Search 
            placeholder = {"Search a song of your choice"}
            searchData={searchData}
            />
          <Button>Give Feedback</Button>
    </nav>
  )
}

export default NavBar;