import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
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
          <FaRegArrowAltCircleRight fill="white" />
        </span>
      </button>
    </div>
  );
};

export default Header;
