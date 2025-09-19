'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLetter: string;
  fallbackSize?: 'sm' | 'md' | 'lg';
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function ProductImage({ 
  src, 
  alt, 
  className = "w-full h-full object-cover", 
  fallbackLetter,
  fallbackSize = 'md',
  width = 400,
  height = 400,
  priority = false
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
    <Image 
      src={src} 
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setImageError(true)}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  );
}
