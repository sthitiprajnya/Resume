# Cyberpunk Portfolio

A Dark Cyberpunk themed static portfolio website for a Cybersecurity Engineer, built with Next.js (App Router), React, TypeScript, and Tailwind CSS. The site features smooth animations powered by Framer Motion, GSAP, and Three.js.

## Tech Stack

- **Framework**: Next.js (Static Export)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP, Three.js
- **Form Handling**: EmailJS
- **Hosting**: GitHub Pages

## Development

```bash
# Install dependencies
npm ci --legacy-peer-deps

# Run the development server
npm run dev
```

## Build and Deploy

The project uses Next.js static export (`output: 'export'`) to generate HTML/CSS/JS in the `out/` directory.

```bash
# Build the production bundle
npm run build
```

Deployment to GitHub Pages is handled automatically via GitHub Actions whenever changes are pushed to the `main` branch.

## Environment Variables

To enable the contact form via EmailJS, you need to configure the following secrets in your GitHub repository (**Settings > Secrets and variables > Actions**):

- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS Service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS Template ID
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS Public Key

These are mapped appropriately to `NEXT_PUBLIC_EMAILJS_*` environment variables during the deployment build process.