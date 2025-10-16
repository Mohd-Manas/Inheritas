# Inheritas - Estate Planning Website

## Overview
Inheritas is a professional React-based website for estate planning services in the United Arab Emirates. The site provides information about wills, inheritance planning, and related legal services, with a focus on both Sharia-compliant and non-Muslim wills.

## Tech Stack
- **Framework**: React 19 with Vite 7
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v7
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **SEO**: React Helmet Async
- **UI Libraries**: React Icons
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Architecture
```
├── public/              # Static assets (logos, SVGs)
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Reusable components
│   │   ├── Layout/     # Layout wrapper with animations
│   │   ├── Header/     # Modern header with animations
│   │   ├── Footer/     # Professional footer
│   │   ├── UI/         # Reusable UI components (Button, Card, Section)
│   │   ├── ErrorBoundary/  # Error handling
│   │   ├── Loading/    # Loading states
│   │   └── SEO/        # SEO and meta tags
│   ├── sections/       # Page sections (About, Contact, Services, etc.)
│   ├── utils/          # Utility functions (cn for className merging)
│   ├── App.jsx         # Main app with routing, lazy loading, error boundaries
│   ├── main.jsx        # React entry point with HelmetProvider
│   └── index.css       # Tailwind directives and custom styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind design tokens
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## Key Features

### Modern UI/UX
- **Tailwind CSS Design System**: Custom color palette, typography, and component styles
- **Framer Motion Animations**: Smooth page transitions, scroll animations, and micro-interactions
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Professional Components**: Reusable Button, Card, Section components
- **Modern Header**: Animated navigation with mobile drawer

### Performance Optimizations
- **Code Splitting**: Lazy loading for all route components
- **Suspense Loading**: Loading states for better UX
- **Optimized Images**: Proper image sizing and optimization
- **Error Boundaries**: Graceful error handling

### Forms & Validation
- **Contact Form**: Professional form with React Hook Form
- **Zod Validation**: Type-safe form validation
- **Success States**: Animated success messages
- **Error Handling**: Clear error messages and validation feedback

### SEO & Accessibility
- **Meta Tags**: Dynamic SEO with React Helmet
- **Structured Data**: JSON-LD for search engines
- **Semantic HTML**: Proper HTML5 semantics
- **ARIA Labels**: Accessibility attributes
- **Keyboard Navigation**: Full keyboard support

## Pages & Routes
- `/` - Homepage (Intro, Needs, Help, Costs sections)
- `/wills-non-muslims` - Wills for Non-Muslims
- `/sharia-wills` - Sharia-Compliant Wills
- `/about` - About Us
- `/services` - Services
- `/contact` - Contact Form

## Development Setup
- **Dev Server**: Runs on port 5000 using Vite
- **Host**: Configured for 0.0.0.0 to work with Replit's proxy
- **HMR**: WebSocket configured for Replit environment

## Deployment
- **Type**: Autoscale deployment (stateless website)
- **Build**: `npm run build`
- **Run**: `npm run preview`

## Design System

### Colors
- **Primary**: Blue palette for main brand colors
- **Secondary**: Purple palette for accents
- **Neutral**: Gray palette for text and backgrounds

### Typography
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (paragraphs)
- **Font Weights**: 300-800 range

### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Hoverable cards with shadows
- **Sections**: Consistent padding and spacing
- **Inputs**: Styled form fields with focus states

## Recent Changes (October 16, 2025)

### Initial Setup
- Configured Vite for Replit environment
- Set up development server on port 5000
- Configured HMR for Replit's WebSocket proxy

### Major Upgrades
- **Tailwind CSS Integration**: Added Tailwind v3 with custom design tokens
- **Component Library**: Created reusable UI components (Button, Card, Section)
- **Layout System**: Implemented Layout wrapper with Framer Motion animations
- **Modern Header/Footer**: Upgraded with Tailwind styling and animations
- **Error Boundaries**: Added error handling with graceful fallbacks
- **Loading States**: Implemented loading spinners and suspense
- **Form Validation**: Integrated React Hook Form + Zod
- **SEO Optimization**: Added React Helmet with meta tags and structured data
- **Code Splitting**: Implemented lazy loading for performance
- **Accessibility**: Added ARIA labels, semantic HTML, keyboard navigation

### Section Upgrades
- **Introduction**: Modern hero with animations and CTA
- **Needs**: Card-based layout with icons
- **Help**: FAQ accordion with smooth animations
- **Costs**: Service scope display with CTA
- **Contact**: Professional form with validation

## User Preferences
- Clean, modern design aesthetic
- Professional business appearance
- Focus on user trust and credibility
- Mobile-responsive layout
- Smooth animations and transitions
