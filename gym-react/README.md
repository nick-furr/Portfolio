# Ironclad Fitness - Gym Booking Application

A modern, production-ready gym booking and membership management application built with Next.js 16, React 19, and TypeScript. Features a dark theme design optimized for strength and conditioning facilities.

## Features

### For Members
- **Browse Programs**: Explore Strength & Power, Conditioning Lab, and Hybrid Athlete training programs
- **View Class Schedule**: See weekly class schedules organized by day with coach information
- **Book Classes**: Reserve spots in upcoming classes with capacity management
- **Meet Coaches**: Learn about our expert coaching staff and their specialties
- **Membership Plans**: Choose from three membership tiers with clear pricing and features
- **Free Trial Signup**: Contact form for scheduling a 7-day free trial

### For Administrators
- **Class Management**: Full CRUD operations for gym classes via API
- **Booking Management**: Track and manage class bookings with capacity limits
- **Membership Management**: Handle member subscriptions and billing
- **Contact Submissions**: View and respond to free trial requests

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Database**: SQLite with Prisma ORM
- **Form Handling**: React Hook Form + Zod validation
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + Prettier

See [TECH_STACK.md](TECH_STACK.md) for detailed information.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gym-react
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Initialize the database:
```bash
npm run db:push
npm run db:generate
```

5. Seed the database with sample classes:
```bash
npx tsx prisma/seed.ts
```

6. Start the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests with Vitest
- `npm run db:push` - Push Prisma schema to database
- `npm run db:studio` - Open Prisma Studio
- `npm run db:generate` - Generate Prisma Client

## Project Structure

```
gym-react/
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.ts            # Database seed script
├── public/                # Static assets
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   │   ├── bookings/  # Class booking endpoints
│   │   │   ├── classes/   # Class schedule endpoints
│   │   │   ├── contact/   # Contact form endpoints
│   │   │   └── memberships/ # Membership endpoints
│   │   ├── globals.css    # Global styles & theme
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── sections/      # Page sections
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Programs.tsx
│   │   │   ├── Schedule.tsx
│   │   │   ├── Coaches.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/            # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Input.tsx
│   │       ├── Select.tsx
│   │       └── Textarea.tsx
│   ├── lib/
│   │   ├── prisma.ts      # Prisma client
│   │   ├── utils.ts       # Utility functions
│   │   └── validations.ts # Zod schemas
│   └── types/
│       └── index.ts       # TypeScript types
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## API Endpoints

### Classes
- `GET /api/classes` - Get all classes
- Returns array of class objects with schedule information

### Bookings
- `POST /api/bookings` - Book a class
- `GET /api/bookings` - Get all bookings
- Validates capacity and prevents duplicate bookings

### Memberships
- `POST /api/memberships` - Sign up for membership
- `GET /api/memberships` - Get all memberships
- Manages membership plans and billing

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions
- Captures free trial requests

## Database Schema

### Models
- **User**: Member information and authentication
- **Class**: Class schedules with coach and category
- **ClassBooking**: Class reservations with capacity management
- **Membership**: Membership plans and billing status
- **ContactSubmission**: Free trial and inquiry submissions

See `prisma/schema.prisma` for complete schema.

## Design System

### Colors
- **Primary Orange**: `#ff7b3d` - Call-to-action buttons and accents
- **Primary Dark**: `#d7642f` - Hover states
- **Background**: `#050505` - Main dark background
- **Card**: `#0e0e10` - Card backgrounds
- **Card Alt**: `#151519` - Alternate card backgrounds
- **Text**: `#f5f5f5` - Primary text color
- **Muted**: `#8b8c93` - Secondary text color
- **Border**: `rgba(255, 255, 255, 0.08)` - Subtle borders

### Typography
- **Display Font**: Space Grotesk - Headings and emphasis
- **Sans Font**: Montserrat - Body text and UI

### Components
All components follow a consistent design pattern with dark theme support, smooth transitions, and accessibility features.

## Testing

Run the test suite:
```bash
npm run test
```

Run tests with UI:
```bash
npm run test:ui
```

## Deployment

1. Build the application:
```bash
npm run build
```

2. Test the production build locally:
```bash
npm run start
```

3. Deploy to your hosting platform (Vercel, Netlify, etc.)

### Environment Variables for Production
- `DATABASE_URL` - Production database connection string
- `NODE_ENV` - Set to "production"

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Code Quality

This project maintains high code quality standards:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Zod for runtime validation
- Comprehensive error handling
- Responsive design
- Accessibility features

## License

This project is part of a portfolio and is available for demonstration purposes.

## Contact

For questions or feedback about this project, please reach out through the contact form in the application.

---

Built with Next.js, React, and TypeScript. Designed for Ironclad Fitness.
