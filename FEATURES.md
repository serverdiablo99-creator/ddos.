# 📚 DDoS Guardian - Feature Reference Guide

## 🏠 Landing Page

### Features Displayed
- **Real-Time Protection** - Detect and block DDoS attacks instantly
- **Live Monitoring** - Monitor website health and attack patterns
- **Lightning Fast** - Sub-second response times
- **Anywhere, Anytime** - Global protection with 99.99% uptime
- **Smart Alerts** - Instant notifications on attacks
- **Easy Setup** - Add domain in seconds

### Call-to-Action Buttons
- **Sign Up** - Create new user account
- **Admin** - Access admin control panel

---

## 👤 User Features

### Authentication

#### Sign Up (Registration)
- **Fields Required:**
  - Full Name
  - Email Address
  - Password
  - Confirm Password
- **Options:**
  - Discord OAuth (placeholder)
  - Google OAuth (placeholder)
- **Password Requirements:**
  - Can use any password for demo
  - Show/hide password toggle

#### Sign In (Login)
- **Fields Required:**
  - Email
  - Password
- **OAuth Options:**
  - Discord login
  - Google login
- **Features:**
  - Remember me option (can be added)
  - Forgot password (can be added)

---

## 📊 User Dashboard

### Navigation Sidebar

#### Dashboard (Main)
- **Statistics Cards:**
  - Protected Websites: Number of domains
  - Online Websites: Currently active websites
  - Attacks Blocked: Total blocked attempts
  - Total Attempts: All detected attacks

- **Quick Actions:**
  - Add Website
  - View Analytics
  - Health Check

- **Recent Websites:**
  - Domain name
  - Status indicator
  - Attacks blocked
  - Protection status

#### My Websites
- **Website List:**
  - Domain name
  - Status (Online/Offline/Under Attack)
  - Attacks detected
  - Attacks blocked
  - Block rate percentage

- **Actions per Website:**
  - View Detailed Analytics
  - Configure Protection
  - Remove Website

- **Add New Website:**
  - Click "+ Add New Website"
  - Enter domain name
  - System immediately protects it

#### Activity Log
- **Shows:**
  - Attack events
  - Status changes
  - Website additions
  - Login events
- **Information:**
  - Website/domain involved
  - Type of event
  - Timestamp

#### Settings
- **Profile Settings:**
  - View name (read-only)
  - View email (read-only)

- **Security:**
  - Change Password
    - Current password
    - New password
    - Confirm new password
  - Two-factor authentication (can be added)

- **Notification Preferences:**
  - Email alerts on DDoS
  - Weekly reports
  - Status change alerts
  - Login alerts
  - All toggleable

---

## 🔐 Admin Dashboard

### Access
- **Email:** diablo@gmail.com
- **Password:** diablo
- **Warning:** Don't change these in production!

### Navigation Tabs

#### Admin Dashboard (Home)
- **System Statistics:**
  - Total Users: Active user count
  - Active Websites: Domains being protected
  - Attacks Blocked: Global attack statistics
  - System Uptime: Service availability percentage

- **Attack Trends Chart:**
  - Last 30 days visualization
  - Attack volume over time
  - Peaks and patterns

#### User Management
- **User List Table:**
  - User Email
  - User Name
  - Last Login (with timestamp)
  - Websites Managed (count)
  - Status (Active/Inactive)

- **Admin Actions:**
  - View user details
  - Edit user settings (can be added)
  - Disable/enable users (can be added)
  - Reset passwords (can be added)

#### System Activity
- **Activity Log:**
  - User logins
  - DDoS attacks detected
  - Website additions
  - Status changes
  - Real-time updates

- **Log Details:**
  - User/domain involved
  - Action performed
  - Timestamp

#### Analytics
- **Attack Distribution:**
  - Attack types breakdown
  - Percentage of each type
  - Visual chart

- **Geographic Distribution:**
  - World map showing attacks by location
  - Hotspots highlighted
  - Regional statistics

---

## 🎯 Workflows

### User Workflow: Adding Website Protection

```
1. Login with email/password
   ↓
2. Go to "My Websites" or click "Add Website"
   ↓
3. Enter domain name (e.g., example.com)
   ↓
4. Click "Add Domain"
   ↓
5. System immediately protects website
   ↓
6. Monitor status in dashboard
```

### User Workflow: Checking Website Status

```
1. Go to Dashboard or My Websites
   ↓
2. View website cards/list
   ↓
3. Check status indicator (🟢 Online, 🔴 Offline, 🟠 Under Attack)
   ↓
4. Click website to see details:
   - Attacks detected
   - Attacks blocked
   - Block rate %
```

### User Workflow: Changing Password

```
1. Go to Settings
   ↓
2. Click "🔐 Change Password"
   ↓
3. Enter current password
   ↓
4. Enter new password
   ↓
5. Confirm new password
   ↓
6. Click "Update Password"
   ↓
7. Password changed successfully
```

### Admin Workflow: Monitoring Users

```
1. Login as admin (diablo@gmail.com / diablo)
   ↓
2. Go to "User Management"
   ↓
3. View all user accounts
   ↓
4. See login times and activity
   ↓
5. Check website counts per user
```

---

## 📈 Metrics Explained

### Attack-Related
- **Attacks Detected:** Total DDoS attempts against your website(s)
- **Attacks Blocked:** Successfully prevented attacks (should equal detected)
- **Block Rate:** Percentage of attacks successfully blocked
  - Formula: (Blocked ÷ Detected) × 100
  - Ideal: 100%

### Website Status
- **🟢 Online:** Website is running normally
- **🔴 Offline:** Website is not responding
- **🟠 Under Attack:** Active DDoS attack detected

### Time Indicators
- **Now:** Just happened
- **X minutes ago:** Recent activity
- **Last updated:** Most recent status check

---

## 🎨 UI Elements Explained

### Status Cards
- **Color coding:**
  - Purple/Blue: Standard metrics
  - Green: Positive metrics (online)
  - Red: Negative metrics (offline, attacks)
  - Orange: Warning (under attack)

### Buttons
- **Primary (Purple/Blue gradient):** Main action
- **Secondary (Border):** Alternative action
- **Danger (Red):** Destructive action
- **All buttons:** Animate on hover

### Icons
- **Shield:** Protection/security
- **Globe:** Website/domain
- **Activity:** Events/monitoring
- **Settings:** Preferences
- **CheckCircle:** Success/online
- **AlertCircle:** Warning/offline
- **Home:** Dashboard
- **LogOut:** Exit account

### Animations
- **Fade in:** Content appears smoothly
- **Slide:** Sidebar/modals enter from sides
- **Glow:** Hover effects on buttons
- **Float:** Background elements move gently
- **Pulse:** Loading indicators

---

## 🔔 Notifications (Can Be Implemented)

### User Notifications
- DDoS attack detected on your domain
- Website went offline
- Website came back online
- Attack successfully blocked
- Weekly security report
- Your password was changed
- New login from new device

### Admin Notifications
- Spike in global attack traffic
- Multiple users affected
- System performance degradation
- Critical security alert
- User account suspicious activity

---

## 🛠️ Settings & Customization

### User Settings
- Profile information (name, email)
- Password management
- Notification preferences
- Privacy settings (can be added)
- API keys (can be added)

### Admin Settings
- System configuration (can be added)
- Email settings (can be added)
- Alert thresholds (can be added)
- User management (can be added)
- Backup settings (can be added)

---

## 📱 Responsive Design

### Desktop (> 1024px)
- Full sidebar visible
- Grid layouts (4 columns)
- All features visible
- Optimal spacing

### Tablet (768px - 1024px)
- Collapsible sidebar
- 2-3 column layouts
- Touch-friendly buttons
- Good spacing

### Mobile (< 768px)
- Sidebar collapses to icons
- Stack layouts (1 column)
- Larger touch targets
- Readable text
- Optimized spacing

---

## ⌨️ Keyboard Navigation

- **Tab:** Move between elements
- **Enter:** Activate buttons
- **Space:** Toggle checkboxes
- **Escape:** Close modals
- **Arrow keys:** Navigate lists (when implemented)

---

## 🔄 Data Refresh

### Automatic Updates
- Status checks every few seconds (demo)
- Activity logs auto-refresh (demo)
- Attack counts update in real-time (demo)

### Manual Refresh
- Click "Refresh" button (when implemented)
- Click on metric card to refresh
- Navigate between tabs

---

## 📊 Export & Reports (Can Be Added)

### Available Reports
- Monthly security report
- Attack statistics
- Performance metrics
- User activity report
- Billing report (if applicable)

### Export Formats
- PDF
- CSV
- Excel
- JSON

---

## 🔗 API Integration Points

The following can be connected to a real backend:

1. **Authentication:**
   - POST /api/auth/register
   - POST /api/auth/login
   - POST /api/auth/logout

2. **Websites:**
   - GET /api/websites
   - POST /api/websites
   - DELETE /api/websites/{id}
   - GET /api/websites/{id}/status

3. **Attacks:**
   - GET /api/attacks
   - GET /api/attacks/stats
   - GET /api/attacks/summary

4. **Users:**
   - GET /api/users (admin)
   - GET /api/users/{id} (admin)
   - PUT /api/users/{id}/password

5. **Analytics:**
   - GET /api/analytics/dashboard
   - GET /api/analytics/attacks
   - GET /api/analytics/geographic

---

## 🎓 Tips & Tricks

### For Users
1. Add multiple websites for better protection
2. Check activity log regularly
3. Change password monthly
4. Enable all notifications
5. Monitor attack patterns

### For Admins
1. Check system activity daily
2. Review user login patterns
3. Analyze attack trends
4. Monitor resource usage
5. Keep backup of settings

---

## 🆘 Getting Help

**In-App Help:**
- Hover over icons for tooltips
- Read field labels carefully
- Check success/error messages

**External Help:**
- Read README.md
- Check SETUP_GUIDE.md
- Visit GitHub Issues
- Check documentation

---

## 📝 Feature Roadmap

Upcoming features that can be added:

- [ ] Two-factor authentication
- [ ] API keys management
- [ ] Advanced analytics
- [ ] Custom reports
- [ ] Bulk domain management
- [ ] Webhook notifications
- [ ] Slack integration
- [ ] Mobile app
- [ ] Team management
- [ ] Custom alert rules
- [ ] DDoS mitigation strength adjustment
- [ ] Geographic filtering
- [ ] Rate limiting configuration
- [ ] WAF (Web Application Firewall)
- [ ] Advanced threat intelligence

---

**Last Updated:** 2024
**Version:** 1.0.0
