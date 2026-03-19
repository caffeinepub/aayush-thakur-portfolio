# Aayush Thakur Portfolio

## Current State
New project – no existing application files.

## Requested Changes (Diff)

### Add
- Full 3D portfolio website for graphic designer Aayush Thakur
- Sticky glassmorphism navbar with blur effect
- Hero section: bold headline, subtitle, animated 3D floating abstract sphere (React Three Fiber), CTA button
- About section: bio text, skills (Photoshop, Illustrator, Blender, Figma) with animated progress bars/cards
- Portfolio section: 3x2 grid of project cards with glassmorphism style, hover 3D tilt effect, click-to-open modal with project details
- Services section: Branding, Logo Design, UI/UX, Social Media Design icon cards with hover animations
- Contact section: Name/Email/Message form + social icons (Instagram, Behance, LinkedIn)
- Loading animation on initial page load
- Subtle mouse-follow cursor glow effect
- Smooth scroll with Framer Motion
- Fully responsive mobile + desktop layout
- Footer with nav links and social icons
- Backend stores contact form submissions

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan
1. Motoko backend: store contact form submissions (name, email, message, timestamp)
2. Frontend: install/use React Three Fiber, @react-three/drei, Framer Motion
3. Build all sections as reusable components with a central `content.ts` config file for easy editing
4. Implement 3D sphere in hero using React Three Fiber
5. Portfolio cards with tilt effect using react-tilt or CSS transforms
6. Contact form wired to backend submitContact query
7. Responsive layout with Tailwind CSS
