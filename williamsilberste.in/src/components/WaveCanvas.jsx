import React from 'react';

import {
    Canvas,
} from '@react-three/fiber'

import WaveAnimation from './WaveCanvas'
import { PerspectiveCamera } from '@react-three/drei';

function WaveCanvas({loaded}) {

  return (
    <Canvas 
      style={{zIndex: loaded? '10': '-1'}}
      // camera={{ fov: 25, position: [10000, 1000000, 100000] }}
    >

        <WaveAnimation />
        <ambientLight intensity={.1} />
        <directionalLight />
    </Canvas>
  )
}

export default WaveCanvas;