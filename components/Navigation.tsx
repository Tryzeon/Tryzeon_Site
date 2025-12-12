'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '@/lib/translations';

interface NavigationProps {
  currentLang: string;
  setCurrentLang: (lang: string) => void;
}

export function Navigation({ currentLang, setCurrentLang }: NavigationProps) {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = translations[currentLang as keyof typeof translations] || translations['zh-TW'];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { href: '#features', label: t.nav.product },
    { href: '#about', label: t.nav.about },
    { href: '#partners', label: t.nav.partners },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact }
  ];

  const productMenuItems = [
    { href: '/products', label: '完整產品介紹', desc: '深入了解所有功能', isExternal: true },
    { href: '#features', label: 'AI 虛擬試穿', desc: '一鍵生成穿搭效果' },
    { href: '#features', label: '動態影片生成', desc: '靜態照片轉動態影片' },
    { href: '#features', label: 'B2B 解決方案', desc: '企業級虛擬試穿服務' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold text-white transition-colors hover:text-gray-200" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
            Tryzeon
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProductMenu(true)}
              onMouseLeave={() => setShowProductMenu(false)}
            >
              <button
                className="flex items-center space-x-1 text-sm font-medium text-white/90 hover:text-white transition-colors"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
              >
                <span>{t.nav.product}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showProductMenu && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {productMenuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      onClick={scrollToSection}
                      className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900 text-sm">{item.label}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Items */}
            {navigationItems.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={scrollToSection}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-1 text-sm font-medium text-white/90 hover:text-white transition-colors"
                style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
              >
                <span>{currentLang === 'zh-TW' ? '繁中' : 'EN'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showLangMenu && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 z-50">
                  <button
                    onClick={() => { setCurrentLang('zh-TW'); setShowLangMenu(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    繁體中文
                  </button>
                  <button
                    onClick={() => { setCurrentLang('en'); setShowLangMenu(false); }}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Login */}
            <a
              href="#"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
            >
              {t.nav.login}
            </a>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={scrollToSection}
              className="px-4 py-2 text-sm font-medium rounded-md bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-colors"
            >
              {t.nav.getStarted}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white transition-colors"
            aria-label={isMobileMenuOpen ? "關閉選單" : "開啟選單"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="py-4 space-y-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={scrollToSection}
                    className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="border-t border-white/10 my-2 mx-6"></div>
                <a href="#" className="block px-6 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                  {t.nav.login}
                </a>
                <a
                  href="#contact"
                  onClick={scrollToSection}
                  className="block mx-6 mt-4 px-4 py-3 text-sm text-center bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors"
                >
                  {t.nav.getStarted}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
