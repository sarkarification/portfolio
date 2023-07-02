import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <h1>ABOUT</h1>
      <div className={classes.details}>
        <h2>Hi! I am Likhan Sarkar</h2>
        <h3>
          Software Engineer having 4+ years experience in the Software
          Engineering domain. Worked on creating robust and responsive software
          for market leading Building Management and Investment Banking
          products.
        </h3>
        <a
          href={
            "https://drive.google.com/file/d/1YhtoVuvFna-V-Rx1ykZfzgfoSuMrfCsX/view?usp=sharing"
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
          Phone: <p>(+44) 7867063569</p>
        </h4>
      </div>
      <div className={classes.image}></div>
    </div>
  );
};

export default About;
