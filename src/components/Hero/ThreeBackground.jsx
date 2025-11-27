import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as THREE from 'three'

function Particles() {
  const ref = useRef()
  const count = 80
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.02
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial size={6} sizeAttenuation color="#FF6B35" transparent opacity={0.8} />
    </Points>
  )
}

export default function ThreeBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 10, 5]} intensity={0.8} />
        <Particles />
        <Preload all />
      </Canvas>
    </div>
  )
}
