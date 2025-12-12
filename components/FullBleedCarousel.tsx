'use client';

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { OptimizedLink } from './OptimizedLink';
import { brand, type Slide } from "@/lib/constants";

function SlideImage({ src, alt, isCreatorSlide, priority }: { src: string; alt: string; isCreatorSlide: boolean; priority?: boolean }) {
  const imageClass = `h-full w-full ${isCreatorSlide ? 'object-contain' : 'object-cover'}`;

  return (
    <div className="relative h-full w-full bg-gray-200">
      <Image
        src={src}
        alt={alt}
        fill
        className={imageClass}
        style={{ objectPosition: 'center center', zIndex: 10 }}
        priority={priority}
        sizes="100vw"
      />
    </div>
  );
}

interface CarouselProps {
  slides: Slide[];
  auto?: boolean;
  interval?: number;
}

const DEFAULT_INTERVAL = 3500;
const CREATOR_SLIDE_INDEX = 4;
const CAROUSEL_INDEX_KEY = 'tryzeon_carousel_index';

export function FullBleedCarousel({ slides, auto = false, interval = DEFAULT_INTERVAL }: CarouselProps) {
  // 伺服器端總是從 0 開始，避免 hydration error
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // 客戶端掛載後，從 sessionStorage 恢復位置
  useEffect(() => {
    setMounted(true);
    const saved = sessionStorage.getItem(CAROUSEL_INDEX_KEY);
    if (saved) {
      const index = parseInt(saved, 10);
      if (!isNaN(index) && index >= 0 && index < slides.length) {
        setCurrentIndex(index);
      }
    }
  }, [slides.length]);

  // 當 currentIndex 改變時，保存到 sessionStorage
  useEffect(() => {
    if (mounted) {
      sessionStorage.setItem(CAROUSEL_INDEX_KEY, currentIndex.toString());
    }
  }, [currentIndex, mounted]);

  useEffect(() => {
    // 如果不自動播放、滑鼠懸停、或投影片少於2張，則清除計時器
    if (!auto || hover || ctaHover || !slides || slides.length <= 1) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    // 啟動自動輪播
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    // 清理函數
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [auto, hover, ctaHover, interval, slides, slides.length]);

  const go = (i: number) => setCurrentIndex(i);
  const next = () => setCurrentIndex((i) => (i + 1) % slides.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);

  const currentSlide = slides[currentIndex];
  const isCreatorSlide = currentIndex === CREATOR_SLIDE_INDEX;

  return (
    <div
      className="relative w-full h-[85dvh] sm:h-[92dvh] overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="absolute inset-0 h-full w-full z-0" style={{ backgroundColor: isCreatorSlide ? '#ffffff' : brand.lightBg }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 h-full w-full transition-opacity duration-700 ease-in-out"
            style={{
              opacity: i === currentIndex ? 1 : 0,
              zIndex: i === currentIndex ? 1 : 0,
            }}
          >
            {i === 5 && slide.video ? (
              <div className="h-full w-full relative">
                <video
                  src={slide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover absolute inset-0"
                  style={{ objectPosition: 'center center', zIndex: 1 }}
                />
                <div className="absolute inset-0 bg-black/20 z-2"></div>
              </div>
            ) : (
              <SlideImage
                src={slide.image}
                alt={slide.title || `slide-${i}`}
                isCreatorSlide={false}
                priority={i === 0}
              />
            )}
          </div>
        ))}
      </div>

      {/* Gradient Overlay for better text readability - Full Width */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="absolute bottom-8 left-6 right-6 sm:left-12 sm:right-12 z-20">
        <div className="max-w-3xl relative">
          {currentSlide?.kicker && (
            <div className="text-white/95 text-[11px] font-semibold tracking-widest uppercase drop-shadow-lg">
              {currentSlide.kicker}
            </div>
          )}
          {currentSlide?.title && (
            <h1 className="mt-2 text-white text-2xl sm:text-5xl font-bold leading-tight drop-shadow-2xl" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>
              {currentSlide.title}
            </h1>
          )}
          {currentSlide?.desc && (
            <p className="mt-4 text-white/90 text-base sm:text-xl drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              {currentSlide.desc}
            </p>
          )}
          {currentSlide?.cta && (
            <div
              onMouseEnter={() => setCtaHover(true)}
              onMouseLeave={() => setCtaHover(false)}
              className="mt-6 inline-block"
            >
              <OptimizedLink
                href={currentSlide.cta.href}
                className="inline-block px-8 py-4 rounded-lg transition-all font-semibold text-base shadow-lg bg-white text-gray-900 border-2 border-white hover:bg-gray-100 hover:scale-105"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  if (autoPlayRef.current) {
                    clearInterval(autoPlayRef.current);
                    autoPlayRef.current = null;
                  }
                }}
                prefetch={true}
              >
                {currentSlide.cta.label}
              </OptimizedLink>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors text-white" aria-label="Previous slide">
        <ArrowLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors text-white" aria-label="Next slide">
        <ArrowRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-2 w-2 rounded-full transition-all ${i === currentIndex ? 'w-4 bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
