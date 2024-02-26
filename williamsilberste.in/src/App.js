import React, { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';

import {
  Box
} from '@chakra-ui/react'

import ScrollText from './components/ScrollText';
import NavBarTop from './components/NavBarTop'
import NavBarSide from './components/NavBarSide'
import MainComponent from './components/MainContent';
import WaveCanvas from './components/WaveAnimation';
import HomeSection from './components/HomeSection';

const nav_pages = ['Home', 'About', 'Experience', 'Education', 'Projects', 'Contact'];


function App() {

  const toggleRef = useRef(null);
  const [loaded, setLoaded] = useState(false)

  const { inViewport } = useInViewport(
      toggleRef,
      { disconnectOnLeave: false },
      {}
  )

  useEffect(() => {
    const onPageLoad = () => {
      window.setTimeout(() => {
        setLoaded(true)
      }, 500)

    }
  

  if (document.readyState === 'complete') {
    onPageLoad();
  } else {
    window.addEventListener('load', onPageLoad);

    return () => window.removeEventListener('load', onPageLoad);
  }
}, []);

  return (
    <>
      <WaveCanvas loaded={loaded} />
      <HomeSection />
      <ScrollText />
      <Box>
        <NavBarTop nav_pages={nav_pages} toggle={inViewport} style={{behavior: 'smooth'}}/>
        <NavBarSide nav_pages={nav_pages} toggle={!inViewport} loaded={loaded} style={{behavior: 'smooth'}}/>
        
        
        <div ref={toggleRef} style={{position: 'absolute', zIndex: -10, height: '40vh'}} id='Home'></div>
        <MainComponent toggle={!inViewport} loaded={loaded} style={{behavior: 'smooth'}}/>
      </Box>
      
    </>
  );
}

export default App;
