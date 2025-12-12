'use client';

import { useReportWebVitals } from 'next/web-vitals';

/**
 * WebVitals - 性能監控組件
 * 追蹤 Core Web Vitals 指標
 */
export function WebVitals() {
  useReportWebVitals((metric) => {
    // 在開發環境中記錄到控制台
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Web Vital:', metric);
    }

    // 在生產環境中，可以將指標發送到分析服務
    // Example: 
    // fetch('/api/analytics', {
    //   method: 'POST',
    //   body: JSON.stringify(metric),
    // });

    // 或發送到 Google Analytics
    // if (window.gtag) {
    //   window.gtag('event', metric.name, {
    //     value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    //     event_label: metric.id,
    //     non_interaction: true,
    //   });
    // }

    // Core Web Vitals 閾值檢查
    const thresholds = {
      FCP: 1800,  // First Contentful Paint (ms)
      LCP: 2500,  // Largest Contentful Paint (ms)
      FID: 100,   // First Input Delay (ms)
      CLS: 0.1,   // Cumulative Layout Shift
      TTFB: 800,  // Time to First Byte (ms)
      INP: 200,   // Interaction to Next Paint (ms)
    };

    const threshold = thresholds[metric.name as keyof typeof thresholds];
    if (threshold && metric.value > threshold) {
      console.warn(`⚠️ ${metric.name} 超過建議值:`, {
        value: metric.value,
        threshold,
        rating: metric.rating,
      });
    }
  });

  return null;
}
