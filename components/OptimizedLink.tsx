'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface OptimizedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  prefetch?: boolean;
}

export function OptimizedLink({ 
  href, 
  children, 
  className = '', 
  onClick,
  prefetch = true 
}: OptimizedLinkProps) {
  const router = useRouter();

  // 預加載頁面（只執行一次）
  useEffect(() => {
    if (prefetch) {
      const timer = setTimeout(() => router.prefetch(href), 100);
      return () => clearTimeout(timer);
    }
  }, [href, prefetch, router]);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick(e);
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
}
