# 📁 Project Structure Guide

This document explains how to organize all files for the DDoS Guardian application.

## Directory Layout

```
ddos-protection/
│
├── .github/
│   └── workflows/
│       └── deploy.yml                 # GitHub Actions deployment
│
├── src/
│   ├── App.tsx                        # Main application component
│   ├── main.tsx                       # React entry point
│   └── index.css                      # Global styles
│
├── public/
│   └── vite.svg                       # Logo (optional)
│
├── index.html                         # HTML template
├── package.json                       # Dependencies
├── package-lock.json                  # Dependency lock file (auto)
├── tsconfig.json                      # TypeScript config
├── tsconfig.node.json                 # Node TypeScript config
├── vite.config.ts                     # Vite build config
├── tailwind.config.ts                 # Tailwind CSS config
├── postcss.config.js                  # PostCSS config
│
├── .gitignore                         # Git ignore rules
├── README.md                          # Main documentation
├── SETUP_GUIDE.md                     # Detailed setup guide
├── FEATURES.md                        # Feature reference
└── LICENSE                            # MIT License (optional)
```

## File Organization Instructions

### Step 1: Create the Directory Structure

```bash
# Create main directory
mkdir ddos-protection
cd ddos-protection

# Create subdirectories
mkdir -p src public .github/workflows
```

### Step 2: Copy Configuration Files to Root

**Files that go in the root directory:**
- `package.json`
- `index.html`
- `tsconfig.json`
- `tsconfig.node.json`
- `vite.config.ts`
- `tailwind.config.ts`
- `postcss.config.js`
- `.gitignore`
- `README.md`
- `SETUP_GUIDE.md`
- `FEATURES.md`

### Step 3: Copy Source Files

**Files that go in `src/` folder:**
- `App.tsx` (rename from `ddos-protection-app.tsx`)
- `main.tsx`
- `index.css`

### Step 4: Copy GitHub Workflow

**File that goes in `.github/workflows/`:**
- `deploy.yml`

### Step 5: Create Additional Directories (if needed)

```bash
# Optional: For organizing components later
mkdir -p src/components
mkdir -p src/pages
mkdir -p src/hooks
mkdir -p src/types
mkdir -p public/images
```

## Step-by-Step File Placement

### Copy and Rename App File

```bash
# Navigate to src directory
cd src

# Copy/rename the main app file
cp ../ddos-protection-app.tsx ./App.tsx

# Your src folder should now have:
# - App.tsx (the main application)
# - main.tsx (entry point)
# - index.css (styles)
```

### Final Directory Check

```
ddos-protection/
├── .github/workflows/deploy.yml
├── src/
│   ├── App.tsx ✓
│   ├── main.tsx ✓
│   └── index.css ✓
├── public/
│   └── (optional assets)
├── index.html ✓
├── package.json ✓
├── tsconfig.json ✓
├── tsconfig.node.json ✓
├── vite.config.ts ✓
├── tailwind.config.ts ✓
├── postcss.config.js ✓
├── .gitignore ✓
├── README.md ✓
├── SETUP_GUIDE.md ✓
└── FEATURES.md ✓
```

## File Contents Quick Reference

### Root Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Node dependencies & scripts |
| `index.html` | HTML template |
| `tsconfig.json` | TypeScript configuration |
| `vite.config.ts` | Build tool configuration |
| `tailwind.config.ts` | CSS framework config |
| `.gitignore` | Files to exclude from git |

### Source Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main React component (entire app) |
| `src/main.tsx` | Mount React to DOM |
| `src/index.css` | Global styles & Tailwind |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Main documentation |
| `SETUP_GUIDE.md` | Setup instructions |
| `FEATURES.md` | Feature reference |

### GitHub Integration

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | Auto-deployment pipeline |

## Quick Setup Commands

### Complete Setup from Scratch

```bash
# 1. Create project directory
mkdir ddos-protection
cd ddos-protection

# 2. Create src directory
mkdir -p src public .github/workflows

# 3. Copy all files to appropriate locations
# (assuming files are in downloads or provided directory)
cp ~/Downloads/ddos-protection-app.tsx ./src/App.tsx
cp ~/Downloads/main.tsx ./src/
cp ~/Downloads/index.css ./src/
# ... copy other files to root ...

# 4. Install dependencies
npm install

# 5. Test locally
npm run dev

# 6. Build for production
npm run build

# 7. Deploy (when ready)
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ddos-protection.git
git push -u origin main
```

## File Naming Conventions

### Important Notes

- **Case Sensitive:** Linux/Mac file systems are case-sensitive
- **Windows:** Case-insensitive but preserves case
- **Always use:**
  - lowercase for directories (src, public, .github)
  - PascalCase for .tsx files (App.tsx, main.tsx)
  - lowercase for .json, .js, .css, .ts files

### Examples

✅ **Correct:**
```
src/App.tsx
src/main.tsx
src/index.css
vite.config.ts
tailwind.config.ts
postcss.config.js
```

❌ **Wrong:**
```
src/app.tsx          # Should be App.tsx
src/Main.tsx         # Should be main.tsx
Vite.config.ts       # Should be vite.config.ts
src/APP.TSX          # Should be App.tsx
```

## GitHub Repository Structure

### When Pushing to GitHub

```
github.com/YOUR_USERNAME/ddos-protection/
├── .github/
├── src/
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── ... (other config files)
└── README.md
```

## Size Reference

Typical file sizes:
- `package.json`: ~1 KB
- `App.tsx`: ~80-100 KB
- `vite.config.ts`: ~1 KB
- `tsconfig.json`: ~1 KB
- Total before node_modules: ~200 KB
- node_modules (after install): ~500 MB

## After npm install

Your project will look like:

```
ddos-protection/
├── node_modules/              # All dependencies (install via npm)
│   ├── react/
│   ├── react-dom/
│   ├── framer-motion/
│   ├── lucide-react/
│   ├── typescript/
│   ├── tailwindcss/
│   ├── vite/
│   └── ... (900+ folders)
│
├── .github/
├── src/
├── public/
├── ... (config files)
├── package.json
└── package-lock.json           # Auto-generated
```

## Development vs Production

### Development (npm run dev)
- Serves files from `src/`
- Hot reload enabled
- Source maps enabled
- TypeScript checking
- ESM modules

### Production (npm run build)
- Bundles files into `dist/`
- Minified code
- Optimized assets
- Tree-shaking enabled
- Ready for deployment

## Important: Do NOT Commit

These should NOT be uploaded to GitHub:

```
node_modules/          # Install locally with: npm install
dist/                  # Generate with: npm run build
.env.local             # Local environment variables
*.log                  # Log files
.DS_Store              # Mac system files
Thumbs.db              # Windows system files
```

## File Permissions

On Linux/Mac, ensure correct permissions:

```bash
chmod 644 *.json *.js *.ts *.css *.html *.md
chmod 755 .github
chmod 755 .github/workflows
```

## Verification Checklist

Before running the app, verify:

```bash
# Check all files exist
ls -la src/
ls -la index.html
ls -la package.json
ls -la vite.config.ts

# Check tsconfig
cat tsconfig.json

# Check package.json scripts
grep '"scripts"' package.json -A 5
```

## Troubleshooting File Issues

### Issue: "Cannot find module './App'"

**Solution:**
- Verify `src/App.tsx` exists
- Check spelling (case-sensitive)
- Ensure main.tsx imports correctly:
  ```typescript
  import App from './App.tsx'
  ```

### Issue: "Port 3000 already in use"

**Solution:**
```bash
# This is not a file issue, but:
PORT=3001 npm run dev
```

### Issue: Module resolution errors

**Solution:**
- Check `tsconfig.json` is in root
- Verify `vite.config.ts` exists
- Ensure all imports have correct paths

---

## Next Steps

1. ✅ Organize files as shown above
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Test in browser
5. ✅ Run `npm run build`
6. ✅ Deploy to GitHub

## Summary

**Key Points:**
- Root config files: `package.json`, `vite.config.ts`, etc.
- App code: `src/App.tsx`, `src/main.tsx`, `src/index.css`
- GitHub workflow: `.github/workflows/deploy.yml`
- Always use correct naming conventions
- Don't commit `node_modules/` or `dist/`

Good luck! 🚀
