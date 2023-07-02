import React from "react";
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import classes from "./Services.module.css";

const Services = () => {
  return (
    <div className={classes.services}>
      <h1>SKILLS</h1>
      <div className={classes.skills}>
        <h3>TECHNOLOGIES I HAVE WORKED ON </h3>
        <h2>My skills</h2>
      </div>
      <ul className={classes.skillicons}>
        <li>
          <FaReact
            style={{ color: "#61DBFB" }}
            className={classes.skilliconsimage}
          />
          <h2>React.Js</h2>
        </li>
        <li>
          <FaHtml5
            style={{ color: "#E34C26" }}
            className={classes.skilliconsimage}
          />
          <h2>HTML</h2>
        </li>
        <li>
          <FaCss3Alt
            style={{ color: "#264DE4" }}
            className={classes.skilliconsimage}
          />
          <h2>CSS</h2>
        </li>
        <li>
          <FaNodeJs
            style={{ color: "#3C873A" }}
            className={classes.skilliconsimage}
          />
          <h2>Node.Js</h2>
        </li>
        <li>
          <SiCsharp
            style={{ color: "#044F88" }}
            className={classes.skilliconsimage}
          />
          <h2>C#</h2>
        </li>
        <li>
          <FaJava
            style={{ color: "#F89820" }}
            className={classes.skilliconsimage}
          />
          <h2>Java</h2>
        </li>
      </ul>
    </div>
  );
};

export default Services;
