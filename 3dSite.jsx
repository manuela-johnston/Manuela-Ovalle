import { Canvas } from '@react-three/fiber'
import { KeyboardControls, OrbitControls } from '@react-three/drei'
import { Fog } from 'three'
import Experience from './src/experience/Experience.jsx'
import Interface from './src/experience/utils/interface.jsx'
import Overlay from './src/experience/utils/Overlay.jsx'

export default function Space() {
  return (
    <>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
          { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
          { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
          { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
          { name: 'jump', keys: ['Space'] },
        ]}
      >
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [2.5, 4, 6],
          }}
        >
          {/* <Overlay /> */}
          <Experience />
          <fog attach="fog" args={['#0700b2', 1, 100]} />
        </Canvas>
        <Interface />
      </KeyboardControls>
    </>
  )
}
