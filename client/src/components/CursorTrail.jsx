import React, { useEffect, useRef, useState } from 'react';

// Utility to generate a random star color (white/yellowish)
const randomStarColor = () => {
  const colors = ['#fff', '#ffe066', '#ffd700', '#fffbe7'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const STAR_LIFETIME = 800; // ms
const STAR_SIZE = [3, 6]; // px
const TRAIL_DENSITY = 1; // stars per mousemove

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

function CursorTrail({ enabled = true }) {
  // Only enable on non-touch devices
  const getShouldShow = () => enabled && !isTouchDevice();
  const [show, setShow] = useState(getShouldShow());

  // Dynamically update show state on resize/orientationchange
  React.useEffect(() => {
    const updateShow = () => setShow(getShouldShow());
    updateShow();
    window.addEventListener('resize', updateShow);
    window.addEventListener('orientationchange', updateShow);
    return () => {
      window.removeEventListener('resize', updateShow);
      window.removeEventListener('orientationchange', updateShow);
    };
  }, [enabled]);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const stars = useRef([]);

  // Hide default cursor
  useEffect(() => {
    if (show) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = '';
    }
    return () => {
      document.body.style.cursor = '';
    };
  }, [show]);

  // Handle mouse movement
  useEffect(() => {
    if (!show) return;
    const handleMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      // Add stars to the trail
      for (let i = 0; i < TRAIL_DENSITY; i++) {
        stars.current.push({
          x: e.clientX + (Math.random() - 0.5) * 8,
          y: e.clientY + (Math.random() - 0.5) * 8,
          size: Math.random() * (STAR_SIZE[1] - STAR_SIZE[0]) + STAR_SIZE[0],
          color: randomStarColor(),
          created: Date.now(),
          rotation: Math.random() * Math.PI * 2, // random rotation for each star
        });
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [show]);

  // Animate and draw stars
  useEffect(() => {
    if (!show) return;
    const ctx = canvasRef.current.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvasRef.current.width = width * dpr;
    canvasRef.current.height = height * dpr;
    canvasRef.current.style.width = width + 'px';
    canvasRef.current.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvasRef.current.width = width * dpr;
      canvasRef.current.height = height * dpr;
      canvasRef.current.style.width = width + 'px';
      canvasRef.current.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    window.addEventListener('resize', resize);

    function drawStar(ctx, x, y, r, color, alpha, rotation = 0) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(
          Math.cos(((18 + i * 72) * Math.PI) / 180) * r,
          -Math.sin(((18 + i * 72) * Math.PI) / 180) * r
        );
        ctx.lineTo(
          Math.cos(((54 + i * 72) * Math.PI) / 180) * (r * 0.5),
          -Math.sin(((54 + i * 72) * Math.PI) / 180) * (r * 0.5)
        );
      }
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      const now = Date.now();
      stars.current = stars.current.filter(star => now - star.created < STAR_LIFETIME);
      for (const star of stars.current) {
        const age = now - star.created;
        const alpha = 1 - age / STAR_LIFETIME;
        // Draw as a star shape instead of a circle
        drawStar(ctx, star.x, star.y, star.size, star.color, alpha, star.rotation || 0);
      }
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    }
    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [show]);

  // Optional: Magnetic hover effect for buttons
  useEffect(() => {
    if (!show) return;
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);
    const btns = document.querySelectorAll('button, .magnetic');
    btns.forEach(btn => {
      btn.addEventListener('mouseenter', handleEnter);
      btn.addEventListener('mouseleave', handleLeave);
    });
    return () => {
      btns.forEach(btn => {
        btn.removeEventListener('mouseenter', handleEnter);
        btn.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [show]);

  // Toggle for accessibility
  const toggleCursor = () => setShow(s => !s);

  return (
    <>
      {show && (
        <>
          <canvas
            ref={canvasRef}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: '100vw',
              height: '100vh',
              pointerEvents: 'none',
              zIndex: 9999,
            }}
          />
          <div
            ref={cursorRef}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: isHovering ? 40 : 28,
              height: isHovering ? 40 : 28,
              marginLeft: isHovering ? -16 : -10,
              marginTop: isHovering ? -16 : -10,
              pointerEvents: 'none',
              zIndex: 10000,
              transition: 'width 0.2s, height 0.2s, margin 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Star wand SVG, rotated so stick is diagonal to bottom right */}
            <svg
              width={isHovering ? 40 : 28}
              height={isHovering ? 40 : 28}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: isHovering
                  ? 'drop-shadow(0 0 12px #ffe066) drop-shadow(0 0 8px #fff)'
                  : 'drop-shadow(0 0 6px #fff)',
                transition: 'filter 0.2s',
                transform: 'rotate(-35deg)',
                transformOrigin: '12px 12px',
              }}
            >
              {/* Wand handle, now diagonal */}
              <rect x="18" y="20" width="4" height="16" rx="2" fill="#BC1782" />
              {/* Star */}
              <polygon
                points="20,6 22.4,14.2 31,14.2 23.8,18.8 26.2,27 20,22.4 13.8,27 16.2,18.8 9,14.2 17.6,14.2"
                fill="#ffe066"
                stroke="#FFD700"
                strokeWidth="1.5"
                style={{ filter: 'drop-shadow(0 0 6px #ffe066)' }}
              />
              {/* Sparkles */}
              <circle cx="20" cy="3" r="1.2" fill="#fffbe7" />
              <circle cx="33" cy="12" r="0.8" fill="#fffbe7" />
              <circle cx="7" cy="12" r="0.8" fill="#fffbe7" />
              <circle cx="26" cy="30" r="0.7" fill="#fffbe7" />
              <circle cx="14" cy="30" r="0.7" fill="#fffbe7" />
            </svg>
          </div>
        </>
      )}
    </>
  );
}

export default CursorTrail; 