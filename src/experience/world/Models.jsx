import { useControls } from 'leva'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { MeshNormalMaterial } from 'three'
import { Center, Float, Text, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Models() {
  // Buildings
  const entryArch = useLoader(GLTFLoader, './3dModels/entryArch.glb')
  const { nodes } = useGLTF('./3dModels/entryArch.glb')

  const workBuildings = useLoader(GLTFLoader, './3dModels/worksBuilding.glb')
  const aboutBuildings = useLoader(GLTFLoader, './3dModels/aboutBuilding.glb')
  const startArch = useLoader(GLTFLoader, './3dModels/startArch.glb')
  const contactBuilding = useLoader(
    GLTFLoader,
    './3dModels/contactBuilding.glb'
  )

  //Signs
  const aboutSign = useLoader(GLTFLoader, './3dModels/aboutSign.glb')
  const workSign = useLoader(GLTFLoader, './3dModels/worksSign.glb')
  const contactSign = useLoader(GLTFLoader, './3dModels/contactSign.glb')

  const { position } = useControls({
    position: {
      value: { x: 10, y: 0, z: 0 },
      min: -40,
      max: 6,
      step: 0.01,
    },
  })

  const NormalMaterial = new THREE.MeshNormalMaterial()

  return (
    <>
      <Center>
        <mesh
          geometry={entryArch.scene.BLueNeonArc}
          position={entryArch.scene.BLueNeonArc}
        >
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      </Center>
      <primitive
        object={entryArch.scene}
        position={[0, 0.5, 30]}
        scale={0.15}
      ></primitive>

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* ABOUT */}
      <Float floatIntensity={0.05} rotationIntensity={0.02}>
        <Text
          font="./bebas-neue-v9-latin-regular.woff"
          scale={0.3}
          maxWidth={1}
          lineHeight={0.75}
          textAlign="left"
          position={[1.2, 2.2, 24]}
        >
          About
          <meshBasicMaterial toneMapped={false} transparent="false" />
        </Text>
      </Float>

      <primitive
        object={aboutSign.scene}
        position={[1, 0.5, 27]}
        scale={0.09}
      ></primitive>

      {/* PROJECTS */}
      <Text
        font="./bebas-neue-v9-latin-regular.woff"
        scale={0.3}
        maxWidth={1}
        lineHeight={0.75}
        textAlign="left"
        position={[-1.5, 2.2, 18]}
      >
        Projects
        <meshBasicMaterial toneMapped={false} transparent="false" />
      </Text>
      <primitive
        object={workSign.scene}
        position={[-1.5, 0.5, 18]}
        scale={0.09}
      ></primitive>

      {/* Contact */}
      <Text
        font="./bebas-neue-v9-latin-regular.woff"
        scale={0.3}
        maxWidth={1}
        lineHeight={0.75}
        textAlign="left"
        position={[1.5, 2.8, 12]}
      >
        Contact
        <meshBasicMaterial toneMapped={false} transparent="false" />
      </Text>
      <primitive
        object={contactSign.scene}
        position={[1.5, 0.5, 15]}
        scale={0.09}
      ></primitive>

      <primitive
        object={startArch.scene}
        position={[-0.5, -2, 3]}
        scale={0.4}
      ></primitive>

      <primitive
        object={workBuildings.scene}
        position={[-4, -2, -30]}
        scale={0.25}
      ></primitive>

      <primitive
        object={aboutBuildings.scene}
        position={[5, -1, -22]}
        scale={0.25}
      ></primitive>

      <primitive
        object={contactBuilding.scene}
        position={[-5, -2, 0]}
        scale={0.25}
      ></primitive>
    </>
  )
}
