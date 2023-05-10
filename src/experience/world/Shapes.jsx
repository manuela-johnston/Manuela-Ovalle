import { useMemo, useEffect, useState, useRef } from 'react'
import { InstancedRigidBodies } from '@react-three/rapier'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Shapes() {
  const planetsModel = useGLTF('./planets.glb')

  const random = Math.random() * -10 - 10

  const textureLoader = new THREE.TextureLoader()

  const matcapTexture = textureLoader.load(
    '/7877EE_D87FC5_75D9C7_1C78C0-512px.png'
  )

  const matcapMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })

  return (
    <>
      <primitive
        position={[0, 0, -5]}
        object={planetsModel.scene}
        scale={0.55}
      ></primitive>

      <mesh position={[6, 2, random]} material={matcapMaterial}>
        <sphereGeometry />
      </mesh>
    </>
  )
}
