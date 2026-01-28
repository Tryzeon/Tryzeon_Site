'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  title: string;
  description: string;
  graphic?: ReactNode;
  icon?: ReactNode;
  className?: string;
  dark?: boolean;
  colSpan?: 1 | 2 | 3;
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
}

export function BentoCard({ 
  title, 
  description, 
  graphic, 
  icon,
  className = '',
  dark = false,
  colSpan = 1
}: BentoCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
      className={`
        relative overflow-hidden rounded-[40px] p-8 md:p-10 flex flex-col justify-between h-full group
        transition-all duration-500 will-change-transform
        hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        ${dark 
          ? 'bg-[#1D1D1F] text-white shadow-xl shadow-black/30 border border-white/10' 
          : 'bg-white text-[#1D1D1F] shadow-lg shadow-black/5 border border-black/[0.03]'
        }
        ${colSpan === 2 ? 'md:col-span-2' : ''}
        ${colSpan === 3 ? 'md:col-span-3' : ''}
        ${className}
      `}
    >
      <div className="z-10 relative flex flex-col h-full pointer-events-none">
        <div className="mb-auto">
          {icon && (
            <div className={`
              w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl
              transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3
              ${dark 
                ? 'bg-white/10 text-white group-hover:bg-[#0066CC] group-hover:text-white' 
                : 'bg-[#F5F5F7] text-[#0066CC] group-hover:bg-[#0066CC] group-hover:text-white'
              }
            `}>
              {icon}
            </div>
          )}
          <h3 className={`
            text-2xl md:text-3xl font-bold mb-4 tracking-tight
            ${dark ? 'text-white' : 'text-[#1D1D1F]'}
          `}>
            {title}
          </h3>
          <p className={`
            text-base md:text-[17px] font-medium leading-relaxed max-w-[90%]
            ${dark ? 'text-white/60 group-hover:text-white/80' : 'text-[#86868B] group-hover:text-[#1D1D1F]/80'}
            transition-colors duration-300
          `}>
            {description}
          </p>
        </div>
      </div>
      
      {graphic && (
        <div className="absolute inset-0 z-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
          {graphic}
        </div>
      )}

      {/* Hover Light Effect */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
        ${dark
          ? 'bg-[radial-gradient(circle_at_top_right,rgba(0,102,204,0.15),transparent_60%)]'
          : 'bg-[radial-gradient(circle_at_top_right,rgba(0,102,204,0.05),transparent_60%)]'
        }
      `} />
    </motion.div>
  );
}
