# Long Barn Hay

A professional web application for Long Barn Hay, a full-service hay supplier in Chester, NH.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Forms:** React Server Actions + Zod validation
- **Email:** Resend
- **Testing:** Vitest + React Testing Library

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Add your Resend API key to `.env.local`

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command                 | Description                    |
| ----------------------- | ------------------------------ |
| `npm run dev`           | Start development server       |
| `npm run build`         | Build for production           |
| `npm run start`         | Start production server        |
| `npm run lint`          | Run ESLint                     |
| `npm run type-check`    | Run TypeScript compiler check  |
| `npm run format`        | Format code with Prettier      |
| `npm run format:check`  | Check code formatting          |
| `npm run test`          | Run tests in watch mode        |
| `npm run test:run`      | Run tests once                 |
| `npm run test:coverage` | Run tests with coverage report |

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home
│   ├── products/          # Products page
│   ├── contact/           # Contact page
│   ├── giveaway/          # Giveaway page
│   ├── actions.ts         # Server actions
│   ├── layout.tsx         # Root layout
│   ├── error.tsx          # Error boundary
│   ├── loading.tsx        # Loading state
│   ├── not-found.tsx      # 404 page
│   └── sitemap.ts         # Sitemap generation
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Header, Footer
│   └── forms/             # Form components
├── lib/
│   ├── siteConfig.ts      # Site content configuration
│   ├── validation.ts      # Zod validation schemas
│   └── utils.ts           # Utility functions
└── types/
    └── index.ts           # TypeScript type definitions
```

## Configuration

Edit `src/lib/siteConfig.ts` to update:

- Company information
- Contact details
- Product descriptions
- Navigation items

## Deployment

The site is configured for deployment on Vercel. Push to main branch to deploy.

Required environment variable:

- `RESEND_API_KEY` - For contact form email delivery
