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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-0 ${isScrolled ? 'top-4' : 'top-0'
        }`}
    >
      <div className={`max-w-7xl mx-auto transition-all duration-500 ${isScrolled
        ? 'bg-white/70 backdrop-blur-2xl rounded-full shadow-apple-lg border border-white/20 px-8 py-2 max-w-5xl'
        : 'bg-transparent py-4 px-6 md:px-12 xl:px-24'
        }`}>
        <div className="flex justify-between items-center h-12 md:h-14">
          {/* Logo */}
          <a
            href="#"
            className={`text-2xl md:text-3xl font-display font-bold transition-all duration-300 ${isScrolled
              ? 'text-[#1D1D1F] hover:text-[#0066CC]'
              : 'text-white hover:text-[#0066CC]'
              }`}
            style={{
              fontFamily: "'Outfit', 'Inter', sans-serif",
              ...(isScrolled ? {} : { textShadow: '0 2px 10px rgba(0,0,0,0.3)' })
            }}
          >
            Tryzeon
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowProductMenu(true)}
              onMouseLeave={() => setShowProductMenu(false)}
            >
              <button
                className={`flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-widest transition-colors ${isScrolled
                  ? 'text-[#1D1D1F]/80 hover:text-[#1D1D1F]'
                  : 'text-white/80 hover:text-white'
                  }`}
                style={isScrolled ? {} : { textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                <span>{t.nav.product}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {showProductMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full left-0 mt-3 w-64 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-black/5 py-3 z-50 overflow-hidden"
                  >
                    {productMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        onClick={scrollToSection}
                        className="block px-5 py-3.5 hover:bg-black/5 transition-colors group"
                      >
                        <div className="font-medium text-fashion-charcoal text-sm group-hover:text-fashion-gold transition-colors">{item.label}</div>
                        <div className="text-[10px] text-fashion-charcoal/40 uppercase tracking-tighter mt-1">{item.desc}</div>
                      </a>
                    ))}
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
                className={`text-xs font-medium uppercase tracking-widest transition-colors ${isScrolled
                  ? 'text-fashion-charcoal/80 hover:text-fashion-charcoal font-semibold'
                  : 'text-white/80 hover:text-white'
                  }`}
                style={isScrolled ? {} : { textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className={`flex items-center space-x-1 text-[11px] font-bold tracking-tight uppercase transition-colors ${isScrolled
                  ? 'text-[#1D1D1F]/60 hover:text-[#1D1D1F]'
                  : 'text-white/60 hover:text-white'
                  }`}
              >
                <span>{currentLang === 'zh-TW' ? '繁中' : 'EN'}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-fashion-stone/95 backdrop-blur-xl rounded-xl shadow-apple-lg border border-black/5 py-1 z-50"
                  >
                    <button
                      onClick={() => { setCurrentLang('zh-TW'); setShowLangMenu(false); }}
                      className="block w-full text-left px-4 py-2.5 text-[11px] font-medium text-fashion-charcoal hover:bg-black/5"
                    >
                      繁體中文
                    </button>
                    <button
                      onClick={() => { setCurrentLang('en'); setShowLangMenu(false); }}
                      className="block w-full text-left px-4 py-2.5 text-[11px] font-medium text-fashion-charcoal hover:bg-black/5"
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
              className={`px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${isScrolled
                ? 'bg-[#1D1D1F] text-white hover:bg-black shadow-lg'
                : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/30'
                }`}
            >
              {t.nav.getStarted}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden transition-colors"
            aria-label={isMobileMenuOpen ? "關閉選單" : "開啟選單"}
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-2xl rounded-[40px] mt-4 shadow-2xl border border-black/5"
            >
              <div className="py-8 px-6 space-y-1 text-center">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={scrollToSection}
                    className="block px-6 py-4 text-sm font-bold uppercase tracking-widest text-[#1D1D1F] hover:text-[#0066CC] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="border-t border-black/5 my-6 mx-12"></div>
                <div className="flex flex-col space-y-8 items-center py-4">
                  <div className="flex space-x-8">
                    <button onClick={() => setCurrentLang('zh-TW')} className={`text-xs uppercase font-bold tracking-widest ${currentLang === 'zh-TW' ? 'text-[#0066CC]' : 'text-[#86868B]'}`}>繁中</button>
                    <button onClick={() => setCurrentLang('en')} className={`text-xs uppercase font-bold tracking-widest ${currentLang === 'en' ? 'text-[#0066CC]' : 'text-[#86868B]'}`}>EN</button>
                  </div>
                  <a
                    href="#contact"
                    onClick={scrollToSection}
                    className="w-full max-w-[200px] px-6 py-4 text-xs font-bold uppercase tracking-widest bg-[#1D1D1F] text-white rounded-full shadow-lg"
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
