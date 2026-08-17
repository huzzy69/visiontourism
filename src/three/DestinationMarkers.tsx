import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export interface MapDestination {
  id: string;
  name: string;
  position: [number, number, number]; // [x, y, z] coordinates on extruded 3D map
}

export const HERO_DESTINATIONS: MapDestination[] = [
  {
    id: 'london',
    name: 'London',
    position: [0.50, 0.77, 0.92],
  },
  {
    id: 'oxford',
    name: 'Oxford',
    position: [0.15, 0.77, 0.80],
  },
  {
    id: 'manchester',
    name: 'Manchester',
    position: [-0.25, 0.77, -0.28],
  },
  {
    id: 'lake-district',
    name: 'Lake District',
    position: [-0.42, 0.77, -0.70],
  },
  {
    id: 'glasgow',
    name: 'Glasgow',
    position: [-0.65, 0.77, -1.35],
  },
  {
    id: 'edinburgh',
    name: 'Edinburgh',
    position: [-0.32, 0.77, -1.48],
  },
  {
    id: 'cardiff',
    name: 'Cardiff',
    position: [-0.52, 0.77, 0.78],
  },
  {
    id: 'belfast',
    name: 'Belfast',
    position: [-1.30, 0.77, -0.70],
  },
];

interface MarkerProps {
  destination: MapDestination;
}

const DestinationMarker: React.FC<MarkerProps> = ({ destination }) => {
  const [hovered, setHovered] = useState(false);
  const [x, y, z] = destination.position;

  return (
    <group position={[x, y, z]}>
      {/* 3D Location Point Mesh */}
      <group
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        {/* Base Accent Pulse Ring on Map Surface */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
          <ringGeometry args={[0.035, 0.055, 32]} />
          <meshBasicMaterial
            color={hovered ? '#DC2626' : '#1E3A8A'}
            transparent
            opacity={hovered ? 0.85 : 0.4}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Vertical Pin Stem */}
        <mesh position={[0, 0.06, 0]}>
          <cylinderGeometry args={[0.008, 0.004, 0.12, 16]} />
          <meshStandardMaterial
            color="#1E3A8A"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>

        {/* Elegant 3D Pin Head (Red with White Core) */}
        <mesh position={[0, 0.13, 0]} scale={hovered ? 1.3 : 1.0}>
          <sphereGeometry args={[0.032, 16, 16]} />
          <meshStandardMaterial
            color={hovered ? '#B91C1C' : '#DC2626'}
            roughness={0.2}
            metalness={0.3}
          />
        </mesh>

        {/* Center White Core Dot on Pin Head */}
        <mesh position={[0, 0.13, 0.025]} scale={hovered ? 1.3 : 1.0}>
          <sphereGeometry args={[0.012, 12, 12]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
      </group>

      {/* Compact HTML Label Card anchored to 3D pin location */}
      <Html
        position={[0, 0.25, 0]}
        center
        distanceFactor={5.5}
        zIndexRange={[1000, 100]}
        style={{
          transition: 'all 0.2s ease',
          pointerEvents: 'auto',
          userSelect: 'none',
        }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all duration-200 cursor-pointer shadow-md ${
            hovered
              ? 'bg-white border-2 border-brand-red-600 shadow-xl shadow-brand-red-600/20 scale-110 -translate-y-1 z-50'
              : 'bg-white/95 border border-slate-200/90 shadow-slate-900/10 hover:border-brand-blue-900/30'
          }`}
        >
          {/* Red dot accent */}
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-brand-red-600 ${
                hovered ? 'animate-ping opacity-90' : 'opacity-60'
              }`}
            />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-red-600" />
          </span>

          {/* Destination Name */}
          <span
            className={`font-serif text-[10px] sm:text-[11px] font-bold tracking-tight whitespace-nowrap transition-colors ${
              hovered ? 'text-brand-red-600 font-extrabold' : 'text-brand-blue-900'
            }`}
          >
            {destination.name}
          </span>
        </div>
      </Html>
    </group>
  );
};

export const DestinationMarkers: React.FC = () => {
  return (
    <group>
      {HERO_DESTINATIONS.map((dest) => (
        <DestinationMarker key={dest.id} destination={dest} />
      ))}
    </group>
  );
};
