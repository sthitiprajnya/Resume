"use client";
import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import * as THREE from 'three';

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particleCount = isMobile ? 500 : 1800;
  const radius = 180;
  const radiusSq = useMemo(() => radius * radius, [radius]);

  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Random position within a sphere
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = radius * Math.cbrt(Math.random());

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Random velocity
      velocities[i * 3] = (Math.random() - 0.5) * 0.2;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
    }

    return [positions, velocities];
  }, [particleCount, radius]);

  useFrame(() => {
    if (!pointsRef.current) return;

    const positionsAttr = pointsRef.current.geometry.attributes.position;
    const posArray = positionsAttr.array as Float32Array;

    // Map mouse from normalized device coordinates to world space roughly
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;

      // Add velocity
      posArray[idx] += velocities[idx];
      posArray[idx + 1] += velocities[idx + 1];
      posArray[idx + 2] += velocities[idx + 2];

      const px = posArray[idx];
      const py = posArray[idx + 1];
      const pz = posArray[idx + 2];

      // Boundary check - wrap around sphere
      // BOLT: Using squared distance to avoid expensive Math.sqrt calls in hot loop
      const distToCenterSq = px * px + py * py + pz * pz;
      if (distToCenterSq > radiusSq) {
        posArray[idx] = -px * 0.99;
        posArray[idx + 1] = -py * 0.99;
        posArray[idx + 2] = -pz * 0.99;
      }

      // Mouse repulsion
      if (!isMobile) {
        const dx = px - mouseX;
        const dy = py - mouseY;
        // Ignore z for repulsion since mouse is 2D
        const distToMouseSq = dx * dx + dy * dy;

        // Repel threshold (90 units squared = 8100)
        if (distToMouseSq < 8100) {
          // BOLT: Only compute sqrt when within threshold to save ~1800 calls per frame
          const dist = Math.sqrt(distToMouseSq);
          // Force inversely proportional to distance
          const force = Math.min(0.8, 50 / (distToMouseSq + 1));

          posArray[idx] += (dx / dist) * force;
          posArray[idx + 1] += (dy / dist) * force;
        }
      }
    }

    positionsAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={1.4}
        color="#00F5FF"
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleField() {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--color-border-glow)_0%,_transparent_70%)] opacity-30 animate-pulse pointer-events-none" />
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none fade-in" style={{ animation: 'fadeIn 1.2s ease-in-out forwards' }}>
      <Canvas camera={{ position: [0, 0, 150], fov: 75 }}>
        <Particles />
      </Canvas>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .fade-in { opacity: 0; }
      `}</style>
    </div>
  );
}