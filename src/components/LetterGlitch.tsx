import { useEffect, useRef } from 'react';

type Letter = {
  char: string;
  color: string;
  targetColor: string;
  colorProgress: number;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

type LetterGlitchProps = {
  glitchColors?: string[];
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  characters?: string;
};

const DEFAULT_CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789';

export default function LetterGlitch({
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  characters = DEFAULT_CHARACTERS,
}: LetterGlitchProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const letters = useRef<Letter[]>([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const lastGlitchTime = useRef(0);

  const lettersAndSymbols = Array.from(characters);

  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  const getRandomChar = () =>
    lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];

  const getRandomColor = () =>
    glitchColors[Math.floor(Math.random() * glitchColors.length)];

  const hexToRgb = (hex: string): RGB | null => {
    const normalizedHex = hex.replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_match, r, g, b) => r + r + g + g + b + b,
    );

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      normalizedHex,
    );

    if (!result) return null;

    return {
      r: Number.parseInt(result[1], 16),
      g: Number.parseInt(result[2], 16),
      b: Number.parseInt(result[3], 16),
    };
  };

  const interpolateColor = (start: RGB, end: RGB, factor: number) => {
    const r = Math.round(start.r + (end.r - start.r) * factor);
    const g = Math.round(start.g + (end.g - start.g) * factor);
    const b = Math.round(start.b + (end.b - start.b) * factor);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const calculateGrid = (width: number, height: number) => {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);

    return { columns, rows };
  };

  const initializeLetters = (columns: number, rows: number) => {
    grid.current = { columns, rows };

    letters.current = Array.from({ length: columns * rows }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
    }));
  };

  const drawLetters = () => {
    const canvas = canvasRef.current;
    const ctx = context.current;

    if (!canvas || !ctx || letters.current.length === 0) return;

    const { width, height } = canvas.getBoundingClientRect();

    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = 'top';

    letters.current.forEach((letter, index) => {
      const x = (index % grid.current.columns) * charWidth;
      const y = Math.floor(index / grid.current.columns) * charHeight;

      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;

    if (!canvas || !parent) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    context.current?.setTransform(dpr, 0, 0, dpr, 0, 0);

    const { columns, rows } = calculateGrid(rect.width, rect.height);

    initializeLetters(columns, rows);
    drawLetters();
  };

  const updateLetters = () => {
    if (letters.current.length === 0) return;

    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));

    for (let i = 0; i < updateCount; i += 1) {
      const index = Math.floor(Math.random() * letters.current.length);
      const letter = letters.current[index];

      if (!letter) continue;

      letter.char = getRandomChar();
      letter.targetColor = getRandomColor();

      if (smooth) {
        letter.colorProgress = 0;
      } else {
        letter.color = letter.targetColor;
        letter.colorProgress = 1;
      }
    }
  };

  const handleSmoothTransitions = () => {
    let needsRedraw = false;

    letters.current.forEach((letter) => {
      if (letter.colorProgress >= 1) return;

      letter.colorProgress += 0.05;

      if (letter.colorProgress > 1) {
        letter.colorProgress = 1;
      }

      const startRgb = hexToRgb(letter.color);
      const endRgb = hexToRgb(letter.targetColor);

      if (!startRgb || !endRgb) return;

      letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
      needsRedraw = true;
    });

    if (needsRedraw) {
      drawLetters();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return undefined;

    context.current = canvas.getContext('2d');

    let resizeTimeout: ReturnType<typeof setTimeout>;

    const animate = () => {
      const now = Date.now();

      if (now - lastGlitchTime.current >= glitchSpeed) {
        updateLetters();
        drawLetters();
        lastGlitchTime.current = now;
      }

      if (smooth) {
        handleSmoothTransitions();
      }

      animationRef.current = window.requestAnimationFrame(animate);
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        if (animationRef.current) {
          window.cancelAnimationFrame(animationRef.current);
        }

        resizeCanvas();
        animate();
      }, 100);
    };

    lastGlitchTime.current = Date.now();
    resizeCanvas();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);

      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [glitchSpeed, smooth, glitchColors, characters]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-transparent">
      <canvas ref={canvasRef} className="block h-full w-full" />

      {outerVignette && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_55%,var(--background)_100%)]" />
      )}

      {centerVignette && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,var(--background)_0%,transparent_58%)] opacity-80" />
      )}
    </div>
  );
}
