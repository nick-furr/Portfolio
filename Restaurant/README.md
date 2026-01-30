# La Maison - Fine Dining Restaurant

A modern React-based restaurant website showcasing fine dining experience with interactive features.

**Live Demo:** [nickfurr.com/Restaurant](https://nickfurr.com/Restaurant/)

## Features

- **Interactive Menu** - Tab-based menu navigation with React state management
- **Table Booking System** - Form with validation, date/time constraints, and localStorage persistence
- **Responsive Design** - Mobile-friendly layout with elegant animations
- **Modern Stack** - Built with React 18 + Vite

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI Components |
| Vite | Build tool & dev server |
| Vanilla CSS | Styling (CSS variables, animations) |
| localStorage | Booking data persistence |

## Project Structure

```
Restaurant/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation with smooth scroll
│   │   ├── Hero.jsx         # Landing section
│   │   ├── About.jsx        # Restaurant story
│   │   ├── Menu.jsx         # Interactive menu tabs
│   │   ├── BookingForm.jsx  # Reservation form with validation
│   │   ├── Reservations.jsx # Booking section
│   │   ├── Testimonials.jsx # Customer reviews
│   │   ├── PrivateDining.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── App.css              # All styles
├── index.html
└── vite.config.js
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deployment

Built files are in `/assets` folder. Push to GitHub and Netlify auto-deploys.

---

*Part of [Nick Furr's Portfolio](https://nickfurr.com)*
