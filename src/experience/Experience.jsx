//LIBRARIES
import { OrbitControls } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier'
import { useControls } from 'leva'
import * as THREE from 'three'

// SITE COMPONENTS
import { Level } from './world/Level'
import Player from './world/Player'
import Lights from './Lights.jsx'
import useGame from '../stores/useGame'
import Effects from './utils/Effects'
import Stars from './world/Sparkles'
import Shapes from './world/Shapes'
import Overlay from './utils/Overlay'
import Models from './world/Models'

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount)
  const blocksSeed = useGame((state) => state.blocksSeed)

  return (
    <>
      <color args={['#000']} attach="background" />

      <Physics>
        <Lights />
        <Models />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
      <Stars />
      <Effects />
    </>
  )
}
