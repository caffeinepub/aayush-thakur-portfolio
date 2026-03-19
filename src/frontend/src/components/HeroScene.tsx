import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function FloatingObject() {
  const meshRef = useRef<Mesh>(null);
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
    if (meshRef.current) {
      meshRef.current.rotation.x = time.current * 0.3;
      meshRef.current.rotation.y = time.current * 0.4;
      meshRef.current.position.y = Math.sin(time.current * 0.8) * 0.2;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          wireframe={false}
        />
      </Sphere>

      {/* Outer wireframe ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.0, 0.015, 8, 80]} />
        <meshBasicMaterial color="#1fe6ff" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.8, 0.01, 8, 80]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
      </mesh>
      <mesh rotation={[Math.PI / 6, Math.PI / 2, 0]}>
        <torusGeometry args={[2.2, 0.008, 8, 60]} />
        <meshBasicMaterial color="#1fe6ff" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#1fe6ff" />
      <pointLight position={[-5, -5, -5]} intensity={1.5} color="#a855f7" />
      <pointLight position={[0, 0, 3]} intensity={1} color="#3b82f6" />
      <FloatingObject />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}
