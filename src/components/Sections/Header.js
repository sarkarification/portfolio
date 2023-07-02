import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import "./Header.css";

const Header = (props) => {
  return (
    <div className={"headerDiv"}>
      <div className={"nameTag"}>
        <div className={"imageHeader"}></div>
        <h1>LIKHAN SARKAR</h1>
      </div>
      <button className={"toggleButton"} onClick={props.onShow}>
        <span>Let's</span>
        <span>talk</span>
        <span id="arrow">
          <BsArrowUpRight fill="white" />
        </span>
      </button>
    </div>
  );
};

export default Header;
