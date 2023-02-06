import React from 'react';

import {
    Canvas,
} from '@react-three/fiber'

import WaveAnimation from './WaveCanvas'

function WaveCanvas({loaded}) {

  return (
    <Canvas style={{zIndex: loaded? '10': '-1'}}>
        <WaveAnimation />
        <ambientLight intensity={.1} />
        <directionalLight />
    </Canvas>
  )
}

export default WaveCanvas;