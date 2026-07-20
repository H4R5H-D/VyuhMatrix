"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* Gentle mouse-parallax camera — barely-there drift */
function CameraRig() {
  const { mouse } = useThree();
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 0.6, 0.03);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.y * 0.4, 0.03);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

/* Sparse, slow-drifting dust field — the only element. Premium restraint. */
function DustField() {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 1800;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const white = new THREE.Color("#ffffff");
    const red = new THREE.Color("#FF1E1E");

    for (let i = 0; i < count; i++) {
      const r = 12 + Math.random() * 55;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi) - 8;
      const c = Math.random() < 0.08 ? red : white;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.012;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        <bufferAttribute args={[colors, 3]} attach="attributes-color" />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#040404]">
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
        <color attach="background" args={["#040404"]} />
        <fog attach="fog" args={["#040404", 30, 70]} />
        <CameraRig />
        <DustField />
      </Canvas>
    </div>
  );
}
