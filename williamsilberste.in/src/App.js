import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

import NavBarTop from './components/NavBarTop'
import NavBarSide from './components/NavBarSide'
import MainComponent from './components/MainContent';
import WaveAnimation from './components/WaveAnimation';

const nav_pages = ['Home', 'About', 'Experience', 'Education', 'Projects', 'Contact'];


function App() {

  const toggleRef = useRef(null);

  const { inViewport } = useInViewport(
      toggleRef,
      { disconnectOnLeave: false },
      {}
  )

  return (
    <>
      <NavBarTop nav_pages={nav_pages} toggle={inViewport} style={{behavior: 'smooth'}}/>
      <NavBarSide nav_pages={nav_pages} toggle={!inViewport} style={{behavior: 'smooth'}}/>
      <WaveAnimation />
      
      <div ref={toggleRef} style={{position: 'absolute', zIndex: -10, height: '50vh'}} id='Home'>Test</div>
      <MainComponent toggle={!inViewport} style={{behavior: 'smooth'}}/>
    </>
  );
}

export default App;
