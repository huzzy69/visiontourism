import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { VehicleModel } from './VehicleModel';
import { UKMap } from './UKMap';
import { RouteLines } from './RouteLines';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Compass, HelpCircle } from 'lucide-react';

export const ThreeCanvas: React.FC = () => {
  const isMobile = useMediaQuery('(max-w: 768px)');

  // Mobile Fallback Section: Stylized 2D Graphic
  if (isMobile) {
    return (
      <div className="relative w-full h-full min-h-[350px] bg-brand-dark-900 flex flex-col items-center justify-center p-6 border border-brand-gold-400/10 rounded-sm">
        {/* Decorative Grid Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Fallback Graphic (SVG Compass Logo and Route description) */}
        <div className="relative z-10 text-center flex flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green-900 border border-brand-gold-400/30 text-brand-gold-400 animate-pulse">
            <Compass className="w-8 h-8" />
          </div>
          <h4 className="font-serif text-lg font-bold text-brand-gold-400 uppercase tracking-widest">
            UK Journey Map
          </h4>
          <p className="text-xs text-white/50 max-w-xs leading-relaxed">
            London • Cotswolds • Lake District • Edinburgh • Scottish Highlands
          </p>
          <div className="border border-brand-gold-400/20 bg-brand-green-900/60 p-3 rounded-sm text-[10px] text-white/70 max-w-xs">
            * 3D rendering is paused on mobile to conserve battery. Tap below to see our premium fleet specifications or contact us.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[450px] relative bg-brand-dark-900/40 rounded-sm overflow-hidden border border-brand-gold-400/10 shadow-inner">
      {/* 3D Scene Controls Tips overlay */}
      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 bg-brand-dark-900/80 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/5 text-[10px] text-white/60 select-none">
        <HelpCircle className="w-3.5 h-3.5 text-brand-gold-400" />
        <span>Click & drag to rotate • Scroll to zoom</span>
      </div>

      <Canvas shadows gl={{ antialias: true, alpha: true }}>
        {/* Lights Setup */}
        <ambientLight intensity={0.6} />
        
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        
        <spotLight
          position={[-5, 8, -5]}
          intensity={0.8}
          angle={0.3}
          penumbra={1}
          castShadow
        />

        <pointLight position={[0, -2, 0]} intensity={0.4} color="#092E20" />

        {/* Camera Setup */}
        <PerspectiveCamera makeDefault position={[0, 3.5, 4.5]} fov={50} />

        {/* Orbit Controls to prevent panning out of view bounds */}
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 2 - 0.05} // prevent going below board floor
          minDistance={2.5}
          maxDistance={7.0}
        />

        {/* Dynamic 3D Scene Components */}
        <Suspense fallback={null}>
          <UKMap />
          <RouteLines />
          <VehicleModel />
        </Suspense>
      </Canvas>
    </div>
  );
};
