# Vision Tourism - Premium UK Travel Platform

A modern, high-end travel and minibus-hire web platform for **Vision Tourism** (`visiontourism.org`). 

This application coordinates private minibus rentals, guided 1-day tours departing from London, and custom multi-day overland itineraries across England, Scotland, and Wales.

## 🛠️ Technology Stack

- **Framework**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (v3), PostCSS
- **Animations**: GSAP, Framer Motion
- **3D Graphics**: Three.js, React Three Fiber (R3F), Drei
- **Icons**: Lucide React

---

## 📁 Project Structure

```
visiontourism/
├── public/                 # Static assets & SEO directives
│   └── robots.txt
├── src/
│   ├── assets/             # Branding logs & local vectors
│   ├── components/         # Shared reusable UI elements
│   │   ├── Navbar.tsx      # Responsive header with scroll detection
│   │   ├── Footer.tsx      # Structured multi-column contact links
│   │   ├── PageHeader.tsx  # Dynamic secondary page banners
│   │   ├── BackToTop.tsx   # Floating scroll coordinator
│   │   └── LoadingScreen.tsx # Animated SVG compass loading intro
│   ├── data/               # Static models (tours, destinations, vehicles)
│   │   ├── destinations.ts
│   │   ├── tours.ts
│   │   └── vehicles.ts
│   ├── hooks/              # Custom hooks (resize detection & scroll depths)
│   │   ├── useMediaQuery.ts
│   │   └── useScrollPosition.ts
│   ├── pages/              # Primary route entries
│   │   ├── Home.tsx        # COORDINATOR OF 11 HOME SECTIONS
│   │   ├── OneDayTrips.tsx # Day trip selections
│   │   ├── EnglandScotlandTour.tsx # flag-ship multi-day details
│   │   ├── FamousSights.tsx # Landmark highlights by region
│   │   ├── Contact.tsx     # Message inquiry dashboard
│   │   └── Book.tsx        # Booking and rental quote requests
│   ├── sections/           # Large modular landing blocks
│   ├── three/              # Decoupled WebGL 3D Mapping components
│   │   ├── ThreeCanvas.tsx # Mounts R3F, camera orbits, lights & Mobile Fallbacks
│   │   ├── UKMap.tsx       # Circular gold-rimmed mahogany board & 3D pins
│   │   ├── RouteLines.tsx  # Animated London-to-Scotland path curve
│   │   └── VehicleModel.tsx# Procedural minibus geometry with wheel rotation
│   ├── App.tsx             # Global layout grids & routes configuration
│   ├── main.tsx            # DOM mount entry
│   └── index.css           # Global typography styles & scrollbars
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:3000/`.

### Compile for Production
```bash
npm run build
```
Verify the production build compiles cleanly into the `dist/` directory.

---

## 🗺️ Decoupled 3D System & Mobile fallbacks
The 3D WebGL engine is contained inside `src/three/`. 
- **Automatic Optimization**: On screens below `768px`, the 3D Canvas is unmounted and replaced with an optimized static 2D timeline and compass, saving battery and ensuring high performance on mobile devices.
- **Controls**: Interactive orbit limits are applied to prevent the camera from clipping below the mahogany travel board, enabling rotating and zooming around the path pins.
