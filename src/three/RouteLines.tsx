import React, { useState, useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

// Geographically accurate coordinates corresponding to DestinationMarkers.tsx, slightly raised to Y=0.80
// Geographically accurate coordinates corresponding to DestinationMarkers.tsx, slightly raised to Y=0.80
export const ENGLAND_SCOTLAND_POINTS = [
  new THREE.Vector3(0.50, 0.80, 0.92),     // London
  new THREE.Vector3(0.15, 0.80, 0.80),     // Oxford
  new THREE.Vector3(-0.25, 0.80, -0.28),   // Manchester
  new THREE.Vector3(-0.42, 0.80, -0.70),   // Lake District
  new THREE.Vector3(-0.65, 0.80, -1.35),   // Glasgow
  new THREE.Vector3(-0.32, 0.80, -1.48),   // Edinburgh
];

export const NORTHERN_IRELAND_WALES_POINTS = [
  new THREE.Vector3(-1.20, 0.80, -0.75),   // Northern Ireland (Belfast)
  new THREE.Vector3(-0.95, 0.80, -0.20),   // Irish Sea Crossing
  new THREE.Vector3(-0.75, 0.80, 0.15),    // Holyhead (Wales Entry)
  new THREE.Vector3(-0.65, 0.80, 0.45),    // Snowdonia (Wales Peaks)
  new THREE.Vector3(-0.52, 0.80, 0.78),    // Wales (Cardiff)
];

export const getRouteCurve = (activeRoute: string): THREE.CatmullRomCurve3 => {
  const points = activeRoute === 'northern-ireland-wales' ? NORTHERN_IRELAND_WALES_POINTS : ENGLAND_SCOTLAND_POINTS;
  return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.15);
};

export const getUKRouteCurve = (): THREE.CatmullRomCurve3 => {
  return getRouteCurve('england-scotland');
};

interface RouteLinesProps {
  activeRoute?: 'england-scotland' | 'northern-ireland-wales';
}

export const RouteLines: React.FC<RouteLinesProps> = ({ activeRoute = 'england-scotland' }) => {
  const curve = useMemo(() => getRouteCurve(activeRoute), [activeRoute]);
  
  // High resolution points for a smooth 3D spline
  const fullCurvePoints = useMemo(() => {
    return curve.getPoints(120).map((v) => [v.x, v.y, v.z] as [number, number, number]);
  }, [curve]);

  const [visiblePoints, setVisiblePoints] = useState<[number, number, number][]>([]);
  const progressRef = useRef(0);
  const pauseTimerRef = useRef(0);

  // Reset drawing animation when activeRoute changes
  React.useEffect(() => {
    progressRef.current = 0;
    pauseTimerRef.current = 0;
    setVisiblePoints([]);
  }, [activeRoute]);

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
