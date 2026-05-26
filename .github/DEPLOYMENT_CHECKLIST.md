# Deployment Checklist

## ✅ Pre-Deployment Setup

### 1. GitHub Pages Configuration
- [ ] Go to **Settings** → **Pages**
- [ ] Set **Source** to **GitHub Actions**
- [ ] Verify domain/URL settings

### 2. GitHub Secrets Setup
Add these in **Settings** → **Secrets and variables** → **Actions**:
- [ ] `VITE_EMAILJS_SERVICE_ID` - Your EmailJS Service ID
- [ ] `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS Template ID
- [ ] `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS Public Key

Get these from [EmailJS Console](https://dashboard.emailjs.com/)

### 3. Branch Protection Rules (Optional)
- [ ] Require status checks to pass before merging
- [ ] Require code reviews before merge

## 📋 Deployment Process

1. **Local Testing**
   ```bash
   npm ci
   npm run type-check
   npm run lint
   npm run build
   ```

2. **Push to Main**
   ```bash
   git push origin main
   ```

3. **Monitor Build**
   - Go to **Actions** tab
   - Watch **Build and Deploy to GitHub Pages** workflow
   - Verify all steps pass

4. **Verify Deployment**
   - Visit `https://sthitiprajnya.github.io/portfolio/`
   - Check for any visual issues
   - Test contact form functionality

## 🔍 Troubleshooting

### Build Fails
- Check **Actions** → **Jobs** for error logs
- Common issues:
  - Missing environment secrets
  - TypeScript errors
  - Linting failures

### Email Form Not Working
- Verify EmailJS secrets are correct
- Check browser console for errors
- Test EmailJS setup independently

### Page Not Updating
- Clear GitHub Pages cache
- Verify `deploy.yml` runs successfully
- Check that `out/` folder was created

## 📊 Post-Deployment

- [ ] Verify site is live and accessible
- [ ] Test all interactive features
- [ ] Check SEO meta tags in page source
- [ ] Test on mobile devices
- [ ] Monitor GitHub Actions for issues
