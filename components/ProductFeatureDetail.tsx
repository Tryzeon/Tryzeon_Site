'use client';

import { LucideIcon } from 'lucide-react';
import Image from "next/image";
import { ScrollReveal } from './ScrollReveal';

interface ProductFeatureDetailProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  imageSide?: 'left' | 'right';
  imageUrl?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

/**
 * ProductFeatureDetail - 產品功能詳細展示組件
 * 用於展示單一產品功能的完整資訊，包含圖片、說明、優勢和數據
 */
export function ProductFeatureDetail({
  icon: Icon,
  title,
  subtitle,
  description,
  benefits,
  imageSide = 'right',
  imageUrl,
  stats,
}: ProductFeatureDetailProps) {
  const isImageLeft = imageSide === 'left';

  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${isImageLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* 文字內容 */}
      <div className={`space-y-6 ${isImageLeft ? 'md:order-2' : ''}`}>
        <ScrollReveal direction={isImageLeft ? 'right' : 'left'}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 mb-4">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction={isImageLeft ? 'right' : 'left'} delay={0.1}>
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {subtitle}
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </ScrollReveal>

        {/* 優勢列表 */}
        <ScrollReveal direction={isImageLeft ? 'right' : 'left'} delay={0.2}>
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 flex-1">{benefit}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 數據統計 */}
        {stats && stats.length > 0 && (
          <ScrollReveal direction={isImageLeft ? 'right' : 'left'} delay={0.3}>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* 圖片/視覺內容 */}
      <div className={isImageLeft ? 'md:order-1' : ''}>
        <ScrollReveal direction={isImageLeft ? 'left' : 'right'} delay={0.2}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
            {imageUrl ? (
              <div className="relative w-full h-full">
                <Image
                  src={imageUrl}
                  alt={title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] flex items-center justify-center">
                <Icon className="w-24 h-24 text-gray-400" />
              </div>
            )}
            {/* 裝飾性漸層覆蓋 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
