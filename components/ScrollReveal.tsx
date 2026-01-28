'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

/**
 * Apple 風格緩動曲線
 * 這些曲線經過精心調整，模仿 Apple 產品頁面的動畫質感
 */
const appleEasing = {
  // 標準緩動 - 適用於大多數過渡
  standard: [0.25, 0.1, 0.25, 1.0] as const,
  // 強調緩動 - 適用於重要動畫
  emphasized: [0.4, 0, 0.2, 1] as const,
  // 減速緩動 - 適用於進入動畫
  decelerate: [0, 0, 0.2, 1] as const,
  // 柔和緩動 - 適用於微妙的過渡
  gentle: [0.4, 0, 0.6, 1] as const,
};

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * ScrollReveal 組件 - 當元素進入視窗時觸發動畫
 * 
 * @param direction - 動畫方向：'up'(從下往上), 'down'(從上往下), 'left'(從左), 'right'(從右), 'fade'(淡入)
 * @param delay - 延遲時間（秒）
 * @param duration - 動畫持續時間（秒）
 */
export function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.7,
  className = ''
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: '-80px' // 更精確的觸發時機
  });

  // 根據方向設定動畫變體 - Apple 風格的微妙位移
  const getVariants = (): Variants => {
    const distance = 40; // 減少位移距離，更精緻
    
    switch (direction) {
      case 'up':
        return {
          hidden: { y: distance, opacity: 0, filter: 'blur(4px)' },
          visible: { y: 0, opacity: 1, filter: 'blur(0px)' }
        };
      case 'down':
        return {
          hidden: { y: -distance, opacity: 0, filter: 'blur(4px)' },
          visible: { y: 0, opacity: 1, filter: 'blur(0px)' }
        };
      case 'left':
        return {
          hidden: { x: -distance, opacity: 0, filter: 'blur(4px)' },
          visible: { x: 0, opacity: 1, filter: 'blur(0px)' }
        };
      case 'right':
        return {
          hidden: { x: distance, opacity: 0, filter: 'blur(4px)' },
          visible: { x: 0, opacity: 1, filter: 'blur(0px)' }
        };
      case 'fade':
        return {
          hidden: { opacity: 0, scale: 0.98 },
          visible: { opacity: 1, scale: 1 }
        };
      default:
        return {
          hidden: { y: distance, opacity: 0, filter: 'blur(4px)' },
          visible: { y: 0, opacity: 1, filter: 'blur(0px)' }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: appleEasing.decelerate,
        // 為不同屬性設定不同的過渡時間
        opacity: { duration: duration * 0.8, ease: appleEasing.standard },
        filter: { duration: duration * 1.2, ease: appleEasing.gentle }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * 交錯動畫容器 - 讓子元素依序出現
 */
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({ 
  children, 
  staggerDelay = 0.08,
  className = '' 
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: '-60px'
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * 交錯動畫項目 - 配合 StaggerContainer 使用
 */
interface StaggerItemProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  className?: string;
}

export function StaggerItem({ 
  children, 
  direction = 'up',
  className = '' 
}: StaggerItemProps) {
  const distance = 30;
  
  const getVariants = (): Variants => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: distance, opacity: 0, filter: 'blur(4px)' },
          visible: { y: 0, opacity: 1, filter: 'blur(0px)' }
        };
      case 'down':
        return {
          hidden: { y: -distance, opacity: 0, filter: 'blur(4px)' },
          visible: { y: 0, opacity: 1, filter: 'blur(0px)' }
        };
      case 'left':
        return {
          hidden: { x: -distance, opacity: 0, filter: 'blur(4px)' },
          visible: { x: 0, opacity: 1, filter: 'blur(0px)' }
        };
      case 'right':
        return {
          hidden: { x: distance, opacity: 0, filter: 'blur(4px)' },
          visible: { x: 0, opacity: 1, filter: 'blur(0px)' }
        };
      case 'fade':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 }
        };
      default:
        return {
          hidden: { y: distance, opacity: 0, filter: 'blur(4px)' },
          visible: { y: 0, opacity: 1, filter: 'blur(0px)' }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      transition={{
        duration: 0.6,
        ease: appleEasing.decelerate
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * 縮放動畫 - 從小放大
 */
interface ScaleRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleReveal({ 
  children, 
  delay = 0, 
  duration = 0.7,
  className = '' 
}: ScaleRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: '-80px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.92, opacity: 0, filter: 'blur(8px)' }}
      animate={isInView 
        ? { scale: 1, opacity: 1, filter: 'blur(0px)' } 
        : { scale: 0.92, opacity: 0, filter: 'blur(8px)' }
      }
      transition={{
        duration,
        delay,
        ease: appleEasing.decelerate,
        scale: { duration: duration * 1.1, ease: appleEasing.emphasized },
        filter: { duration: duration * 1.3, ease: appleEasing.gentle }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
