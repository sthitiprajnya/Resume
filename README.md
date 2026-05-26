# Sthitaprajna Biswal — Portfolio

A modern, responsive portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Three.js**.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with static export
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [PostCSS](https://postcss.org/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/)
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/)
- **Linting**: [ESLint](https://eslint.org/) + [TypeScript ESLint](https://typescript-eslint.io/)

## 📦 Getting Started

### Prerequisites
- Node.js 20+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/sthitiprajnya/portfolio.git
cd portfolio

# Install dependencies
npm ci
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build & Deploy

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build for production (static export)
npm run build
```

The build output is generated in the `out/` directory, ready for GitHub Pages.

## 🔧 Configuration

### Environment Variables

Required for email functionality via EmailJS:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Add these to your GitHub repository secrets for CI/CD deployment.

## 📝 Features

✨ Fully responsive design  
🎨 Custom theme with CSS variables  
⚡ Optimized performance (static export)  
♿ Accessible components  
🔍 SEO optimized with Next.js metadata  
📱 Mobile-first approach  
🎬 Smooth scroll & animations  
🌙 Dark theme optimized  

## 📚 Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout with metadata
│   └── page.tsx      # Home page
├── components/       # React components
│   ├── sections/     # Page sections
│   └── providers/    # Context providers
├── data/             # Static data
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── types/            # TypeScript type definitions
├── animations.css    # Animation keyframes
└── index.css         # Global styles
```

## 🚀 Deployment

This portfolio is deployed to **GitHub Pages** via GitHub Actions.

### GitHub Pages Configuration

1. Go to **Settings** → **Pages**
2. Set source to **GitHub Actions**
3. Deploy workflow automatically builds and deploys on push to `main`

### Secrets Required

Add these in **Settings** → **Secrets and variables** → **Actions**:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## 📄 License

This project is open source and available under the MIT License.

## 👤 About

Built by **Sthitaprajna Biswal**  
Cybersecurity & Cloud Security Engineer  
[Visit Portfolio](https://sthitiprajnya.github.io/portfolio/)
