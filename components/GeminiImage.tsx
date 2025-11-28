import React, { useState, useEffect } from 'react';
import { generateDentalImage } from '../services/geminiService';

interface GeminiImageProps {
  prompt: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

const GeminiImage: React.FC<GeminiImageProps> = ({ prompt, alt, className, fallbackSrc }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      setLoading(true);
      // Small delay to prevent blocking main thread immediately on mount
      await new Promise(r => setTimeout(r, 100));
      const generated = await generateDentalImage(prompt);
      if (isMounted) {
        if (generated) {
          setImageUrl(generated);
        }
        setLoading(false);
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  const finalSrc = imageUrl || fallbackSrc || `https://picsum.photos/800/600?blur=2`;

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-10">
          <div className="flex flex-col items-center gap-2">
             <div className="w-8 h-8 border-4 border-blue-200 border-t-[#3757A0] rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      <img
        src={finalSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${loading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
      />
    </div>
  );
};

export default GeminiImage;