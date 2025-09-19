'use client';

import { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLetter: string;
  fallbackSize?: 'sm' | 'md' | 'lg';
}

export default function ProductImage({ 
  src, 
  alt, 
  className = "w-full h-full object-cover", 
  fallbackLetter,
  fallbackSize = 'md'
}: ProductImageProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-16 h-16 text-xl', 
    lg: 'w-32 h-32 text-4xl'
  };

  if (imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className={`${sizeClasses[fallbackSize]} bg-blue-100 rounded-full flex items-center justify-center`}>
          <span className="font-bold text-blue-600">
            {fallbackLetter}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
    />
  );
}
