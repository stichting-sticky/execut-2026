# Execut Test - Next.js Website

A modern Next.js website featuring speakers, programme information, and contact sections with 3D elements.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd execut_test
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📁 Project Structure

```
execut_test/
├── src/
│   ├── app/                    # Next.js app directory (pages & routing)
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout component
│   │   ├── globals.css        # Global styles
│   │   ├── not-found.tsx      # 404 page
│   │   ├── contact/           # Contact page
│   │   ├── programme/         # Programme page
│   │   └── speakers/          # Speakers page
│   │
│   ├── components/            # React components
│   │   ├── section/          # Layout sections
│   │   │   ├── header.tsx    # Site header/navigation
│   │   │   ├── footer.tsx    # Site footer
│   │   │   ├── section.tsx   # Generic section wrapper
│   │   │   └── home/         # Homepage-specific sections
│   │   │       ├── hero.tsx
│   │   │       ├── about.tsx
│   │   │       ├── speakers.tsx
│   │   │       ├── stats.tsx
│   │   │       └── acknowledgements.tsx
│   │   │
│   │   ├── three/            # Three.js/3D components
│   │   │   └── logo-cube.tsx # 3D logo cube
│   │   │
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   └── typography.tsx
│   │   │
│   │   ├── speaker-card.tsx       # Speaker display card
│   │   ├── speakers-carousel.tsx  # Carousel for speakers
│   │   ├── programme-section.tsx  # Programme display
│   │   └── scroll-to-top.tsx     # Scroll to top button
│   │
│   ├── data/                  # Data files
│   │   └── speakers.ts       # Speaker information & data
│   │
│   └── lib/                   # Utility functions
│       └── utils.ts          # Helper functions (cn, etc.)
│
├── public/                    # Static assets
│   └── speakers/             # Speaker images
│
├── components.json            # shadcn/ui configuration
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration (if exists)
├── postcss.config.mjs        # PostCSS configuration
├── eslint.config.mjs         # ESLint configuration
└── package.json              # Dependencies & scripts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Phosphor Icons, Lucide React
- **Carousel**: Embla Carousel
- **Package Manager**: pnpm

## 📝 Working on This Project

### Adding a New Page

1. Create a new folder in `src/app/` (e.g., `src/app/about/`)
2. Add a `page.tsx` file inside that folder
3. The route will automatically be available at `/about`

### Adding a New Component

1. Create a new component file in `src/components/`
2. Follow the existing naming conventions (kebab-case)
3. Import and use in your pages or other components

### Adding Speaker Data

1. Edit `src/data/speakers.ts`
2. Add speaker image to `public/speakers/`
3. Reference the image path in the data file

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind CSS utility classes
- Utility function: Use `cn()` from `src/lib/utils.ts` for conditional classes

### 3D Components

- 3D components using Three.js are in `src/components/three/`
- Uses React Three Fiber for React integration

## 🚢 Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

Or build manually:
```bash
pnpm build
pnpm start
```

## 📄 License

Private project - not for public distribution.
