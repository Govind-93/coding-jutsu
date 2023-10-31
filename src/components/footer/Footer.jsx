import React from "react";
import WhiteLogo from "../../assets/logo_bw.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="left">
          <div className="footer__logo">
            <img src={WhiteLogo} alt="white_logo" />
            <h3 className="text-center">Learn, help, share.</h3>
          </div>
          <div className="seperator"></div>
        </div>

        <div className="mid">
          <h3>Features</h3>
          <ul>
            <li>Feeds</li>
            <li>Discuss</li>
            <li>Resources</li>
            <li>Quiz Battles</li>
            <li>Hinglish Articles</li>
          </ul>
        </div>

        <div className="right">
          <h3 className="text-center">Get in touch</h3>
          <ul>
            <li>
              <i className="uil uil-instagram-alt"></i>
            </li>
            <li>
              <i className="uil uil-discord"></i>
            </li>
            <li>
              <i className="uil uil-envelope"></i>
            </li>
            <li>
              <i className="uil uil-linkedin"></i>
            </li>
            <li>
              <i className="uil uil-telegram"></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
