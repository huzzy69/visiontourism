export interface Destination {
  id: string;
  name: string;
  region: 'England' | 'Scotland' | 'Wales' | 'Multiple';
  description: string;
  imageUrl: string;
  coordinates: { x: number; y: number; z: number }; // 3D coordinates on procedural map
  latLng: { lat: number; lng: number }; // Geo-coordinates for mapping API / maps
  featured: boolean;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: 'london',
    name: 'London',
    region: 'England',
    description: 'The historic capital of England, blending royal heritage, iconic landmarks like Big Ben, and world-class culture.',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: 0.8, y: 0.1, z: -0.6 },
    latLng: { lat: 51.5074, lng: -0.1278 },
    featured: true,
    highlights: ['Buckingham Palace', 'Tower of London', 'Westminster Abbey']
  },
  {
    id: 'edinburgh',
    name: 'Edinburgh',
    region: 'Scotland',
    description: 'A striking capital city dominated by its medieval castle, cobblestone Royal Mile, and dramatic volcanic hills.',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: 0.3, y: 1.8, z: -0.1 },
    latLng: { lat: 55.9533, lng: -3.1883 },
    featured: true,
    highlights: ['Edinburgh Castle', 'Royal Mile', 'Arthurs Seat']
  },
  {
    id: 'highlands',
    name: 'Scottish Highlands & Skye',
    region: 'Scotland',
    description: 'Mystical lochs, dramatic glens, and rugged mountains — experience the untamed majesty of the Isle of Skye.',
    imageUrl: 'https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: -0.4, y: 2.3, z: 0.3 },
    latLng: { lat: 57.4124, lng: -5.0228 },
    featured: true,
    highlights: ['Isle of Skye', 'Loch Ness', 'Glen Coe']
  },
  {
    id: 'cotswolds',
    name: 'The Cotswolds',
    region: 'England',
    description: 'Quintessentially English countryside, defined by honey-colored stone villages, gentle hills, and historic pubs.',
    imageUrl: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: 0.4, y: 0.3, z: -0.5 },
    latLng: { lat: 51.8330, lng: -1.8433 },
    featured: true,
    highlights: ['Bourton-on-the-Water', 'Castle Combe', 'Chipping Campden']
  },
  {
    id: 'bath-stonehenge',
    name: 'Stonehenge & Bath',
    region: 'England',
    description: 'Walk through thousands of years of human mystery at Stonehenge before relaxing in Bath’s ancient Roman baths.',
    imageUrl: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: 0.3, y: 0.1, z: -0.7 },
    latLng: { lat: 51.1789, lng: -1.8262 },
    featured: true,
    highlights: ['Stonehenge Circle', 'Roman Baths', 'Georgian Royal Crescent']
  },
  {
    id: 'lake-district',
    name: 'Lake District National Park',
    region: 'England',
    description: 'England’s premier national park, home to Windermere, stunning vistas, and literary connections to Beatrix Potter.',
    imageUrl: 'https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: 0.3, y: 1.1, z: -0.2 },
    latLng: { lat: 54.4609, lng: -3.0886 },
    featured: false,
    highlights: ['Lake Windermere', 'Scafell Pike', 'Keswick Village']
  }
];
