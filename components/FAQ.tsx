'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 確保客戶端掛載後才渲染動態內容
  useEffect(() => {
    setMounted(true);
  }, []);

  // 只顯示前 4 個重點問題
  const displayedItems = showAll ? items : items.slice(0, 4);
  const hasMore = items.length > 4;

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // SSR 時顯示載入狀態
  if (!mounted) {
    return (
      <div className="max-w-3xl mx-auto space-y-4">
        {items.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="w-full px-6 py-5 flex items-center justify-between text-left">
              <span className="font-semibold text-gray-900 pr-8">
                {item.question}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
            </div>
          </div>
        ))}
        {hasMore && (
          <div className="flex justify-center pt-6">
            <div className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full shadow-md flex items-center gap-2">
              <span>顯示更多</span>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {displayedItems.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-shadow hover:shadow-md"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-gray-50"
          >
            <span className="font-semibold text-gray-900 pr-8">
              {item.question}
            </span>
            <div
              className={`flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
            >
              <ChevronDown className="w-5 h-5 text-gray-500" />
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="px-6 pb-5 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}

      {/* 顯示更多按鈕 */}
      {hasMore && (
        <div className="flex justify-center pt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <span>{showAll ? '顯示較少' : '顯示更多'}</span>
            <div className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
              <ChevronDown className="w-5 h-5" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
