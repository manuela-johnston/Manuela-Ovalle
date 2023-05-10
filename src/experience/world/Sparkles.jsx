import { Sparkles, Center } from '@react-three/drei'

export default function Stars() {
  return (
    <Center>
      <Sparkles
        position={[1, 3, 1]}
        size={2}
        scale={[5, 10, 80]}
        speed={0.1}
        count={150}
      />
    </Center>
  )
}
