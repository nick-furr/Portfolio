# Cuisine Restaurant - Modern React Application

A professional restaurant booking system built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Form Management**: React Hook Form with Zod validation
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier

## Features

- Modern, responsive UI design
- Interactive table booking system with real-time validation
- TypeScript for type safety
- Server-side rendering (SSR) for better SEO
- API routes for backend functionality
- Component-based architecture
- Comprehensive test coverage
- Accessibility best practices

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
npm run build
npm start
```

### Testing

```bash
# Run tests
npm test

# Run tests with UI
npm test:ui

# Type checking
npm run type-check
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

## Project Structure

```
restaurant-react/
├── src/
│   ├── app/                 # Next.js app router pages
│   │   ├── api/            # API routes
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── sections/      # Page sections
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript types
│   ├── hooks/             # Custom React hooks
│   └── test/              # Test setup
├── public/                # Static assets
└── [config files]        # Configuration files
```

## Key Technologies Explained

### Next.js App Router
Modern React framework with file-based routing, server components, and built-in optimizations.

### TypeScript
Provides static type checking to catch errors during development and improve code quality.

### Tailwind CSS
Utility-first CSS framework for rapid UI development with consistent design.

### React Hook Form + Zod
Performant form handling with schema-based validation for type-safe forms.

### Vitest
Fast, modern testing framework compatible with Vite and Jest APIs.

## Deployment

This app is ready to deploy to:
- **Vercel** (recommended - optimized for Next.js)
- **Netlify**
- **Any Node.js hosting**

Simply connect your Git repository and deploy!

## Contributing

This is a portfolio project. For suggestions or issues, please create an issue or pull request.

## License

MIT License - Free to use for personal and commercial projects.

---

**Built by Nick Furr** | [Portfolio](https://github.com/nick-furr/Portfolio)
