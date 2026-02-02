/* ============================================
   BLACK SYNDICATE - HEADER COMPONENT
   Includes: Logo, Search, Navigation, Icons
   ============================================ */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, User, Menu, X, Zap } from 'lucide-react';

/* ============================================
   EDITABLE CONFIGURATION
   Change these values to customize the header
   ============================================ */
const CONFIG = {
  brandName: 'BLACK SYNDICATE',
  searchPlaceholder: 'Buscar produtos...',
  menuItems: [
    { name: 'Assinaturas', href: '#assinaturas', icon: '⚡' },
    { name: 'Ferramentas', href: '#ferramentas', icon: '🔧' },
    { name: 'Downloads', href: '#downloads', icon: '📥' },
    { name: 'Premium', href: '#premium', icon: '👑' },
    { name: 'Outros', href: '#outros', icon: '📦' },
  ],
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      {/* Top gradient line */}
      <div className="h-[2px] gradient-border" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <motion.a 
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            data-testid="header-logo"
          >
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-purple-500 group-hover:text-cyan-400 transition-colors duration-300" />
            <span className="font-heading font-bold text-lg md:text-2xl tracking-tight text-white group-hover:neon-text transition-all duration-300">
              {CONFIG.brandName}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
            {CONFIG.menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors duration-200 electric-hover"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                data-testid={`nav-${item.name.toLowerCase()}`}
              >
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Search & Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search Bar - Desktop */}
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={CONFIG.searchPlaceholder}
                className="search-input pl-10 pr-4 w-48 lg:w-64 text-sm"
                data-testid="search-input"
              />
            </div>

            {/* Cart Icon */}
            <motion.button
              className="relative p-2 rounded-lg hover:bg-white/5 transition-colors electric-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-testid="cart-button"
            >
              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-300 hover:text-purple-400 transition-colors" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full text-[10px] font-bold flex items-center justify-center">
                0
              </span>
            </motion.button>

            {/* User Icon */}
            <motion.button
              className="p-2 rounded-lg hover:bg-white/5 transition-colors electric-hover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-testid="user-button"
            >
              <User className="w-5 h-5 md:w-6 md:h-6 text-gray-300 hover:text-purple-400 transition-colors" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={CONFIG.searchPlaceholder}
              className="search-input pl-10 pr-4 w-full text-sm"
              data-testid="mobile-search-input"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect border-t border-white/10"
            data-testid="mobile-menu"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {CONFIG.menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`mobile-nav-${item.name.toLowerCase()}`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
