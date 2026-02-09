# MEDHA'26 - National Level Hackathon Website

A flagship, story-driven, mobile-first academic event website for MEDHA'26, a 24-Hour National Level Hackathon organized by the Department of Electronics and Communication Engineering, M. Kumarasamy College of Engineering (Autonomous), Karur.

## 🎬 Story Flow

The website narrates a continuous cinematic story:
**Signal originates in space → travels via satellite → passes through communication layers → reaches Earth → lands at MKCE, Karur**

## 🛠️ Tech Stack

- **React** (Vite) - Fast, modern frontend framework
- **Framer Motion** - Smooth animations and transitions
- **Three.js** (@react-three/fiber) - 3D space background
- **Google Maps Embed** - Interactive location display
- **CSS3** - Custom styling with mobile-first approach

## 📁 Project Structure

```
Medha/
├── static/
│   └── images/
│       ├── mkce_logo.png
│       ├── mkce_25_years_logo.jpeg
│       ├── iete_logo.png
│       ├── eminence_logo.png
│       ├── satellite.png
│       ├── astronaut.png
│       └── mkce_drone_view.png
├── src/
│   ├── components/
│   │   ├── IntroSequence.jsx
│   │   ├── Hero.jsx
│   │   ├── SignalFlow.jsx
│   │   ├── About.jsx
│   │   ├── Tracks.jsx
│   │   ├── Organizers.jsx
│   │   ├── Register.jsx
│   │   ├── HowToReach.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── index.html
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Ensure all assets are in place:**
   - Verify all image files are present in `/public/images/` directory
   - Required images:
     - `mkce_logo.png`
     - `mkce_25_years_logo.jpeg`
     - `iete_logo.png`
     - `eminence_logo.png`
     - `satellite.png`
     - `astronaut.png`
     - `mkce_drone_view.png`

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   - Navigate to `http://localhost:3000`

### Build for Production
3
```bash
npm run build
```

4he production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Features

### 1. **Hero Section with Satellite Animation**
- Three.js deep space background
- Animated satellite entrance
- Event details and key information
- Smooth scroll indicator

### 2. **Enhanced Signal Flow**
- Vertical signal beam with gradient effects
- Animated pulse core with expanding rings
- Particle effects for enhanced visualization
- Tracks scroll progress symbolically

### 3. **About Section**
- Event overview and objectives
- Key highlights in grid layout
- Professional, institutional tone

### 5. **Tracks Section**
- Track 1: Embedded & IoT
- Track 2: Analytwith SVG icons
- Professional, institutional tone

### 4. **Organizers Section**
- Staff coordinators (placeholder names)
- Student coordinators with contact details
- SVG icons for professional appearance
- Clean card-based layout

### 5. **Register Section**
- Registration fee, team size, prize pool
- SVG icons for professional look
- Hover effects on cards

### 6
##SVG icons for details
- Important guidelines
- Direct link to Google Form

### 7. **How to Reach Us**
- Google Maps embedded satellite view
- Direct link to Google Maps
- Address and directions cards
- SVG icons for information display

### 8tact information
- Footer with all logos

## 📱 Mobile Optimization

- Fully responsive design
- Reduced animation intensity on mobile
- `prefers-reduced-motion` support
- Touch-optimized interactions
- Enhanced background visibility on mobile
- Reduced animation intensity on mobile
- `prefers-reduced-motion` support
- Touch-optimized interactions
- Lightweight asset loading
- Optimized icon siz
- Lazy loading for heavy components
- No external map API costs
- Lazy loading for heavy components
- Optimized Three.js rendering
- Efficient animation handling
- SVG icons for crisp, scalable graphic
## ⚙️ Configuration

### Update Event Details

Edit the following files to update event information:

- **Hero.jsx** - Main event details
- **About.jsx** - Event description
- **Tracks.jsx** - Hackathon tracks
- **Organizers.jsx** - Coordinator details
- **Register.jsx** - Registration details and form link
- **Contact.jsx** - Contact information

### Update Staff Coordinators

In `src/components/Organizers.jsx`, update the `staffCoordinators` array:

```javascript
const staffCoordinators = [
  { name: "Dr. Faculty Name", designation: "Professor & HOD, ECE" },
  // Add more coordinators
]
```

### Update Map Location

In `src/components/HowToReach.jsx`, update coordinates:
the Google Maps link and embed URL to match your location.
## 🎨 Design System

### Colors
- **Space Dark:** `#0a0a0f`
- **Space Blue:** `#0d1b2a`
- **Signal Blue:** `#00d4ff`
- **Text Primary:** `#ffffff`
- **Text Secondary:** `#b8c5d6`

### Typography
- System fonts for optimal performance
- Sans-serif stack
- Responsive font sizing

## 📝 License

This project is created for MEDHA'26, Department of ECE, MKCE.

## 🤝 Support

For any issues or questions:
- **Sujeeth T** - 7010003931
- **Anuruth S** - 9361668624
- **Yogeswaran S** - 9778584251

---

**MEDHA'26** - Engineering Solutions for Sustainable Development
