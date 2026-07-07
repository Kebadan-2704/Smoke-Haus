import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './SmokeCanvas.module.css';

export default function SmokeCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles;
    
    // Pre-render gradient templates for better performance
    // Creating radial gradients in the requestAnimationFrame loop is expensive on low-end devices
    const templates = {
      ember: createGradientTemplate('193,85,43'),
      ash: createGradientTemplate('150,120,90')
    };

    function createGradientTemplate(hue) {
      const size = 100; // Base size for template
      const offscreen = document.createElement('canvas');
      offscreen.width = size * 2;
      offscreen.height = size * 2;
      const offCtx = offscreen.getContext('2d');
      const grad = offCtx.createRadialGradient(size, size, 0, size, size, size);
      grad.addColorStop(0, `rgba(${hue}, 1)`); // Max opacity template
      grad.addColorStop(1, `rgba(${hue}, 0)`);
      offCtx.fillStyle = grad;
      offCtx.beginPath();
      offCtx.arc(size, size, size, 0, Math.PI * 2);
      offCtx.fill();
      return offscreen;
    }

    function resize() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }

    function makeParticle() {
      return {
        x: Math.random() * w,
        y: h + Math.random() * 100,
        r: (18 + Math.random() * 46) * devicePixelRatio,
        speed: (0.18 + Math.random() * 0.35) * devicePixelRatio,
        drift: (Math.random() - 0.5) * 0.4,
        alpha: 0.02 + Math.random() * 0.06,
        type: Math.random() > 0.5 ? 'ember' : 'ash',
      };
    }

    function init() {
      resize();
      const count = window.innerWidth < 720 ? 18 : 34;
      particles = Array.from({ length: count }, () => {
        const p = makeParticle();
        p.y = Math.random() * h;
        return p;
      });
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      
      // Batch global alpha where possible, but here they have individual alpha
      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -p.r) Object.assign(p, makeParticle());
        
        ctx.globalAlpha = p.alpha;
        const img = templates[p.type];
        // Draw image centered on p.x, p.y scaled to p.r * 2
        ctx.drawImage(img, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
      });
      
      // Reset global alpha
      ctx.globalAlpha = 1;
      
      animRef.current = requestAnimationFrame(tick);
    }

    window.addEventListener('resize', resize);
    init();
    animRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <canvas
      ref={canvasRef}
      id="smoke-canvas"
      className={styles.canvas}
    />
  );
}
