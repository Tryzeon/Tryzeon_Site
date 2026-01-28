'use client';

import { useRef, ReactNode, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue, useInView } from 'framer-motion';

/**
 * Apple 風格動畫配置
 */
const appleSpring = {
  // 柔和彈性 - 適用於大多數滾動連動
  smooth: { stiffness: 80, damping: 25, mass: 0.5 },
  // 快速彈性 - 適用於即時反饋
  responsive: { stiffness: 150, damping: 20 },
  // 緩慢彈性 - 適用於大元素
  gentle: { stiffness: 50, damping: 30, mass: 0.8 },
};

const appleEasing = {
  standard: [0.25, 0.1, 0.25, 1.0] as const,
  emphasized: [0.4, 0, 0.2, 1] as const,
  decelerate: [0, 0, 0.2, 1] as const,
};

/**
 * Apple 風格滾動視差效果 - 進入視窗時淡入放大，只觸發一次
 */
interface ParallaxTextProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxText({ children, className = '' }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 30, filter: 'blur(8px)' }}
      animate={isInView 
        ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } 
        : { opacity: 0, scale: 0.95, y: 30, filter: 'blur(8px)' }
      }
      transition={{ 
        duration: 0.9, 
        ease: appleEasing.decelerate,
        scale: { duration: 1.0, ease: appleEasing.emphasized },
        filter: { duration: 1.2, ease: appleEasing.standard }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Apple 風格滾動視差 - 圖片隨滾動縮放和移動
 */
interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  speed?: number; // 視差速度：正數往上，負數往下
}

export function ParallaxImage({ children, className = '', speed = 0.5 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [80 * speed, -80 * speed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  const smoothY = useSpring(y, appleSpring.smooth);
  const smoothScale = useSpring(scale, appleSpring.gentle);

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY, scale: smoothScale }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * Apple 風格滾動進度條 - 隨滾動填滿
 */
interface ScrollProgressProps {
  className?: string;
  color?: string;
}

export function ScrollProgress({ className = '', color = '#0066CC' }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, appleSpring.responsive);

  return (
    <motion.div
      style={{ scaleX, backgroundColor: color }}
      className={`fixed top-0 left-0 right-0 h-1 origin-left z-[100] ${className}`}
    />
  );
}

/**
 * Apple 風格滾動淡入淡出區塊 - 中心對齊時最清晰
 */
interface ScrollFadeProps {
  children: ReactNode;
  className?: string;
}

export function ScrollFade({ children, className = '' }: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // 在視窗中心時最不透明 - 更平滑的曲線
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0, 0.6, 1, 0.6, 0]
  );

  const smoothOpacity = useSpring(opacity, appleSpring.gentle);

  return (
    <motion.div
      ref={ref}
      style={{ opacity: smoothOpacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Apple 風格滾動縮放卡片 - 進入視窗時放大並提升，只觸發一次
 */
interface ScrollZoomCardProps {
  children: ReactNode;
  className?: string;
}

export function ScrollZoomCard({ children, className = '' }: ScrollZoomCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.94, y: 35, filter: 'blur(6px)' }}
      animate={isInView 
        ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } 
        : { opacity: 0, scale: 0.94, y: 35, filter: 'blur(6px)' }
      }
      transition={{ 
        duration: 0.8, 
        ease: appleEasing.decelerate,
        scale: { duration: 0.9, ease: appleEasing.emphasized },
        filter: { duration: 1.0 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Apple 風格文字逐行出現 - 滾動時文字一行一行淡入
 */
interface ScrollTextRevealProps {
  text: string;
  className?: string;
  lineClassName?: string;
}

export function ScrollTextReveal({ text, className = '', lineClassName = '' }: ScrollTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.3']
  });

  const lines = text.split('\n');

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => {
        const start = i / lines.length;
        const end = (i + 1) / lines.length;
        
        return (
          <ScrollTextLine
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            className={lineClassName}
          >
            {line}
          </ScrollTextLine>
        );
      })}
    </div>
  );
}

interface ScrollTextLineProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}

function ScrollTextLine({ children, progress, range, className }: ScrollTextLineProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [30, 0]);

  const smoothOpacity = useSpring(opacity, appleSpring.smooth);
  const smoothY = useSpring(y, appleSpring.smooth);

  return (
    <motion.div
      style={{ opacity: smoothOpacity, y: smoothY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Apple 風格 Hero 區視差 - 滾動時背景圖片放大，內容往上移動
 */
interface HeroParallaxProps {
  children: ReactNode;
  className?: string;
}

export function HeroParallax({ children, className = '' }: HeroParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  const smoothBackgroundY = useSpring(backgroundY, appleSpring.gentle);
  const smoothBackgroundScale = useSpring(backgroundScale, appleSpring.gentle);
  const smoothContentY = useSpring(contentY, appleSpring.smooth);
  const smoothOpacity = useSpring(opacity, appleSpring.smooth);

  return (
    <motion.div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y: smoothBackgroundY, scale: smoothBackgroundScale }}
        className="absolute inset-0"
      >
        {/* 背景圖片會被子元素覆蓋 */}
      </motion.div>
      <motion.div
        style={{ y: smoothContentY, opacity: smoothOpacity }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * Apple 風格水平滾動 - 垂直滾動轉換為水平移動
 */
interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, className = '' }: HorizontalScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
  const smoothX = useSpring(x, appleSpring.smooth);

  return (
    <div ref={ref} className={`h-[300vh] ${className}`}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x: smoothX }} className="flex gap-8">
          {children}
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Apple 風格數字計數動畫 - 進入視窗時數字從 0 增加到目標值
 */
interface ScrollCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
  decimals?: number;
  separator?: boolean;
}

export function ScrollCounter({ 
  target, 
  suffix = '', 
  prefix = '', 
  className = '',
  duration = 2000,
  decimals = 0,
  separator = false
}: ScrollCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [displayValue, setDisplayValue] = useState(0);

  // 格式化數字（添加千分位分隔符）
  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    if (!separator) return fixed;
    
    const parts = fixed.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  };

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeOutExpo 緩動函數
        const easeProgress = 1 - Math.pow(2, -10 * progress);
        const currentValue = startValue + (target - startValue) * easeProgress;
        
        setDisplayValue(decimals > 0 ? currentValue : Math.round(currentValue));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}{formatNumber(displayValue)}{suffix}
    </span>
  );
}

/**
 * Apple 風格精緻數字展示 - 帶有動畫和格式化
 */
interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label?: string;
  description?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  separator?: boolean;
}

export function AnimatedNumber({
  value,
  suffix = '',
  prefix = '',
  label,
  description,
  className = '',
  size = 'lg',
  separator = true
}: AnimatedNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  const sizeClasses = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-5xl md:text-6xl lg:text-7xl',
    xl: 'text-6xl md:text-7xl lg:text-8xl'
  };

  // 格式化數字
  const formatNumber = (num: number) => {
    const rounded = Math.round(num);
    if (!separator) return rounded.toString();
    return rounded.toLocaleString('en-US');
  };

  useEffect(() => {
    if (isInView) {
      const duration = 2500;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // easeOutExpo
        const easeProgress = 1 - Math.pow(2, -10 * progress);
        setDisplayValue(value * easeProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: appleEasing.decelerate }}
      className={`text-center ${className}`}
    >
      {/* 數字 */}
      <div className={`${sizeClasses[size]} font-bold text-[#1D1D1F] tracking-tighter leading-none`}>
        <span className="tabular-nums">
          {prefix}{formatNumber(displayValue)}{suffix}
        </span>
      </div>
      
      {/* 標籤 */}
      {label && (
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#0066CC] mt-4">
          {label}
        </div>
      )}
      
      {/* 說明 */}
      {description && (
        <p className="text-[#86868B] text-base leading-relaxed font-medium mt-2 max-w-xs mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}

/**
 * Apple 風格滾動固定區塊 - 滾動時固定在視窗中，內容逐漸變化
 */
interface ScrollPinProps {
  children: ReactNode;
  className?: string;
  height?: string; // 滾動高度，例如 '200vh'
}

export function ScrollPin({ children, className = '', height = '200vh' }: ScrollPinProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} style={{ height }} className={className}>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

/**
 * Apple 風格滾動旋轉 - 滾動時元素旋轉
 */
interface ScrollRotateProps {
  children: ReactNode;
  className?: string;
  degrees?: number; // 最大旋轉角度
}

export function ScrollRotate({ children, className = '', degrees = 360 }: ScrollRotateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, degrees]);
  const smoothRotate = useSpring(rotate, appleSpring.smooth);

  return (
    <motion.div
      ref={ref}
      style={{ rotate: smoothRotate }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Apple 風格 3D 進入動畫 - 進入視窗時淡入，只觸發一次
 */
interface Scroll3DProps {
  children: ReactNode;
  className?: string;
}

export function Scroll3D({ children, className = '' }: Scroll3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25, rotateX: 8, filter: 'blur(4px)' }}
      animate={isInView 
        ? { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' } 
        : { opacity: 0, y: 25, rotateX: 8, filter: 'blur(4px)' }
      }
      transition={{ 
        duration: 0.8, 
        ease: appleEasing.decelerate,
        rotateX: { duration: 0.9, ease: appleEasing.emphasized }
      }}
      style={{ transformPerspective: 1200 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
