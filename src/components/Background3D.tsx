"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ── Interactive globe: wireframe + glowing vertex points.
   Rotates toward the cursor, breathes with a soft noise distortion. ── */
function Globe() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  const { geometry, original } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(5, 12);
    const pos = geo.attributes.position;
    const count = pos.count;
    const orig = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const white = new THREE.Color("#ffffff");
    const red = new THREE.Color("#FF1E1E");
    const dim = new THREE.Color("#5a5a5a");

    for (let i = 0; i < count; i++) {
      orig[i * 3] = pos.getX(i);
      orig[i * 3 + 1] = pos.getY(i);
      orig[i * 3 + 2] = pos.getZ(i);
      const roll = Math.random();
      const c = roll < 0.14 ? red : roll < 0.5 ? white : dim;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return { geometry: geo, original: orig };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Breathing distortion
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const ox = original[ix], oy = original[ix + 1], oz = original[ix + 2];
      const noise =
        Math.sin(ox * 1.2 + t * 0.7) *
        Math.cos(oy * 1.2 + t * 0.6) *
        Math.sin(oz * 1.2 + t * 0.5);
      const d = 1 + noise * 0.06;
      pos.setXYZ(i, ox * d, oy * d, oz * d);
    }
    pos.needsUpdate = true;

    // Rotate toward cursor + slow idle spin
    const targetY = mouse.x * 0.8 + t * 0.06;
    const targetX = -mouse.y * 0.6;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe shell */}
      <mesh geometry={geometry}>
        <meshBasicMaterial color="#7a1a1a" wireframe transparent opacity={0.18} />
      </mesh>
      {/* Glowing vertex points */}
      <points geometry={geometry}>
        <pointsMaterial size={0.055} vertexColors transparent opacity={0.95} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
}

/* Gentle mouse-parallax camera drift */
function CameraRig() {
  const { mouse } = useThree();
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 1.2, 0.03);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.y * 0.8, 0.03);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

/* Sparse background dust for depth */
function DustField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 1400;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 14 + Math.random() * 45;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi) - 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.28} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#040404]">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
        <color attach="background" args={["#040404"]} />
        <fog attach="fog" args={["#040404", 22, 60]} />
        <CameraRig />
        <DustField />
        <Globe />
      </Canvas>
    </div>
  );
}
