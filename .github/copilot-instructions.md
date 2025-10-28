# Hamita Wedding Frontend - AI Coding Agent Instructions

## Project Overview
This is a **Next.js 15** wedding photography/services website for Hamita Wedding House in Vietnam, built with **TypeScript**, **Tailwind CSS**, **Ant Design**, and **Framer Motion** for animations. The site showcases wedding services, pricing packages, and photo galleries.

## Architecture & File Structure

### Key Components Pattern
- **Route Structure**: Uses Next.js App Router with layout.tsx files
- **Component Location**: All components live in `src/app/components/` and are named `page.tsx` (not typical `index.tsx`)
- **Page Pattern**: Each route has `layout.tsx` + `page.tsx` structure

### Main Application Flow
```
src/app/page.tsx (Main) → Header + Home + Footer
├── components/header/page.tsx (Navigation with dropdown menus)
├── home/page.tsx (Hero + services grid)
└── components/footer/page.tsx
```

### Service Pages Structure
- `/cost` - Main pricing overview with section links
- `/albumprice` - Detailed album photography pricing
- `/vuquyprice` - Vu Quy ceremony packages
- `/dhthprice` - Engagement/wedding packages
- `/about` - Company information

## Development Conventions

### Animation Standards
- **All components use Framer Motion** with consistent patterns:
  - `prefersReducedMotion` respect for accessibility
  - `containerVariants` + `itemVariants` for stagger effects
  - `whileInView` with `viewport={{ once: true }}` for scroll animations
  - Standard transitions: `duration: 0.5, ease: "easeOut"`

### Styling Approach
- **Tailwind-first**: Extensive use of utility classes
- **Color Palette**: Pink theme (`pink-400`, `pink-600`) with white/gray backgrounds
- **Responsive**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints
- **Glass Effect**: `bg-white/80 backdrop-blur-sm` for modern UI

### Image Handling
- **Next.js Image**: All images use `next/image` with proper `fill`, `sizes`, and `priority` props
- **Asset Location**: All images in `/public/images/` directory
- **Naming**: Service images follow pattern `service1.jpg`, `service2.jpg`, etc.

## Business Logic Patterns

### Navigation Structure
- Header includes dropdown for "BẢNG GIÁ" (pricing) with 7 sub-items
- Mobile navigation uses slide-out menu with accordion-style sub-menus
- Active state logic considers parent routes (e.g., `/vuquyprice` activates "BẢNG GIÁ")

### Service Data Model
```typescript
{
  title: string,        // Vietnamese service name
  description: string,  // Service description
  image: string,       // Path to service image
  icon: ReactElement   // React Icons component (FaCamera, FaVideo, etc.)
}
```

### Pricing Page Pattern
- Hero section with background image and overlay
- Structured pricing tables with location-based pricing
- Feature lists using arrays for consistent formatting
- Call-to-action buttons linking to contact/booking

## Development Workflow

### Running the Project
```bash
npm run dev     # Development server (port 3000)
npm run build   # Production build
npm run start   # Production server
npm run lint    # ESLint checking
```

### Key Dependencies
- **UI**: `antd` + `@ant-design/nextjs-registry` (wrapped in layout)
- **Animation**: `framer-motion` (used extensively)
- **Icons**: `react-icons` (primarily Font Awesome icons)
- **Styling**: `tailwindcss` with custom animations

## Common Patterns to Follow

1. **Component Structure**: Always use `"use client"` for interactive components
2. **Motion Wrapping**: Wrap sections in `motion.div` with appropriate variants
3. **Responsive Images**: Use `aspect-[4/3] md:aspect-[3/2]` for consistent ratios
4. **Vietnamese Content**: All user-facing text is in Vietnamese
5. **Layout Consistency**: Maintain `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for content width

## File Creation Guidelines

- New pages: Create `layout.tsx` + `page.tsx` in route folder
- New components: Place in `src/app/components/[name]/page.tsx`
- Images: Add to `/public/images/` with descriptive names
- Maintain TypeScript strict typing for all props and data structures

## Integration Points

- **Ant Design Registry**: All pages must be wrapped in `<AntdRegistry>` (done in root layout)
- **Navigation**: Update header navigation arrays when adding new routes
- **SEO**: Update metadata in layout.tsx files for new pages