'use client';

import { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 當滾動超過視窗高度（輪播圖高度）時，切換為黑色文字
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsScrolled(scrollPosition > viewportHeight * 0.7);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[currentLang as keyof typeof translations] || translations['zh-TW'];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      if (href.startsWith('http') || href.startsWith('/products')) {
        window.location.href = href;
        return;
      }
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
    { href: '/products', label: '完整產品介紹', desc: '深入了解所有功能' },
    { href: '#features', label: 'AI 虛擬試穿', desc: '一鍵生成穿搭效果' },
    { href: '#features', label: '動態影片生成', desc: '靜態照片轉動態影片' },
    { href: '#features', label: 'B2B 解決方案', desc: '企業級虛擬試穿服務' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] px-4 md:px-0 ${
        isScrolled ? 'top-4 py-0' : 'top-0 py-4'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isScrolled
            ? 'rounded-full bg-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/20 saturate-150 px-6 py-2 max-w-5xl'
            : 'px-6 md:px-12 xl:px-24 bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center h-12 md:h-14">
          {/* Logo */}
          <a
            href="#"
            className={`text-2xl md:text-3xl font-display font-bold tracking-tight transition-colors duration-300 ${
              isScrolled
                ? 'text-[#1D1D1F]'
                : 'text-white drop-shadow-md'
            }`}
          >
            Tryzeon
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {/* Product Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setShowProductMenu(true)}
              onMouseLeave={() => setShowProductMenu(false)}
            >
              <button
                className={`flex items-center space-x-1.5 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-[#1D1D1F]/80 hover:text-[#0066CC]'
                    : 'text-white/90 hover:text-white drop-shadow-sm'
                }`}
              >
                <span>{t.nav.product}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </button>

              <AnimatePresence>
                {showProductMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 rounded-2xl shadow-2xl border border-white/20 py-2 overflow-hidden bg-white/95"
                  >
                    <div className="px-2 py-1 space-y-1">
                      {productMenuItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          onClick={scrollToSection}
                          className="block px-4 py-3 rounded-xl hover:bg-[#F5F5F7] transition-colors group/item"
                        >
                          <div className="font-semibold text-[#1D1D1F] text-sm group-hover/item:text-[#0066CC] transition-colors">{item.label}</div>
                          <div className="text-[11px] text-[#86868B] mt-0.5">{item.desc}</div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Nav Items */}
            {navigationItems.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={scrollToSection}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? 'text-[#1D1D1F]/80 hover:text-[#0066CC]'
                    : 'text-white/90 hover:text-white drop-shadow-sm'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center space-x-1 text-[11px] font-semibold tracking-wide uppercase transition-colors duration-300 ${
                  isScrolled
                    ? 'text-[#1D1D1F]/70 hover:text-[#1D1D1F]'
                    : 'text-white/80 hover:text-white drop-shadow-sm'
                }`}
              >
                <span>{currentLang === 'zh-TW' ? '繁中' : 'EN'}</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-3 w-32 bg-white/95 rounded-xl shadow-xl border border-black/5 py-1.5 overflow-hidden"
                  >
                    <button
                      onClick={() => { setCurrentLang('zh-TW'); setShowLangMenu(false); }}
                      className="block w-full text-left px-4 py-2.5 text-[12px] font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
                    >
                      繁體中文
                    </button>
                    <button
                      onClick={() => { setCurrentLang('en'); setShowLangMenu(false); }}
                      className="block w-full text-left px-4 py-2.5 text-[12px] font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
                    >
                      English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={scrollToSection}
              className={`px-5 py-2 text-[12px] font-bold rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#1D1D1F] text-white hover:bg-[#000000] hover:scale-105 shadow-md'
                  : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
              }`}
            >
              {t.nav.getStarted}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-[#1D1D1F]' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#1D1D1F]' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="lg:hidden overflow-hidden bg-white/95 rounded-[32px] mt-2 shadow-2xl border border-black/5"
            >
              <div className="py-6 px-6 space-y-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={scrollToSection}
                    className="block px-4 py-3.5 text-base font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] hover:text-[#0066CC] rounded-xl transition-all"
                  >
                    {item.label}
                  </a>
                ))}
                
                <div className="h-px bg-black/5 my-4 mx-4"></div>
                
                <div className="flex justify-between items-center px-4 py-2">
                  <span className="text-sm font-medium text-[#86868B]">Language</span>
                  <div className="flex bg-[#F5F5F7] rounded-full p-1">
                    <button 
                      onClick={() => setCurrentLang('zh-TW')} 
                      className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                        currentLang === 'zh-TW' ? 'bg-white shadow-sm text-[#1D1D1F]' : 'text-[#86868B]'
                      }`}
                    >
                      繁中
                    </button>
                    <button 
                      onClick={() => setCurrentLang('en')} 
                      className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                        currentLang === 'en' ? 'bg-white shadow-sm text-[#1D1D1F]' : 'text-[#86868B]'
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>

                <div className="pt-4 px-2">
                  <a
                    href="#contact"
                    onClick={scrollToSection}
                    className="block w-full py-3.5 text-center text-sm font-bold bg-[#0066CC] text-white rounded-full shadow-lg active:scale-95 transition-transform"
                  >
                    {t.nav.getStarted}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
