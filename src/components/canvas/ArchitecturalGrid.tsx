import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function GridLines() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (gridRef.current) {
      // Slow cinematic forward movement
      gridRef.current.position.z = (state.clock.elapsedTime * 0.5) % 10;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[100, 100, '#2D3748', '#1A202C']}
      position={[0, -2, -20]}
      rotation={[Math.PI / 2.1, 0, 0]}
    />
  );
}

export const ArchitecturalGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40 bg-base">
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <fog attach="fog" args={['#0B0E14', 2, 20]} />
        <ambientLight intensity={0.5} />
        <GridLines />
      </Canvas>
    </div>
  );
};
