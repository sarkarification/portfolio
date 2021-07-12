import React from "react";
import classes from "./WorkExp.module.css";

const WorkExp = () => {
  return (
    <div className={classes.WorkExp}>
      <h1>WORK</h1>
      <div className={classes.workplacedetails}>
        <h3>WORK EXPERIENCE</h3>
        <h2>My work experience</h2>
        <div className={classes.workplaceitem}>
          <div className={classes.wiprologo}></div>
          <h2>
            Wipro Technologies Limited <h3>Senior Project Engineer</h3>{" "}
            <h4>2018 - Present</h4>
          </h2>
          <ul>
            <li>
              Research, design and implement scalable,reusable features for
              Investment Banks.
            </li>
            <li>Implemented responsive and user friendly UI for clients.</li>
            <li>
              Hold and participate in design meetings with stakeholders to
              finalize FRD details.
            </li>
            <li>
              Drive software design and development while remaining focused on
              customer requirements.
            </li>
            <li>Authoring technical documents for usage by colleagues.</li>
            <li>
              Acted as part of first point of contact in team to handle customer
              issues and system defects.
            </li>
            <li>
              Technologies used: React.js, Javascript, Node.js, RESTful Web
              Services, Maven, Git, etc.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;

// Implemented responsive and user friendly UI for clients.
// Hold and participate in design meetings with stakeholders to finalize FRD details.
// Drive software design and development while remaining focused on customer requirements.
// Authoring technical documents for usage by colleagues.
// Acted as part of first point of contact in team to handle customer issues and system defects.
// Technologies used: React.js, Javascript, Node.js, RESTful Web Services, Maven, Git, etc.
