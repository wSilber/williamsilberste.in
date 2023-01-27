import React, { useState, useEffect, useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import NavBarTop from './components/NavBarTop'
import NavBarSide from './components/NavBarSide'

function App() {

  const ref = useRef(null);

  const { inViewport, enterCount, leaveCount } = useInViewport(
      ref,
      { disconnectOnLeave: false },
      {}
  )

  return (
    <>
      <NavBarTop toggle={inViewport}/>
      <NavBarSide toggle={!inViewport} />
      <div ref={ref} style={{height: '50vh', backgroundColor: 'red'}}>Test</div>
      <div style={{height: '1000vh', backgroundColor: '#eee'}}>Test</div>
    </>
  );
}

export default App;
