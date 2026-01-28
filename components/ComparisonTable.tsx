'use client';

import { useState } from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface ComparisonFeature {
  feature: string;
  description?: string;
  traditional: boolean | string;
  tryzeon: boolean | string;
}

interface ComparisonTableProps {
  title?: string;
  subtitle?: string;
  features: ComparisonFeature[];
  className?: string;
}

/**
 * Apple 風格互動式比較表格
 * hover 時高亮整行，帶有精緻的動畫效果
 */
export function ComparisonTable({ title, subtitle, features, className = '' }: ComparisonTableProps) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const renderCell = (value: boolean | string, isHighlight: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
            isHighlight 
              ? 'bg-[#0066CC]/10 text-[#0066CC]' 
              : 'bg-green-50 text-green-600'
          }`}
        >
          <Check className="w-5 h-5" strokeWidth={3} />
        </motion.div>
      ) : (
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F5F7] text-[#86868B]">
          <X className="w-5 h-5" strokeWidth={2} />
        </div>
      );
    }
    return (
      <span className={`text-sm font-medium ${
        isHighlight ? 'text-[#1D1D1F]' : 'text-[#86868B]'
      }`}>
        {value}
      </span>
    );
  };

  return (
    <div className={`space-y-10 ${className}`}>
      {/* 標題 */}
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-[#86868B] font-medium">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Apple 風格對比表格 */}
      <div className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-black/5">
        {/* 表頭 */}
        <div className="grid grid-cols-3 border-b border-black/5">
          <div className="p-6 md:p-8">
            <p className="text-xs font-bold text-[#86868B] uppercase tracking-[0.15em]">
              功能特點
            </p>
          </div>
          <div className="p-6 md:p-8 text-center bg-[#F5F5F7]/50">
            <p className="text-xs font-bold text-[#86868B] uppercase tracking-[0.15em]">
              傳統方式
            </p>
          </div>
          <div className="p-6 md:p-8 text-center bg-gradient-to-r from-[#0066CC] to-[#0077ED]">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-white/80" />
              <p className="text-xs font-bold text-white uppercase tracking-[0.15em]">
                Tryzeon AI
              </p>
            </div>
          </div>
        </div>

        {/* 表格內容 */}
        <div>
          {features.map((item, index) => (
            <motion.div 
              key={index}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
              className={`grid grid-cols-3 border-b border-black/5 last:border-b-0 transition-all duration-300 ${
                hoveredRow === index ? 'bg-[#F5F5F7]/80' : ''
              }`}
              initial={false}
              animate={{
                backgroundColor: hoveredRow === index ? 'rgba(245, 245, 247, 0.8)' : 'rgba(255, 255, 255, 1)'
              }}
            >
              {/* 功能名稱 */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <p className={`font-semibold transition-colors duration-300 ${
                  hoveredRow === index ? 'text-[#0066CC]' : 'text-[#1D1D1F]'
                }`}>
                  {item.feature}
                </p>
                {item.description && (
                  <p className="text-sm text-[#86868B] mt-1">{item.description}</p>
                )}
              </div>

              {/* 傳統方式 */}
              <div className="p-6 md:p-8 text-center bg-[#F5F5F7]/30 flex items-center justify-center">
                {renderCell(item.traditional, false)}
              </div>

              {/* Tryzeon - 高亮 */}
              <div className={`p-6 md:p-8 text-center flex items-center justify-center transition-colors duration-300 ${
                hoveredRow === index ? 'bg-[#0066CC]/5' : ''
              }`}>
                {renderCell(item.tryzeon, true)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部 CTA */}
        <div className="bg-gradient-to-r from-[#1D1D1F] to-[#2D2D2F] p-8 md:p-10 text-center">
          <p className="text-white/90 text-lg font-medium mb-5">
            體驗 AI 驅動的時尚科技革命
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#1D1D1F] rounded-full font-bold text-base shadow-lg btn-apple"
          >
            立即開始
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
