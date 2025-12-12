import Link from 'next/link';
import { Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <Search className="mx-auto h-16 w-16 text-gray-400 mb-4" />
        <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          找不到頁面
        </h2>
        <p className="text-gray-600 mb-8">
          抱歉，您訪問的頁面不存在或已被移除。
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            返回首頁
          </Link>
          <Link
            href="/business"
            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
          >
            商業合作
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 text-left">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">熱門頁面</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  首頁
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-gray-900">
                  商業合作
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-gray-900">
                  創作者加入
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">需要幫助？</h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>
                <a href="mailto:tryzeon.team@gmail.com" className="hover:text-gray-900">
                  聯絡我們
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/tryzeon" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
