'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function NavigationProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    
    const timers = [
      setTimeout(() => setProgress(30), 50),
      setTimeout(() => setProgress(60), 100),
      setTimeout(() => setProgress(90), 150),
      setTimeout(() => setProgress(100), 300)
    ];

    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  if (progress === 0 || progress === 100) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
