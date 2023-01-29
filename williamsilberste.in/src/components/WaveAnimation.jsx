import { useState, useRef } from 'react'

import {
    Canvas,
} from '@react-three/fiber'

import {
    Points,
    PointMaterial
} from '@react-three/drei'

function WaveAnimation() {

  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
    </Canvas>
  )
}

function Stars(props) {
    const ref = useRef()
    const [sphere, setSphere] = useState(() => { new Float32Array() })

    let arr = new Float32Array()

    for(let i = 0; i < 500; i++) {
        arr[i] = Math.floor(Math.random() * 5000);
    }

    setSphere(arr)

    console.log(arr)
    return (
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
        </Points>
    )
  }

export default WaveAnimation;