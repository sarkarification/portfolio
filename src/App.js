import classes from './App.module.css';
import React from 'react' 
import Header from './components/Sections/Header';
import NameSlider from './components/Sections/NameSlider';
import About from './components/Sections/About';

const App =() => {
  return (
    <div className={classes.appContainer}>
      <div className={classes.app}>
        <Header />
        <NameSlider />
        <About />
      </div>
    </div>
  );
}

export default App;
