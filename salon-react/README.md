# Ayesha Salon - Professional Hair Care & Styling

A modern, full-stack hair salon booking application built with Next.js 15, React 19, TypeScript, Prisma, and SQLite. Features a beautiful rose-pink themed UI, online appointment booking, and comprehensive service management.

## Features

- **Online Booking System** - Customers can book appointments online with service and stylist selection
- **Service Management** - Display all available services with pricing and duration
- **Stylist Profiles** - Showcase your team with photos, bios, and specialties
- **Responsive Design** - Beautiful on all devices from mobile to desktop
- **Form Validation** - Robust client and server-side validation using Zod
- **Database Integration** - Full CRUD operations with Prisma ORM and SQLite
- **Type Safety** - 100% TypeScript for enhanced developer experience
- **Modern UI** - Elegant rose/pink color scheme with smooth animations
- **SEO Optimized** - Proper metadata and semantic HTML for search engines

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI**: React 19, TypeScript, Tailwind CSS 4
- **Database**: Prisma ORM with SQLite
- **Forms**: React Hook Form with Zod validation
- **Testing**: Vitest with React Testing Library
- **Code Quality**: ESLint, Prettier

See [TECH_STACK.md](./TECH_STACK.md) for detailed architecture information.

## Prerequisites

- Node.js 18+
- npm or yarn

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Initialize Database

Generate Prisma client and create the database:

```bash
npm run prisma:generate
npm run prisma:db:push
```

### 4. Seed Database

Populate the database with sample services, stylists, and availability:

```bash
npm run prisma:seed
```

This creates:
- 8 services across different categories
- 3 stylists with specialties
- Availability schedules (Mon-Sat, 9 AM - 6 PM)

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI
- `npm run type-check` - Check TypeScript types
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run Prisma migrations
- `npm run prisma:studio` - Open Prisma Studio (database GUI)
- `npm run prisma:seed` - Seed database with sample data

## Project Structure

```
salon-react/
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── seed.ts            # Database seeding script
├── public/                # Static assets
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   │   ├── appointments/
│   │   │   ├── services/
│   │   │   └── stylists/
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── sections/      # Page sections
│   │   │   ├── About.tsx
│   │   │   ├── Booking.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Stylists.tsx
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
│   ├── test/              # Test files
│   │   ├── setup.ts
│   │   └── utils.test.ts
│   └── types/
│       └── index.ts       # TypeScript types
├── .env                   # Environment variables
├── .prettierrc            # Prettier config
├── vitest.config.ts       # Vitest config
└── package.json
```

## API Routes

### GET /api/services
Returns all active services with pricing and duration.

### GET /api/stylists
Returns all active stylists with their specialties and availability.

### POST /api/appointments
Creates a new appointment. Requires:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "serviceId": "service-id",
  "stylistId": "stylist-id",
  "date": "2024-12-25",
  "time": "10:00",
  "notes": "Special requests"
}
```

### GET /api/appointments
Returns all appointments with related customer, service, and stylist data.

## Database Schema

### Service
- name, description, duration, price, category
- Tracks active status for enabling/disabling services

### Stylist
- name, title, bio, specialties, imageUrl
- Availability schedule (days and times)

### Customer
- name, email (unique), phone
- Auto-created on first booking

### Appointment
- Links customer, service, and stylist
- Tracks date, time, duration, price, status
- Optional notes field

### StylistAvailability
- Defines working hours by day of week
- Links to specific stylist

## Customization

### Changing Colors
The app uses a rose/pink color scheme. To change:
1. Search for `rose-` and `pink-` in component files
2. Replace with your desired Tailwind color
3. Update `bg-gradient-to-r from-rose-400 to-pink-400` decorative elements

### Adding Services
1. Add via Prisma Studio: `npm run prisma:studio`
2. Or modify `prisma/seed.ts` and re-seed

### Modifying Business Hours
Update `StylistAvailability` records in database or seed file.

## Testing

Run the test suite:

```bash
npm run test
```

Tests include:
- Utility function tests (formatting, time slots, etc.)
- Component tests (can be extended)

## Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy

**Note**: For production, consider using PostgreSQL instead of SQLite.

### Environment Variables for Production

```env
DATABASE_URL="your-production-database-url"
NEXT_PUBLIC_APP_URL="https://yourdomain.com"
```

## Best Practices

1. **Type Safety** - All components and functions are fully typed
2. **Error Handling** - Comprehensive error handling in API routes
3. **Validation** - Zod schemas for runtime validation
4. **Accessibility** - Semantic HTML and ARIA labels where needed
5. **Performance** - Optimized images, code splitting, lazy loading
6. **SEO** - Proper metadata, Open Graph tags, semantic markup

## License

MIT License - feel free to use this project for your own salon or business!

---

**Made with ❤️ for beautiful hair and elegant code**
