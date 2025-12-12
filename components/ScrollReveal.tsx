'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

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
  duration = 0.6,
  className = ''
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, // 只觸發一次
    margin: '-100px' // 提前 100px 觸發
  });

  // 根據方向設定初始位置
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 60, opacity: 0 };
      case 'down':
        return { y: -60, opacity: 0 };
      case 'left':
        return { x: -60, opacity: 0 };
      case 'right':
        return { x: 60, opacity: 0 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { y: 60, opacity: 0 };
    }
  };

  // 最終位置
  const getFinalPosition = () => {
    return { x: 0, y: 0, opacity: 1 };
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getFinalPosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0] // 自然的緩動曲線
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
  staggerDelay = 0.1,
  className = '' 
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: '-100px'
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
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
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: 40, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'down':
        return {
          hidden: { y: -40, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'left':
        return {
          hidden: { x: -40, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'right':
        return {
          hidden: { x: 40, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      default:
        return {
          hidden: { y: 40, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
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
  duration = 0.6,
  className = '' 
}: ScaleRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: '-100px'
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
