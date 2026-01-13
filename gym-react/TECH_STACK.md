# Technology Stack

This document provides a comprehensive overview of the technologies, libraries, and tools used in the Ironclad Fitness application.

## Core Technologies

### Framework & Runtime
- **Next.js 16.1.1**: React framework with App Router, Server Components, and API Routes
- **React 19.2.3**: UI library with latest concurrent features
- **Node.js**: JavaScript runtime (18+)
- **TypeScript 5**: Static type checking and enhanced developer experience

### Styling
- **Tailwind CSS 4**: Utility-first CSS framework with custom theme configuration
- **PostCSS**: CSS preprocessing and transformations
- **CSS Variables**: Dynamic theming with CSS custom properties

### Database & ORM
- **SQLite**: Lightweight relational database (development)
- **Prisma 5.22.0**: Next-generation ORM for type-safe database access
- **@prisma/client**: Auto-generated type-safe database client

### Form Management & Validation
- **React Hook Form 7.71.0**: Performant form library with minimal re-renders
- **Zod 4.3.5**: TypeScript-first schema validation
- **@hookform/resolvers 5.2.2**: Integration between React Hook Form and Zod

### Utilities
- **clsx 2.1.1**: Conditional className construction
- **date-fns 4.1.0**: Modern date utility library

## Development Tools

### Code Quality
- **ESLint 9**: Linting for JavaScript and TypeScript
- **eslint-config-next**: Next.js-specific ESLint configuration
- **Prettier 3.7.4**: Opinionated code formatter
- **prettier-plugin-tailwindcss 0.7.2**: Automatic Tailwind class sorting

### Testing
- **Vitest 4.0.17**: Fast unit test framework with Vite
- **@testing-library/react 16.3.1**: React component testing utilities
- **@testing-library/jest-dom 6.9.1**: Custom Jest matchers for DOM
- **@testing-library/user-event 14.6.1**: User interaction simulation
- **@vitejs/plugin-react 5.1.2**: Vite plugin for React support
- **jsdom 27.4.0**: DOM implementation for testing

### Build Tools
- **@tailwindcss/postcss 4**: Tailwind CSS PostCSS integration
- **PostCSS**: CSS transformation ecosystem
- **TypeScript Compiler**: Type checking and compilation

## Architecture Patterns

### Frontend Architecture
- **Server Components**: Default for improved performance
- **Client Components**: Used for interactivity with "use client" directive
- **API Routes**: Backend endpoints in `/app/api`
- **File-based Routing**: Next.js App Router convention

### State Management
- **React Hooks**: useState, useEffect for local state
- **React Hook Form**: Form state management
- **Server State**: Prisma queries in API routes

### Data Flow
```
Client Component → API Route → Prisma → SQLite
     ↓                ↓
   Zod Validation   Error Handling
     ↓                ↓
  Type Safety      JSON Response
```

### Component Structure
```
Page (Server Component)
  └── Section Components (Client)
      └── UI Components (Presentational)
          └── Base HTML Elements
```

## Design Patterns

### Component Patterns
- **Compound Components**: Card with CardHeader, CardContent, CardFooter
- **Render Props**: Form components with flexible rendering
- **Custom Hooks**: Shared logic extraction
- **Forward Refs**: DOM access in UI components

### Code Organization
- **Feature-based**: Components grouped by feature (sections/)
- **Atomic Design**: UI components at atomic level (ui/)
- **Separation of Concerns**: Business logic in lib/, types in types/
- **Single Responsibility**: Each component has one clear purpose

### Error Handling
- **Try-Catch Blocks**: Async operation error handling
- **Zod Validation**: Runtime type validation with clear error messages
- **HTTP Status Codes**: RESTful error responses
- **User Feedback**: Toast messages and form error states

## Database Schema Design

### Relationships
```
User 1:N ClassBooking
User 1:N Membership
Class 1:N ClassBooking
```

### Indexes
- User.email (unique)
- ClassBooking [userId, classId, date] (unique)
- ClassBooking.date (query optimization)
- Membership.userId (query optimization)

### Constraints
- Cascade deletes for data integrity
- Required fields for data validation
- Enum-like strings for status fields

## Performance Optimizations

### Build Optimizations
- **Tree Shaking**: Removes unused code
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component (if used)
- **Font Optimization**: Next.js font loading

### Runtime Optimizations
- **Server Components**: Reduced JavaScript sent to client
- **Suspense Boundaries**: Streaming and partial rendering
- **React 19 Features**: Automatic batching and transitions
- **CSS-in-CSS**: Tailwind generates minimal CSS

### Database Optimizations
- **Indexed Queries**: Fast lookups on common queries
- **Prisma Query Optimization**: Efficient SQL generation
- **Connection Pooling**: Reuse database connections
- **Selective Loading**: Only fetch needed fields

## Security Measures

### Input Validation
- **Zod Schemas**: Runtime validation of all user inputs
- **Type Safety**: TypeScript prevents type-related bugs
- **Sanitization**: Prisma prevents SQL injection

### API Security
- **CSRF Protection**: Next.js built-in protection
- **Environment Variables**: Sensitive data in .env
- **Error Messages**: Generic errors to prevent information leakage

## Accessibility Features

### ARIA Support
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Focus Management**: Keyboard navigation
- **Color Contrast**: WCAG AA compliant colors

### Form Accessibility
- **Label Association**: Proper label-input relationships
- **Error Announcements**: Clear error messages
- **Required Fields**: Visual and semantic indicators
- **Validation Feedback**: Real-time error display

## Browser Support

### Modern Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

### JavaScript Features
- ES2020+ syntax
- Async/await
- Optional chaining
- Nullish coalescing

## Development Workflow

### Scripts
```bash
# Development
npm run dev          # Start dev server with hot reload
npm run type-check   # TypeScript type checking

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format code with Prettier

# Testing
npm run test         # Run Vitest tests
npm run test:ui      # Run tests with UI

# Database
npm run db:push      # Push schema changes
npm run db:generate  # Generate Prisma Client
npm run db:studio    # Open Prisma Studio GUI

# Production
npm run build        # Production build
npm run start        # Start production server
```

### Git Workflow
1. Feature branches from main
2. Commit with descriptive messages
3. Pull request with code review
4. Merge to main after approval

## Deployment

### Build Process
```bash
npm run build
```

### Output
- `.next/`: Production build output
- `out/`: Static export (if using static export)

### Environment Requirements
- Node.js 18+
- Database connection
- Environment variables configured

### Hosting Platforms
- **Vercel**: Recommended (Zero-config deployment)
- **Netlify**: Full support with build plugins
- **Railway**: Database + hosting
- **Docker**: Custom containerized deployment

## Future Enhancements

### Potential Additions
- Real-time booking updates (WebSockets)
- Payment integration (Stripe)
- Email notifications (SendGrid/Resend)
- Mobile app (React Native)
- Admin dashboard
- Analytics integration
- Social authentication
- Progressive Web App (PWA)

### Scalability Considerations
- Migrate to PostgreSQL for production
- Implement caching (Redis)
- Add CDN for static assets
- Implement rate limiting
- Add monitoring (Sentry)

---

Last Updated: January 2026
