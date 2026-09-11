import { useEffect, useRef } from 'react';

/**
 * Subtle animated starfield on a canvas.
 * Respects prefers-reduced-motion (canvas hidden via CSS).
 */
export function Starfield({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let raf = 0;

    type Star = { x: number; y: number; z: number; r: number; baseAlpha: number; twinkle: number };
    const STAR_COUNT = Math.min(140, Math.floor((width * height) / 7000));
    const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.8 + 0.2,
      r: Math.random() * 1.4 + 0.3,
      baseAlpha: Math.random() * 0.5 + 0.3,
      twinkle: Math.random() * Math.PI * 2,
    }));

    // A few "gold" stars for warmth
    const goldStars = stars.slice(0, 12);

    let t = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.012;
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.twinkle += 0.02;
        const alpha = s.baseAlpha * (0.6 + 0.4 * Math.sin(s.twinkle));
        const isGold = i < 12;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * s.z, 0, Math.PI * 2);
        if (isGold) {
          ctx.fillStyle = `rgba(232, 177, 75, ${alpha * 0.8})`;
        } else {
          ctx.fillStyle = `rgba(232, 240, 255, ${alpha})`;
        }
        ctx.fill();
        // slow drift
        s.y += s.z * 0.04;
        if (s.y > height) {
          s.y = 0;
          s.x = Math.random() * width;
        }
      }
      // faint nebula glow
      const grad = ctx.createRadialGradient(width * 0.7, height * 0.3, 0, width * 0.7, height * 0.3, width * 0.5);
      grad.addColorStop(0, 'rgba(63, 181, 164, 0.04)');
      grad.addColorStop(1, 'rgba(63, 181, 164, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      raf = requestAnimationFrame(render);
    };
    render();

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={`starfield absolute inset-0 w-full h-full ${className}`} aria-hidden="true" />;
}
