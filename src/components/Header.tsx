import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UserAccountModal } from './UserAccountModal';
import { Logo } from './Logo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Головна', href: '#' },
    { id: 'about', label: 'Про нас', href: '#' },
    { id: 'tariffs', label: 'Тарифи', href: '#' },
    { id: 'documents', label: 'Документи', href: '#' },
    { id: 'electricalSafety', label: 'Електробезпека', href: '#' },
    { id: 'contacts', label: 'Контакти', href: '#' },
  ];

  const handleNavigation = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Company Logo */}
          <motion.div 
            className="cursor-pointer"
            onClick={() => handleNavigation('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo size="lg" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--energy-yellow)' }}
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <UserAccountModal
              trigger={
                <Button
                  className="energy-gradient text-white hover:opacity-90 transition-opacity"
                  size="sm"
                >
                  КАБІНЕТ СПОЖИВАЧА
                </Button>
              }
              onNavigate={onNavigate}   // 👈 пробросили
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-border mt-4 pt-4 pb-4"
            >
              <nav className="space-y-3">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                      currentPage === item.id ? 'text-primary' : 'text-muted-foreground'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ x: 0 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="pt-2">
                  <UserAccountModal 
                    trigger={
                      <Button
                        className="w-full energy-gradient text-white hover:opacity-90 transition-opacity"
                        size="sm"
                      >
                        КАБІНЕТ СПОЖИВАЧА
                      </Button>
                    }
                    onNavigate={onNavigate}   // 👈 і тут теж
                  />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
