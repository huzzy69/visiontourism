import React, { useState } from 'react';
import { Html } from '@react-three/drei';
import { destinations } from '../data/destinations';
import { Navigation } from 'lucide-react';

interface UKMapProps {
  onSelectDestination?: (id: string) => void;
}

export const UKMap: React.FC<UKMapProps> = ({ onSelectDestination }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <group>
      {/* Premium Circular travel map table/board */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]} receiveShadow>
        <cylinderGeometry args={[2.8, 3.0, 0.2, 64]} />
        <meshStandardMaterial color="#051711" roughness={0.6} metalness={0.8} />
      </mesh>
      
      {/* Gold Rim */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[2.75, 2.8, 64]} />
        <meshStandardMaterial color="#C5A880" roughness={0.1} metalness={0.9} />
      </mesh>

      {/* Grid rings inside the board */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[0.8, 0.81, 64]} />
        <meshStandardMaterial color="rgba(197,168,128,0.2)" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[1.8, 1.81, 64]} />
        <meshStandardMaterial color="rgba(197,168,128,0.2)" transparent opacity={0.3} />
      </mesh>

      {/* Render Destination Pins */}
      {destinations.map((dest) => {
        const { x, y, z } = dest.coordinates;
        const isHovered = hoveredId === dest.id;

        return (
          <group
            key={dest.id}
            position={[x, y, z]}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredId(dest.id);
            }}
            onPointerOut={() => setHoveredId(null)}
            onClick={() => onSelectDestination && onSelectDestination(dest.id)}
          >
            {/* Pole/Pin shaft */}
            <mesh position={[0, 0.15, 0]}>
              <cylinderGeometry args={[0.012, 0.012, 0.3, 8]} />
              <meshStandardMaterial color={isHovered ? '#C5A880' : '#888'} roughness={0.2} metalness={0.8} />
            </mesh>

            {/* Pin head (Sphere) */}
            <mesh position={[0, 0.3, 0]} castShadow>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial
                color={isHovered ? '#fffae6' : '#C5A880'}
                emissive={isHovered ? '#C5A880' : '#000'}
                emissiveIntensity={isHovered ? 1.5 : 0}
                roughness={0.1}
                metalness={0.9}
              />
            </mesh>

            {/* Subtle Pulse ring on table base */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
              <ringGeometry args={[0.02, isHovered ? 0.22 : 0.12, 32]} />
              <meshBasicMaterial
                color={isHovered ? '#fffae6' : '#C5A880'}
                transparent
                opacity={isHovered ? 0.4 : 0.15}
              />
            </mesh>

            {/* Floating CSS 2D Tooltip */}
            {(isHovered || dest.featured) && (
              <Html
                position={[0, 0.45, 0]}
                center
                distanceFactor={6}
                className="pointer-events-none select-none transition-opacity duration-300"
              >
                <div
                  className={`flex flex-col items-center justify-center px-3 py-1.5 rounded-sm border shadow-lg backdrop-blur-md transition-all duration-300 ${
                    isHovered
                      ? 'bg-brand-green-900 border-brand-gold-400 text-white w-40'
                      : 'bg-brand-dark-900/80 border-brand-gold-400/20 text-white/95 w-32'
                  }`}
                >
                  <span className={`font-serif leading-none text-center ${isHovered ? 'text-xs font-bold text-brand-gold-400' : 'text-[10px] font-semibold'}`}>
                    {dest.name}
                  </span>
                  
                  {isHovered && (
                    <span className="text-[8px] text-white/60 tracking-wider uppercase mt-1 flex items-center gap-1">
                      <Navigation className="w-2.5 h-2.5 text-brand-gold-400" />
                      {dest.region}
                    </span>
                  )}
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </group>
  );
};
