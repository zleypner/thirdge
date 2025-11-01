# Third Age - Web3 Innovation & Blockchain Solutions

Third Age is a pioneering Web3 company dedicated to building the decentralized future through innovative products, professional services, and blockchain education.

## About Third Age

We empower individuals and organizations to embrace the decentralized economy by:

- **Building Products**: Creating cutting-edge Web3 applications and decentralized solutions that leverage blockchain technology for real-world use cases
- **Offering Services**: Providing comprehensive blockchain development, smart contract auditing, tokenomics design, and Web3 consulting services
- **Enabling Instant Payments**: Implementing fast, secure, and borderless payment systems using blockchain technology
- **Education**: Delivering in-depth blockchain education, workshops, and training programs to help developers and businesses understand and adopt Web3 technologies
- **Decentralization**: Championing decentralization principles to create more transparent, secure, and user-owned digital ecosystems

## Technology Stack

This website is built with modern web technologies:

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - UI library with hooks
- **CSS3** - Custom animations and cyberpunk aesthetics

## Features

### Design
- **Cyberpunk Futuristic UI** with high contrast neon aesthetics
- **Color Palette**: Neon Blue (#00E1FF), Deep Navy (#0A0F1F), Black (#000000)
- **Glowing Neon Effects** on text, borders, and buttons
- **Smooth Animations** including fade-ins, hover glows, and parallax scrolling

### Sections
1. **Hero Section** - Full-screen introduction with animated title and glitch effect
2. **What We Offer** - Three service cards with hover effects
3. **DevConnect + Hackathon** - Information about participation
4. **Featured Product: BrewFi** - Showcase of award-winning Web3 app
5. **Why Web3 Matters** - Bold statement section
6. **Contact Section** - Call-to-action with contact button

### Interactive Features
- Smooth scroll navigation with React hooks
- Parallax effects on hero section
- Intersection Observer animations for sections
- Glitch effect on hero title
- Floating particle background
- Custom cursor glow effect (desktop only)
- Responsive mobile menu with hamburger toggle
- Hover animations on all interactive elements

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd /path/to/thirdge
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

Create an optimized production build:
```bash
npm run build
# or
yarn build
```

Start the production server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
thirdge/
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles and animations
├── components/
│   ├── Navigation.tsx   # Navigation bar with mobile menu
│   ├── Hero.tsx         # Hero section with parallax
│   ├── Services.tsx     # Services grid
│   ├── DevConnect.tsx   # DevConnect section
│   ├── BrewFi.tsx       # BrewFi product showcase
│   ├── WhyWeb3.tsx      # Why Web3 section
│   ├── Contact.tsx      # Contact section with footer
│   ├── CursorGlow.tsx   # Custom cursor effect
│   └── ParticleBackground.tsx  # Particle animation
├── public/              # Static assets
├── .gitignore
├── next.config.mjs      # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── package.json
└── README.md
```

## Customization

### Update Content
Edit the component files in the `components/` directory to modify:
- Section text content
- Navigation links
- Contact email address
- Company information

### Modify Colors
Edit `app/globals.css` variables at the top:
```css
:root {
    --neon-blue: #00E1FF;
    --deep-navy: #0A0F1F;
    --black: #000000;
}
```

### Adjust Animations
Modify component files to:
- Change parallax speed in `Hero.tsx`
- Adjust particle count in `ParticleBackground.tsx`
- Modify glitch effect timing in `Hero.tsx`

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Server-side rendering with Next.js
- Optimized CSS animations using GPU acceleration
- Intersection Observer for efficient scroll animations
- Code splitting and lazy loading
- Type-safe development with TypeScript

## Typography

Using Google Fonts:
- **Orbitron** - Display headings (cyberpunk aesthetic)
- **Rajdhani** - Body text and navigation

## Responsive Breakpoints

- Desktop: 1400px+
- Tablet: 768px - 1399px
- Mobile: < 768px
- Small mobile: < 480px

## Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Other Platforms
You can also deploy to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting platform

## Contact

For inquiries about Third Age services, blockchain education programs, or partnership opportunities, use the contact button on the website or reach out directly.

---

© 2025 Third Age. Building the decentralized future.
