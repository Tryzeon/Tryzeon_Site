'use client';

import { LucideIcon } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface UseCase {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  color: string;
}

interface UseCasesProps {
  title: string;
  subtitle?: string;
  cases: UseCase[];
}

/**
 * UseCases - 產品應用場景展示組件
 * 展示產品在不同場景下的應用方式和價值
 */
export function UseCases({ title, subtitle, cases }: UseCasesProps) {
  return (
    <div className="space-y-16">
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

      {/* 場景列表 */}
      <div className="space-y-24">
        {cases.map((useCase, index) => {
          const Icon = useCase.icon;
          const isEven = index % 2 === 0;
          
          return (
            <div key={index} className="relative">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                {/* 圖標和標題 */}
                <div className={isEven ? '' : 'md:order-2'}>
                  <ScrollReveal direction={isEven ? 'left' : 'right'}>
                    <div 
                      className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                      style={{ 
                        background: `linear-gradient(135deg, ${useCase.color}15, ${useCase.color}30)`,
                        border: `2px solid ${useCase.color}40`
                      }}
                    >
                      <Icon className="w-10 h-10" style={{ color: useCase.color }} />
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction={isEven ? 'left' : 'right'} delay={0.1}>
                    <div className="mb-6">
                      <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: useCase.color }}>
                        {useCase.subtitle}
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {useCase.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal direction={isEven ? 'left' : 'right'} delay={0.2}>
                    <div className="space-y-3">
                      {useCase.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div 
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                            style={{ backgroundColor: `${useCase.color}20` }}
                          >
                            <svg className="w-4 h-4" style={{ color: useCase.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-gray-700 flex-1">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>

                {/* 視覺展示區 */}
                <div className={isEven ? '' : 'md:order-1'}>
                  <ScrollReveal direction={isEven ? 'right' : 'left'} delay={0.2}>
                    <div 
                      className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
                      style={{ 
                        background: `linear-gradient(135deg, ${useCase.color}10, ${useCase.color}05)` 
                      }}
                    >
                      {/* 佔位圖標 */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-32 h-32 opacity-10" style={{ color: useCase.color }} />
                      </div>
                      
                      {/* 裝飾性元素 */}
                      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
                           style={{ backgroundColor: useCase.color }} />
                      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
                           style={{ backgroundColor: useCase.color }} />
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
