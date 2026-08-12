import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';
import { destinations } from '../data/destinations';

export const RouteLines: React.FC = () => {
  const lineMaterialRef = useRef<any>(null);

  // Extract coords of major points in sequence for the England to Scotland Route
  // London -> Cotswolds -> Lake District -> Edinburgh -> Highlands
  const routePointsSequence = ['london', 'cotswolds', 'lake-district', 'edinburgh', 'highlands'];
  const points = routePointsSequence
    .map((id) => {
      const dest = destinations.find((d) => d.id === id);
      return dest ? new THREE.Vector3(dest.coordinates.x, dest.coordinates.y, dest.coordinates.z + 0.05) : null;
    })
    .filter((v): v is THREE.Vector3 => v !== null);

  // Generate a smooth curve through the points
  const curve = new THREE.CatmullRomCurve3(points);
  const curvePoints = curve.getPoints(50).map((v) => [v.x, v.y, v.z] as [number, number, number]);

  useFrame((state) => {
    if (lineMaterialRef.current) {
      // Animate dash offset to create the flow effect
      lineMaterialRef.current.dashOffset = -state.clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <group>
      {/* Base glow line */}
      <Line
        points={curvePoints}
        color="#C5A880"
        lineWidth={2}
        opacity={0.3}
        transparent
      />

      {/* Animated dash line on top */}
      <Line
        points={curvePoints}
        color="#C5A880"
        lineWidth={3.5}
        dashed
        dashScale={20}
        dashSize={0.5}
        gapSize={0.5}
        transparent
      >
        <lineDashedMaterial
          ref={lineMaterialRef}
          transparent
          opacity={0.95}
          depthWrite={false}
        />
      </Line>
    </group>
  );
};
