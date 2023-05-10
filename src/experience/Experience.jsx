import { OrbitControls } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier'
import { useControls } from 'leva'

import { Level } from './world/Level'
import Player from './world/Player'
import Lights from './Lights.jsx'
import useGame from '../stores/useGame'
import Effects from './utils/Effects'
import Stars from './world/Sparkles'
import Shapes from './world/Shapes'

export default function Experience() {
  //leva
  const controls = useControls({})

  const blocksCount = useGame((state) => state.blocksCount)
  const blocksSeed = useGame((state) => state.blocksSeed)

  return (
    <>
      <color args={['#000000']} attach="background" />

      <Physics>
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
      <Stars />
      <Effects />
    </>
  )
}
