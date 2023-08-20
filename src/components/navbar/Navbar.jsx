import React, { useContext, useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/logo.png";
import Me from "../../assets/me.jpeg";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  let location = useLocation();

  const { theme, switchTheme } = useContext(ThemeContext);

  console.log("Theme in navbar is ", theme);

  const toggleNav = () => {
    console.log("toggle clicked");
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="nav__bar">
      <div className="nav__left">
        <div className="logo__container">
          <img src={Logo} alt="logo"></img>
        </div>
      </div>

      <div className="nav__right">
        <div className={`nav__menu ${showSideNav ? "show__nav-menu" : ""}`}>
          <ul className="nav__links">
            <Link to="/">
              <li
                className={`nav__link ${
                  location.pathname === "/" ? "active__link" : ""
                } `}
              >
                <i className="uil uil-estate nav__icons"></i>
                Home
              </li>
            </Link>

            <Link to="/feeds">
              <li
                className={`nav__link ${
                  location.pathname === "/feeds" ? "active__link" : ""
                } `}
              >
                <i className="uil uil-postcard nav__icons"></i>
                Feeds
              </li>
            </Link>

            <Link to="/discuss">
              <li
                className={`nav__link ${
                  location.pathname === "/discuss" ? "active__link" : ""
                } `}
              >
                <i className="uil uil-comments nav__icons"></i>
                Discuss
              </li>
            </Link>

            <Link to="/resources">
              <li
                className={`nav__link ${
                  location.pathname === "/resources" ? "active__link" : ""
                } `}
              >
                <i className="uil uil-books nav__icons"></i>
                Resources
              </li>
            </Link>

            <Link to="/contests">
              <li
                className={`nav__link ${
                  location.pathname === "/contests" ? "active__link" : ""
                } `}
              >
                <i className="uil uil-trophy nav__icons"></i>
                Contests
              </li>
            </Link>
          </ul>

          <div className="theme" onClick={switchTheme}>
            <i
              className={`uil uil-${
                theme === "Dark" ? "sun" : "moon"
              } theme__btn`}
            ></i>{" "}
            {theme === "Light" ? "Dark" : "Light"} Theme
          </div>

          <div className="user">
            <img src={Me} alt="user_img" className="user__image" />
            <span className="user__name">Sp Maurya</span>
          </div>

          <i className="uil uil-multiply close__btn" onClick={toggleNav}></i>
        </div>
      </div>

      <div className="menu__bar">
        <i
          className={`uil uil-${theme === "Dark" ? "sun" : "moon"} theme__btn`}
          onClick={switchTheme}
        ></i>
        <i className="uil uil-bars toggle__btn" onClick={toggleNav}></i>
      </div>
    </div>
  );
};

export default Navbar;
