# Long Barn Hay

A clean, professional web application for Long Barn Hay built with Next.js 14, TypeScript, and Tailwind CSS.

## Design

- Dark theme with red/grey/black/chrome aesthetic
- Minimal navigation (Products, Delivery, Quote, Contact)
- Mobile-responsive
- Accessible forms

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                   # Pages
│   ├── page.tsx          # Home
│   ├── products/         # Products
│   ├── delivery/         # Delivery radius checker
│   ├── quote/            # Quote request
│   └── contact/          # Contact
├── components/
│   ├── ui/               # Button, Input, etc.
│   ├── layout/           # Header, Footer
│   └── forms/            # Forms
└── lib/
    ├── siteConfig.ts     # All content config
    ├── geocoding.ts      # Distance calculation
    └── validation.ts     # Zod schemas
```

## Configuration

Edit `src/lib/siteConfig.ts` for:
- Company info and address
- Products and descriptions
- Navigation items
- Delivery radius

## Before Production

1. **Coordinates** - Update `coordinates` in siteConfig.ts
2. **Geocoding** - Replace stub in `geocoding.ts` with real API
3. **Email** - Replace placeholder in `actions.ts` with email service
4. **Photos** - Add actual product images
