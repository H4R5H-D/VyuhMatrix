"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// 1. Organic Warped Space Grid
function WarpedGrid() {
  const gridRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!gridRef.current) return;
    const time = state.clock.getElapsedTime();
    const positions = gridRef.current.geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        // Distort Z axis to create flowing space waves
        const z = Math.sin(x * 0.1 + time * 0.5) * Math.cos(y * 0.1 + time * 0.3) * 3;
        positions.setZ(i, z - 15);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={gridRef} position={[0, 0, -15]}>
      <planeGeometry args={[150, 150, 60, 60]} />
      <meshBasicMaterial color="#331111" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

// 2. The Artmeier Plexus Neural Sphere
function PlexusSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();
  
  // We use Icosahedron to get a perfect web/network of vertices
  const { geometry, colors, originalPositions } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(5, 14); // Very dense
    const pos = geo.attributes.position;
    const count = pos.count;
    
    // Store original positions for organic distortion
    const orig = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    const colorPalette = [
      new THREE.Color('#FF0044'), // Crimson
      new THREE.Color('#880022'), // Dark Red
      new THREE.Color('#555555'), // Grey
      new THREE.Color('#AAAAAA'), // Light Grey
    ];

    for (let i = 0; i < count; i++) {
      orig[i * 3] = pos.getX(i);
      orig[i * 3 + 1] = pos.getY(i);
      orig[i * 3 + 2] = pos.getZ(i);
      
      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    
    return { geometry: geo, colors: col, originalPositions: orig };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // 1. Organic Breathing Distortion on the geometry vertices
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const ox = originalPositions[ix];
      const oy = originalPositions[ix + 1];
      const oz = originalPositions[ix + 2];
      
      // Calculate a complex 3D noise/wave variation based on the original vertex
      const noise = Math.sin(ox * 1.5 + time) * Math.cos(oy * 1.5 + time) * Math.sin(oz * 1.5 + time);
      // Displace slightly along its normal vector (since it's a sphere centered at 0, its pos is roughly the normal)
      const displaceFactor = 1 + (noise * 0.08); // 8% variance
      
      pos.setXYZ(i, ox * displaceFactor, oy * displaceFactor, oz * displaceFactor);
    }
    pos.needsUpdate = true;

    // 2. Parallax and rotation (Extremely Reactive to mouse)
    // Multiply by 4*PI to allow the sphere to spin significantly based on cursor pos
    const targetX = mouse.x * Math.PI * 4; 
    const targetY = (mouse.y * Math.PI * 2); 
    
    // Smooth aggressive group rotation
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX + (time * 0.05), 0.05);
  });

  return (
    <group ref={groupRef}>
      {/* The Connecting Lines (Plexus Edges) */}
      <mesh geometry={geometry}>
        <meshBasicMaterial color="#660022" wireframe transparent opacity={0.25} />
      </mesh>
      
      {/* The Neural Nodes */}
      <points geometry={geometry}>
        <pointsMaterial size={0.08} vertexColors transparent opacity={0.9} />
      </points>
    </group>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
      <Canvas camera={{ position: [0, 0, 16], fov: 45 }} dpr={[1, 2]} gl={{ antialias: false }}>
        <color attach="background" args={["#020202"]} />
        <WarpedGrid />
        <PlexusSphere />
      </Canvas>
    </div>
  );
}
