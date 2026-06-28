# ❓ FAQ & Troubleshooting

## Table of Contents
1. [Installation Issues](#installation-issues)
2. [Development Issues](#development-issues)
3. [Build Issues](#build-issues)
4. [Deployment Issues](#deployment-issues)
5. [Feature Questions](#feature-questions)
6. [Performance Questions](#performance-questions)
7. [Customization Questions](#customization-questions)

---

## Installation Issues

### Q: I get "npm: command not found"

**A:** Node.js/npm is not installed or not in PATH.

**Solution:**
1. Download from: https://nodejs.org (LTS version)
2. Install with default settings
3. Close and reopen terminal/PowerShell
4. Verify: `node -v` and `npm -v`

### Q: "npm ERR! code ERESOLVE"

**A:** Dependency conflict between packages.

**Solution:**
```bash
# Use legacy peer deps flag
npm install --legacy-peer-deps

# Or upgrade npm
npm install -g npm@latest
npm install
```

### Q: Installation takes forever

**A:** Network issue or large download.

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Set registry
npm config set registry https://registry.npmjs.org/

# Retry installation
npm install
```

### Q: "missing script: dev"

**A:** package.json is corrupted or scripts section missing.

**Solution:**
1. Verify package.json exists in root
2. Check it contains:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```
3. Reinstall: `rm -rf node_modules && npm install`

### Q: Errors about missing peer dependencies

**A:** Version mismatch between packages.

**Solution:**
```bash
npm install --save-peer react react-dom
npm install --legacy-peer-deps
```

---

## Development Issues

### Q: Port 3000 is already in use

**A:** Another application using the same port.

**Solution:**

**Windows:**
```powershell
# Find process using port
netstat -ano | findstr :3000

# Kill the process (replace PID)
taskkill /PID <PID> /F

# Or use different port
$env:PORT=3001; npm run dev
```

**Mac/Linux:**
```bash
# Find process
lsof -i :3000

# Kill it
kill -9 <PID>

# Or use different port
PORT=3001 npm run dev
```

### Q: "Cannot find module" errors

**A:** Files not in correct location or wrong import path.

**Solution:**
1. Check file exists at path
2. Verify spelling (case-sensitive on Mac/Linux)
3. Ensure correct imports:
```typescript
// Correct
import App from './App'
import './index.css'

// Wrong
import App from './app'    // Wrong case
import './App'             // Can't import .tsx this way
```

### Q: TypeScript errors in IDE

**A:** IDE not recognizing TypeScript configuration.

**Solution:**
- VSCode: Press Ctrl+Shift+P → "Restart TS Server"
- Verify `tsconfig.json` exists in root
- Close and reopen IDE

### Q: Blank page on localhost:3000

**A:** App didn't load or render error.

**Solution:**
1. Check browser console (F12) for errors
2. Check terminal for build errors
3. Verify index.html has `<div id="root"></div>`
4. Verify main.tsx has correct React mount code

### Q: Animations not working

**A:** Framer Motion not installed or CSS not loaded.

**Solution:**
```bash
# Reinstall framer-motion
npm install framer-motion

# Check index.css is imported in main.tsx
import './index.css'

# Verify Tailwind directives in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Q: Styles not applied

**A:** CSS/Tailwind not configured correctly.

**Solution:**
1. Verify tailwind.config.ts exists
2. Check postcss.config.js exists
3. Verify index.css has Tailwind directives
4. Clear cache: `npm run dev` → stop → `npm run dev`

---

## Build Issues

### Q: "npm ERR! code ELIFECYCLE"

**A:** Build script failed.

**Solution:**
```bash
# Check for errors
npm run build

# See detailed error message
npm run build -- --verbose

# Try clearing cache
rm -rf node_modules dist
npm install
npm run build
```

### Q: Build succeeds but output is empty

**A:** dist folder not created or build failed silently.

**Solution:**
1. Verify vite.config.ts exists
2. Check for errors: `npm run build` (watch output)
3. Verify all TypeScript is valid
4. Check main.tsx can find App.tsx

### Q: TypeScript compilation errors

**A:** TypeScript errors not caught during dev.

**Solution:**
- Fix errors shown in terminal
- Check types: `npm run build -- --verbose`
- Verify all imports have types

### Q: Build is too large

**A:** Dead code or large dependencies.

**Solution:**
```bash
# Analyze bundle
npm install -g source-map-explorer
npm run build
source-map-explorer 'dist/index.js'

# Remove unused imports
# Update vite.config.ts minify option
```

---

## Deployment Issues

### Q: GitHub Pages shows 404 error

**A:** Wrong homepage in package.json or build not deployed.

**Solution:**
1. Verify homepage in package.json:
```json
"homepage": "https://USERNAME.github.io/ddos-protection"
```
2. Verify GitHub Pages enabled:
   - Settings → Pages → Source: gh-pages branch
3. Verify files in gh-pages branch exist:
   ```bash
   git branch -a
   # Should show origin/gh-pages
   ```
4. Redeploy:
   ```bash
   npm run build
   npm run deploy
   ```

### Q: GitHub Pages blank page

**A:** Assets not loading (wrong path) or build issue.

**Solution:**
1. Check browser console for 404s
2. Verify base path in vite.config.ts (if using subdirectory)
3. Clear GitHub cache: Go to Settings → Pages → Source → None → Save → gh-pages → Save
4. Wait 5 minutes for rebuild

### Q: "Permission denied" when deploying

**A:** Not authenticated with GitHub or wrong permissions.

**Solution:**
```bash
# Configure git
git config --global user.email "your@email.com"
git config --global user.name "Your Name"

# Test GitHub connection
ssh -T git@github.com

# Or use HTTPS with token
# Settings → Developer settings → Personal access tokens
git remote set-url origin https://TOKEN@github.com/USERNAME/ddos-protection.git
```

### Q: GitHub Actions build fails

**A:** Workflow error or build issue.

**Solution:**
1. Check workflow file: `.github/workflows/deploy.yml`
2. View logs: Repository → Actions → View workflow
3. Common fixes:
```yaml
# Ensure node version specified
- uses: actions/setup-node@v3
  with:
    node-version: "18"

# Ensure build command runs
- run: npm run build
```

### Q: Site goes live but styles are broken

**A:** CSS not loading (Tailwind processing issue).

**Solution:**
1. Verify tailwind.config.ts is correct
2. Rebuild locally: `npm run build`
3. Test locally: `npm run preview`
4. Check for CSS errors in build log
5. Redeploy

---

## Feature Questions

### Q: How do I add real authentication?

**A:** Replace mock authentication with API calls.

```typescript
const handleUserAuth = async (email: string, password: string) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  
  if (response.ok) {
    const user = await response.json();
    // Save token
    localStorage.setItem('token', user.token);
    setCurrentUser(user);
  }
};
```

### Q: How do I enable OAuth (Discord/Google)?

**A:** Implement OAuth flow.

```typescript
// Discord Login
const discordClientId = 'YOUR_CLIENT_ID';
const redirectUri = 'https://yourdomain.com/auth/discord/callback';

<button onClick={() => {
  window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${discordClientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify%20email`;
}}>
  Discord Login
</button>

// Handle callback in backend
// POST /auth/discord/callback → exchange code for token
```

### Q: How do I connect a real database?

**A:** Create backend API and connect to it.

```typescript
// Fetch user from database
const response = await fetch(`/api/users/${userId}`);
const user = await response.json();
setCurrentUser(user);

// Save website
const response = await fetch('/api/websites', {
  method: 'POST',
  body: JSON.stringify({ domain, userId })
});
```

### Q: How do I add real DDoS protection?

**A:** Implement on backend with rate limiting, IP filtering, etc.

```typescript
// Backend (Node.js/Express example)
const rateLimit = require('express-rate-limit');

const ddosProtection = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100 // 100 requests per minute
});

app.use('/api/', ddosProtection);
```

### Q: How do I persist data between sessions?

**A:** Use localStorage, database, or cloud storage.

```typescript
// LocalStorage (client-side)
localStorage.setItem('user', JSON.stringify(currentUser));
const user = JSON.parse(localStorage.getItem('user'));

// Firebase (recommended for production)
// Backend API (best practice)
```

### Q: How do I add two-factor authentication?

**A:** Implement TOTP or SMS verification.

```typescript
// TOTP Example
import * as speakeasy from 'speakeasy';

// Generate secret
const secret = speakeasy.generateSecret({ name: user.email });

// Verify code
const verified = speakeasy.totp.verify({
  secret: secret.base32,
  encoding: 'base32',
  token: userProvidedCode
});
```

---

## Performance Questions

### Q: App is slow on first load

**A:** Large bundle size or slow network.

**Solution:**
1. Analyze bundle:
```bash
npm install -g @depcheck/depcheck
npx depcheck
```
2. Reduce bundle:
   - Remove unused dependencies
   - Use code splitting
   - Lazy load routes

3. Optimize assets:
   - Use SVG instead of PNG
   - Compress images
   - Minify code

### Q: Animations are stuttering

**A:** Performance issue or too many animations.

**Solution:**
```typescript
// Use GPU-accelerated properties
animate={{
  transform: [0, 10],  // ✓ Good
  opacity: [0, 1]      // ✓ Good
}}

// Avoid animating these
animate={{
  width: [100, 200],   // ✗ Slow
  height: [100, 200]   // ✗ Slow
}}

// Reduce particle count
// Disable non-essential animations
// Use will-change CSS property
```

### Q: Dashboard is slow with many websites

**A:** Rendering too many DOM nodes.

**Solution:**
```typescript
// Use virtualization for long lists
import { FixedSizeList } from 'react-window';

// Memoize components
const WebsiteCard = React.memo(({ website }) => (...));

// Lazy load data
useEffect(() => {
  loadWebsites(); // Load 20 at a time
}, []);
```

---

## Customization Questions

### Q: How do I change the app name?

**A:** Search and replace "DDoS Guardian".

```bash
# Global search and replace
# File: src/App.tsx
# Search: "DDoS Guardian"
# Replace: "Your App Name"

# Also update:
# - index.html title
# - package.json name
# - README.md
```

### Q: How do I change colors?

**A:** Update tailwind.config.ts.

```typescript
colors: {
  // Old: purple and blue
  // New: your colors
  primary: {
    400: '#YOUR_COLOR_1',
    500: '#YOUR_COLOR_2'
  },
  accent: {
    400: '#YOUR_COLOR_3'
  }
}
```

### Q: How do I add a new page?

**A:** Create component and add to routes.

```typescript
// Create component
const NewPage = () => (
  <div>New Page Content</div>
);

// Add to switch
{appState === 'new-page' && <NewPage />}

// Add navigation
<button onClick={() => setAppState('new-page')}>
  Go to New Page
</button>
```

### Q: How do I add a new feature?

**A:** Plan, create, test, deploy.

```typescript
// 1. Add state
const [newFeature, setNewFeature] = useState(false);

// 2. Create component
const NewFeature = () => (...);

// 3. Render component
{newFeature && <NewFeature />}

// 4. Add toggle
<button onClick={() => setNewFeature(!newFeature)}>
  Toggle Feature
</button>

// 5. Test locally
npm run dev

// 6. Build and deploy
npm run build
npm run deploy
```

### Q: How do I change the email for admin login?

**A:** Find and update the email check.

```typescript
// File: src/App.tsx
// Find this line:
if (email === 'diablo@gmail.com' && password === 'diablo') {

// Change to:
if (email === 'youremail@example.com' && password === 'yourpassword') {
```

### Q: How do I add a loading spinner?

**A:** Create animated component.

```typescript
const LoadingSpinner = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 1 }}
  >
    <Spinner className="w-8 h-8" />
  </motion.div>
);
```

---

## Performance Tips

### Bundle Size
- Remove unused dependencies: `npm audit`
- Use tree-shaking: Avoid default exports
- Dynamic imports: `const Component = lazy(() => import(...))`

### Rendering
- Memoize components: `React.memo(Component)`
- Use useCallback for functions
- Use useMemo for expensive calculations
- Virtual lists for large datasets

### Network
- Gzip compression: Enable on server
- CDN: Use for assets
- API caching: Cache responses
- Reduce requests: Bundle files

---

## Security Tips

### Frontend
- Sanitize user input: Use DOMPurify
- XSS prevention: Use textContent instead of innerHTML
- CSRF tokens: Include in forms
- Secure cookies: httpOnly, Secure, SameSite flags

### Backend (When Implemented)
- Password hashing: Use bcrypt
- Rate limiting: Prevent brute force
- HTTPS: Always use SSL
- CORS: Restrict origins
- Input validation: Server-side
- Environment variables: Store secrets

---

## Testing Questions

### Q: How do I test the app?

**A:** Manual testing + unit tests (when setup).

```bash
# Manual testing
npm run dev
# Test each feature

# Unit testing (when setup)
npm install --save-dev vitest @testing-library/react
npm test
```

### Q: How do I test on mobile?

**A:** Use browser dev tools or device.

```bash
# Mobile browser testing
npm run dev
# Open http://your-ip:3000 on phone

# Dev tools
F12 → Device toggle (Ctrl+Shift+M)

# Or use ngrok
npm install -g ngrok
ngrok http 3000
# Share the ngrok URL
```

---

## Deployment FAQ

### Q: How do I deploy to Netlify?

**A:** Connect GitHub repository.

1. Go to netlify.com
2. "New site from Git"
3. Connect GitHub
4. Select repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

### Q: How do I deploy to Vercel?

**A:** Similar to Netlify.

```bash
npm install -g vercel
vercel
# Follow prompts
```

### Q: How do I deploy to custom domain?

**A:** Point domain DNS to hosting provider.

1. Buy domain (GoDaddy, Namecheap, etc.)
2. Set DNS records:
   - A record: Points to server IP
   - CNAME: Points to hosting domain
3. Wait 24-48 hours for propagation
4. Enable HTTPS: Let's Encrypt (free)

---

## Getting Help

### Resources
- GitHub Issues: Report bugs
- Stack Overflow: Ask questions
- Discord: Community support
- Reddit: r/reactjs, r/webdev
- Official docs: React, Vite, Tailwind

### When Asking for Help
1. Describe the issue clearly
2. Include error messages
3. Share code snippets
4. List your environment (Node, OS)
5. Mention what you've tried

---

## Still Have Questions?

1. **Check this FAQ first**
2. **Search GitHub Issues**
3. **Read documentation**
4. **Create new GitHub Issue**
5. **Post on Stack Overflow**

---

**Last Updated:** 2024
**Version:** 1.0.0

---

Enjoy using DDoS Guardian! 🚀
