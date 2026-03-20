import { useEffect, useRef } from 'react';

interface Tracer {
    x: number;
    y: number;
    dx: number;
    dy: number;
    color: string;
}

export default function GridTracers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const GRID_SIZE = 40;
    const tracers: Tracer[] = [];
    const colorChoices = ['#60a5fa', '#a78bfa', '#06b6d4']; // Match brand colors

    // Spawn 15 tracers for richer visual coverage
    for (let i = 0; i < 15; i++) {
        tracers.push({
            x: Math.floor(Math.random() * (canvas.width / GRID_SIZE)) * GRID_SIZE,
            y: Math.floor(Math.random() * (canvas.height / GRID_SIZE)) * GRID_SIZE,
            dx: Math.random() < 0.5 ? 2 : -2, // Speed MUST divide the GRID_SIZE fully
            dy: 0,
            color: colorChoices[i % colorChoices.length],
        });
    }

    const animate = () => {
        // Gradient layer for fading trails (comet effect)
        ctx.fillStyle = 'rgba(10, 10, 12, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        tracers.forEach(t => {
            // Draw Tracer Glow Node
            ctx.beginPath();
            ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = t.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = t.color;
            ctx.fill();
            ctx.shadowBlur = 0; // reset shadow for performance

            // Move coordinates
            t.x += t.dx;
            t.y += t.dy;

            // Random 90-degree turn at grid intersections
            if (t.x % GRID_SIZE === 0 && t.y % GRID_SIZE === 0) {
                if (Math.random() < 0.25) { // 25% turn chance
                    if (t.dx !== 0) { // Moving Horizontally
                        t.dy = Math.random() < 0.5 ? 2 : -2;
                        t.dx = 0;
                    } else { // Moving Vertically
                        t.dx = Math.random() < 0.5 ? 2 : -2;
                        t.dy = 0;
                    }
                }
            }

            // Screen Wrap bounds (Safety lock to preserve grid alignment)
            if (t.x < 0) {
                t.x = Math.floor(canvas.width / GRID_SIZE) * GRID_SIZE;
            }
            if (t.x > canvas.width) {
                t.x = 0;
            }
            if (t.y < 0) {
                t.y = Math.floor(canvas.height / GRID_SIZE) * GRID_SIZE;
            }
            if (t.y > canvas.height) {
                t.y = 0;
            }
        });

        requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);
    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.45,
        pointerEvents: 'none'
      }}
    />
  );
}
