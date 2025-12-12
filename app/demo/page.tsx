'use client';

import { useState } from 'react';
import { PageLayout } from '@/components/PageLayout';

export default function DemoPage() {
  const [currentLang, setCurrentLang] = useState('zh-TW');

  return (
    <PageLayout currentLang={currentLang} setCurrentLang={setCurrentLang}>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          產品示範
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          體驗 Tryzeon AI 虛擬試穿的強大功能
        </p>
        
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-lg">示範影片區域</span>
          </div>
          <p className="mt-6 text-gray-600">
            完整的產品示範即將推出，敬請期待！
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
