import React, { useRef } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

extend({ EffectComposer, Bloom })

function Scene() {
  const materialRef = useRef()

  useFrame(({ clock }) => {
    const material = materialRef.current
    if (material) {
      // Animate the material or any other updates
    }
  })

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial ref={materialRef} />
      </mesh>
      <EffectComposer>
        <Bloom
          intensity={1}
          luminanceThreshold={0.8}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  )
}

export default Scene

// import * as THREE from 'three'
// import { shaderMaterial } from '@react-three/drei'

// const loaderBackground = shaderMaterial({ uAlpha: 1.0 })

// export default function Overlay() {
//   return (
//     <>
//       <mesh position={[0, 0, 0]}>
//         <shaderMaterial
//           attach="material"
//           transparent="true"
//           vertexShader={`void main(){

//             gl_Position = vec4 (position, 1.0);
//             }`}
//           fragmentShader={`
//           uniform float uAlpha;
//           void main() {
//             gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
//           }`}
//           uniforms={{
//             uAlpha: { value: 0.0 },
//           }}
//         />
//         <planeGeometry attach="geometry" args={[2, 2]} />
//       </mesh>
//     </>
//   )
// }
