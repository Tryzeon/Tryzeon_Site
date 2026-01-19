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
      animate={{ scale: isActive ? 1.08 : 1 }}
      transition={{ duration: 6, ease: "linear" }}
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

const DEFAULT_INTERVAL = 5000; // Slower for luxury feel
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

  return (
    <div
      className="relative w-full h-[88dvh] sm:h-[95dvh] overflow-hidden bg-fashion-charcoal shadow-2xl"
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
            transition={{ duration: 1.5, ease: "easeInOut" }}
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
                <div className="absolute inset-0 bg-fashion-charcoal/20"></div>
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

      {/* Luxury Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-fashion-charcoal/70 via-transparent to-fashion-charcoal/30 z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end pb-24 md:pb-32 px-8 sm:px-16 md:px-24">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {currentSlide?.kicker && (
                <div className="text-white/80 text-[10px] md:text-[12px] font-display font-bold tracking-[0.4em] uppercase mb-4">
                  {currentSlide.kicker}
                </div>
              )}
              {currentSlide?.title && (
                <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-6 tracking-tight">
                  {currentSlide.title}
                </h1>
              )}
              {currentSlide?.desc && (
                <p className="max-w-xl text-white/70 text-base md:text-xl font-display font-light leading-relaxed mb-10">
                  {currentSlide.desc}
                </p>
              )}
              {currentSlide?.cta && (
                <div
                  onMouseEnter={() => setCtaHover(true)}
                  onMouseLeave={() => setCtaHover(false)}
                >
                  <OptimizedLink
                    href={currentSlide.cta.href}
                    className="inline-flex items-center px-10 py-4 rounded-full transition-all duration-300 font-display font-bold text-xs uppercase tracking-[0.2em] shadow-apple-lg bg-white text-fashion-charcoal hover:bg-fashion-gold hover:text-white hover:scale-105"
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - Minimalist */}
      <div className="absolute right-8 bottom-8 z-30 flex space-x-4">
        <button onClick={prev} className="p-3 rounded-full border border-white/20 hover:border-white transition-colors text-white" aria-label="Previous slide">
          <ArrowLeft size={18} />
        </button>
        <button onClick={next} className="p-3 rounded-full border border-white/20 hover:border-white transition-colors text-white" aria-label="Next slide">
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Dots - Line Style */}
      <div className="absolute left-8 bottom-8 z-30 flex items-end space-x-1 h-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-[2px] transition-all duration-500 ${i === currentIndex ? 'w-12 bg-white' : 'w-6 bg-white/30 hover:bg-white/50'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
