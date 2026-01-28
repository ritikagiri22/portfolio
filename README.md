# Ritika Giri Portfolio

A production-ready, full-stack portfolio website for a Digital Marketer & Brand Strategist.

## Tech Stack

- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS 4, Framer Motion
- **Backend**: Next.js API Routes, Zod
- **Icons**: Lucide React
- **UI**: Custom components with Glassmorphism

## Project Structure

```bash
portfolio-ritika-giri/
├── app/            # App Router pages and sections
├── components/     # Reusable UI components
├── data/           # Content data (TS files)
├── lib/            # Utilities and animations
├── public/         # Static assets (images, logos, resume)
└── types/          # TypeScript definitions
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization

To update the content, simply edit the files in the `data/` directory:
- `experience.ts`: Professional history
- `caseStudies.ts`: Project details and metrics
- `skills.ts`: Technical and strategic expertise
- `education.ts`: Academic background

Replace the images in `public/images/` to change the visuals.

## License
MIT
