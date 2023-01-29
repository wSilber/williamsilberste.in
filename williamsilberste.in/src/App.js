import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import NavBarTop from './components/NavBarTop'
import NavBarSide from './components/NavBarSide'
import MainComponent from './components/MainContent';
// import WaveAnimation from './components/WaveAnimation';

const nav_pages = ['Home', 'About', 'Experience', 'Education', 'Projects', 'Contact'];

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
      <div ref={ref} style={{position: 'absolute', zIndex: -10, height: '100vh', borderBottom: '1px solid black'}}>Test</div>
      <MainComponent />
    </>
  );
}

export default App;
