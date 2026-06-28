# 🚀 DDoS Guardian - Complete Setup Guide

## Table of Contents
1. [Quick Start (5 minutes)](#quick-start)
2. [Detailed Setup](#detailed-setup)
3. [GitHub Deployment](#github-deployment)
4. [Customization](#customization)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)

---

## Quick Start

### Prerequisites Check
```bash
# Check Node.js version (should be 16+)
node -v

# Check npm version
npm -v
```

### 1. Setup Project Locally

```bash
# Create project directory
mkdir ddos-protection
cd ddos-protection

# Copy all files from outputs folder here
# Or clone from GitHub repository

# Install dependencies
npm install
```

**Expected output:**
```
added XXX packages in X.XXs
```

### 2. Run Development Server

```bash
npm run dev
```

**Expected output:**
```
  VITE v4.3.9  ready in 345 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### 3. Open in Browser
- Visit: `http://localhost:3000/`
- You should see the landing page with animations

### 4. Test Features

**Test User Registration:**
1. Click "Sign Up"
2. Fill in name, email, password
3. Click "Create Account"
4. You'll see the user dashboard

**Test Admin Login:**
1. Click "Admin" on landing page
2. Email: `diablo@gmail.com`
3. Password: `diablo`
4. You'll see admin dashboard

---

## Detailed Setup

### Step-by-Step Installation

#### 1. Environment Setup

**Windows Users:**
```bash
# Use Command Prompt or PowerShell
# Make sure Node.js is installed from nodejs.org
```

**Mac Users:**
```bash
# Using Homebrew (recommended)
brew install node

# Or download from nodejs.org
```

**Linux Users:**
```bash
# Ubuntu/Debian
sudo apt-get install nodejs npm

# Fedora
sudo dnf install nodejs npm
```

#### 2. Create Project

```bash
# Create a new directory
mkdir my-ddos-project
cd my-ddos-project

# Copy all project files here
# Download from releases or clone repository
```

#### 3. Install Dependencies

```bash
# This will install all npm packages
npm install

# Wait for installation to complete
# It should take 2-5 minutes depending on internet speed
```

**Packages installed:**
- react: User interface library
- react-dom: React DOM rendering
- framer-motion: Animation library
- lucide-react: Icon library
- typescript: Type safety
- tailwindcss: CSS styling
- vite: Build tool

#### 4. Verify Installation

```bash
# Check if all packages installed correctly
npm list react react-dom typescript vite

# You should see version numbers for each package
```

---

## GitHub Deployment

### Method 1: Automatic with GitHub Actions (Recommended)

#### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "+" → "New repository"
3. Repository name: `ddos-protection`
4. Description: "Enterprise DDoS protection service"
5. Public: ✓
6. Click "Create repository"

#### Step 2: Add Files to Repository

```bash
# Navigate to your project directory
cd ~/path/to/ddos-protection

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: DDoS Guardian application"

# Rename branch to main (if needed)
git branch -M main

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/ddos-protection.git

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

#### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Settings (⚙️) → Pages
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The workflow should auto-deploy!

**Your site will be live at:**
```
https://YOUR_USERNAME.github.io/ddos-protection
```

### Method 2: Manual Deployment

#### Step 1: Build Production Version

```bash
npm run build
```

**What it does:**
- Compiles TypeScript to JavaScript
- Optimizes images and assets
- Minifies code for smaller file size
- Creates `dist` folder with production files

#### Step 2: Deploy Using gh-pages

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Update package.json homepage
# Change this line in package.json:
# "homepage": "https://YOUR_USERNAME.github.io/ddos-protection"

# Deploy
npm run deploy
```

#### Step 3: Enable GitHub Pages

1. Repository Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **gh-pages**
4. Folder: **(root)**
5. Click Save

**Site goes live at:**
```
https://YOUR_USERNAME.github.io/ddos-protection
```

---

## Local Development

### Start Development Server

```bash
npm run dev
```

- Opens automatically on `http://localhost:3000`
- Hot reload: Changes appear instantly
- Dev tools: TypeScript checking, error reporting

### Build for Production

```bash
npm run build
```

- Creates `dist` folder
- All files optimized and minified
- Ready for deployment

### Preview Production Build

```bash
npm run preview
```

- Simulates production environment locally
- Useful for testing before deployment

---

## File Structure Explained

```
ddos-protection/
│
├── src/
│   ├── App.tsx              ← Main application component
│   ├── main.tsx             ← Entry point (mount React)
│   └── index.css            ← Global styles
│
├── index.html               ← HTML template
│
├── package.json             ← Dependencies list
├── package-lock.json        ← Exact versions (auto-generated)
│
├── tsconfig.json            ← TypeScript settings
├── vite.config.ts           ← Vite build settings
├── tailwind.config.ts       ← Tailwind CSS settings
├── postcss.config.js        ← PostCSS settings
│
├── .gitignore               ← Files to exclude from git
├── .github/
│   └── workflows/
│       └── deploy.yml       ← Auto-deployment script
│
└── README.md                ← Documentation
```

---

## Customization

### 1. Change Admin Credentials

**File:** `src/App.tsx`
**Find:** (Around line 450)
```typescript
if (email === 'diablo@gmail.com' && password === 'diablo') {
```

**Change to:**
```typescript
if (email === 'youremail@gmail.com' && password === 'yourpassword') {
```

### 2. Customize Brand Name

**File:** `src/App.tsx`
**Find:** "DDoS Guardian"
**Replace with:** Your service name

**Example:**
```typescript
<span className="font-bold">My Security</span>
```

### 3. Change Colors

**File:** `tailwind.config.ts`

**Current scheme:**
```typescript
colors: {
  purple: { /* ... */ },
  blue: { /* ... */ }
}
```

**Change to:**
```typescript
colors: {
  purple: { 400: '#YOUR_COLOR', 500: '#YOUR_COLOR' },
  blue: { 400: '#YOUR_COLOR', 500: '#YOUR_COLOR' }
}
```

### 4. Update Feature Descriptions

**File:** `src/App.tsx`
**Find:** The features array in LandingPage

Change the titles and descriptions to match your service.

### 5. Add Real API Integration

**Replace mock authentication:**

```typescript
// OLD: Mock authentication
const handleUserAuth = (email: string, password: string) => {
  // Creates fake user
};

// NEW: Real API
const handleUserAuth = async (email: string, password: string) => {
  const response = await fetch('https://your-api.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  
  if (response.ok) {
    const user = await response.json();
    setCurrentUser(user);
    setAppState('user-dashboard');
  }
};
```

---

## Testing

### Test Features Locally

#### 1. Test User Registration
```
Step 1: Click "Sign Up"
Step 2: Enter details:
  - Name: John Doe
  - Email: john@example.com
  - Password: test123
Step 3: Click "Create Account"
Expected: See user dashboard
```

#### 2. Test Admin Login
```
Step 1: Click "Admin"
Step 2: Enter:
  - Email: diablo@gmail.com
  - Password: diablo
Step 3: Click "Enter Admin Panel"
Expected: See admin dashboard
```

#### 3. Test Website Management
```
Step 1: Login as user
Step 2: Click "Dashboard" or "My Websites"
Step 3: Click "+ Add New Website" or "+ Add Website"
Step 4: Enter domain (e.g., example.com)
Step 5: Click "Add Domain"
Expected: Website appears in list
```

#### 4. Test Settings
```
Step 1: Login as user
Step 2: Click "Settings" in sidebar
Step 3: Click "🔐 Change Password"
Step 4: Enter new password details
Step 5: Click "Update Password"
Expected: Success message
```

### Test Production Build

```bash
# Build production
npm run build

# Preview it locally
npm run preview

# Visit http://localhost:4173
```

---

## Troubleshooting

### Issue: "npm: command not found"

**Solution:**
- Node.js not installed
- Download from: https://nodejs.org
- Install LTS version
- Restart terminal/PowerShell

```bash
# Verify installation
node -v
npm -v
```

### Issue: Port 3000 Already in Use

**Solution:**
```bash
# Use different port
PORT=3001 npm run dev

# Or on Windows PowerShell
$env:PORT=3001; npm run dev
```

### Issue: Module not found errors

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: TypeScript errors in IDE

**Solution:**
```bash
# Restart IDE (VSCode)
1. Close VSCode completely
2. Reopen it
3. Wait for TypeScript to reindex
```

### Issue: Build fails

**Solution:**
```bash
# Check Node version
node -v
# Should be 16.0.0 or higher

# Clear cache
npm cache clean --force

# Rebuild
rm -rf dist
npm run build
```

### Issue: GitHub Pages not updating

**Solution:**
```bash
# Force push to gh-pages
git push origin --delete gh-pages
npm run deploy

# Or manually:
git checkout --orphan gh-pages
git rm -rf .
npm run build
cp -r dist/* .
git add .
git commit -m "Deploy"
git push origin gh-pages
git checkout main
```

---

## Performance Optimization

### 1. Reduce Bundle Size
```bash
npm run build
```

Check console output for bundle size.

### 2. Code Splitting
Already implemented via Vite - components load on demand.

### 3. Image Optimization
- Using SVG icons (Lucide React)
- No heavy images
- CSS-based animations

---

## Security Checklist

Before deploying to production:

- [ ] Change admin credentials
- [ ] Remove hardcoded passwords
- [ ] Add proper authentication
- [ ] Use HTTPS for all endpoints
- [ ] Implement CSRF protection
- [ ] Add input validation
- [ ] Use environment variables for secrets
- [ ] Enable rate limiting
- [ ] Add security headers

---

## Advanced Configuration

### Environment Variables

Create `.env.local`:
```
VITE_API_URL=https://your-api.com
VITE_ADMIN_EMAIL=admin@example.com
```

Use in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Custom Domain

If using custom domain on GitHub Pages:

1. Create `public/CNAME` file
2. Add your domain: `yourdomain.com`
3. Update DNS records
4. Enable in GitHub Pages settings

---

## Support & Resources

### Documentation
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

### Community
- GitHub Issues
- Stack Overflow
- Reddit (r/reactjs, r/webdev)
- Discord communities

---

## Next Steps

1. ✅ Complete setup
2. ✅ Test locally
3. ✅ Deploy to GitHub
4. 📝 Customize for your brand
5. 🔗 Set up real backend
6. 🔐 Implement security features
7. 📊 Add real DDoS protection
8. 🚀 Go live!

---

## Success! 🎉

Your DDoS Guardian application is ready!

**Next commands:**
```bash
# Start development
npm run dev

# Build and deploy
npm run build && npm run deploy
```

Good luck! 🚀
