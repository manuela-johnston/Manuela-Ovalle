import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'

const loaderBackground = shaderMaterial({ uAlpha: 1.0 })

export default function Overlay() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <shaderMaterial
          attach="material"
          transparent="true"
          vertexShader={`void main(){

            gl_Position = vec4 (position, 1.0);
            }`}
          fragmentShader={`
          uniform float uAlpha;
          void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
          }`}
          uniforms={{
            uAlpha: { value: 0.0 },
          }}
        />
        <planeGeometry attach="geometry" args={[2, 2]} />
      </mesh>
    </>
  )
}
