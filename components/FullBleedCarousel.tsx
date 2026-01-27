import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { OptimizedLink } from './OptimizedLink';
import { type Slide } from "@/lib/constants";

function SlideImage({ src, alt, isActive, priority }: { src: string; alt: string; isActive: boolean; priority?: boolean }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: isActive ? 1.05 : 1 }}
      transition={{ duration: 10, ease: "linear" }}
      className="relative h-full w-full bg-fashion-stone"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition: 'center center' }}
        priority={priority}
        sizes="100vw"
      />
    </motion.div>
  );
}

interface CarouselProps {
  slides: Slide[];
  auto?: boolean;
  interval?: number;
}

const DEFAULT_INTERVAL = 5000;
const CAROUSEL_INDEX_KEY = 'tryzeon_carousel_index';

export function FullBleedCarousel({ slides, auto = false, interval = DEFAULT_INTERVAL }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (mounted) {
      sessionStorage.setItem(CAROUSEL_INDEX_KEY, currentIndex.toString());
    }
  }, [currentIndex, mounted]);

  useEffect(() => {
    if (!auto || hover || ctaHover || !slides || slides.length <= 1) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

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

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className="relative w-full h-[88dvh] sm:h-[95dvh] overflow-hidden bg-black shadow-2xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="absolute inset-0 h-full w-full z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            {currentIndex === 5 && currentSlide.video ? (
              <div className="h-full w-full relative">
                <video
                  src={currentSlide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            ) : (
              <SlideImage
                src={currentSlide.image}
                alt={currentSlide.title || `slide-${currentIndex}`}
                isActive={true}
                priority={true}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Apple-style Gradient Overlay */}
      {/* Gradient Overlay - Cinematic Fade from Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>

      {/* Content Area - Bottom-Left position to avoid covering image subjects */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end items-start text-left px-6 md:px-12 lg:px-16 pb-16 sm:pb-20">
        <div className="max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentSlide?.kicker && (
                <div className="text-white font-display text-xs md:text-sm font-bold tracking-[0.2em] mb-2 opacity-80 uppercase">
                  {currentSlide.kicker}
                </div>
              )}
              {currentSlide?.title && (
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-[1.15] mb-3 tracking-tight drop-shadow-md">
                  {currentSlide.title}
                </h1>
              )}
              {currentSlide?.desc && (
                <p className="max-w-md text-white/90 text-sm md:text-base font-display font-medium leading-relaxed mb-5 text-balance drop-shadow-sm">
                  {currentSlide.desc}
                </p>
              )}
              {currentSlide?.cta && (
                <div
                  className="flex space-x-4 justify-start items-center"
                  onMouseEnter={() => setCtaHover(true)}
                  onMouseLeave={() => setCtaHover(false)}
                >
                  <OptimizedLink
                    href={currentSlide.cta.href}
                    className="inline-flex items-center px-7 py-3 bg-white text-[#1D1D1F] hover:bg-white/90 rounded-full transition-all duration-300 font-display font-bold text-sm shadow-xl hover:scale-105 active:scale-95"
                    onClick={() => {
                      if (autoPlayRef.current) {
                        clearInterval(autoPlayRef.current);
                        autoPlayRef.current = null;
                      }
                    }}
                  >
                    {currentSlide.cta.label}
                  </OptimizedLink>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - Minimalist Apple Style */}
      <div className="absolute right-8 bottom-8 z-30 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white"
          aria-label="Previous slide"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white"
          aria-label="Next slide"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Navigation Dots - Progressive Line Style */}
      <div className="absolute left-1/2 bottom-8 z-30 flex -translate-x-1/2 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === currentIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
