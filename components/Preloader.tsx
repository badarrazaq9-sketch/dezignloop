// components/Preloader.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      <div className="w-24 sm:w-32 relative h-24 sm:h-32 animate-scale-fade">
        <Image
          src="/assets/logob.png"
          alt="DezignLoop Logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  );
}