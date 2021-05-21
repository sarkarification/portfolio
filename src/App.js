import classes from './App.module.css';
import React from 'react' 
import Header from './components/Sections/Header';
import NameSlider from './components/Sections/NameSlider';
import About from './components/Sections/About';
import Services from './components/Sections/Services';
import WorkExp from './components/Sections/WorkExp';
import Footer from './components/Sections/Footer';

const App =() => {
  return (
    <div className={classes.appContainer}>
      <div className={classes.app}>
        <Header />
        <NameSlider />
        <About />
        <Services />
        <WorkExp />
        <Footer />
      </div>
    </div>
  );
}

export default App;
