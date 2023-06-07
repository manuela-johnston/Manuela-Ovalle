import { RigidBody, useRapier } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'

import useGame from '../../stores/useGame'

export default function Player() {
  const body = useRef()
  const [subscribedKeys, getKeys] = useKeyboardControls()
  const { rapier, world } = useRapier()
  const rapierWorld = world.raw()

  const [smoothedCameraPosition] = useState(() => new THREE.Vector3(10, 10, 10))
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3())

  const ready = useGame((state) => state.phase.ready)
  const explore = useGame((state) => state.explore)
  const start = useGame((state) => state.start)
  const end = useGame((state) => state.end)
  const restart = useGame((state) => state.restart)
  const blocksCount = useGame((state) => state.blocksCount)

  const jump = () => {
    const origin = body.current.translation()
    origin.y -= 0.31

    const direction = { x: 0, y: -1, z: 0 }
    const ray = new rapier.Ray(origin, direction)
    const hit = rapierWorld.castRay(ray, 10, true)

    if (hit.toi < 0.15) {
      body.current.applyImpulse({ x: 0, y: 0.5, z: 0 })
    }
  }

  const reset = () => {
    body.current.setTranslation({ x: 0, y: 1, z: 0 })
    body.current.setLinvel({ x: 0, y: 1, z: 0 })
    body.current.setAngvel({ x: 0, y: 1, z: 0 })
  }

  //Each frame
  useEffect(() => {
    //Setting state to Reset from ready
    const unsubscribeReset = useGame.subscribe(
      (state) => state.phase,
      (phase) => {
        if (phase === 'ready') reset()
      }
    )

    const unsubscribedJump = subscribedKeys(
      (state) => state.jump,
      (value) => {
        if (value) jump()
      }
    )

    //PRESSING ANY BUTTON
    const unsubscribedAny = subscribedKeys(() => {
      null
    })

    return () => {
      unsubscribedJump()
      unsubscribedAny()
      unsubscribeReset()
    }
  }, [])

  useFrame((state, delta) => {
    /**
     * Controls
     */
    const { forward, backward, leftward, rightward } = getKeys()
    const impulse = { x: 0, y: 0, z: 0 }
    const torque = { x: 0, y: 0, z: 0 }

    const impulseStrength = 0.6 * delta
    const torqueStrength = 0.2 * delta

    if (forward) {
      impulse.z -= impulseStrength
      torque.x -= torqueStrength
    }

    if (rightward) {
      impulse.x += impulseStrength
      torque.z -= torqueStrength
    }

    if (backward) {
      impulse.z += impulseStrength
      torque.x += torqueStrength
    }

    if (leftward) {
      impulse.x -= impulseStrength
      torque.z += torqueStrength
    }

    body.current.applyImpulse(impulse)
    body.current.applyTorqueImpulse(torque)

    /**
     * Camera
     */

    const bodyPosition = body.current.translation()

    const cameraPosition = new THREE.Vector3()
    cameraPosition.copy(bodyPosition)
    cameraPosition.z += 4.25
    cameraPosition.y += 0.65

    const cameraTarget = new THREE.Vector3()
    cameraTarget.copy(bodyPosition)
    cameraTarget.y += 0.25

    //Update smooth camera position
    smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

    state.camera.position.copy(smoothedCameraPosition)
    state.camera.lookAt(smoothedCameraTarget)

    /**
     * Phases
     */
    if (bodyPosition.z > 1) explore()
    if (bodyPosition.z < -2) start()
    if (bodyPosition.z < -(blocksCount * 4 + 2)) end()
    if (bodyPosition.y < -4) restart()
  })

  return (
    <>
      <RigidBody
        ref={body}
        colliders="ball"
        restitution={0.2}
        friction={1}
        linearDamping={0.5}
        angularDamping={0.5}
        position={[0, 1, 12]}
      >
        <mesh castShadow>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial flatShading color="mediumpurple" />
        </mesh>
      </RigidBody>
    </>
  )
}
