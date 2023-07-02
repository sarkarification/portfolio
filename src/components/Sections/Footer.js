import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
  FaHeart,
} from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <ul>
        <li>
          <a href="https://github.com/sarkarification" target="_blank">
            <FaGithub className={classes.skilliconsimage} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/likhan.trueblue" target="_blank">
            <FaFacebook className={classes.skilliconsimage} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sarkarification/" target="_blank">
            <FaInstagram className={classes.skilliconsimage} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/likhan-sarkar/" target="_blank">
            <FaLinkedinIn className={classes.skilliconsimage} />
          </a>
        </li>
      </ul>
      <div>
        Designed by Likhan Sarkar using <FaReact /> and with <FaHeart />.
        <br></br>
        <br></br>
        Please visit my <FaGithub /> to support.
      </div>
    </div>
  );
};

export default Footer;
