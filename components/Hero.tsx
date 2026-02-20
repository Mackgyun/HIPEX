import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  "https://placehold.co/1920x600/1e293b/ffffff?text=HiPex+2026+Busan",
  "https://placehold.co/1920x600/334155/ffffff?text=Medical+Innovation",
  "https://placehold.co/1920x600/475569/ffffff?text=Patient+Experience",
  "https://placehold.co/1920x600/0f172a/ffffff?text=Future+Healthcare"
];

const EXTENDED_IMAGES = [IMAGES[IMAGES.length - 1], ...IMAGES, IMAGES[0]];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentSlide(index + 1);
  };

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      setIsAnimating(false);
      
      // Boundary checks for infinite loop
      if (currentSlide >= EXTENDED_IMAGES.length - 1) {
        setIsTransitioning(false);
        setCurrentSlide(1);
      } else if (currentSlide <= 0) {
        setIsTransitioning(false);
        setCurrentSlide(EXTENDED_IMAGES.length - 2);
      }
    }, 700); // Match CSS duration

    return () => clearTimeout(timer);
  }, [currentSlide, isAnimating]);

  const getActiveDotIndex = () => {
    if (currentSlide === 0) return IMAGES.length - 1;
    if (currentSlide === EXTENDED_IMAGES.length - 1) return 0;
    return currentSlide - 1;
  };

  return (
    // Outer container: Full width with dark background foundation
    <div className="relative w-full h-[400px] md:h-[500px] bg-slate-900 group overflow-hidden">
      
      {/* 1. Background Layer: Synchronized Blur Effect */}
      <div className="absolute inset-0 z-0">
         <div 
            className={`flex h-full w-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
         >
            {EXTENDED_IMAGES.map((img, idx) => (
                <div key={idx} className="min-w-full h-full relative overflow-hidden">
                     {/* Scale up to avoid white edges from blur, lowered opacity for focus on foreground */}
                    <img 
                        src={img} 
                        className="w-full h-full object-cover blur-2xl scale-110 opacity-40" 
                        alt=""
                    />
                </div>
            ))}
         </div>
      </div>

      {/* 2. Foreground Content Layer: Centered & Constrained */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto shadow-2xl">
         
         {/* Slider Container - No Rounding */}
         <div className="h-full w-full overflow-hidden relative bg-black">
            <div 
                className={`flex h-full w-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {EXTENDED_IMAGES.map((img, idx) => (
                <div key={idx} className="min-w-full h-full relative">
                    <img 
                    src={img} 
                    alt={`Slide ${idx}`} 
                    className="h-full w-full object-cover"
                    />
                    {/* Inner Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                </div>
                ))}
            </div>

            {/* Controls */}
             <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10"
            >
                <ChevronLeft size={24} strokeWidth={2} />
            </button>
            <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm border border-white/10"
            >
                <ChevronRight size={24} strokeWidth={2} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-3 z-20">
                {IMAGES.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`h-1 rounded-full transition-all duration-300 backdrop-blur-sm ${
                    idx === getActiveDotIndex()
                        ? 'w-12 bg-white shadow-lg' 
                        : 'w-8 bg-white/40 hover:bg-white/60'
                    }`}
                />
                ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default Hero;