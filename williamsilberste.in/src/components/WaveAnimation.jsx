import React, { useMemo, useRef } from 'react';

import {
    Canvas,
    useFrame
} from '@react-three/fiber'

import {BufferAttribute } from 'three'

// const particleSize     = 5
// const max_change_speed = 10
// const change_delay     = 10000
// const amplitude        = 100
// let   current_shape    = 0
// let   change_speed     = 0

const distance         = 10
const rows             = 50
const cols             = 50

function WaveAnimation({rows = 50, cols = 50}) {

  const vertice_positions = useMemo(() => {

    let vertices = []
    let scales   = []

    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
          vertices.push(i * distance - ( ( rows * distance ) / 2 )); // x
          vertices.push(0); // y
          vertices.push(j * distance - ( ( cols * distance ) / 2 )); // z
          scales.push(1)
      }
    }
    return new BufferAttribute(new Float32Array(vertices), 3)
  }, [rows, cols])

  // useFrame(({clock}) => {
  //     console.log(clock.getElapsedTime())
  // })

  return (
    <>
      <Canvas style={{height: '100vh', position: 'absolute', zIndex: -1}}>
        <AnimatedWave vertice_positions={vertice_positions} />
      </Canvas>
      {/* <OrbitControls /> */}
    </>

  )
}

function AnimatedWave({vertice_positions}) {

  const ref = useRef()

  useFrame(({ clock }) => {

    const wave_positions = ref.current.attributes.position.array

    let i = 0;
    let time = clock.getElapsedTime()

    for (let ix = 0; ix < rows; ++ix) {
      for(let jx = 0; jx < cols; ++jx) {
            
        wave_positions[i + 1 ] = Math.sin((time + ix) * .5) * 10 + Math.sin((time + jx) * .5) * 10

        i += 3
      }
    }

    ref.current.attributes.position = new BufferAttribute(new Float32Array(wave_positions), 3)
    
  })

  return (
    <>
    <ambientLight intensity={0.1} />
      <directionalLight color={'red'} intensity={0.1}/>
        <points>
          <bufferGeometry ref={ref}>
            <bufferAttribute attach={'attributes-position'} {...vertice_positions}/>
          <pointsMaterial 
            size={0.1}
            threshold={0.1}
            color={0xff00ff}
            sizeAttenuation={true}

          />
          </bufferGeometry>
        </points>
        </>
  )

}

export default WaveAnimation;