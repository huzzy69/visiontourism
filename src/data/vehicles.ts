export interface Vehicle {
  id: string;
  name: string;
  type: 'Minibus' | 'Midi-Coach' | 'Coach';
  capacity: number;
  luggageCapacity: number; // number of large suitcases
  features: string[];
  imageUrl: string;
  description: string;
  specifications: {
    engine?: string;
    transmission?: string;
    amenities: string[];
  };
}

export const vehicles: Vehicle[] = [
  {
    id: 'luxury-8-seater',
    name: '8-Seater Luxury Minibus',
    type: 'Minibus',
    capacity: 8,
    luggageCapacity: 8,
    features: [
      'Leather Reclining Seats',
      'Individual USB Charging Ports',
      'Climate Control AC',
      'Rear Privacy Glass',
      'Bluetooth Audio System'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1549417229-aa67d3263c09?q=80&w=1000&auto=format&fit=crop', // Standard premium van/minibus placeholder
    description: 'Perfect for small families, executive transfers, and golf trips. Combining high-end comfort with versatile cargo space.',
    specifications: {
      transmission: 'Automatic',
      amenities: ['Reclining Leather Seats', 'USB Outlets', 'Individual Reading Lights', 'AC', 'Extra Luggage Rack']
    }
  },
  {
    id: 'executive-16-seater',
    name: '16-Seater Executive Minibus',
    type: 'Minibus',
    capacity: 16,
    luggageCapacity: 14,
    features: [
      'Mercedes-Benz Sprinter Class',
      'Panoramic Windows',
      'Onboard High-Speed WiFi',
      'PA & Microphone System',
      'LED Ambient lighting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop', // Minibus class
    description: 'Our most popular touring vehicle. Designed specifically for long-distance UK tours, offering unmatched views and luxury suspension.',
    specifications: {
      transmission: 'Automatic',
      amenities: ['Mercedes Sprinter Chassis', 'Panoramic Glass Roof', 'High-Speed WiFi', 'USB Chargers', 'Microphone', 'AC']
    }
  },
  {
    id: 'premium-49-seater',
    name: '49-Seater Premium Touring Coach',
    type: 'Coach',
    capacity: 49,
    luggageCapacity: 45,
    features: [
      'Underfloor Luggage Bays',
      'Onboard Washroom / Toilet',
      'Refrigerated Drink Cabinet',
      'DVD/Screen Entertainment',
      'Luxury Air Suspension'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000&auto=format&fit=crop', // Premium Coach class
    description: 'Ideal for large tour groups, corporate outings, and wedding guest transportation. Complete comfort over long distances.',
    specifications: {
      amenities: ['Onboard Restroom', 'Kitchenette / Drinks Fridge', 'Under-coach Luggage Holds', 'Climate Control AC', 'PA System', 'Entertainment Screens']
    }
  }
];
