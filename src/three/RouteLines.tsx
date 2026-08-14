import React, { useState, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

// Geographically accurate coordinates corresponding to DestinationMarkers.tsx, slightly raised to Y=0.80
const ROUTE_POINTS = [
  new THREE.Vector3(0.50, 0.80, 0.92),     // London
  new THREE.Vector3(0.15, 0.80, 0.80),     // Oxford
  new THREE.Vector3(-0.25, 0.80, -0.28),   // Manchester
  new THREE.Vector3(-0.42, 0.80, -0.70),   // Lake District
  new THREE.Vector3(-0.65, 0.80, -1.35),   // Glasgow
  new THREE.Vector3(-0.32, 0.80, -1.48),   // Edinburgh
];

export const getUKRouteCurve = (): THREE.CatmullRomCurve3 => {
  return new THREE.CatmullRomCurve3(ROUTE_POINTS, false, 'catmullrom', 0.15);
};

export const RouteLines: React.FC = () => {
  const curve = useMemo(() => getUKRouteCurve(), []);
  
  // High resolution points for a smooth 3D spline
  const fullCurvePoints = useMemo(() => {
    return curve.getPoints(120).map((v) => [v.x, v.y, v.z] as [number, number, number]);
  }, [curve]);

  const [visiblePoints, setVisiblePoints] = useState<[number, number, number][]>([]);
  const progressRef = useRef(0);
  const pauseTimerRef = useRef(0);

  useFrame((_, delta) => {
    if (pauseTimerRef.current > 0) {
      pauseTimerRef.current -= delta;
      if (pauseTimerRef.current <= 0) {
        progressRef.current = 0;
        setVisiblePoints([]);
      }
      return;
    }

    // Draw route over 3 seconds
    progressRef.current += delta * 0.33;
    if (progressRef.current >= 1.0) {
      progressRef.current = 1.0;
      pauseTimerRef.current = 2.0; // Pause for 2 seconds at Edinburgh before loop restarts
    }

    const count = Math.max(2, Math.ceil(fullCurvePoints.length * progressRef.current));
    setVisiblePoints(fullCurvePoints.slice(0, count));
  });

  return (
    <group>
      {/* 1. Subtle background route guide (always visible) */}
      <Line
        points={fullCurvePoints}
        color="#1E3A8A"
        lineWidth={1.5}
        opacity={0.15}
        transparent
      />

      {/* 2. White outline/glow backing for high contrast against the blue map */}
      {visiblePoints.length > 1 && (
        <Line
          points={visiblePoints}
          color="#FFFFFF"
          lineWidth={8.0}
          opacity={0.75}
          transparent
          position={[0, -0.005, 0]} // Slightly offset down to sit under the red line
        />
      )}

      {/* 3. Main Vision Tourism RED route path */}
      {visiblePoints.length > 1 && (
        <Line
          points={visiblePoints}
          color="#DC2626"
          lineWidth={5.5}
          opacity={1.0}
          transparent
        />
      )}
    </group>
  );
};
