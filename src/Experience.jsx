import { OrbitControls } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier'
import { Level } from './Level'
import Player from './Player'
import Lights from './Lights.jsx'
import useGame from './stores/useGame'
import Effects from './Effects'

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount)
  const blocksSeed = useGame((state) => state.blocksSeed)

  return (
    <>
      <color args={['#252731']} attach="background" />
      <Physics>
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>

      <Effects />
    </>
  )
}
