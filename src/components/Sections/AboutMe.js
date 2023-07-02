import React from "react";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section className={classes.aboutme}>
      <div className={classes.image1}>
        <p className={classes.imageCaption}>Coffee is key</p>
      </div>
      <div className={classes.image2}>
        {" "}
        <p className={classes.imageCaption}>I like beaches</p>
      </div>
      <div className={classes.image3}>
        {" "}
        <p className={classes.imageCaption}>I work out of London</p>
      </div>
      <div className={classes.image4}>
        {" "}
        <p className={classes.imageCaption}>I like to travel</p>
      </div>
      <div className={classes.image5}>
        {" "}
        <p className={classes.imageCaption}>Originally from Calcutta</p>
      </div>
      <div className={classes.image6}>
        {" "}
        <p className={classes.imageCaption}>Proud ally</p>
      </div>
    </section>
  );
};

export default AboutMe;
