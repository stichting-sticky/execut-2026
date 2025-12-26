"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

function RotatingCube({
  imagePath,
  size = 4,
  position = [0, 0, 0] as [number, number, number],
  rotationSpeed = 0.5,
  rotationOffset = 0
}: {
  imagePath: string;
  size?: number;
  position?: [number, number, number];
  rotationSpeed?: number;
  rotationOffset?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Load texture
  const texture = useLoader(TextureLoader, imagePath);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Slow clockwise rotation
      meshRef.current.rotation.y += delta * rotationSpeed;
      meshRef.current.rotation.x = Math.PI * 0.1 + rotationOffset; // Slight tilt for perspective
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export function LogoCube() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "500px", position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 80 }}
        gl={{ alpha: true }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "transparent" }}
      >
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <directionalLight position={[0, 5, 5]} intensity={1.5} />
        {/* Main cube */}
        <RotatingCube
          imagePath="/logo_small.png"
          size={7}
          position={[-4, 0, 0]}
          rotationSpeed={0.3}
          rotationOffset={0.3}
        />
        {/* Smaller cubes */}
        <RotatingCube
          imagePath="/logo_small.png"
          size={3}
          position={[1, -2, 4]}
          rotationSpeed={0.2}
          rotationOffset={0.3}
        />
        <RotatingCube
          imagePath="/logo_small.png"
          size={2.5}
          position={[4, 2, 4]}
          rotationSpeed={0.4}
          rotationOffset={-0.1}
        />
        <RotatingCube
          imagePath="/logo_small.png"
          size={2.5}
          position={[12, 0, -1]}
          rotationSpeed={0.6}
          rotationOffset={0.5}
        />
      </Canvas>
    </div>
  );
}
