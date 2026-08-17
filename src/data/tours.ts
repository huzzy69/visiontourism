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
  },
  {
    id: 'northern-ireland-to-wales',
    title: 'Northern Ireland to Wales Tour',
    duration: '5 Days, 4 Nights',
    durationDays: 5,
    priceFrom: 595,
    description: 'A spectacular journey crossing the Irish Sea to connect the giant landscapes of Northern Ireland with the historic castles and valleys of Wales.',
    longDescription: 'Experience the ultimate Celtic journey. Travel from the historic streets of Belfast and the dramatic Giant’s Causeway in Northern Ireland, cross the Irish Sea, and explore the rugged mountains of Snowdonia and the historic castles of Wales. Perfect for groups, families, and travelers wishing to see the Celtic highlights in comfort.',
    highlights: [
      'Scenic journey from Belfast through the Irish Sea to Wales',
      'Visit the legendary Giant’s Causeway and Titanic Belfast',
      'Explore the breathtaking peaks of Snowdonia National Park',
      'Tour historic Conwy Castle and the vibrant capital of Cardiff'
    ],
    destinationIds: ['belfast', 'cardiff'],
    imageUrl: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    rating: 4.9,
    reviewsCount: 88,
    type: 'multi-day',
    itinerary: [
      {
        day: 1,
        title: 'Belfast Arrival & Titanic Quarter',
        description: 'Arrive in Belfast. Tour the historic Titanic Quarter and visit Titanic Belfast, then enjoy a traditional Irish music evening in the Cathedral Quarter.',
        stops: ['Belfast Arrival', 'Titanic Belfast', 'Cathedral Quarter']
      },
      {
        day: 2,
        title: 'Giant’s Causeway & Coastal Route',
        description: 'Drive along the spectacular Antrim Coast Road. Walk the basalt columns of the Giant’s Causeway and visit Dunluce Castle.',
        stops: ['Antrim Coast Road', 'Giant’s Causeway', 'Dunluce Castle']
      },
      {
        day: 3,
        title: 'Irish Sea Crossing to North Wales',
        description: 'Board the premium ferry across the Irish Sea. Arrive in Holyhead and drive to the stunning medieval town of Conwy to tour its historic castle.',
        stops: ['Belfast Port', 'Irish Sea Crossing', 'Holyhead', 'Conwy Castle']
      },
      {
        day: 4,
        title: 'Snowdonia National Park Exploration',
        description: 'A full day exploring the dramatic peaks and valleys of Snowdonia. Visit the picturesque village of Betws-y-Coed and take in the panoramic mountain views.',
        stops: ['Snowdonia Peaks', 'Betws-y-Coed', 'Llanberis Pass']
      },
      {
        day: 5,
        title: 'Cardiff Capital Tour & Departures',
        description: 'Travel south to Cardiff, the capital of Wales. Tour Cardiff Castle and Cardiff Bay before concluding the tour.',
        stops: ['Cardiff Castle', 'Cardiff Bay', 'Departures']
      }
    ]
  }
];
