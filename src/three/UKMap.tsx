import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { DestinationMarkers } from './DestinationMarkers';
import { RouteLines } from './RouteLines';
import { VehicleModel } from './VehicleModel';

// Geographically accurate outline coordinates of Great Britain (normalized 2D silhouette)
const gbOutlineCoordinates: [number, number][] = [
  // --- SOUTH WEST (Cornwall & Devon) ---
  [-1.40, 1.45],  // Land's End / Cornwall SW tip
  [-1.25, 1.55],  // Lizard Point
  [-0.95, 1.45],  // Plymouth / South Devon
  [-0.60, 1.35],  // Torbay / Exmouth
  [-0.30, 1.32],  // Weymouth / Isle of Portland
  [0.05, 1.25],   // Southampton / Solent Coast
  [0.55, 1.22],   // Brighton / Beachy Head
  [0.95, 1.20],   // Hastings / Dungeness
  [1.15, 1.10],   // Dover Cliffs (SE corner of England)
  [1.05, 0.95],   // Thanet Peninsula

  // --- EAST COAST ENGLAND ---
  [0.75, 0.88],   // Thames Estuary (London inlet)
  [1.00, 0.70],   // Essex Coast (Clacton)
  [1.22, 0.45],   // East Anglia bulge (Suffolk / Lowestoft)
  [1.18, 0.20],   // Norfolk North Coast (Cromer)
  [0.70, 0.18],   // The Wash inlet
  [0.50, -0.05],  // Lincolnshire Coast
  [0.35, -0.22],  // Spurn Head / Humber Estuary
  [0.38, -0.45],  // Flamborough Head (Yorkshire bulge)
  [0.22, -0.70],  // Scarborough / Robin Hood's Bay
  [0.15, -0.95],  // Tees Estuary (Middlesbrough)
  [0.12, -1.15],  // Tyneside / Newcastle Coast

  // --- SCOTLAND EAST COAST ---
  [0.02, -1.35],  // Berwick-upon-Tweed (Border)
  [-0.10, -1.48], // St Abb's Head
  [-0.35, -1.52], // Firth of Forth inlet (Edinburgh area)
  [-0.20, -1.60], // Fife Ness
  [-0.30, -1.68], // Firth of Tay (Dundee)
  [-0.05, -1.82], // Montrose / Stonehaven
  [0.05, -1.98],  // Aberdeen Coast
  [-0.12, -2.18], // Peterhead / Fraserburgh tip
  [-0.35, -2.15], // Banff / Moray Coast
  [-0.55, -2.25], // Inverness / Moray Firth inlet

  // --- SCOTLAND NORTH & HIGHLANDS ---
  [-0.30, -2.50], // Caithness
  [-0.38, -2.55], // John o' Groats (NE tip)
  [-0.55, -2.55], // Dunnet Head (Northernmost mainland point)
  [-0.85, -2.50], // Cape Wrath (NW tip of Scotland)
  [-1.00, -2.35], // Sutherland Coast
  [-1.15, -2.15], // Wester Ross Coast
  [-1.10, -1.95], // Kyle of Lochalsh
  [-1.25, -1.80], // Mallaig Sound
  [-1.15, -1.65], // Ardnamurchan Point
  [-1.05, -1.52], // Firth of Lorn / Oban

  // --- SCOTLAND WEST & CLYDE ---
  [-1.10, -1.35], // Mull of Kintyre
  [-0.85, -1.30], // Firth of Clyde inlet (Glasgow waterway)
  [-0.88, -1.15], // Ayrshire Coast
  [-1.05, -1.05], // Rhins of Galloway Peninsula
  [-0.95, -0.92], // Luce Bay / Burrow Head

  // --- NORTH WEST ENGLAND & WALES ---
  [-0.65, -0.90], // Solway Firth inlet (Border / Carlisle)
  [-0.72, -0.72], // St Bees Head / Lake District West
  [-0.52, -0.55], // Morecambe Bay inlet
  [-0.45, -0.38], // Blackpool / Fylde Coast
  [-0.50, -0.22], // Mersey Estuary (Liverpool)
  [-0.68, -0.15], // Dee Estuary (Flintshire)
  [-0.85, -0.12], // North Wales Coast (Llandudno)
  [-1.05, -0.05], // Anglesey Island tip
  [-1.00, 0.12],  // Caernarfon Bay
  [-1.20, 0.25],  // Llŷn Peninsula (West Wales horn)
  [-0.95, 0.40],  // Cardigan Bay (concave West Wales sweep)
  [-1.15, 0.65],  // St David's Head (Pembrokeshire)
  [-1.00, 0.78],  // Pembroke Coast
  [-0.75, 0.75],  // Carmarthen Bay / Gower Peninsula
  [-0.52, 0.78],  // Cardiff / South Wales Coast
  [-0.30, 0.85],  // Severn Estuary (Bristol Channel inlet)

  // --- SOUTH WEST PENINSULA ---
  [-0.60, 0.95],  // North Somerset Coast
  [-0.85, 1.02],  // North Devon Coast
  [-1.10, 1.15],  // Hartland Point (North Cornwall)
  [-1.25, 1.30],  // Bude / Padstow Coast
  [-1.40, 1.45],  // Back to Land's End
];

export const UKMap: React.FC = () => {
  const mapGroupRef = useRef<THREE.Group>(null);

  // Construct precise THREE.Shape from coordinates
  const gbShape = useMemo(() => {
    const s = new THREE.Shape();
    gbOutlineCoordinates.forEach(([x, y], idx) => {
      if (idx === 0) {
        s.moveTo(x, y);
      } else {
        s.lineTo(x, y);
      }
    });
    s.closePath();
    return s;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 0.25,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: 0.02,
    bevelThickness: 0.02,
  }), []);

  // Subtle idle movement / rotation
  useFrame((state) => {
    if (mapGroupRef.current) {
      mapGroupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.35) * 0.06;
    }
  });

  return (
    <group ref={mapGroupRef}>
      {/* Extruded Great Britain Silhouette Map */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.5, 0]} // Shift slightly upward to center in perspective
        castShadow
        receiveShadow
      >
        <extrudeGeometry args={[gbShape, extrudeSettings]} />
        {/* material-0: Lighter Royal Blue top face */}
        <meshStandardMaterial attach="material-0" color="#2563EB" roughness={0.3} metalness={0.5} />
        {/* material-1: Darker Deep Navy Blue side extrusion */}
        <meshStandardMaterial attach="material-1" color="#1E3A8A" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* 3D Destination Markers attached to 3D UK map */}
      <DestinationMarkers />

      {/* Bold Travel Route Lines */}
      <RouteLines />

      {/* 3D Passenger Minibus traveling on the route */}
      <VehicleModel />
    </group>
  );
};



