import React from "react";
import logo from "../assets/logo.png";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul>
          <li>
            <img src={logo} alt="" />
          </li>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">profile</a>
          </li>
          <li>
            <a href="">friends</a>
          </li>
          <li>
            <a href="">log out</a>
          </li>
        </ul>
      </div>
      <div className={styles.main}>
        <header></header>
      </div>
    </div>
  );
};

export default MainPage;
