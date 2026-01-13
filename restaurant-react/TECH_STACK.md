# Technology Stack & Architecture

This document outlines the technical decisions, architecture, and modern development practices used in this project.

## Core Technologies

### Frontend Framework: Next.js 16
- **App Router**: Modern file-based routing with React Server Components
- **Server-Side Rendering (SSR)**: Improved SEO and initial page load performance
- **API Routes**: Built-in backend functionality without separate server setup
- **Image Optimization**: Automatic image optimization with next/image
- **Code Splitting**: Automatic route-based code splitting for optimal bundle size

### Language: TypeScript
- **Type Safety**: Catch errors at compile-time instead of runtime
- **Better IDE Support**: Enhanced autocomplete and intellisense
- **Self-Documenting Code**: Types serve as inline documentation
- **Refactoring Confidence**: Safe refactoring with compiler checks

### Styling: Tailwind CSS
- **Utility-First**: Rapid development with pre-built utility classes
- **Design System**: Consistent spacing, colors, and typography
- **Responsive**: Mobile-first responsive design utilities
- **Production Optimization**: Automatic purging of unused styles
- **JIT Compiler**: Just-in-time compilation for faster builds

## Form Management & Validation

### React Hook Form
- **Performance**: Uncontrolled components minimize re-renders
- **Built-in Validation**: Integrated form validation
- **TypeScript Integration**: Fully typed form data
- **Small Bundle**: Minimal impact on bundle size (~8KB)

### Zod Schema Validation
- **Runtime Type Checking**: Validates data at runtime
- **Type Inference**: Automatic TypeScript types from schemas
- **Composable**: Reusable validation schemas
- **Clear Error Messages**: User-friendly validation feedback

## Testing Stack

### Vitest
- **Fast**: Native ESM support, instant hot module replacement
- **Jest Compatible**: Familiar API for developers
- **TypeScript First**: Built-in TypeScript support
- **UI Mode**: Interactive test dashboard

### React Testing Library
- **User-Centric**: Test components as users interact with them
- **Accessibility**: Encourages accessible component design
- **Best Practices**: Discourages testing implementation details

## Code Quality Tools

### ESLint
- **Code Consistency**: Enforces coding standards
- **Error Prevention**: Catches common mistakes
- **Next.js Rules**: Next.js-specific linting rules included

### Prettier
- **Code Formatting**: Automatic code formatting
- **Team Consistency**: Eliminates style debates
- **Tailwind Plugin**: Automatic class sorting for Tailwind

## Architecture Patterns

### Component Structure
```
components/
├── ui/              # Reusable UI primitives
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Card.tsx
└── sections/        # Page sections/containers
    ├── Header.tsx
    ├── Hero.tsx
    └── BookingForm.tsx
```

### Type System
- **Shared Types**: Centralized type definitions in `types/`
- **Schema-First**: Zod schemas generate TypeScript types
- **Strict Mode**: TypeScript strict mode enabled

### API Design
- **RESTful**: Standard REST API conventions
- **Type-Safe**: Validated with Zod schemas
- **Error Handling**: Proper error responses and status codes

## Performance Optimizations

1. **Code Splitting**: Automatic route-based splitting
2. **Tree Shaking**: Unused code removed in production
3. **Image Optimization**: Next.js automatic image optimization
4. **CSS Purging**: Tailwind removes unused styles
5. **Static Generation**: Pre-rendered pages where possible

## Development Experience (DX)

### Fast Refresh
- Instant feedback on code changes
- Preserves component state during edits

### Type Checking
- Real-time type errors in IDE
- Pre-commit type validation

### Testing Workflow
```bash
npm test          # Run tests in watch mode
npm test:ui       # Interactive test UI
npm run type-check # TypeScript validation
```

### Code Quality Workflow
```bash
npm run lint      # Check for issues
npm run lint:fix  # Auto-fix issues
npm run format    # Format all files
```

## Deployment Ready

### Production Build
```bash
npm run build     # Optimized production build
npm start         # Start production server
```

### Platform Support
- **Vercel**: Zero-config deployment (recommended)
- **Netlify**: Full SSR support
- **Docker**: Containerized deployment
- **Node.js**: Any Node.js hosting

## Security Considerations

1. **Input Validation**: All form inputs validated server-side
2. **XSS Protection**: React automatic escaping
3. **CSRF Protection**: API routes with proper headers
4. **Environment Variables**: Sensitive data in .env files

## Scalability

### Easy to Extend
- Add new pages: Create file in `app/`
- Add new API routes: Create file in `app/api/`
- Add new components: Follow existing pattern
- Add new tests: Co-located with components

### Database Ready
Current in-memory storage can be replaced with:
- **PostgreSQL** with Prisma ORM
- **MongoDB** with Mongoose
- **Supabase** for serverless database
- **Firebase** for real-time features

## Learning Resources

Each technology was chosen for industry relevance:

- **Next.js**: Most popular React framework (2026)
- **TypeScript**: Industry standard (>90% of new projects)
- **Tailwind**: Fastest-growing CSS framework
- **React Hook Form**: Most popular form library
- **Vitest**: Modern testing, replacing Jest

## Comparison to Original Project

| Feature | Original | React Version |
|---------|----------|---------------|
| Framework | Vanilla JS | Next.js + React |
| Type Safety | None | TypeScript |
| Testing | None | Vitest + RTL |
| Validation | Basic regex | Zod schemas |
| State Management | localStorage | React state + API |
| Build Process | None | Next.js compiler |
| Styling | Manual CSS | Tailwind CSS |
| Code Quality | None | ESLint + Prettier |

## Professional Impact

This rebuild demonstrates:
- ✅ Modern framework expertise
- ✅ Type-safe development practices
- ✅ Component-driven architecture
- ✅ Automated testing mindset
- ✅ Production-ready code quality
- ✅ API development skills
- ✅ Professional tooling setup

---

**Last Updated**: January 2026
