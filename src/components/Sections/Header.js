import React from 'react' 
import classes from './Header.module.css';

const Header =() => {
  return (
    <div className={classes.headerDiv}>
      <div className={classes.nameTag}>
          <div className={classes.imageHeader}></div>
          <h1>LIKHAN SARKAR</h1>
      </div>
      <button className={classes.toggleButton}>
                <span></span>
                <span></span>
                <span></span>
      </button>
    </div>
  );
}

export default Header;
