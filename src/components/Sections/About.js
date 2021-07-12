import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <h1>ABOUT</h1>
      <div className={classes.details}>
        <h2>Hi! I am Likhan Sarkar</h2>
        <h3>
          A Frontend developer with experience in creating responsive UI and
          having a passion for creating human-centered experiences. Experienced
          in writing readable, scalable, reusable code.
        </h3>
        <a
          href={
            "https://drive.google.com/file/d/1fUL92sn14i6-rpINLr0naIm00XmAk_AD/view?usp=sharing"
          }
        >
          Checkout my resume
        </a>
        <h5>Contact Me Here!</h5>
        <h4 className={classes.eph}>
          Email:{" "}
          <a href="mailto:likhansarkar007@gmail.com">
            likhansarkar007@gmail.com
          </a>
        </h4>
        <h4 className={classes.eph}>
          Phone: <p>(+91) 8420614409</p>
        </h4>
      </div>
      <div className={classes.image}></div>
    </div>
  );
};

export default About;
