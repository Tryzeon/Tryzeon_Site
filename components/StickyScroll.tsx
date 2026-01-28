'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StickyScrollItem {
  title: string;
  description: string;
  content: React.ReactNode;
}

interface StickyScrollProps {
  items: StickyScrollItem[];
  className?: string;
}

/**
 * Apple 風格 Sticky Scroll 組件
 * 滾動時區塊固定，內容逐漸變化
 */
export function StickyScroll({ items, className = '' }: StickyScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height: `${items.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="relative h-[400px]">
            {items.map((item, index) => (
              <StickyScrollText
                key={index}
                index={index}
                total={items.length}
                progress={scrollYProgress}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Right: Visual Content */}
          <div className="relative h-[500px] hidden lg:block">
            {items.map((item, index) => (
              <StickyScrollContent
                key={index}
                index={index}
                total={items.length}
                progress={scrollYProgress}
              >
                {item.content}
              </StickyScrollContent>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-3">
        {items.map((_, index) => (
          <StickyScrollDot
            key={index}
            index={index}
            total={items.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}

interface StickyScrollTextProps {
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  title: string;
  description: string;
}

function StickyScrollText({ index, total, progress, title, description }: StickyScrollTextProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  const opacity = useTransform(
    progress,
    [start, start + 0.05, mid, end - 0.05, end],
    [0, 1, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start, start + 0.05, mid, end - 0.05, end],
    [50, 0, 0, 0, -50]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] mb-4">
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1F] mb-6 leading-tight">
        {title}
      </h3>
      <p className="text-xl text-[#86868B] leading-relaxed max-w-lg">
        {description}
      </p>
    </motion.div>
  );
}

interface StickyScrollContentProps {
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  children: React.ReactNode;
}

function StickyScrollContent({ index, total, progress, children }: StickyScrollContentProps) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0.8, 1, 1, 0.8]
  );
  const rotateY = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [15, 0, 0, -15]
  );

  return (
    <motion.div
      style={{ opacity, scale, rotateY, transformPerspective: 1000 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full h-full rounded-[40px] overflow-hidden bg-gradient-to-br from-[#F5F5F7] to-white shadow-2xl border border-black/5">
        {children}
      </div>
    </motion.div>
  );
}

interface StickyScrollDotProps {
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}

function StickyScrollDot({ index, total, progress }: StickyScrollDotProps) {
  const start = index / total;
  const end = (index + 1) / total;

  const scale = useTransform(progress, (p) => (p >= start && p < end ? 1.5 : 1));
  const backgroundColor = useTransform(progress, (p) => 
    p >= start && p < end ? '#0066CC' : '#86868B40'
  );

  return (
    <motion.div
      style={{ scale, backgroundColor }}
      className="w-2 h-2 rounded-full transition-colors"
    />
  );
}
