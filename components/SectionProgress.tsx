'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
  id: string;
  label: string;
}

interface SectionProgressProps {
  sections: Section[];
  position?: 'left' | 'right';
  className?: string;
}

/**
 * Apple 風格區塊進度指示器
 * 顯示當前瀏覽的區塊位置
 */
export function SectionProgress({ 
  sections, 
  position = 'right',
  className = '' 
}: SectionProgressProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 超過 Hero 區才顯示
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollY > heroHeight * 0.5);

      // 檢測當前區塊
      const viewportMiddle = window.innerHeight / 2;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 初始檢測

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: position === 'right' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: position === 'right' ? 20 : -20 }}
          transition={{ duration: 0.3 }}
          className={`fixed ${position === 'right' ? 'right-6' : 'left-6'} top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 ${className}`}
        >
          {/* 背景容器 */}
          <div 
            className="py-4 px-2 rounded-full"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <div className="flex flex-col items-center gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group relative flex items-center"
                  aria-label={section.label}
                >
                  {/* 指示點 */}
                  <motion.div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-[#0066CC] scale-125'
                        : 'bg-[#86868B]/40 hover:bg-[#86868B]/70'
                    }`}
                    layoutId="activeIndicator"
                  />
                  
                  {/* Tooltip */}
                  <div className={`absolute ${position === 'right' ? 'right-8' : 'left-8'} whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                    <div 
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#1D1D1F]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {section.label}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * 底部滾動進度條
 */
interface ScrollProgressBarProps {
  color?: string;
  height?: number;
  className?: string;
}

export function ScrollProgressBar({ 
  color = '#0066CC', 
  height = 3,
  className = '' 
}: ScrollProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 ${className}`}
      style={{ height }}
    >
      <motion.div
        className="h-full origin-left"
        style={{ 
          backgroundColor: color,
          scaleX: progress / 100,
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
