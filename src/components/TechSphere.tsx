// src/components/TechSphere.tsx

import { useEffect, useMemo, useRef } from 'react';

import { techStack } from '../data/techStack';

type Point = {
  x: number;
  y: number;
  z: number;
};

function createFibonacciSphere(count: number): Point[] {
  const points: Point[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    points.push({
      x: Math.cos(theta) * radius,
      y,
      z: Math.sin(theta) * radius,
    });
  }

  return points;
}

export default function TechSphere() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const sphereItems = useMemo(() => {
    const allItems = techStack.flatMap((tab) =>
      tab.groups.flatMap((group) => group.items),
    );

    const uniqueItems = Array.from(
      new Map(allItems.map((item) => [item.label, item])).values(),
    );

    return uniqueItems.slice(0, 24);
  }, []);

  const pointsRef = useRef<Point[]>(createFibonacciSphere(sphereItems.length));

  const rotationRef = useRef({
    x: 0,
    y: 0,
    speedX: 0.002,
    speedY: 0.004,
    targetSpeedX: 0.002,
    targetSpeedY: 0.004,
  });

  useEffect(() => {
    pointsRef.current = createFibonacciSphere(sphereItems.length);
  }, [sphereItems.length]);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    let frameId = 0;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();

      const offsetX = event.clientX - rect.left - rect.width / 2;
      const offsetY = event.clientY - rect.top - rect.height / 2;

      rotationRef.current.targetSpeedY = offsetX / rect.width / 14;
      rotationRef.current.targetSpeedX = -offsetY / rect.height / 14;
    };

    const handlePointerLeave = () => {
      rotationRef.current.targetSpeedX = 0.002;
      rotationRef.current.targetSpeedY = 0.004;
    };

    const animate = () => {
      const rect = wrapper.getBoundingClientRect();

      const size = Math.min(rect.width, rect.height);
      const radius = size * 0.36;
      const perspective = size * 1.8;

      const rotation = rotationRef.current;

      rotation.speedX += (rotation.targetSpeedX - rotation.speedX) * 0.05;
      rotation.speedY += (rotation.targetSpeedY - rotation.speedY) * 0.05;

      rotation.x += rotation.speedX;
      rotation.y += rotation.speedY;

      const sinX = Math.sin(rotation.x);
      const cosX = Math.cos(rotation.x);
      const sinY = Math.sin(rotation.y);
      const cosY = Math.cos(rotation.y);

      pointsRef.current.forEach((point, index) => {
        const item = itemRefs.current[index];

        if (!item) return;

        const y1 = point.y * cosX - point.z * sinX;
        const z1 = point.y * sinX + point.z * cosX;

        const x2 = point.x * cosY + z1 * sinY;
        const z2 = -point.x * sinY + z1 * cosY;

        const scale = perspective / (perspective - z2 * radius);

        const x = x2 * radius * scale;
        const y = y1 * radius * scale;

        const opacity = Math.max(0.25, Math.min(1, 0.35 + scale * 0.5));
        const blur = z2 < -0.35 ? 0.7 : 0;

        item.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
        item.style.opacity = `${opacity}`;
        item.style.filter = `blur(${blur}px)`;
        item.style.zIndex = `${Math.round(scale * 100)}`;
      });

      frameId = window.requestAnimationFrame(animate);
    };

    wrapper.addEventListener('pointermove', handlePointerMove);
    wrapper.addEventListener('pointerleave', handlePointerLeave);

    frameId = window.requestAnimationFrame(animate);

    return () => {
      wrapper.removeEventListener('pointermove', handlePointerMove);
      wrapper.removeEventListener('pointerleave', handlePointerLeave);
      window.cancelAnimationFrame(frameId);
    };
  }, [sphereItems.length]);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-background p-5 shadow-inner sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--primary-ring),transparent_38%),radial-gradient(circle_at_80%_70%,var(--primary-ring),transparent_45%)] opacity-80" />

      <div className="relative mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Interactive stack
        </p>

        <h3 className="mt-2 text-xl font-semibold text-text">
          Technologies in motion
        </h3>

        <p className="mt-2 text-sm leading-6 text-text-soft">
          A small interactive view of the technologies I use in my projects.
        </p>
      </div>

      <div
        ref={wrapperRef}
        className="relative mx-auto h-[300px] w-full max-w-[380px] touch-none select-none sm:h-[380px]"
        aria-label="Interactive rotating technology sphere"
      >
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_40px_var(--primary-ring)]" />

        {sphereItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              title={item.label}
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-primary/35 bg-surface/90 p-3 text-primary shadow-[0_0_18px_var(--primary-ring)] backdrop-blur-md will-change-transform sm:h-16 sm:w-16"
            >
              <Icon className="h-full w-full text-primary" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
