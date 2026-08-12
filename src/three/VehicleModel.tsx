import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const VehicleModel: React.FC = () => {
  const minibusRef = useRef<THREE.Group>(null);
  const frontLeftWheel = useRef<THREE.Mesh>(null);
  const frontRightWheel = useRef<THREE.Mesh>(null);
  const rearLeftWheel = useRef<THREE.Mesh>(null);
  const rearRightWheel = useRef<THREE.Mesh>(null);

  // Subtle floating and wheel rotation animations
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (minibusRef.current) {
      // Float up and down slightly
      minibusRef.current.position.y = Math.sin(t * 2) * 0.05 + 0.2;
      // Tilt slightly during travel simulation
      minibusRef.current.rotation.z = Math.sin(t * 1.5) * 0.02;
      minibusRef.current.rotation.x = Math.cos(t * 2) * 0.01;
    }

    // Rotate wheels to simulate forward movement
    const wheelSpeed = 4;
    if (frontLeftWheel.current) frontLeftWheel.current.rotation.x += delta * wheelSpeed;
    if (frontRightWheel.current) frontRightWheel.current.rotation.x += delta * wheelSpeed;
    if (rearLeftWheel.current) rearLeftWheel.current.rotation.x += delta * wheelSpeed;
    if (rearRightWheel.current) rearRightWheel.current.rotation.x += delta * wheelSpeed;
  });

  return (
    <group ref={minibusRef} scale={[0.5, 0.5, 0.5]}>
      {/* Minibus Body (Mercedes-Benz Sprinter Executive style) */}
      
      {/* Lower chassis / base */}
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.4, 3.4]} />
        <meshStandardMaterial color="#051d14" roughness={0.2} metalness={0.8} /> {/* British Racing Green base */}
      </mesh>

      {/* Main Cabin Body */}
      <mesh position={[0, 0.85, 0]} castShadow>
        <boxGeometry args={[1.2, 0.9, 3.0]} />
        <meshStandardMaterial color="#092E20" roughness={0.1} metalness={0.9} /> {/* British Racing Green cabin */}
      </mesh>

      {/* Nose/Engine hood */}
      <mesh position={[0, 0.6, 1.6]} castShadow>
        <boxGeometry args={[1.15, 0.6, 0.6]} />
        <meshStandardMaterial color="#092E20" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Windshield */}
      <mesh position={[0, 1.0, 1.3]} rotation={[-0.4, 0, 0]} castShadow>
        <boxGeometry args={[1.1, 0.45, 0.1]} />
        <meshStandardMaterial color="#111" roughness={0.0} metalness={1.0} transparent opacity={0.85} />
      </mesh>

      {/* Windows Side (Left) */}
      <mesh position={[-0.61, 0.9, 0]} castShadow>
        <boxGeometry args={[0.02, 0.45, 2.6]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.0} metalness={1.0} transparent opacity={0.9} />
      </mesh>

      {/* Windows Side (Right) */}
      <mesh position={[0.61, 0.9, 0]} castShadow>
        <boxGeometry args={[0.02, 0.45, 2.6]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.0} metalness={1.0} transparent opacity={0.9} />
      </mesh>

      {/* Rear Window */}
      <mesh position={[0, 0.9, -1.51]} castShadow>
        <boxGeometry args={[1.0, 0.45, 0.02]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.0} metalness={1.0} transparent opacity={0.9} />
      </mesh>

      {/* Headlights (Glowing) */}
      <mesh position={[-0.45, 0.55, 1.91]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#fffae6" />
      </mesh>
      <mesh position={[0.45, 0.55, 1.91]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#fffae6" />
      </mesh>

      {/* Front Grill */}
      <mesh position={[0, 0.45, 1.91]} castShadow>
        <boxGeometry args={[0.7, 0.25, 0.02]} />
        <meshStandardMaterial color="#222" roughness={0.5} />
      </mesh>

      {/* Wheels */}
      {/* Front Left */}
      <mesh ref={frontLeftWheel} position={[-0.65, 0.15, 1.15]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.22, 16]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
      {/* Front Right */}
      <mesh ref={frontRightWheel} position={[0.65, 0.15, 1.15]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.22, 16]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
      {/* Rear Left */}
      <mesh ref={rearLeftWheel} position={[-0.65, 0.15, -1.0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.22, 16]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>
      {/* Rear Right */}
      <mesh ref={rearRightWheel} position={[0.65, 0.15, -1.0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.22, 16]} />
        <meshStandardMaterial color="#111" roughness={0.8} />
      </mesh>

      {/* Luxury Gold Side Accent Stripe */}
      <mesh position={[-0.605, 0.5, 0]}>
        <boxGeometry args={[0.01, 0.04, 3.2]} />
        <meshStandardMaterial color="#C5A880" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.605, 0.5, 0]}>
        <boxGeometry args={[0.01, 0.04, 3.2]} />
        <meshStandardMaterial color="#C5A880" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
};
