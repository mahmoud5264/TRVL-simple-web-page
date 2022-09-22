import React, { useState, useEffect } from "react";
import Styles from "../CSS/Nav.module.css";
import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

function Nav() {
  const [size, setSize] = useState(true);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth > 1024) setSize(true);
      else setSize(false);
    };
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return (
    <nav>
      <div className={Styles.nav}>
        <div className={Styles.logo}>
          <Link to="/">
            <span>TRVL</span>
            <i className="fab fa-typo3" />
          </Link>
        </div>
        {size ? (
          <div>
            <Link to="/">Home</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Products">Products</Link>
            <Link to="/" className={Styles.sign}>
              SIGN UP
            </Link>
          </div>
        ) : (
          <>
            <button
              onClick={() => {
                setMenu(!menu);
              }}
              className={Styles.MenuButton}
            >
              {menu ? (
                <i className="fa fa-close fa-2x" />
              ) : (
                <i className="fa fa-bars fa-2x" />
              )}
            </button>
            {menu ? <NavMenu setMenu={setMenu} /> : ""}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
