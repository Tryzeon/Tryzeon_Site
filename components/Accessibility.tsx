'use client';

import { useEffect, useCallback } from 'react';

/**
 * 跳過導航連結 - 無障礙功能
 * 允許鍵盤用戶直接跳到主要內容
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[#0066CC] focus:text-white focus:rounded-lg focus:font-bold focus:shadow-lg focus:outline-none"
    >
      跳到主要內容
    </a>
  );
}

/**
 * 鍵盤導航 Hook
 * 提供完整的鍵盤導航支援
 */
export function useKeyboardNavigation() {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Escape 關閉彈窗/選單
    if (e.key === 'Escape') {
      const openMenus = document.querySelectorAll('[data-menu-open="true"]');
      openMenus.forEach(menu => {
        menu.setAttribute('data-menu-open', 'false');
      });
    }

    // Tab 導航時顯示焦點樣式
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    document.body.classList.remove('keyboard-nav');
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleKeyDown, handleMouseDown]);
}

/**
 * 焦點陷阱 Hook
 * 用於 Modal/Dialog，保持焦點在組件內
 */
export function useFocusTrap(ref: React.RefObject<HTMLElement>, isActive: boolean) {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const element = ref.current;
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    element.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
    };
  }, [ref, isActive]);
}

/**
 * 無障礙按鈕組件
 */
interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ariaLabel?: string;
}

export function AccessibleButton({ 
  children, 
  ariaLabel, 
  className = '',
  ...props 
}: AccessibleButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      className={`
        focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * 無障礙連結組件
 */
interface AccessibleLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  external?: boolean;
}

export function AccessibleLink({ 
  children, 
  external = false,
  className = '',
  ...props 
}: AccessibleLinkProps) {
  return (
    <a
      className={`
        focus:outline-none focus:ring-2 focus:ring-[#0066CC] focus:ring-offset-2 focus:rounded
        ${className}
      `}
      {...(external ? { 
        target: '_blank', 
        rel: 'noopener noreferrer',
        'aria-label': `${props['aria-label'] || ''} (在新視窗開啟)`
      } : {})}
      {...props}
    >
      {children}
      {external && <span className="sr-only">(在新視窗開啟)</span>}
    </a>
  );
}

/**
 * 螢幕閱讀器專用文字
 */
export function ScreenReaderOnly({ children }: { children: React.ReactNode }) {
  return <span className="sr-only">{children}</span>;
}

/**
 * 宣告區塊 - 用於動態內容更新通知螢幕閱讀器
 */
interface LiveRegionProps {
  children: React.ReactNode;
  politeness?: 'polite' | 'assertive';
}

export function LiveRegion({ children, politeness = 'polite' }: LiveRegionProps) {
  return (
    <div 
      aria-live={politeness} 
      aria-atomic="true"
      className="sr-only"
    >
      {children}
    </div>
  );
}
