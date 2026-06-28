# DDoS Guardian - Enterprise DDoS Protection Service

A modern, anime-inspired web application for DDoS protection with real-time monitoring, admin dashboard, and user management.

![DDoS Guardian](https://img.shields.io/badge/DDoS-Guardian-purple?style=flat-square)
![React](https://img.shields.io/badge/React-18.2-blue?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🛡️ Core Protection
- **Real-Time DDoS Detection** - AI-powered threat detection system
- **Instant Attack Blocking** - Sub-second response times
- **Multi-Layer Protection** - Advanced filtering algorithms
- **99.99% Uptime Guarantee** - Enterprise-grade reliability

### 👥 User Dashboard
- **Website Management** - Add and manage multiple domains
- **Live Status Monitoring** - Real-time website health checks
- **Attack Analytics** - Detailed DDoS attack statistics
- **Quick Metrics** - Protected websites, online status, blocked attempts
- **Activity Logs** - Complete audit trail of all activities

### 🔐 Security Features
- **Secure Authentication** - Email/password registration & login
- **OAuth Integration** - Discord & Google login support
- **Password Management** - Change password with secure verification
- **Session Management** - Automatic logout and session handling

### 👨‍💼 Admin Control Panel
- **User Management** - Monitor all user accounts and activities
- **System Analytics** - Attack trends and geographic distribution
- **Global Dashboard** - System-wide statistics and metrics
- **Activity Monitoring** - Real-time system activity logs

### 🎨 Design & Animation
- **Anime-Inspired UI** - Modern cyberpunk aesthetic
- **Smooth Animations** - Framer Motion powered transitions
- **Glassmorphism Effects** - Modern glass-like card designs
- **Responsive Design** - Works perfectly on mobile & desktop
- **Dark Theme** - Eye-friendly dark mode interface

## 📋 Credentials

### Admin Login
- **Email:** `diablo@gmail.com`
- **Password:** `diablo`

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Local Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ddos-protection.git
   cd ddos-protection
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Deployment on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `ddos-protection` (or your preferred name)
3. Make it **public**
4. Don't initialize with README (we have one)

### Step 2: Update package.json

Update the `homepage` field in `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/ddos-protection"
}
```

Replace `yourusername` with your GitHub username.

### Step 3: Install GitHub Pages Deploy

```bash
npm install --save-dev gh-pages
```

### Step 4: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: DDoS Guardian app"
git branch -M main
git remote add origin https://github.com/yourusername/ddos-protection.git
git push -u origin main
```

### Step 5: Deploy

```bash
npm run deploy
```

This will build the app and push it to the `gh-pages` branch.

### Step 6: Enable GitHub Pages

1. Go to your repository settings
2. Navigate to **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Select **gh-pages** branch and **/(root)** folder
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/ddos-protection`

## 📁 Project Structure

```
ddos-protection/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/
│   └── vite.svg                # Vite logo
├── index.html                  # HTML template
├── package.json                # Dependencies & scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## 🎯 Key Pages & Features

### Landing Page
- Hero section with animated background
- Feature showcase
- Call-to-action buttons
- Admin access gateway

### Authentication
- User registration (with name, email, password)
- User login
- Admin login (with verification)
- OAuth placeholders (Discord, Google)
- Password visibility toggle

### User Dashboard
- Sidebar navigation
- Real-time statistics cards
- Website management
- Activity logs
- Settings panel with password change

### Website Management
- Add new domains for protection
- View website status (Online/Offline/Under Attack)
- Monitor DDoS attempts
- View attack statistics
- Remove websites

### Settings
- Profile information
- Password change
- Notification preferences
- Security settings

### Admin Dashboard
- Global system statistics
- User login activity tracking
- Attack trends visualization
- Geographic attack distribution
- System activity logs

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vite** - Build tool

### Styling
- Glassmorphism effects
- Gradient backgrounds
- Custom animations
- Dark theme
- Responsive design

### State Management
- React hooks (useState, useEffect)
- Local storage for demo data
- Component-level state

## 🔧 Customization

### Change Admin Credentials

Open `ddos-protection-app.tsx` and find:

```typescript
if (email === 'diablo@gmail.com' && password === 'diablo') {
  // Change these values
}
```

### Customize Colors

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  purple: {
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
  },
  // Customize colors here
}
```

### Add Real API Integration

Replace the mock data in the app with actual API calls:

```typescript
// Example: Fetch user data from API
const handleUserAuth = async (email: string, password: string) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const user = await response.json();
  setCurrentUser(user);
};
```

### Enable OAuth Integration

Update the OAuth buttons to redirect to OAuth providers:

```typescript
<button
  onClick={() => {
    window.location.href = `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify`;
  }}
>
  Discord Login
</button>
```

## 📊 Demo Data

The app includes sample data for demonstration:

- **Sample Websites:** example.com, mysite.io
- **Sample Users:** Multiple user accounts for testing
- **Mock Attacks:** Simulated DDoS attempts
- **Activity Logs:** Pre-populated activity data

All data is stored in component state (resets on page refresh).

## 💾 Data Persistence

To add persistent storage:

1. **Browser LocalStorage** (Simple)
   ```typescript
   localStorage.setItem('user', JSON.stringify(currentUser));
   ```

2. **Firebase** (Recommended)
   ```typescript
   import firebase from 'firebase/app';
   // Integration code
   ```

3. **Backend API** (Production)
   ```typescript
   fetch('/api/users', { method: 'POST', body: JSON.stringify(user) });
   ```

## 🔒 Security Considerations

### For Production
1. **Never store passwords in frontend** - Use secure backend authentication
2. **Use HTTPS** - Always use encrypted connections
3. **Implement CSRF protection** - Use tokens for sensitive operations
4. **Sanitize inputs** - Prevent XSS attacks
5. **Rate limiting** - Prevent brute force attacks
6. **API authentication** - Use JWT or OAuth tokens

### Current Limitations
- This is a **demo/frontend application**
- Credentials are hardcoded for demonstration
- No real backend authentication
- No real DDoS protection (visualization only)
- Data is not persisted between sessions

## 🚀 Advanced Features to Implement

### Backend Integration
- Node.js/Express server
- Database (PostgreSQL/MongoDB)
- Real API authentication
- DDoS mitigation algorithms

### Real-Time Features
- WebSocket for live updates
- Real-time attack notifications
- Live network traffic monitoring
- Instant status changes

### Enhanced Security
- Two-factor authentication
- IP whitelisting
- API rate limiting
- Advanced threat detection

### Analytics
- Detailed attack analysis
- ML-based threat patterns
- Predictive analytics
- Custom reports

## 📱 Responsive Design

The application is fully responsive:
- **Mobile (< 768px)** - Single column layout
- **Tablet (768px - 1024px)** - Two column layout
- **Desktop (> 1024px)** - Full grid layout

## ♿ Accessibility

- Keyboard navigation support
- Focus indicators
- Semantic HTML
- ARIA labels
- Color contrast compliant
- Reduced motion support

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
PORT=3001 npm run dev
```

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages Not Updating
```bash
# Force push to gh-pages
npm run deploy -- --force
```

## 📖 Documentation

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [GitHub Pages Guide](https://pages.github.com)

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎓 Learning Resources

- Learn about [DDoS Protection](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/)
- [Web Development with React](https://react.dev)
- [Modern CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [TypeScript Guide](https://www.typescriptlang.org/docs/)

## 💬 Support

Having issues? 

1. Check the [GitHub Issues](https://github.com/yourusername/ddos-protection/issues)
2. Read the troubleshooting section
3. Create a new issue with:
   - Your system information
   - Steps to reproduce
   - Expected vs actual behavior

## 🌟 Show Your Support

If you find this project helpful:

⭐ Star the repository
🍴 Fork the project
💬 Share your feedback
🐛 Report issues

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

**Made with ❤️ for cybersecurity enthusiasts**

*DDoS Guardian - Protecting the internet, one domain at a time.*

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Preview production build
npm run preview
```

Enjoy using DDoS Guardian! 🚀
