import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { UKMap } from './UKMap';
import { useMediaQuery } from '../hooks/useMediaQuery';

interface ThreeCanvasProps {
  scrollProgress?: number;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="w-full h-full min-h-[420px] sm:min-h-[480px] relative bg-slate-50 rounded border border-slate-200 shadow-xl overflow-hidden group">
      
      {/* R3F Canvas in White/Light Studio Environment */}
      <Canvas
        shadows={false}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Studio Lighting */}
        <ambientLight intensity={1.0} />
        
        {/* Soft fog */}
        <fog attach="fog" args={['#F8FAFC', 3.0, 8.0]} />
        
        <directionalLight
          position={[6, 12, 6]}
          intensity={1.4}
          color="#FFFFFF"
        />
        
        <spotLight
          position={[-6, 10, -6]}
          intensity={0.5}
          angle={0.4}
          penumbra={1}
          color="#2563EB"
        />

        {/* Elevated perspective framing Great Britain */}
        <PerspectiveCamera
          makeDefault
          position={isMobile ? [0, 5.2, 5.2] : [0, 4.2, 4.2]}
          fov={48}
        />
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 2 - 0.05}
          minDistance={2.0}
          maxDistance={7.0}
          target={[0, 0, -0.2]}
        />

        {/* Render the 3D UK Map Silhouette with Destination Markers */}
        <Suspense fallback={null}>
          <UKMap />
        </Suspense>
      </Canvas>
    </div>
  );
};

