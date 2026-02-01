'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

interface Product3DShowcaseProps {
  images: string[];
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * Apple 風格 3D 產品展示組件
 * 滑鼠移動時產生 3D 傾斜效果
 */
export function Product3DShowcase({ 
  images, 
  title, 
  subtitle,
  className = '' 
}: Product3DShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        className="relative cursor-pointer"
      >
        {/* 3D Card Container */}
        <div 
          className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-white to-[#F5F5F7] shadow-2xl border border-white/50"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Floating Product Image */}
          <motion.div 
            className="relative aspect-square p-8"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: 'translateZ(50px)'
            }}
          >
            <Image
              src={images[currentImage] || '/images/products/placeholder.jpg'}
              alt={title}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Reflection/Glow Effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"
            style={{ transform: 'translateZ(60px)' }}
          />

          {/* Product Info */}
          <div 
            className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
            style={{ transform: 'translateZ(40px)' }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            {subtitle && (
              <p className="text-white/80 text-sm">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Shadow */}
        <div 
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-black/20 rounded-full"
          style={{ transform: 'translateZ(-50px)' }}
        />
      </motion.div>

      {/* Image Selector Dots */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentImage 
                  ? 'w-6 bg-[#0066CC]' 
                  : 'bg-[#86868B]/30 hover:bg-[#86868B]/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * 3D 浮動卡片組件
 * 滑鼠移動時產生 3D 傾斜和光影效果
 */
interface Floating3DCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function Floating3DCard({ 
  children, 
  className = '',
  glowColor = 'rgba(0, 102, 204, 0.3)'
}: Floating3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 25
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 25
  });

  // Glow position
  const glowX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, ${glowColor}, transparent 50%)`,
        }}
      />
      
      {/* Content */}
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
}

/**
 * 3D 旋轉展示組件
 * 自動旋轉的產品展示
 */
interface Rotating3DProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  pauseOnHover?: boolean;
}

export function Rotating3D({ 
  children, 
  className = '',
  duration = 20,
  pauseOnHover = true
}: Rotating3DProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className={`relative ${className}`}
      style={{ perspective: 1000 }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        animate={{ 
          rotateY: isPaused ? undefined : 360 
        }}
        transition={{ 
          duration, 
          repeat: Infinity, 
          ease: 'linear',
          repeatType: 'loop'
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * 3D 視差層組件
 * 創建深度感的多層視差效果
 */
interface ParallaxLayerProps {
  children: React.ReactNode;
  depth: number; // 0-100, 100 is closest
  className?: string;
}

export function ParallaxLayer({ children, depth, className = '' }: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-depth * 0.5, depth * 0.5]), {
    stiffness: 100,
    damping: 30
  });
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-depth * 0.5, depth * 0.5]), {
    stiffness: 100,
    damping: 30
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!layerRef.current) return;
    const rect = layerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={layerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
