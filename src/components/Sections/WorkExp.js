import React from "react";
import classes from "./WorkExp.css";

const WorkExp = () => {
  return (
    <div className={"WorkExp"}>
      <h1>WORK</h1>
      <div className={"workplacedetails"}>
        <h3>WORK EXPERIENCE</h3>
        <h2>My work experience</h2>
        <div className={"workplaceitem"}>
          <div className={"wiprologo"}></div>
          <h2>
            Wipro Technologies Limited <h3>Software Engineer</h3>{" "}
            <h4>2018 - 2021</h4>
          </h2>
          <ul>
            <li>
              Research, design and implement scalable, reusable features in back
              end and front end for State Street Bank handling huge volumes of
              transactional data.
            </li>
            <li>
              Building and deploying applications using CI/CD tools and
              containers.
            </li>
            <li>Created automation scripts to reduce manual work by 30%.</li>
            <li>
              Removed Application Security vulnerabilities reducing
              vulnerabilities by 50%.
            </li>
            <li>
              Hold and participate in design meetings with stakeholders to
              finalize FRD details.
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
        <div id="jll" className={"workplaceitem"}>
          <div className={"jlllogo"}></div>
          <h2>
            JLL <h3>Software Engineer 2</h3> <h4>2021 - Present</h4>
          </h2>
          <ul>
            <li>
              Researching and developing UI features for property management
              applications.
            </li>
            <li>Writing API's using server side .Net Core.</li>
            <li>
              Building and deploying applications using CI/CD tools and
              containers.
            </li>
            <li>Testing code using testing frameworks.</li>
            <li>
              Worked on integrating repositories with Application Security tools
              to triage and mitigate vulnerabilities.
            </li>
            <li>Worked on integrating UI with 3rd party applications.</li>
            <li>Worked on POC's to check feasibility of approaches.</li>
            <li>
              Collaborated with product owners and other stakeholders for
              finalizing requirements, design, planning to create detailed user
              stories.
            </li>
            <li>
              Created documentation for team for knowledge sharing purposes.
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
