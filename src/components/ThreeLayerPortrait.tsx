import { useRef, useState } from 'react';

import realPortrait from '../assets/hero.jpg';
import cartoonPortrait from '../assets/hero-cartoon.png';
import sketchPortrait from '../assets/hero-sketch.png';

type LayerKey = 'real' | 'cartoon' | 'sketch';
type Direction = 'left' | 'right' | null;

const layers: Record<LayerKey, string> = {
  real: realPortrait,
  cartoon: cartoonPortrait,
  sketch: sketchPortrait,
};

const order: LayerKey[] = ['real', 'cartoon', 'sketch'];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function ThreeLayerPortrait() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragProgress, setDragProgress] = useState(0);
  const [direction, setDirection] = useState<Direction>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [restingPosition, setRestingPosition] = useState(0.56);

  const startXRef = useRef(0);

  const currentLayer = order[currentIndex];
  const nextLayer = order[(currentIndex + 1) % order.length];

  const incomingLayer = direction ? nextLayer : null;

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    startXRef.current = event.clientX;
    setIsDragging(true);
    setDirection(null);
    setDragProgress(0);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const deltaX = event.clientX - startXRef.current;
    const threshold = rect.width * 0.22;

    if (!direction) {
      if (Math.abs(deltaX) < 8) return;
      setDirection(deltaX > 0 ? 'right' : 'left');
    }

    const distance = Math.abs(deltaX);
    setDragProgress(clamp(distance / threshold, 0, 1));
  };

  const resetDrag = () => {
    setIsDragging(false);
    setDirection(null);
    setDragProgress(0);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId);

    if (dragProgress > 0.45 && direction) {
      setCurrentIndex((prev) => (prev + 1) % order.length);
      setRestingPosition(direction === 'right' ? 0.78 : 0.22);
    } else if (direction) {
      setRestingPosition(direction === 'right' ? 0.62 : 0.38);
    }

    resetDrag();
  };

  const revealPercent = clamp(dragProgress * 100, 0, 100);

  const dividerPosition = incomingLayer
    ? direction === 'right'
      ? clamp(revealPercent, 8, 92)
      : clamp(100 - revealPercent, 8, 92)
    : restingPosition * 100;

  const overlayClipPath = incomingLayer
    ? direction === 'right'
      ? `inset(0 ${100 - revealPercent}% 0 0 round 2rem)`
      : `inset(0 0 0 ${100 - revealPercent}% round 2rem)`
    : 'inset(0 100% 0 0 round 2rem)';

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={resetDrag}
      className="relative aspect-[0.9/1.12] w-full overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#f4efee_0%,#eae3e2_100%)] touch-none select-none dark:bg-[linear-gradient(180deg,#241b21_0%,#1b1519_100%)]"
    >
      <img
        src={layers[currentLayer]}
        alt="Anna Dzhyhota portrait"
        className="absolute inset-0 h-full w-full object-contain object-center"
        draggable={false}
      />

      <img
        src={layers[incomingLayer ?? nextLayer]}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain object-center"
        style={{
          clipPath: overlayClipPath,
          WebkitClipPath: overlayClipPath,
          opacity: incomingLayer ? 1 : 0,
        }}
        draggable={false}
      />

      <div
        className="pointer-events-none absolute inset-y-0 z-20"
        style={{ left: `calc(${dividerPosition}% - 1px)` }}
      >
        <div className="relative h-full w-[2px] bg-white/90 shadow-[0_0_0_1px_rgba(45,31,38,0.08)]" />

        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/95 shadow-[0_16px_40px_rgba(45,31,38,0.16)]">
          <div className="flex items-center gap-1 text-text">
            <span className="text-lg leading-none">{'‹'}</span>
            <span className="text-lg leading-none">{'›'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
