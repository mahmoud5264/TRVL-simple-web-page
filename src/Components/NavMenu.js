import React from "react";
import Styles from "../CSS/NavMenu.module.css";
import { Link } from "react-router-dom";

function NavMenu({setMenu}) {
  return (
    <div className={Styles.NavMenu}>
      <Link to="/" onClick={()=>{setMenu(false)}}>Home</Link>
      <Link to="/Services" onClick={()=>{setMenu(false)}}>Services</Link>
      <Link to="/Products" onClick={()=>{setMenu(false)}}>Products</Link>
      <Link to="/" className={Styles.sign} onClick={()=>{setMenu(false)}}>
        SIGN UP
      </Link>
    </div>
  );
}

export default NavMenu;
