import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { getUKRouteCurve } from './RouteLines';

interface VehicleModelProps {
  progressOverride?: number;
  isReducedMotion?: boolean;
}

export const VehicleModel: React.FC<VehicleModelProps> = ({
  progressOverride,
  isReducedMotion = false,
}) => {
  const vehicleGroupRef = useRef<THREE.Group>(null);
  const frontLeftWheel = useRef<THREE.Mesh>(null);
  const frontRightWheel = useRef<THREE.Mesh>(null);
  const rearLeftWheel = useRef<THREE.Mesh>(null);
  const rearRightWheel = useRef<THREE.Mesh>(null);

  const curve = useMemo(() => getUKRouteCurve(), []);
  const progressRef = useRef<number>(0);
  const directionRef = useRef<number>(1); // 1 = London -> Edinburgh, -1 = Edinburgh -> London

  useFrame((state, delta) => {
    if (!vehicleGroupRef.current) return;

    if (progressOverride !== undefined) {
      progressRef.current = THREE.MathUtils.lerp(progressRef.current, progressOverride, 0.08);
    } else if (!isReducedMotion) {
      // Smooth continuous ping-pong loop: London -> Edinburgh -> London
      const speed = 0.075; // ~13.3s travel time per direction
      progressRef.current += delta * speed * directionRef.current;

      if (progressRef.current >= 1.0) {
        progressRef.current = 1.0;
        directionRef.current = -1; // Smoothly reverse direction at Edinburgh
      } else if (progressRef.current <= 0.0) {
        progressRef.current = 0.0;
        directionRef.current = 1; // Smoothly forward direction at London
      }
    }

    const t = Math.max(0, Math.min(1, progressRef.current));
    const position = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).normalize();

    if (directionRef.current === -1) {
      tangent.negate();
    }

    // Elevate vehicle ground level slightly above red route (Y = 0.80 + 0.025)
    vehicleGroupRef.current.position.set(position.x, position.y + 0.025, position.z);

    // Rotate minibus to point in direction of travel
    const targetLookAt = vehicleGroupRef.current.position.clone().add(tangent);
    vehicleGroupRef.current.lookAt(targetLookAt);

    // Engine vibration / suspension sway
    if (!isReducedMotion) {
      const sway = Math.sin(state.clock.getElapsedTime() * 10) * 0.002;
      vehicleGroupRef.current.position.y += sway;
    }

    // Wheel rotation
    const wheelSpeed = (isReducedMotion ? 0 : 9) * directionRef.current;
    if (frontLeftWheel.current) frontLeftWheel.current.rotation.x += delta * wheelSpeed;
    if (frontRightWheel.current) frontRightWheel.current.rotation.x += delta * wheelSpeed;
    if (rearLeftWheel.current) rearLeftWheel.current.rotation.x += delta * wheelSpeed;
    if (rearRightWheel.current) rearRightWheel.current.rotation.x += delta * wheelSpeed;
  });

  return (
    <group ref={vehicleGroupRef} scale={[0.14, 0.14, 0.14]}>
      {/* Dark Drop Shadow under vehicle */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[1.3, 3.2]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.45} />
      </mesh>

      {/* 1. Undercarriage Chassis & Bumpers */}
      <mesh position={[0, 0.18, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.15, 0.18, 3.0]} />
        <meshStandardMaterial color="#0F172A" roughness={0.6} metalness={0.0} />
      </mesh>

      {/* 2. Main Minibus Passenger Cabin (Executive Navy Blue #1E3A8A) */}
      <mesh position={[0, 0.65, -0.1]} castShadow>
        <boxGeometry args={[1.12, 0.72, 2.6]} />
        <meshStandardMaterial color="#1E3A8A" roughness={0.2} metalness={0.0} />
      </mesh>

      {/* 3. High-Roof Executive White Cap (Crisp white top for camera contrast) */}
      <mesh position={[0, 1.03, -0.1]} castShadow>
        <boxGeometry args={[1.10, 0.08, 2.55]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.1} metalness={0.0} />
      </mesh>

      {/* 4. Aerodynamic Front Hood / Engine Bay */}
      <mesh position={[0, 0.50, 1.38]} castShadow>
        <boxGeometry args={[1.08, 0.46, 0.45]} />
        <meshStandardMaterial color="#1E3A8A" roughness={0.2} metalness={0.0} />
      </mesh>

      {/* 5. Front Chrome & Black Bumper Grille */}
      <mesh position={[0, 0.45, 1.61]}>
        <boxGeometry args={[0.85, 0.28, 0.04]} />
        <meshStandardMaterial color="#CBD5E1" roughness={0.2} metalness={0.0} />
      </mesh>
      <mesh position={[0, 0.45, 1.625]}>
        <boxGeometry args={[0.75, 0.18, 0.02]} />
        <meshStandardMaterial color="#0F172A" roughness={0.5} metalness={0.0} />
      </mesh>

      {/* 6. Windows & Privacy Glass */}
      {/* Front Windshield (Slanted) */}
      <mesh position={[0, 0.85, 1.15]} rotation={[-0.35, 0, 0]}>
        <boxGeometry args={[1.02, 0.42, 0.05]} />
        <meshStandardMaterial color="#020617" roughness={0.0} metalness={0.0} transparent opacity={0.92} />
      </mesh>

      {/* Left Panoramic Passenger Windows */}
      <mesh position={[-0.57, 0.78, -0.05]}>
        <boxGeometry args={[0.03, 0.36, 2.1]} />
        <meshStandardMaterial color="#020617" roughness={0.0} metalness={0.0} transparent opacity={0.92} />
      </mesh>

      {/* Right Panoramic Passenger Windows */}
      <mesh position={[0.57, 0.78, -0.05]}>
        <boxGeometry args={[0.03, 0.36, 2.1]} />
        <meshStandardMaterial color="#020617" roughness={0.0} metalness={0.0} transparent opacity={0.92} />
      </mesh>

      {/* Rear Window */}
      <mesh position={[0, 0.78, -1.41]}>
        <boxGeometry args={[0.98, 0.36, 0.03]} />
        <meshStandardMaterial color="#020617" roughness={0.0} metalness={0.0} transparent opacity={0.92} />
      </mesh>

      {/* 7. Side Mirrors */}
      <mesh position={[-0.64, 0.75, 1.15]}>
        <boxGeometry args={[0.10, 0.16, 0.06]} />
        <meshStandardMaterial color="#0F172A" roughness={0.5} metalness={0.0} />
      </mesh>
      <mesh position={[0.64, 0.75, 1.15]}>
        <boxGeometry args={[0.10, 0.16, 0.06]} />
        <meshStandardMaterial color="#0F172A" roughness={0.5} metalness={0.0} />
      </mesh>

      {/* 8. Vision Tourism RED & BLUE Side Swoosh Stripes */}
      {/* Red Stripe */}
      <mesh position={[-0.575, 0.48, -0.05]}>
        <boxGeometry args={[0.015, 0.08, 2.0]} />
        <meshStandardMaterial color="#DC2626" roughness={0.2} metalness={0.0} />
      </mesh>
      <mesh position={[0.575, 0.48, -0.05]}>
        <boxGeometry args={[0.015, 0.08, 2.0]} />
        <meshStandardMaterial color="#DC2626" roughness={0.2} metalness={0.0} />
      </mesh>
      {/* Blue Accent Stripe */}
      <mesh position={[-0.575, 0.40, -0.05]}>
        <boxGeometry args={[0.015, 0.04, 1.8]} />
        <meshStandardMaterial color="#2563EB" roughness={0.2} metalness={0.0} />
      </mesh>
      <mesh position={[0.575, 0.40, -0.05]}>
        <boxGeometry args={[0.015, 0.04, 1.8]} />
        <meshStandardMaterial color="#2563EB" roughness={0.2} metalness={0.0} />
      </mesh>

      {/* 9. Headlights & Beams */}
      <mesh position={[-0.42, 0.48, 1.61]}>
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshBasicMaterial color="#FEF08A" />
      </mesh>
      <mesh position={[0.42, 0.48, 1.61]}>
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshBasicMaterial color="#FEF08A" />
      </mesh>

      {/* Forward Headlight Cones */}
      <mesh position={[-0.42, 0.44, 2.0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.22, 0.7, 16]} />
        <meshBasicMaterial color="#FEF08A" transparent opacity={0.3} />
      </mesh>
      <mesh position={[0.42, 0.44, 2.0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.22, 0.7, 16]} />
        <meshBasicMaterial color="#FEF08A" transparent opacity={0.3} />
      </mesh>

      {/* 10. Red Taillights */}
      <mesh position={[-0.42, 0.55, -1.42]}>
        <boxGeometry args={[0.14, 0.20, 0.03]} />
        <meshBasicMaterial color="#EF4444" />
      </mesh>
      <mesh position={[0.42, 0.55, -1.42]}>
        <boxGeometry args={[0.14, 0.20, 0.03]} />
        <meshBasicMaterial color="#EF4444" />
      </mesh>

      {/* 11. Four Wheels (Black Rubber + Silver Rims) */}
      <mesh ref={frontLeftWheel} position={[-0.58, 0.16, 0.95]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.24, 0.24, 0.18, 16]} />
        <meshStandardMaterial color="#0F172A" roughness={0.8} metalness={0.0} />
      </mesh>
      {/* Front Left Hubcap */}
      <mesh position={[-0.67, 0.16, 0.95]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 0.02, 16]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.2} metalness={0.0} />
      </mesh>

      <mesh ref={frontRightWheel} position={[0.58, 0.16, 0.95]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.24, 0.24, 0.18, 16]} />
        <meshStandardMaterial color="#0F172A" roughness={0.8} metalness={0.0} />
      </mesh>
      {/* Front Right Hubcap */}
      <mesh position={[0.67, 0.16, 0.95]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 0.02, 16]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.2} metalness={0.0} />
      </mesh>

      <mesh ref={rearLeftWheel} position={[-0.58, 0.16, -0.85]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.24, 0.24, 0.18, 16]} />
        <meshStandardMaterial color="#0F172A" roughness={0.8} metalness={0.0} />
      </mesh>
      {/* Rear Left Hubcap */}
      <mesh position={[-0.67, 0.16, -0.85]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 0.02, 16]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.2} metalness={0.0} />
      </mesh>

      <mesh ref={rearRightWheel} position={[0.58, 0.16, -0.85]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.24, 0.24, 0.18, 16]} />
        <meshStandardMaterial color="#0F172A" roughness={0.8} metalness={0.0} />
      </mesh>
      {/* Rear Right Hubcap */}
      <mesh position={[0.67, 0.16, -0.85]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 0.02, 16]} />
        <meshStandardMaterial color="#E2E8F0" roughness={0.2} metalness={0.0} />
      </mesh>
    </group>
  );
};
