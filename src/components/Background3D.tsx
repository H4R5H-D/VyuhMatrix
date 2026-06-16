"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function CameraRig() {
  const { mouse } = useThree();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      mouse.x * 1.5 + Math.sin(t * 0.08) * 0.8,
      0.04
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      mouse.y * 1.0 + Math.cos(t * 0.06) * 0.5,
      0.04
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

function NebulaField() {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 4000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const palette = [
      new THREE.Color("#FF1E1E"),
      new THREE.Color("#880000"),
      new THREE.Color("#CC4422"),
      new THREE.Color("#FFFFFF"),
      new THREE.Color("#444444"),
      new THREE.Color("#222222"),
    ];

    for (let i = 0; i < count; i++) {
      const r = 15 + Math.random() * 65;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi) - 5;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.018;
    ref.current.rotation.x = t * 0.009;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        <bufferAttribute args={[colors, 3]} attach="attributes-color" />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function HolographicRings() {
  const ringsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ringsRef.current) return;
    const t = state.clock.getElapsedTime();
    ringsRef.current.children.forEach((child, i) => {
      (child as THREE.Mesh).rotation.x = t * (0.12 + i * 0.04);
      (child as THREE.Mesh).rotation.z = t * (0.07 + i * 0.025);
    });
  });

  return (
    <group ref={ringsRef}>
      {[
        { r: 7,    tube: 0.025, color: "#FF1E1E", op: 0.35 },
        { r: 9,    tube: 0.018, color: "#FF4422", op: 0.20 },
        { r: 11.5, tube: 0.012, color: "#881100", op: 0.15 },
        { r: 14,   tube: 0.008, color: "#FF1E1E", op: 0.10 },
      ].map((ring, i) => (
        <mesh key={i} rotation={[Math.PI / (2.5 + i * 0.7), i * 0.6, i * 0.3]}>
          <torusGeometry args={[ring.r, ring.tube, 16, 120]} />
          <meshBasicMaterial color={ring.color} transparent opacity={ring.op} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

function WarpedGrid() {
  const gridRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!gridRef.current) return;
    const time = state.clock.getElapsedTime();
    const positions = gridRef.current.geometry.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z = Math.sin(x * 0.08 + time * 0.4) * Math.cos(y * 0.08 + time * 0.25) * 4;
      positions.setZ(i, z - 18);
    }
    positions.needsUpdate = true;
  });

  return (
    <mesh ref={gridRef} position={[0, 0, -18]}>
      <planeGeometry args={[180, 180, 70, 70]} />
      <meshBasicMaterial color="#3B0A0A" wireframe transparent opacity={0.12} depthWrite={false} />
    </mesh>
  );
}

function LightBeams() {
  const ref = useRef<THREE.Group>(null);
  const beams = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        x: (Math.random() - 0.5) * 30,
        z: -20 - Math.random() * 20,
        height: 40 + Math.random() * 30,
        baseOp: 0.02 + Math.random() * 0.04,
        speed: 0.2 + Math.random() * 0.3,
        phase: i,
      })),
    []
  );

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.children.forEach((child, i) => {
      const m = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
      m.opacity = beams[i].baseOp * (0.5 + 0.5 * Math.sin(t * beams[i].speed + beams[i].phase));
    });
  });

  return (
    <group ref={ref}>
      {beams.map((b, i) => (
        <mesh key={i} position={[b.x, 0, b.z]}>
          <planeGeometry args={[0.3 + (i % 3) * 0.2, b.height]} />
          <meshBasicMaterial
            color="#FF2200"
            transparent
            opacity={b.baseOp}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function PlexusSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  const { geometry, originalPositions } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(5, 14);
    const pos = geo.attributes.position;
    const count = pos.count;
    const orig = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorPalette = [
      new THREE.Color("#FF0044"),
      new THREE.Color("#880022"),
      new THREE.Color("#555555"),
      new THREE.Color("#AAAAAA"),
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

    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return { geometry: geo, originalPositions: orig };
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    const pos = geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3;
      const ox = originalPositions[ix];
      const oy = originalPositions[ix + 1];
      const oz = originalPositions[ix + 2];
      const noise =
        Math.sin(ox * 1.5 + time) *
        Math.cos(oy * 1.5 + time) *
        Math.sin(oz * 1.5 + time);
      const d = 1 + noise * 0.1;
      pos.setXYZ(i, ox * d, oy * d, oz * d);
    }
    pos.needsUpdate = true;

    const targetX = mouse.x * Math.PI * 4;
    const targetY = mouse.y * Math.PI * 2;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX + time * 0.05,
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      <mesh geometry={geometry}>
        <meshBasicMaterial color="#660022" wireframe transparent opacity={0.3} />
      </mesh>
      <points geometry={geometry}>
        <pointsMaterial size={0.08} vertexColors transparent opacity={0.9} />
      </points>
    </group>
  );
}

export function Background3D() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none bg-[#020202]"
      style={{ filter: "brightness(1.15) contrast(1.05)" }}
    >
      <Canvas
        camera={{ position: [0, 0, 16], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: false, alpha: false }}
      >
        <color attach="background" args={["#020202"]} />
        <fog attach="fog" args={["#020202", 40, 100]} />
        <CameraRig />
        <WarpedGrid />
        <NebulaField />
        <HolographicRings />
        <LightBeams />
        <PlexusSphere />
      </Canvas>
    </div>
  );
}
