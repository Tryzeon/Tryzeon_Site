'use client';

import { motion } from 'framer-motion';

/**
 * 頁面載入骨架屏
 * 用於頁面內容載入時的佔位顯示
 */
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] animate-pulse">
      {/* Navigation Skeleton */}
      <div className="h-20 bg-white/50" />
      
      {/* Hero Skeleton */}
      <div className="h-[60vh] bg-gradient-to-b from-white/30 to-[#F5F5F7]" />
      
      {/* Content Skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-8">
        <div className="h-12 bg-white/50 rounded-2xl w-1/3 mx-auto" />
        <div className="h-6 bg-white/50 rounded-xl w-2/3 mx-auto" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-white/50 rounded-[32px]" />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 卡片載入骨架
 */
export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-white/50 rounded-[32px] ${className}`}>
      <div className="p-8 space-y-4">
        <div className="w-12 h-12 bg-[#F5F5F7] rounded-2xl" />
        <div className="h-6 bg-[#F5F5F7] rounded-lg w-3/4" />
        <div className="h-4 bg-[#F5F5F7] rounded-lg w-full" />
        <div className="h-4 bg-[#F5F5F7] rounded-lg w-2/3" />
      </div>
    </div>
  );
}

/**
 * 圖片載入骨架
 */
export function ImageSkeleton({ aspectRatio = 'aspect-video', className = '' }: { 
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <div className={`animate-pulse bg-gradient-to-br from-[#F5F5F7] to-[#E5E5E7] rounded-2xl ${aspectRatio} ${className}`}>
      <div className="w-full h-full flex items-center justify-center">
        <svg className="w-12 h-12 text-[#86868B]/30" fill="none" viewBox="0 0 24 24">
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
}

/**
 * 內聯載入指示器
 */
export function InlineLoader({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-[#0066CC]/20 border-t-[#0066CC] rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );
}

/**
 * 全頁載入遮罩
 */
export function FullPageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-[#0066CC]/20 border-t-[#0066CC] rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-[#86868B] font-medium">載入中...</p>
      </div>
    </motion.div>
  );
}

/**
 * 按鈕載入狀態
 */
export function ButtonLoader({ className = '' }: { className?: string }) {
  return (
    <motion.span
      className={`inline-block w-5 h-5 border-2 border-current/30 border-t-current rounded-full ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
    />
  );
}

/**
 * 內容區塊骨架屏
 */
export function SectionSkeleton() {
  return (
    <div className="py-20 animate-pulse">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="h-4 bg-[#F5F5F7] rounded w-32 mx-auto mb-4" />
          <div className="h-12 bg-[#F5F5F7] rounded-2xl w-64 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <CardSkeleton key={i} className="h-64" />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 文字載入動畫
 */
export function TextShimmer({ children, className = '' }: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`relative inline-block overflow-hidden ${className}`}>
      {children}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </span>
  );
}
