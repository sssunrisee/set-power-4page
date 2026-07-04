# SET Power - 4-Page Website

Corporate website for SET Power - Smart Engineering Technologies

## Features

- 4-page SPA with React Router
- Fully responsive design
- Framer Motion animations
- Contact form with backend API
- Documents and News sections
- SET Academy courses catalog
- Partnership formats

## Tech Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Router

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3002

## Build

```bash
npm run build
```

## Deployment

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Set Source to "GitHub Actions"
3. Push to main branch - workflow will auto-deploy

### Custom Domain (testing.sungroup.space)

1. Add CNAME record pointing to `sssunrisee.github.io`
2. Add `testing.sungroup.space` to GitHub Pages custom domains
3. Enable HTTPS enforcement

## Backend API

Backend is hosted on `testing.sungroup.space/api`

- `POST /api/contact` - Contact form submission
- `GET /api/documents` - Documents list
- `GET /api/news` - News articles

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components (if needed)
├── api.ts         # API client
├── App.tsx        # Main app with routing
└── main.tsx       # Entry point
```

## License

© 2026 SET Power. All rights reserved.
