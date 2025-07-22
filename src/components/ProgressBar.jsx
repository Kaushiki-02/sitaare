import { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      
      // Show progress bar after scrolling a bit
      setIsVisible(scrollTop > 50);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-1 z-[60] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="h-full bg-gray-100/80 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-primary via-primaryDark to-primary transition-all duration-300 ease-out relative overflow-hidden"
          style={{ 
            width: `${scrollProgress}%`,
            boxShadow: scrollProgress > 0 ? '0 0 8px rgba(189, 22, 130, 0.3)' : 'none'
          }}
        >
          {/* Animated shimmer effect */}
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full ${scrollProgress > 0 ? 'animate-shimmer' : ''}`}
            style={{
              animationDuration: '2s'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar; 