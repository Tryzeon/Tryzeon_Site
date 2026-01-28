'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';

/**
 * Apple 風格緩動曲線定義
 * 這些曲線模仿 Apple 產品頁面的動畫質感
 */
export const appleEasing = {
  // 標準緩動 - 適用於大多數過渡
  standard: [0.25, 0.1, 0.25, 1.0],
  // 強調緩動 - 適用於引人注目的動畫
  emphasized: [0.4, 0, 0.2, 1],
  // 減速緩動 - 適用於進入動畫
  decelerate: [0, 0, 0.2, 1],
  // 加速緩動 - 適用於離開動畫  
  accelerate: [0.4, 0, 1, 1],
  // 彈性緩動 - 適用於互動反饋
  spring: { type: 'spring', stiffness: 400, damping: 30 },
  // 柔和彈性 - 適用於較大的動畫
  softSpring: { type: 'spring', stiffness: 200, damping: 25 },
} as const;

/**
 * Apple 風格按鈕 - 帶有精緻的懸停和點擊效果
 */
interface AppleButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

export const AppleButton = forwardRef<HTMLButtonElement, AppleButtonProps>(
  ({ children, variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
    
    const variantStyles = {
      primary: 'bg-[#0066CC] text-white hover:bg-[#0055AA] focus-visible:ring-[#0066CC]',
      secondary: 'bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E8E8ED] focus-visible:ring-[#86868B]',
      ghost: 'bg-transparent text-[#0066CC] hover:bg-[#0066CC]/10 focus-visible:ring-[#0066CC]',
      link: 'bg-transparent text-[#0066CC] underline-offset-4 hover:underline focus-visible:ring-[#0066CC]',
    };
    
    const sizeStyles = {
      sm: 'h-9 px-4 text-sm rounded-full',
      md: 'h-11 px-6 text-base rounded-full',
      lg: 'h-14 px-8 text-lg rounded-full',
    };

    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={appleEasing.spring}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
AppleButton.displayName = 'AppleButton';

/**
 * Apple 風格連結 - 帶有箭頭動畫
 */
interface AppleLinkProps {
  children: ReactNode;
  href?: string;
  className?: string;
  showArrow?: boolean;
  external?: boolean;
  onClick?: () => void;
}

export function AppleLink({ 
  children, 
  href = '#', 
  className = '', 
  showArrow = true,
  external = false,
  onClick
}: AppleLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-1 text-[#0066CC] font-medium cursor-pointer group ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <span className="relative">
        {children}
        <motion.span
          className="absolute bottom-0 left-0 h-[1px] bg-[#0066CC] origin-left"
          initial={{ scaleX: 0 }}
          variants={{
            initial: { scaleX: 0 },
            hover: { scaleX: 1 }
          }}
          transition={{ duration: 0.3, ease: appleEasing.standard }}
        />
      </span>
      {showArrow && (
        <motion.span
          className="inline-block"
          variants={{
            initial: { x: 0 },
            hover: { x: 4 }
          }}
          transition={{ duration: 0.2, ease: appleEasing.standard }}
        >
          →
        </motion.span>
      )}
    </motion.a>
  );
}

/**
 * Apple 風格卡片懸停效果 - 帶有精緻的光暈和陰影
 */
interface HoverCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function HoverCard({ 
  children, 
  className = '',
  glowColor = 'rgba(0, 102, 204, 0.1)'
}: HoverCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* 懸停時的光暈效果 */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`
        }}
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="relative z-10"
        variants={{
          initial: { y: 0 },
          hover: { y: -4 }
        }}
        transition={{ duration: 0.3, ease: appleEasing.standard }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * Apple 風格圖標按鈕 - 圓形帶有彈性動畫
 */
interface IconButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost';
}

export function IconButton({ 
  children, 
  size = 'md', 
  variant = 'default',
  className = '',
  ...props 
}: IconButtonProps) {
  const sizeStyles = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };
  
  const variantStyles = {
    default: 'bg-[#F5F5F7] hover:bg-[#E8E8ED] text-[#1D1D1F]',
    ghost: 'bg-transparent hover:bg-[#F5F5F7] text-[#86868B] hover:text-[#1D1D1F]',
  };

  return (
    <motion.button
      className={`inline-flex items-center justify-center rounded-full transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={appleEasing.spring}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/**
 * Apple 風格脈衝效果 - 吸引注意力的動畫
 */
interface PulseProps {
  children: ReactNode;
  className?: string;
  color?: string;
  duration?: number;
}

export function Pulse({ 
  children, 
  className = '',
  color = 'rgba(0, 102, 204, 0.4)',
  duration = 2
}: PulseProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0]
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeOut'
        }}
      />
      {children}
    </div>
  );
}

/**
 * Apple 風格 Shimmer 效果 - 載入時的光澤動畫
 */
interface ShimmerProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Shimmer({ 
  className = '',
  width = '100%',
  height = '20px'
}: ShimmerProps) {
  return (
    <div 
      className={`relative overflow-hidden bg-[#F5F5F7] rounded-lg ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
        }}
        animate={{
          x: ['-100%', '100%']
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
}

/**
 * Apple 風格標籤切換 - 帶有滑動指示器
 */
interface TabItem {
  id: string;
  label: string;
}

interface AppleTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

export function AppleTabs({ 
  tabs, 
  activeTab, 
  onTabChange,
  className = ''
}: AppleTabsProps) {
  return (
    <div className={`inline-flex bg-[#F5F5F7] rounded-full p-1 ${className}`}>
      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors ${
            activeTab === tab.id ? 'text-[#1D1D1F]' : 'text-[#86868B] hover:text-[#1D1D1F]'
          }`}
          whileHover={{ scale: activeTab === tab.id ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white rounded-full shadow-sm"
              transition={appleEasing.softSpring}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

/**
 * Apple 風格淡入文字 - 逐字動畫
 */
interface FadeInTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function FadeInText({ 
  text, 
  className = '',
  delay = 0,
  staggerDelay = 0.03
}: FadeInTextProps) {
  const words = text.split(' ');

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{
            duration: 0.4,
            delay: delay + i * staggerDelay,
            ease: appleEasing.decelerate
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

/**
 * Apple 風格滑動切換開關
 */
interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export function ToggleSwitch({ 
  checked, 
  onChange,
  className = ''
}: ToggleSwitchProps) {
  return (
    <motion.button
      className={`relative w-[51px] h-[31px] rounded-full p-[2px] cursor-pointer ${className}`}
      style={{
        backgroundColor: checked ? '#0066CC' : '#E9E9EB'
      }}
      onClick={() => onChange(!checked)}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="w-[27px] h-[27px] bg-white rounded-full shadow-md"
        animate={{
          x: checked ? 20 : 0
        }}
        transition={appleEasing.spring}
      />
    </motion.button>
  );
}

/**
 * Apple 風格浮動動作按鈕
 */
interface FloatingActionButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center';
}

export function FloatingActionButton({ 
  children, 
  position = 'bottom-right',
  className = '',
  ...props 
}: FloatingActionButtonProps) {
  const positionStyles = {
    'bottom-right': 'right-6 bottom-6',
    'bottom-left': 'left-6 bottom-6',
    'bottom-center': 'left-1/2 -translate-x-1/2 bottom-6',
  };

  return (
    <motion.button
      className={`fixed z-50 w-14 h-14 rounded-full bg-[#0066CC] text-white shadow-lg shadow-[#0066CC]/30 flex items-center justify-center ${positionStyles[position]} ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(0, 102, 204, 0.4)' }}
      whileTap={{ scale: 0.95 }}
      transition={appleEasing.spring}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/**
 * Apple 風格進度指示器
 */
interface ProgressRingProps {
  progress: number; // 0-100
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function ProgressRing({ 
  progress, 
  size = 40, 
  strokeWidth = 4,
  className = ''
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.svg
      width={size}
      height={size}
      className={className}
      initial={{ rotate: -90 }}
      animate={{ rotate: -90 }}
    >
      {/* 背景圓環 */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#E8E8ED"
        strokeWidth={strokeWidth}
      />
      {/* 進度圓環 */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#0066CC"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 0.5, ease: appleEasing.standard }}
      />
    </motion.svg>
  );
}
