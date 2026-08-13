export interface Destination {
  id: string;
  name: string;
  region: 'England' | 'Scotland' | 'Wales';
  description: string;
  shortDescription: string;
  imageUrl: string;
  coordinates: { x: number; y: number; z: number }; // 3D coordinates on extruded UK map
  latLng: { lat: number; lng: number };
  featured: boolean;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: 'london',
    name: 'London',
    region: 'England',
    description: 'The historic capital of England, blending royal heritage, iconic landmarks like Big Ben, and world-class culture.',
    shortDescription: 'Starting Point',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: 0.35, y: 0.08, z: 0.8 },
    latLng: { lat: 51.5074, lng: -0.1278 },
    featured: true,
    highlights: ['Buckingham Palace', 'Tower of London', 'Westminster Abbey']
  },
  {
    id: 'oxford',
    name: 'Oxford',
    region: 'England',
    description: 'City of dreaming spires, home to Britain’s oldest university, picturesque honey-stone architecture, and historic libraries.',
    shortDescription: 'Historic England',
    imageUrl: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: 0.15, y: 0.08, z: 0.65 },
    latLng: { lat: 51.7520, lng: -1.2577 },
    featured: true,
    highlights: ['Bodleian Library', 'Christ Church College', 'Radcliffe Camera']
  },
  {
    id: 'manchester',
    name: 'Manchester',
    region: 'England',
    description: 'The vibrant capital of the North, world-renowned for industrial innovation, iconic music culture, and football legends.',
    shortDescription: 'City & Culture',
    imageUrl: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: -0.1, y: 0.08, z: 0.2 },
    latLng: { lat: 53.4808, lng: -2.2426 },
    featured: true,
    highlights: ['Old Trafford', 'Science & Industry Museum', 'Northern Quarter']
  },
  {
    id: 'lake-district',
    name: 'Lake District',
    region: 'England',
    description: 'England’s premier national park, home to majestic lakes, rugged mountain peaks, and literary history.',
    shortDescription: 'Nature & Adventure',
    imageUrl: 'https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: -0.22, y: 0.08, z: -0.2 },
    latLng: { lat: 54.4609, lng: -3.0886 },
    featured: true,
    highlights: ['Lake Windermere', 'Scafell Pike', 'Keswick Village']
  },
  {
    id: 'glasgow',
    name: 'Glasgow',
    region: 'Scotland',
    description: 'Scotland’s largest city, famous for Victorian architecture, rich maritime history, and world-renowned artistic energy.',
    shortDescription: 'Scottish Gateway',
    imageUrl: 'https://images.unsplash.com/photo-1571217689100-a61250269d7b?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: -0.35, y: 0.08, z: -0.75 },
    latLng: { lat: 55.8642, lng: -4.2518 },
    featured: true,
    highlights: ['Kelvingrove Art Gallery', 'Glasgow Cathedral', 'George Square']
  },
  {
    id: 'edinburgh',
    name: 'Edinburgh',
    region: 'Scotland',
    description: 'A striking capital city dominated by medieval Edinburgh Castle, the historic Royal Mile, and volcanic extinct peaks.',
    shortDescription: 'Royal Scotland',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop',
    coordinates: { x: -0.15, y: 0.08, z: -0.85 },
    latLng: { lat: 55.9533, lng: -3.1883 },
    featured: true,
    highlights: ['Edinburgh Castle', 'Royal Mile', 'Arthur’s Seat']
  }
];
