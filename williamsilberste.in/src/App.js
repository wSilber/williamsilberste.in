import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

import NavBarTop from './components/NavBarTop'
import NavBarSide from './components/NavBarSide'
import MainComponent from './components/MainContent';
// import WaveAnimation from './components/WaveAnimation';

const nav_pages = ['Home', 'About', 'Experience', 'Education', 'Projects', 'Contact'];
const about_me_text = `

    My name is William Silberstein and I am currently completing two degrees in Computer Engineering and Computer Science at Washington University in St. Louis.
    I have a passion for building software, particularly in building backend systems and networking solutions.

`

function App() {

  const ref = useRef(null);

  const { inViewport } = useInViewport(
      ref,
      { disconnectOnLeave: false },
      {}
  )

  return (
    <>
      <NavBarTop nav_pages={nav_pages} toggle={inViewport}/>
      <NavBarSide nav_pages={nav_pages} toggle={!inViewport} />
      {/* <WaveAnimation /> */}
      <div ref={ref} style={{position: 'absolute', zIndex: -10, height: '50vh', borderBottom: '1px solid black'}}>Test</div>
      <MainComponent toggle={!inViewport} about_me_text={about_me_text}/>
    </>
  );
}

export default App;
