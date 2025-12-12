'use client';

import { Check, X } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ComparisonFeature {
  feature: string;
  traditional: boolean | string;
  tryzeon: boolean | string;
}

interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  features: ComparisonFeature[];
}

/**
 * ComparisonTable - 產品對比表格組件
 * 展示 Tryzeon 與傳統方式的對比
 */
export function ComparisonTable({ title, subtitle, features }: ComparisonTableProps) {
  const renderCell = (value: boolean | string, isHighlight: boolean = false) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${isHighlight ? 'bg-green-100' : 'bg-gray-100'}`}>
          <Check className={`w-5 h-5 ${isHighlight ? 'text-green-600' : 'text-gray-600'}`} />
        </div>
      ) : (
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50">
          <X className="w-5 h-5 text-red-400" />
        </div>
      );
    }
    return <span className={isHighlight ? 'font-semibold text-gray-900' : 'text-gray-600'}>{value}</span>;
  };

  return (
    <div className="space-y-8">
      {/* 標題 */}
      <div className="text-center max-w-3xl mx-auto">
        <ScrollReveal direction="up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </ScrollReveal>
        {subtitle && (
          <ScrollReveal direction="up" delay={0.1}>
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
          </ScrollReveal>
        )}
      </div>

      {/* 對比表格 */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* 表頭 */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="p-6">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                功能特點
              </p>
            </div>
            <div className="p-6 text-center border-x border-gray-200">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                傳統方式
              </p>
            </div>
            <div className="p-6 text-center bg-gradient-to-r from-gray-900 to-gray-700">
              <p className="text-sm font-semibold text-white uppercase tracking-wider">
                Tryzeon AI
              </p>
            </div>
          </div>

          {/* 表格內容 */}
          <div className="divide-y divide-gray-200">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-3 hover:bg-gray-50 transition-colors"
              >
                {/* 功能名稱 */}
                <div className="p-6">
                  <p className="font-medium text-gray-900">
                    {item.feature}
                  </p>
                </div>

                {/* 傳統方式 */}
                <div className="p-6 text-center border-x border-gray-200 flex items-center justify-center">
                  {renderCell(item.traditional, false)}
                </div>

                {/* Tryzeon */}
                <div className="p-6 text-center bg-gray-50/50 flex items-center justify-center">
                  {renderCell(item.tryzeon, true)}
                </div>
              </div>
            ))}
          </div>

          {/* 底部 CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-8 text-center">
            <p className="text-white text-lg font-semibold mb-4">
              體驗 AI 驅動的時尚科技革命
            </p>
            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              立即開始
            </button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
