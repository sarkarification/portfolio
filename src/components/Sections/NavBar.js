import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import classes from "./NavBar.module.css";
import Modal from "./Modal.js";

const NavBar = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <GrClose onClick={props.onClose} className={classes.closeIcon} />
      <div className={classes.navBar}>
        <h5>Contact Me Here!</h5>
        <h4> {"Email:"}</h4>
        <a href="mailto:likhansarkar007@gmail.com">likhansarkar007@gmail.com</a>
        <p> Phone: (+44) 7867063569</p>
      </div>
      <div className={classes.navfooter}>
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
            <a
              href="https://www.instagram.com/sarkarification/"
              target="_blank"
            >
              <FaInstagram className={classes.skilliconsimage} />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/likhan-sarkar/" target="_blank">
              <FaLinkedinIn className={classes.skilliconsimage} />
            </a>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default NavBar;
