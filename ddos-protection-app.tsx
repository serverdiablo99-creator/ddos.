import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Lock, Eye, EyeOff, LogOut, Home, Settings, Activity, AlertCircle, CheckCircle, WifiOff, Globe, Github, LogIn, UserPlus, BarChart3, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ==================== TYPES ====================
interface User {
  id: string;
  email: string;
  name: string;
  websites: Website[];
  loginAt: string;
}

interface Website {
  id: string;
  domain: string;
  isProtected: boolean;
  isOnline: boolean;
  ddosAttempts: number;
  blockedAttempts: number;
  lastUpdated: string;
  status: 'online' | 'offline' | 'under_attack';
}

interface AdminUser {
  email: string;
  name: string;
  lastLogin: string;
  websitesManaged: number;
}

// ==================== CONTEXTS & STATES ====================
interface AppState {
  currentUser: User | null;
  isAdminLoggedIn: boolean;
  currentPage: string;
  adminUsers: AdminUser[];
}

// ==================== ANIMATION VARIANTS ====================
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ==================== LANDING PAGE ====================
const LandingPage: React.FC<{
  onGetStarted: () => void;
  onAdminLogin: () => void;
}> = ({ onGetStarted, onAdminLogin }) => {
  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Header */}
      <motion.header
        className="relative z-10 backdrop-blur-md bg-slate-900/30 border-b border-purple-500/20 sticky top-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-8 h-8 text-purple-400" />
            DDoS Guardian
          </motion.div>
          <div className="flex gap-4">
            <motion.button
              onClick={onGetStarted}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
            <motion.button
              onClick={onAdminLogin}
              className="px-6 py-2 rounded-lg border border-purple-500 hover:bg-purple-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Admin
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
          variants={fadeInUp}
        >
          Unstoppable Defense
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          Enterprise-grade DDoS protection for your domain. Block attacks in real-time and keep your website online 24/7.
        </motion.p>
        <motion.button
          onClick={onGetStarted}
          className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Now →
        </motion.button>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {[
          {
            icon: Shield,
            title: "Real-Time Protection",
            desc: "Detect and block DDoS attacks instantly with AI-powered threat detection"
          },
          {
            icon: Activity,
            title: "Live Monitoring",
            desc: "Monitor your website health and attack patterns in real-time dashboard"
          },
          {
            icon: Zap,
            title: "Lightning Fast",
            desc: "Sub-second response times with global edge network distribution"
          },
          {
            icon: Globe,
            title: "Anywhere, Anytime",
            desc: "Protection that works worldwide with 99.99% uptime guarantee"
          },
          {
            icon: AlertCircle,
            title: "Smart Alerts",
            desc: "Get notified instantly when attacks are detected and blocked"
          },
          {
            icon: CheckCircle,
            title: "Easy Setup",
            desc: "Add your domain in seconds, no complex configuration needed"
          },
        ].map((feature, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 hover:border-purple-400/50 transition-all"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// ==================== AUTHENTICATION PAGE ====================
const AuthPage: React.FC<{
  isLogin: boolean;
  onSubmit: (email: string, password: string, name?: string) => void;
  onToggle: () => void;
  onBack: () => void;
}> = ({ isLogin, onSubmit, onToggle, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!isLogin && !name) {
      setError('Please enter your name');
      return;
    }

    onSubmit(email, password, name);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-full max-w-md backdrop-blur-md bg-slate-900/50 border border-purple-500/30 rounded-2xl p-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.button
          onClick={onBack}
          className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          whileHover={{ x: -5 }}
        >
          ← Back
        </motion.button>

        <motion.h2
          className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {isLogin ? 'Welcome Back' : 'Join Us'}
        </motion.h2>
        <p className="text-gray-400 mb-8">{isLogin ? 'Sign in to your account' : 'Create your account'}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </motion.div>
          )}

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </motion.div>

          {error && (
            <motion.div
              className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </motion.button>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button
              type="button"
              className="py-2 rounded-lg border border-blue-500/30 hover:bg-blue-500/10 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <span className="text-lg">🔵</span> Discord
            </button>
            <button
              type="button"
              className="py-2 rounded-lg border border-red-500/30 hover:bg-red-500/10 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <span className="text-lg">🔴</span> Google
            </button>
          </motion.div>
        </form>

        <motion.div
          className="mt-6 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={onToggle}
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// ==================== ADMIN LOGIN ====================
const AdminLoginPage: React.FC<{
  onSubmit: (email: string, password: string) => void;
  onBack: () => void;
}> = ({ onSubmit, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (email === 'diablo@gmail.com' && password === 'diablo') {
      onSubmit(email, password);
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-slate-900 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-full max-w-md backdrop-blur-md bg-slate-900/50 border border-red-500/30 rounded-2xl p-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.button
          onClick={onBack}
          className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          whileHover={{ x: -5 }}
        >
          ← Back
        </motion.button>

        <motion.div className="flex items-center gap-3 mb-8">
          <Lock className="w-8 h-8 text-red-400" />
          <div>
            <h2 className="text-2xl font-bold text-red-400">Admin Panel</h2>
            <p className="text-xs text-gray-500">Restricted Access</p>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <label className="block text-sm font-medium text-gray-300 mb-2">Admin Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-red-500/20 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors"
              placeholder="admin@email.com"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-red-500/20 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </motion.div>

          {error && (
            <motion.div
              className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-500 font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enter Admin Panel
          </motion.button>
        </form>

        <motion.p
          className="mt-6 text-center text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Demo: diablo@gmail.com / diablo
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// ==================== USER DASHBOARD ====================
const UserDashboard: React.FC<{
  user: User;
  onLogout: () => void;
  onAddWebsite: (domain: string) => void;
  onRemoveWebsite: (id: string) => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}> = ({ user, onLogout, onAddWebsite, onRemoveWebsite, onNavigate, currentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showAddWebsite, setShowAddWebsite] = useState(false);
  const [newDomain, setNewDomain] = useState('');

  const handleAddWebsite = () => {
    if (newDomain) {
      onAddWebsite(newDomain);
      setNewDomain('');
      setShowAddWebsite(false);
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'websites', label: 'My Websites', icon: Globe },
    { id: 'activity', label: 'Activity Log', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Sidebar */}
      <motion.aside
        className={`fixed left-0 top-0 h-full bg-slate-900/95 border-r border-purple-500/20 backdrop-blur-md transition-all duration-300 z-40 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
        initial={{ x: -300 }}
        animate={{ x: 0 }}
      >
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && (
            <motion.div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-purple-400" />
              <span className="font-bold">Guardian</span>
            </motion.div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                    : 'hover:bg-purple-500/10'
                }`}
                whileHover={{ x: 5 }}
              >
                <Icon size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </motion.button>
            );
          })}
        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          <motion.button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </motion.button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <motion.main
        className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Top Bar */}
        <motion.div className="sticky top-0 z-30 backdrop-blur-md bg-slate-900/50 border-b border-purple-500/20 px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            {navItems.find(n => n.id === currentPage)?.label}
          </h1>
          <motion.div className="flex items-center gap-4">
            <div className="text-sm">
              <p className="text-gray-400">Welcome back</p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
          </motion.div>
        </motion.div>

        {/* Content Area */}
        <motion.div
          className="p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {currentPage === 'dashboard' && (
            <DashboardContent user={user} onAddWebsite={() => setShowAddWebsite(true)} />
          )}
          {currentPage === 'websites' && (
            <WebsitesContent
              websites={user.websites}
              onRemove={onRemoveWebsite}
              onAdd={() => setShowAddWebsite(true)}
            />
          )}
          {currentPage === 'activity' && <ActivityContent websites={user.websites} />}
          {currentPage === 'settings' && (
            <SettingsContent userName={user.name} email={user.email} />
          )}
        </motion.div>
      </motion.main>

      {/* Add Website Modal */}
      <AnimatePresence>
        {showAddWebsite && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAddWebsite(false)}
          >
            <motion.div
              className="bg-slate-900 border border-purple-500/30 rounded-2xl p-8 max-w-md w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Add Your Website</h3>
              <p className="text-gray-400 mb-4">Enter your domain to enable DDoS protection</p>

              <input
                type="text"
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
                placeholder="example.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white mb-4 focus:border-purple-500 focus:outline-none"
              />

              <div className="flex gap-4">
                <motion.button
                  onClick={() => setShowAddWebsite(false)}
                  className="flex-1 px-4 py-2 rounded-lg border border-purple-500/30 hover:bg-purple-500/10"
                  whileHover={{ scale: 1.02 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={handleAddWebsite}
                  className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 font-semibold"
                  whileHover={{ scale: 1.02 }}
                >
                  Add Domain
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ==================== DASHBOARD CONTENT ====================
const DashboardContent: React.FC<{ user: User; onAddWebsite: () => void }> = ({
  user,
  onAddWebsite,
}) => {
  const totalAttempts = user.websites.reduce((sum, w) => sum + w.ddosAttempts, 0);
  const blockedAttempts = user.websites.reduce((sum, w) => sum + w.blockedAttempts, 0);
  const onlineWebsites = user.websites.filter((w) => w.isOnline).length;

  return (
    <motion.div className="space-y-8" variants={staggerContainer} initial="initial" animate="animate">
      {/* Stats Grid */}
      <motion.div className="grid md:grid-cols-4 gap-6">
        {[
          {
            label: 'Protected Websites',
            value: user.websites.length,
            icon: Shield,
            color: 'from-purple-500 to-blue-500',
          },
          {
            label: 'Online Websites',
            value: onlineWebsites,
            icon: CheckCircle,
            color: 'from-green-500 to-emerald-500',
          },
          {
            label: 'Attacks Blocked',
            value: blockedAttempts,
            icon: AlertCircle,
            color: 'from-orange-500 to-red-500',
          },
          {
            label: 'Total Attempts',
            value: totalAttempts,
            icon: Activity,
            color: 'from-pink-500 to-rose-500',
          },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              className={`p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br ${stat.color}/10 border border-purple-400/20`}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-4xl font-bold mt-2">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 text-${stat.color.split('-')[1]}-400`} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20"
        variants={fadeInUp}
      >
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <motion.button
            onClick={onAddWebsite}
            className="p-4 rounded-lg border border-purple-400/30 hover:bg-purple-500/10 transition-colors text-center"
            whileHover={{ scale: 1.05 }}
          >
            <Globe className="w-6 h-6 mx-auto mb-2 text-purple-400" />
            <span>Add Website</span>
          </motion.button>
          <motion.button className="p-4 rounded-lg border border-blue-400/30 hover:bg-blue-500/10 transition-colors text-center" whileHover={{ scale: 1.05 }}>
            <Activity className="w-6 h-6 mx-auto mb-2 text-blue-400" />
            <span>View Analytics</span>
          </motion.button>
          <motion.button className="p-4 rounded-lg border border-green-400/30 hover:bg-green-500/10 transition-colors text-center" whileHover={{ scale: 1.05 }}>
            <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-400" />
            <span>Health Check</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Recent Websites */}
      {user.websites.length > 0 && (
        <motion.div
          className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20"
          variants={fadeInUp}
        >
          <h3 className="text-lg font-semibold mb-4">Your Protected Websites</h3>
          <div className="space-y-3">
            {user.websites.map((website) => (
              <motion.div
                key={website.id}
                className="flex items-center justify-between p-4 rounded-lg bg-slate-800/30 border border-purple-400/10 hover:border-purple-400/30 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${website.isOnline ? 'bg-green-500' : 'bg-red-500'}`} />
                  <div>
                    <p className="font-semibold">{website.domain}</p>
                    <p className="text-xs text-gray-400">{website.blockedAttempts} attacks blocked</p>
                  </div>
                </div>
                <Shield className="w-5 h-5 text-purple-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

// ==================== WEBSITES CONTENT ====================
const WebsitesContent: React.FC<{
  websites: Website[];
  onRemove: (id: string) => void;
  onAdd: () => void;
}> = ({ websites, onRemove, onAdd }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      <motion.button
        onClick={onAdd}
        className="w-full p-4 rounded-lg border-2 border-dashed border-purple-500/30 hover:border-purple-500/50 text-purple-400 font-semibold transition-all"
        whileHover={{ scale: 1.02 }}
        variants={fadeInUp}
      >
        + Add New Website
      </motion.button>

      {websites.map((website) => (
        <motion.div
          key={website.id}
          className="rounded-2xl backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 overflow-hidden"
          variants={fadeInUp}
        >
          <motion.button
            onClick={() => setExpandedId(expandedId === website.id ? null : website.id)}
            className="w-full p-6 text-left hover:bg-purple-500/5 transition-colors"
            whileHover={{ paddingLeft: 28 }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-4 h-4 rounded-full ${
                    website.status === 'online' ? 'bg-green-500' :
                    website.status === 'offline' ? 'bg-red-500' :
                    'bg-orange-500'
                  }`} />
                  <h3 className="text-lg font-semibold">{website.domain}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    website.status === 'online' ? 'bg-green-500/20 text-green-300' :
                    website.status === 'offline' ? 'bg-red-500/20 text-red-300' :
                    'bg-orange-500/20 text-orange-300'
                  }`}>
                    {website.status === 'online' ? '🟢 Online' :
                     website.status === 'offline' ? '🔴 Offline' :
                     '🟠 Under Attack'}
                  </span>
                </div>
                <p className="text-sm text-gray-400">Protected • Last updated: {website.lastUpdated}</p>
              </div>
              <motion.div
                animate={{ rotate: expandedId === website.id ? 180 : 0 }}
              >
                ▼
              </motion.div>
            </div>
          </motion.button>

          <AnimatePresence>
            {expandedId === website.id && (
              <motion.div
                className="border-t border-purple-400/10 p-6 space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Attacks Detected</p>
                    <p className="text-2xl font-bold text-red-400">{website.ddosAttempts}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Attacks Blocked</p>
                    <p className="text-2xl font-bold text-green-400">{website.blockedAttempts}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Block Rate</p>
                    <p className="text-2xl font-bold text-blue-400">
                      {website.ddosAttempts > 0
                        ? Math.round((website.blockedAttempts / website.ddosAttempts) * 100)
                        : 100}%
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <motion.button className="w-full px-4 py-3 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 font-semibold transition-colors" whileHover={{ scale: 1.02 }}>
                    📊 View Detailed Analytics
                  </motion.button>
                  <motion.button className="w-full px-4 py-3 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 font-semibold transition-colors" whileHover={{ scale: 1.02 }}>
                    ⚙️ Configure Protection
                  </motion.button>
                  <motion.button
                    onClick={() => onRemove(website.id)}
                    className="w-full px-4 py-3 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    🗑️ Remove Website
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};

// ==================== ACTIVITY CONTENT ====================
const ActivityContent: React.FC<{ websites: Website[] }> = ({ websites }) => {
  const activities = websites.flatMap((w) => [
    {
      id: `${w.id}-1`,
      type: 'attack',
      website: w.domain,
      message: `DDoS attack detected: ${w.ddosAttempts} requests blocked`,
      time: '2 minutes ago',
    },
    {
      id: `${w.id}-2`,
      type: 'status',
      website: w.domain,
      message: `Website status: ${w.status}`,
      time: '5 minutes ago',
    },
  ]);

  return (
    <motion.div className="space-y-4" variants={staggerContainer} initial="initial" animate="animate">
      {activities.map((activity) => (
        <motion.div
          key={activity.id}
          className="p-4 rounded-lg backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20 flex items-start gap-4"
          variants={fadeInUp}
        >
          <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
            activity.type === 'attack' ? 'bg-red-500' : 'bg-blue-500'
          }`} />
          <div className="flex-1">
            <p className="font-semibold">{activity.website}</p>
            <p className="text-gray-400 text-sm">{activity.message}</p>
            <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// ==================== SETTINGS CONTENT ====================
const SettingsContent: React.FC<{ userName: string; email: string }> = ({
  userName,
  email,
}) => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <motion.div className="space-y-8" variants={staggerContainer} initial="initial" animate="animate">
      {/* Profile Settings */}
      <motion.div
        className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20"
        variants={fadeInUp}
      >
        <h3 className="text-lg font-semibold mb-6">Profile Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              value={userName}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              readOnly
              className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white"
            />
          </div>
        </div>
      </motion.div>

      {/* Password Settings */}
      <motion.div
        className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20"
        variants={fadeInUp}
      >
        <h3 className="text-lg font-semibold mb-6">Security</h3>
        <motion.button
          onClick={() => setShowChangePassword(!showChangePassword)}
          className="w-full px-4 py-3 rounded-lg border border-purple-500/30 hover:bg-purple-500/10 font-semibold transition-colors text-left"
          whileHover={{ scale: 1.02 }}
        >
          🔐 Change Password
        </motion.button>

        <AnimatePresence>
          {showChangePassword && (
            <motion.div
              className="mt-4 space-y-4 p-4 rounded-lg bg-slate-800/30 border border-purple-500/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white focus:border-purple-500 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white focus:border-purple-500 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-800/50 border border-purple-500/20 text-white focus:border-purple-500 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
              <motion.button
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 font-semibold"
                whileHover={{ scale: 1.02 }}
              >
                Update Password
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Notifications */}
      <motion.div
        className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/20"
        variants={fadeInUp}
      >
        <h3 className="text-lg font-semibold mb-6">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            'Email alerts on DDoS attacks',
            'Weekly security reports',
            'Status change notifications',
            'Login alerts',
          ].map((pref, i) => (
            <motion.label key={i} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-purple-500/30"
              />
              <span>{pref}</span>
            </motion.label>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==================== ADMIN DASHBOARD ====================
const AdminDashboard: React.FC<{
  onLogout: () => void;
}> = ({ onLogout }) => {
  const [adminPage, setAdminPage] = useState('dashboard');
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([
    { email: 'user1@example.com', name: 'User One', lastLogin: '2 minutes ago', websitesManaged: 3 },
    { email: 'user2@example.com', name: 'User Two', lastLogin: '15 minutes ago', websitesManaged: 5 },
    { email: 'user3@example.com', name: 'User Three', lastLogin: '1 hour ago', websitesManaged: 2 },
  ]);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'users', label: 'User Management', icon: Globe },
    { id: 'activity', label: 'System Activity', icon: Activity },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <motion.header
        className="backdrop-blur-md bg-slate-900/50 border-b border-red-500/20 sticky top-0 z-30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <motion.div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-red-400" />
            <span className="text-xl font-bold">Admin Control Panel</span>
          </motion.div>
          <motion.button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <LogOut size={18} />
            Logout
          </motion.button>
        </div>
      </motion.header>

      {/* Navigation Tabs */}
      <motion.div
        className="backdrop-blur-md bg-slate-900/30 border-b border-red-500/20 px-8 flex gap-8 overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={() => setAdminPage(item.id)}
              className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-all whitespace-nowrap ${
                adminPage === item.id
                  ? 'border-red-500 text-red-400'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
              whileHover={{ y: -2 }}
            >
              <Icon size={18} />
              {item.label}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Content */}
      <motion.main
        className="max-w-7xl mx-auto px-8 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {adminPage === 'dashboard' && <AdminDashboardPage />}
        {adminPage === 'users' && <AdminUsersPage users={adminUsers} />}
        {adminPage === 'activity' && <AdminActivityPage />}
        {adminPage === 'analytics' && <AdminAnalyticsPage />}
      </motion.main>
    </motion.div>
  );
};

// ==================== ADMIN DASHBOARD PAGE ====================
const AdminDashboardPage: React.FC = () => {
  const stats = [
    { label: 'Total Users', value: '1,234', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { label: 'Active Websites', value: '5,678', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
    { label: 'Attacks Blocked', value: '45.2K', icon: AlertCircle, color: 'from-orange-500 to-red-500' },
    { label: 'System Uptime', value: '99.99%', icon: Activity, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <motion.div className="space-y-8" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              className={`p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br ${stat.color}/10 border border-red-400/20`}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <Icon className="w-8 h-8 text-red-400" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Chart Placeholder */}
      <motion.div
        className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/20"
        variants={fadeInUp}
      >
        <h3 className="text-lg font-semibold mb-6">Attack Trends (Last 30 Days)</h3>
        <div className="h-64 bg-slate-800/30 rounded-lg flex items-center justify-center text-gray-500">
          📊 Real-time attack graph would display here
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==================== ADMIN USERS PAGE ====================
const AdminUsersPage: React.FC<{ users: AdminUser[] }> = ({ users }) => {
  return (
    <motion.div className="space-y-6" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div
        className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/20"
        variants={fadeInUp}
      >
        <h3 className="text-lg font-semibold mb-6">User Logins & Activity</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-red-500/20">
              <tr className="text-left text-gray-400">
                <th className="pb-3 font-medium">User Email</th>
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Last Login</th>
                <th className="pb-3 font-medium">Websites</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <motion.tr
                  key={i}
                  className="border-b border-red-500/10 hover:bg-red-500/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <td className="py-4">{user.email}</td>
                  <td className="py-4">{user.name}</td>
                  <td className="py-4 text-green-400">{user.lastLogin}</td>
                  <td className="py-4">{user.websitesManaged}</td>
                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-300">
                      🟢 Active
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==================== ADMIN ACTIVITY PAGE ====================
const AdminActivityPage: React.FC = () => {
  const activities = [
    { type: 'login', user: 'user1@example.com', action: 'User logged in', time: 'Now', icon: LogIn },
    { type: 'attack', user: 'website1.com', action: 'DDoS attack detected and blocked (5K requests)', time: '2 min', icon: AlertCircle },
    { type: 'website', user: 'user2@example.com', action: 'Added new website for protection', time: '15 min', icon: Globe },
    { type: 'status', user: 'website2.com', action: 'Website went offline then restored', time: '1 hour', icon: WifiOff },
  ];

  return (
    <motion.div className="space-y-4" variants={staggerContainer} initial="initial" animate="animate">
      {activities.map((activity, i) => {
        const Icon = activity.icon;
        return (
          <motion.div
            key={i}
            className="p-4 rounded-lg backdrop-blur-md bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/20 flex items-start gap-4"
            variants={fadeInUp}
          >
            <Icon className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold">{activity.user}</p>
              <p className="text-gray-400 text-sm">{activity.action}</p>
            </div>
            <span className="text-xs text-gray-500 flex-shrink-0">{activity.time}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// ==================== ADMIN ANALYTICS PAGE ====================
const AdminAnalyticsPage: React.FC = () => {
  return (
    <motion.div className="space-y-8" variants={staggerContainer} initial="initial" animate="animate">
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/20"
          variants={fadeInUp}
        >
          <h3 className="text-lg font-semibold mb-6">Attack Types</h3>
          <div className="h-64 bg-slate-800/30 rounded-lg flex items-center justify-center text-gray-500">
            📊 Attack distribution chart
          </div>
        </motion.div>

        <motion.div
          className="p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/20"
          variants={fadeInUp}
        >
          <h3 className="text-lg font-semibold mb-6">Geographic Distribution</h3>
          <div className="h-64 bg-slate-800/30 rounded-lg flex items-center justify-center text-gray-500">
            🌍 World map of attacks
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// ==================== MAIN APP ====================
export default function App() {
  const [appState, setAppState] = useState<'landing' | 'auth' | 'user-dashboard' | 'admin-login' | 'admin-dashboard'>('landing');
  const [isLogin, setIsLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Sample user data
  const handleUserAuth = (email: string, password: string, name?: string) => {
    const newUser: User = {
      id: Math.random().toString(),
      email,
      name: name || email.split('@')[0],
      loginAt: new Date().toLocaleString(),
      websites: [
        {
          id: '1',
          domain: 'example.com',
          isProtected: true,
          isOnline: true,
          ddosAttempts: Math.floor(Math.random() * 100),
          blockedAttempts: Math.floor(Math.random() * 95),
          lastUpdated: 'Now',
          status: 'online',
        },
        {
          id: '2',
          domain: 'mysite.io',
          isProtected: true,
          isOnline: false,
          ddosAttempts: Math.floor(Math.random() * 150),
          blockedAttempts: Math.floor(Math.random() * 145),
          lastUpdated: '5 min ago',
          status: 'offline',
        },
      ],
    };
    setCurrentUser(newUser);
    setAppState('user-dashboard');
  };

  const handleAddWebsite = (domain: string) => {
    if (currentUser) {
      const newWebsite: Website = {
        id: Math.random().toString(),
        domain,
        isProtected: true,
        isOnline: true,
        ddosAttempts: 0,
        blockedAttempts: 0,
        lastUpdated: 'Just now',
        status: 'online',
      };
      setCurrentUser({
        ...currentUser,
        websites: [...currentUser.websites, newWebsite],
      });
    }
  };

  const handleRemoveWebsite = (id: string) => {
    if (currentUser) {
      setCurrentUser({
        ...currentUser,
        websites: currentUser.websites.filter((w) => w.id !== id),
      });
    }
  };

  return (
    <motion.div className="min-h-screen bg-slate-900">
      <AnimatePresence mode="wait">
        {appState === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LandingPage
              onGetStarted={() => {
                setIsLogin(false);
                setAppState('auth');
              }}
              onAdminLogin={() => setAppState('admin-login')}
            />
          </motion.div>
        )}

        {appState === 'auth' && (
          <motion.div
            key="auth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AuthPage
              isLogin={isLogin}
              onSubmit={handleUserAuth}
              onToggle={() => setIsLogin(!isLogin)}
              onBack={() => setAppState('landing')}
            />
          </motion.div>
        )}

        {appState === 'user-dashboard' && currentUser && (
          <motion.div
            key="user-dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <UserDashboard
              user={currentUser}
              onLogout={() => {
                setCurrentUser(null);
                setAppState('landing');
              }}
              onAddWebsite={handleAddWebsite}
              onRemoveWebsite={handleRemoveWebsite}
              onNavigate={setCurrentPage}
              currentPage={currentPage}
            />
          </motion.div>
        )}

        {appState === 'admin-login' && (
          <motion.div
            key="admin-login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AdminLoginPage
              onSubmit={() => setAppState('admin-dashboard')}
              onBack={() => setAppState('landing')}
            />
          </motion.div>
        )}

        {appState === 'admin-dashboard' && (
          <motion.div
            key="admin-dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AdminDashboard
              onLogout={() => {
                setAppState('landing');
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
