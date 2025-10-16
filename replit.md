# Inheritas - Estate Planning Website

## Overview
Inheritas is a React-based website for estate planning services in the United Arab Emirates. The site provides information about wills, inheritance planning, and related legal services, with a focus on both Sharia-compliant and non-Muslim wills.

## Project Architecture
- **Framework**: React 19 with Vite 7
- **Routing**: React Router v7
- **UI Libraries**: Ant Design, React Bootstrap, React Icons
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Structure
```
├── public/              # Static assets (logos, SVGs)
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Reusable components (Header, Footer)
│   ├── sections/       # Page sections (About, Contact, Services, etc.)
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # React entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Pages & Routes
- `/` - Homepage (Intro, Needs, Help, Costs sections)
- `/wills-non-muslims` - Wills for Non-Muslims
- `/sharia-wills` - Sharia-Compliant Wills
- `/about` - About Us
- `/services` - Services
- `/contact` - Contact

## Development Setup
- **Dev Server**: Runs on port 5000 using Vite
- **Host**: Configured for 0.0.0.0 to work with Replit's proxy
- **HMR**: WebSocket configured for Replit environment

## Deployment
- **Type**: Autoscale deployment (stateless website)
- **Build**: `npm run build`
- **Run**: `npm run preview`

## Recent Changes (October 16, 2025)
- Configured Vite for Replit environment
- Set up development server on port 5000
- Configured HMR (Hot Module Reload) for Replit's WebSocket proxy
- Set up deployment configuration for production publishing
