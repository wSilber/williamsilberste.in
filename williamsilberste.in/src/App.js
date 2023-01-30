import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

import NavBarTop from './components/NavBarTop'
import NavBarSide from './components/NavBarSide'
import MainComponent from './components/MainContent';
// import WaveAnimation from './components/WaveAnimation';

const nav_pages = ['Home', 'About', 'Experience', 'Education', 'Projects', 'Contact'];
const about_me_text = 'I love to build things. Whether its building a lawn chair or creating a multi-platform application, I seek out the sense of accomplishment for creating useful products in everything I do. In addition, I have a passion for learning and self growth. Since my first introduction to coding as an 11 year old, I have dedicated myself to learning the world of programming. I am most experienced with the OOP languages such as Java and C++, but I also have tons of experience with languages such as Javascript and C. In addition to my interests as a programmer, I am interested in sports and music. I am a big fan of the New York Rangers and am a firm believer that next year will be their year.'

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
