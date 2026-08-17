export interface Tour {
  id: string;
  title: string;
  duration: string;
  durationDays: number;
  priceFrom: number;
  description: string;
  longDescription: string;
  highlights: string[];
  destinationIds: string[];
  imageUrl: string;
  featured: boolean;
  rating: number;
  reviewsCount: number;
  type: '1-day' | 'multi-day' | 'private-custom';
  itinerary: {
    day: number;
    title: string;
    description: string;
    stops: string[];
  }[];
}

export const tours: Tour[] = [
  {
    id: 'england-scotland-4-days',
    title: 'England to Scotland in 4 Days Tour',
    duration: '4 Days, 3 Nights',
    durationDays: 4,
    priceFrom: 495,
    description: 'Our signature overland tour connecting the historic sights of England with the wild mountains and capital of Scotland.',
    longDescription: 'Explore the very best of Great Britain on this grand 4-day journey. Travel from the bustling streets of London through the historic heart of England, and cross the border into the dramatic Scottish Highlands. Perfect for groups, families, and travelers wishing to see the country’s highlights in comfort.',
    highlights: [
      'Overland journey from London through Lake District to Edinburgh',
      'Private luxury minibus travel with professional driver-guide',
      'Historical tours of Edinburgh Castle and York Minster',
      'Stunning scenic drive through Glen Coe and Loch Lomond'
    ],
    destinationIds: ['london', 'lake-district', 'edinburgh', 'highlands'],
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    rating: 4.9,
    reviewsCount: 142,
    type: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'London to York & Lake District',
        description: 'Depart London in our luxury executive minibus. Stop in the historic Viking city of York to tour York Minster, then proceed to the gorgeous English Lake District for a lakeside dinner.',
        stops: ['London Departure', 'York Minster', 'Windermere']
      },
      {
        day: 2,
        title: 'Lake District to Edinburgh',
        description: 'Enjoy a morning boat cruise on Lake Windermere, then cross the Scottish border. Stop at the famous Gretna Green smithy before arriving in the magnificent capital city of Edinburgh.',
        stops: ['Windermere Cruise', 'Gretna Green Border Crossing', 'Edinburgh Royal Mile']
      },
      {
        day: 3,
        title: 'Scottish Highlands & Loch Ness',
        description: 'A spectacular day excursion deep into the Highlands. Walk through the atmospheric Glen Coe, drive past the majestic Ben Nevis, and cruise Loch Ness looking for the legendary monster.',
        stops: ['Glen Coe Valley', 'Fort Augustus', 'Loch Ness Cruise']
      },
      {
        day: 4,
        title: 'Edinburgh Castle & Return Journey',
        description: 'Tour Edinburgh Castle and take in the panoramic city views. After lunch, begin the return journey south or arrange for drop-off at Edinburgh airport/railway stations.',
        stops: ['Edinburgh Castle', 'Holyrood Palace', 'Departures / Return']
      }
    ]
  },
  {
    id: 'stonehenge-bath-1-day',
    title: 'Stonehenge & Roman Bath 1-Day Trip',
    duration: '1 Day (approx. 10 hours)',
    durationDays: 1,
    priceFrom: 85,
    description: 'Discover the ancient mysteries of Stonehenge and walk the beautiful Georgian streets of Roman Bath in a single day.',
    longDescription: 'Escape London for the day and journey back in time. Stand in awe of the prehistoric stone circle of Stonehenge on the Salisbury Plain, then spend the afternoon exploring Bath, famous for its Roman Baths, elegant Georgian architecture, and connections to Jane Austen.',
    highlights: [
      'Guaranteed entry tickets to Stonehenge archaeological site',
      'Guided walking tour of the Georgian city of Bath',
      'Luxury air-conditioned minibus with USB charging and WiFi',
      'Pickup and drop-off from central London locations'
    ],
    destinationIds: ['bath-stonehenge'],
    imageUrl: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    rating: 4.8,
    reviewsCount: 96,
    type: '1-day',
    itinerary: [
      {
        day: 1,
        title: 'Stonehenge & Bath Exploration',
        description: 'Morning drive to Stonehenge to explore the stone circle and visitor center. Short drive to Bath for lunch, followed by tours of the Roman Baths, Abbey, and Royal Crescent before return.',
        stops: ['London Pickup', 'Stonehenge Circle', 'City of Bath', 'London Drop-off']
      }
    ]
  },
  {
    id: 'oxford-cotswolds-1-day',
    title: 'Oxford & Cotswolds Village Explorer',
    duration: '1 Day (approx. 9 hours)',
    durationDays: 1,
    priceFrom: 79,
    description: 'Immerse yourself in academic history at Oxford University and stroll through postcard-perfect Cotswold villages.',
    longDescription: 'Spend a relaxing day combining the academic grandeur of Oxford University with the rustic charm of England’s finest countryside. Explore historic colleges, libraries, and cobblestone lanes in Oxford, then wind through the rolling Cotswold hills stopping at classic stone-cottage villages.',
    highlights: [
      'Walking tour of Oxford University colleges and Bodleian Library',
      'Leisurely visits to Bourton-on-the-Water and Castle Combe',
      'Small group size ensuring personal attention from your guide',
      'Stunning scenic drive through the heart of the Cotswold Hills'
    ],
    destinationIds: ['cotswolds'],
    imageUrl: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?q=80&w=1200&auto=format&fit=crop',
    featured: false,
    rating: 4.7,
    reviewsCount: 81,
    type: '1-day',
    itinerary: [
      {
        day: 1,
        title: 'Oxford Colleges & Cotswolds Villages',
        description: 'Journey to Oxford for a guided colleges tour. Afternoon drive into the Cotswolds to visit Bourton-on-the-Water and Castle Combe for afternoon tea and scenic photography.',
        stops: ['London Pickup', 'Oxford Colleges Tour', 'Cotswold Valleys', 'Castle Combe', 'Return']
      }
    ]
  },
  {
    id: 'wales-northern-ireland-4-days',
    title: 'Wales & Northern Ireland 4-Day Tour',
    duration: '4 Days, 3 Nights',
    durationDays: 4,
    priceFrom: 525,
    description: 'Journey through the historic castles of Wales, across the Irish Sea, to the stunning landscapes of Northern Ireland.',
    longDescription: 'Experience the rich Celtic heritage and stunning natural wonders of Wales and Northern Ireland. Travel from the historic capital of Cardiff through the scenic Welsh valleys, then cross the Irish Sea to explore Belfast and the breathtaking Giant’s Causeway. A perfect combination of historic castles, vibrant culture, and dramatic coastal landscapes.',
    highlights: [
      'Guided tour of Cardiff Castle and South Wales heritage',
      'Scenic drive through Snowdonia National Park in Wales',
      'Ferry crossing over the Irish Sea to Belfast',
      'Excursion to the legendary Giant’s Causeway and Dunluce Castle'
    ],
    destinationIds: ['cardiff', 'belfast'],
    imageUrl: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a1?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    rating: 4.9,
    reviewsCount: 88,
    type: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Cardiff & South Wales Castles',
        description: 'Depart from Cardiff in our luxury executive minibus. Tour the historic Cardiff Castle and explore the vibrant Cardiff Bay area before dinner.',
        stops: ['Cardiff Arrival', 'Cardiff Castle', 'Cardiff Bay']
      },
      {
        day: 2,
        title: 'Snowdonia National Park to Holyhead',
        description: 'Travel north through the dramatic valleys of Wales. Stop for scenic walks in Snowdonia National Park, visit Conwy Castle, and proceed to Holyhead for the evening.',
        stops: ['Snowdonia National Park', 'Conwy Castle', 'Holyhead Port']
      },
      {
        day: 3,
        title: 'Irish Sea Crossing & Belfast',
        description: 'Take the morning ferry across the Irish Sea. Arrive in Belfast, Northern Ireland. Tour the Titanic Belfast exhibition and experience the historic city centre.',
        stops: ['Ferry Crossing', 'Belfast Port', 'Titanic Belfast', 'Belfast City Centre']
      },
      {
        day: 4,
        title: 'Giant’s Causeway & Coastal Return',
        description: 'Drive along the spectacular Antrim Coast Road to the legendary Giant’s Causeway. Tour the unique basalt columns and Dunluce Castle before returning to Belfast for departures.',
        stops: ['Antrim Coast Road', 'Giant’s Causeway', 'Dunluce Castle', 'Belfast Departures']
      }
    ]
  },
  {
    id: 'custom-private-hire',
    title: 'Custom Private Group Tour & Minibus Hire',
    duration: 'Flexible (1 to 14 Days)',
    durationDays: 0,
    priceFrom: 350,
    description: 'Tailor-make your own UK road trip or event transport. Hire a premium minibus with a driver for a fully custom experience.',
    longDescription: 'Design your own dream vacation or secure hassle-free group transit. Choose your itinerary, stops, and schedule, and let our professional driver-guide handle all the navigation. Ideal for corporate events, family reunions, wedding transport, golf tours, or custom road trips across England, Scotland, and Wales.',
    highlights: [
      'Your own dedicated premium minibus (8, 12, or 16 seats) and professional driver',
      '100% custom itinerary — go where you want, when you want',
      'Door-to-door pickups from airports, hotels, or private residences',
      'Expert advice on routes, driving times, and local hidden gems'
    ],
    destinationIds: ['london', 'edinburgh', 'highlands', 'cotswolds', 'bath-stonehenge', 'lake-district'],
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    rating: 5.0,
    reviewsCount: 64,
    type: 'private-custom',
    itinerary: []
  }
];
