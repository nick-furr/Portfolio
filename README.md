# Nick Furr - Portfolio

A professional portfolio website showcasing web development projects and services.

## Overview

This portfolio demonstrates modern web development skills through **nine projects** including **three complete full-stack React applications**:

### Modern React Applications (Full-Stack):
- **Restaurant React** - ⭐ Table booking with API backend & database
- **Salon React** - ⭐ Appointment scheduling with Prisma database
- **Gym React** - ⭐ Class booking & membership management

### Traditional Web Projects:
- **Restaurant** - Enhanced vanilla JS with animations
- **Hair Salon** - Modern CSS & responsive design
- **Gym** - Interactive JavaScript features

## Projects

### 1. Restaurant React App ⭐ NEW!
- **Features**: Full-stack booking system, menu filtering, form validation, API backend
- **Tech Stack**: Next.js 16, TypeScript, Tailwind CSS, React Hook Form, Zod, Vitest
- **Highlights**:
  - Server-side rendering (SSR) for better SEO
  - TypeScript for type safety
  - API routes for backend functionality
  - Comprehensive test coverage
  - Production-ready build
  - Professional code quality tools (ESLint, Prettier)
- **Location**: `restaurant-react/`
- **Run**: `cd restaurant-react && npm install && npm run dev`
- **Documentation**: See [restaurant-react/README.md](restaurant-react/README.md)

### 2. Salon React App (Ayesha) ⭐ NEW!
- **Features**: Full-stack appointment scheduling, service catalog, stylist selection, database integration
- **Tech Stack**: Next.js 16, TypeScript, Tailwind CSS, Prisma, SQLite, React Hook Form, Zod
- **Highlights**:
  - Complete appointment booking system with stylist selection
  - Service management with categories (Hair Coloring, Haircuts, Treatments)
  - Stylist profiles with availability scheduling
  - Customer database with appointment history
  - API routes for appointments, services, and stylists
  - Elegant, feminine design with rose/pink accents
  - Production-ready build
- **Location**: `salon-react/`
- **Run**: `cd salon-react && npm install && npm run dev`
- **Documentation**: See [salon-react/README.md](salon-react/README.md)

### 3. Gym React App (Ironclad Fitness) ⭐ NEW!
- **Features**: Full-stack class booking, membership management, schedule display, contact forms
- **Tech Stack**: Next.js 16, TypeScript, Tailwind CSS, Prisma, SQLite, React Hook Form, Zod
- **Highlights**:
  - Complete class booking system with schedule filtering
  - Membership plan selection and management
  - 15+ fitness classes across all days of the week
  - Coach profiles with specialties
  - Training programs (Strength & Power, Conditioning Lab, Hybrid Athlete)
  - API routes for bookings, classes, memberships, and contact
  - Dark theme with orange accent colors
  - Production-ready build
- **Location**: `gym-react/`
- **Run**: `cd gym-react && npm install && npm run dev`
- **Documentation**: See [gym-react/README.md](gym-react/README.md)

### 4. Restaurant Website (Original)
- **Features**: Table booking system, menu categories, operating hours
- **Tech Stack**: HTML5, CSS3, Vanilla JavaScript
- **Highlights**:
  - Real-time form validation
  - localStorage-based booking management
  - Responsive image gallery
  - Enhanced animations and interactions

### 5. Hair Salon (Ayesha - Original)
- **Features**: Service showcase, promotional offers, lookbook gallery
- **Tech Stack**: HTML5, CSS3
- **Highlights**:
  - Clean, modern design
  - Service-focused layout

### 6. Gym (Ironclad Fitness - Original)
- **Features**: Program details, class schedules, membership pricing
- **Tech Stack**: HTML5, CSS3, JavaScript
- **Highlights**:
  - Mobile-first responsive design
  - Interactive navigation
  - Modern animations and hover effects

## Setup & Installation

### Local Development

**For Traditional Projects (Static HTML/CSS/JS):**
1. Clone or download this repository
2. Open `index.html` in your browser to view the main portfolio
3. Navigate to individual projects:
   - Restaurant: `Restaurant/index.html`
   - Hair Salon: `Hair Salon/index.html`
   - Gym: `Gym/index.html`

No build process or dependencies required - pure HTML, CSS, and JavaScript.

**For Modern React Applications:**

1. **Restaurant React**:
   ```bash
   cd restaurant-react
   npm install
   npm run dev
   # Visit http://localhost:3000
   ```

2. **Salon React**:
   ```bash
   cd salon-react
   npm install
   npm run dev
   # Visit http://localhost:3000
   ```

3. **Gym React**:
   ```bash
   cd gym-react
   npm install
   npm run dev
   ```

Each React app includes:
- Database setup with Prisma
- Seed scripts for sample data
- Testing infrastructure
- Production build capability

## Project Structure

```
My Portfolio/
├── index.html              # Main portfolio page
├── assets/
│   ├── css/               # Main portfolio styles
│   ├── js/                # Main portfolio scripts
│   └── webfonts/          # Font Awesome icons
├── images/                # Portfolio images
│
├── restaurant-react/      # ⭐ Modern React app (Next.js + TypeScript)
│   ├── src/
│   │   ├── app/          # Next.js pages and API routes
│   │   ├── components/   # Reusable React components
│   │   ├── lib/          # Utilities and validations
│   │   └── types/        # TypeScript definitions
│   ├── prisma/
│   │   ├── schema.prisma # Database schema
│   │   └── dev.db        # SQLite database
│   ├── package.json
│   └── README.md
│
├── salon-react/           # ⭐ Modern React app (Ayesha Salon)
│   ├── src/
│   │   ├── app/          # Next.js pages and API routes
│   │   ├── components/   # React components
│   │   │   ├── sections/ # Page sections (Hero, Services, etc.)
│   │   │   └── ui/       # Reusable UI components
│   │   ├── lib/          # Utilities and validations
│   │   └── types/        # TypeScript definitions
│   ├── prisma/
│   │   ├── schema.prisma # Database schema (5 models)
│   │   ├── seed.ts       # Sample data
│   │   └── dev.db        # SQLite database
│   ├── package.json
│   └── README.md
│
├── gym-react/             # ⭐ Modern React app (Ironclad Fitness)
│   ├── src/
│   │   ├── app/          # Next.js pages and API routes
│   │   ├── components/   # React components
│   │   │   ├── sections/ # Page sections (Hero, Schedule, etc.)
│   │   │   └── ui/       # Reusable UI components
│   │   ├── lib/          # Utilities and validations
│   │   └── types/        # TypeScript definitions
│   ├── prisma/
│   │   ├── schema.prisma # Database schema (5 models)
│   │   ├── seed.ts       # Sample data
│   │   └── dev.db        # SQLite database
│   ├── package.json
│   └── README.md
│
├── Restaurant/            # Original vanilla JS project
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── images/
│
├── Hair Salon/            # Original hair salon project
│   ├── index.html
│   ├── css/
│   └── js/
│
└── Gym/                   # Original gym project
    ├── index.html
    ├── css/
    └── js/
```

## Features

### Modern React Applications
- Full-stack architecture with frontend and backend API routes
- Database integration with Prisma ORM and SQLite
- Type-safe development with TypeScript
- Form validation with React Hook Form and Zod schemas
- Server-side rendering (SSR) for optimal performance
- Production-ready builds with comprehensive testing
- Responsive design optimized for all devices

### Traditional Projects
- Responsive design that works on desktop, tablet, and mobile
- Enhanced CSS animations and transitions
- Interactive JavaScript features
- Smooth scrolling navigation
- Form validation and handling
- Clean, professional UI using modern CSS

## Technologies Used

### Modern Stack (All React Applications)
- **Next.js 16** - React framework with App Router and SSR
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Prisma ORM** - Database toolkit with type safety
- **SQLite** - Embedded relational database
- **React Hook Form** - Performant form state management
- **Zod** - TypeScript-first schema validation
- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting

### Traditional Stack (HTML/CSS/JS Projects)
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome icons
- Google Fonts
- jQuery (for main portfolio scroll effects)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Traditional Projects (Static)
These can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload the files to your hosting provider and ensure `index.html` is at the root.

### Modern React Applications
These Next.js applications can be deployed to:
- **Vercel** (recommended - zero-config deployment)
- **Netlify** (supports Next.js)
- **Railway** (with database support)
- Any platform supporting Node.js applications

Each React app includes:
- Production build scripts
- Database migrations with Prisma
- Environment variable configuration
- TypeScript compilation

## Contact

For inquiries or collaboration opportunities, please reach out through the contact section on the website.

## Credits

- Main portfolio template: [HTML5 UP - Photon](https://html5up.net)
- Icons: Font Awesome
- Fonts: Google Fonts (Montserrat, Space Grotesk)

## License

Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

---

**Last Updated**: January 2026
