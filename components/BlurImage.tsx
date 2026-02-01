'use client';

import { useState, useEffect, useRef } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface BlurImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  blurDataURL?: string;
  showLoadingIndicator?: boolean;
  priority?: boolean;
}

/**
 * Apple 風格緩動曲線
 */
const appleEasing = [0.25, 0.1, 0.25, 1.0];

/**
 * Apple 風格圖片載入 - 直接淡入顯示
 * 圖片載入完成後直接顯示，不使用模糊過渡
 */
export function BlurImage({ 
  src, 
  alt, 
  className = '',
  blurDataURL,
  showLoadingIndicator = false,
  priority = false,
  ...props 
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 載入指示器 */}
      <AnimatePresence>
        {isLoading && showLoadingIndicator && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-[#F5F5F7]"
          >
            <div className="w-8 h-8 border-2 border-[#0066CC] border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 錯誤狀態 */}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F5F5F7] text-[#86868B]">
          <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.3, ease: appleEasing }}
        >
          <Image
            src={src}
            alt={alt}
            onLoad={() => setIsLoading(false)}
            onError={() => setHasError(true)}
            priority={priority}
            {...props}
          />
        </motion.div>
      )}
    </div>
  );
}

/**
 * 帶有骨架屏的圖片載入 - Apple 風格 Shimmer 效果
 */
export function SkeletonImage({ 
  src, 
  alt, 
  className = '',
  priority = false,
  ...props 
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 骨架屏 - Apple 風格光澤動畫 */}
      <AnimatePresence>
        {isLoading && !hasError && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-10"
          >
            <div className="absolute inset-0 bg-[#F5F5F7]" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F5F5F7] text-[#86868B]">
          <span className="text-sm">圖片載入失敗</span>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5, ease: appleEasing }}
        >
          <Image
            src={src}
            alt={alt}
            onLoad={() => setIsLoading(false)}
            onError={() => setHasError(true)}
            priority={priority}
            {...props}
          />
        </motion.div>
      )}
    </div>
  );
}

/**
 * 帶有淡入動畫的圖片 - 進入視窗時觸發
 */
export function FadeInImage({ 
  src, 
  alt, 
  className = '',
  priority = false,
  ...props 
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px', threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div 
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isInView && !isLoading ? 1 : 0,
        y: isInView && !isLoading ? 0 : 20
      }}
      transition={{ duration: 0.6, ease: appleEasing }}
    >
      {isInView && (
        <Image
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
          priority={priority}
          {...props}
        />
      )}
    </motion.div>
  );
}

/**
 * 生成模糊預覽的 base64 placeholder
 * 用於 Next.js Image 的 blurDataURL
 */
export function generateBlurDataURL(width: number, height: number, color: string = '#F5F5F7'): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <rect width="100%" height="100%" fill="${color}" />
    </svg>
  `;
  
  const base64 = typeof window === 'undefined' 
    ? Buffer.from(svg).toString('base64')
    : btoa(svg);
    
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * 生成漸層模糊預覽 - 更豐富的視覺效果
 */
export function generateGradientBlur(
  width: number, 
  height: number, 
  colorStart: string = '#F5F5F7',
  colorEnd: string = '#E8E8ED'
): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorStart}" />
          <stop offset="100%" stop-color="${colorEnd}" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)" />
    </svg>
  `;
  
  const base64 = typeof window === 'undefined' 
    ? Buffer.from(svg).toString('base64')
    : btoa(svg);
    
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * 懶載入圖片 Hook - 可用於自定義圖片組件
 */
export function useLazyImage(src: string, options?: { rootMargin?: string; threshold?: number }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      { 
        rootMargin: options?.rootMargin || '100px', 
        threshold: options?.threshold || 0.1 
      }
    );

    return () => observerRef.current?.disconnect();
  }, [options?.rootMargin, options?.threshold]);

  useEffect(() => {
    if (isInView && !isLoaded) {
      const img = new window.Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      img.onerror = () => setError(new Error('Failed to load image'));
      imgRef.current = img;
    }
  }, [isInView, isLoaded, src]);

  const setRef = (node: HTMLElement | null) => {
    if (node && observerRef.current) {
      observerRef.current.observe(node);
    }
  };

  return { isLoaded, isInView, error, setRef };
}
