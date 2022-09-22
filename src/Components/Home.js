import React from "react";
import Styles from "../CSS/Home.module.css";

function Home() {
  return (
    <div className={Styles.Home}>
      <p className={Styles.p1}>ADVENTURE AWAITS</p>
      <p className={Styles.p2}>What are you waiting?</p>
      <div className={Styles.btns}>
        <button className={Styles.btn1}>GET STARTED</button>
        <button className={Styles.btn2}>WATCH TRAILER <i className="fa fa-play-circle"/></button>
      </div>
    </div>
  );
}

export default Home;
