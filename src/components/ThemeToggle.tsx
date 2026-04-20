import { Monitor, Moon, Sun } from 'lucide-react';
import { useThemeMode } from '../hooks/useThemeMode';

const items = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
] as const;

export default function ThemeToggle() {
  const { mode, setMode } = useThemeMode();

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-surface p-1 shadow-sm dark:border-[#43313a] dark:bg-[#241b22]">
      {items.map(({ value, label, icon: Icon }) => {
        const isActive = mode === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setMode(value)}
            aria-label={label}
            aria-pressed={isActive}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition ${
              isActive
                ? 'bg-primary text-white dark:bg-[#f0a8bb] dark:text-[#22171d]'
                : 'text-text-soft hover:bg-surface-soft hover:text-text dark:text-[#d6bcc5] dark:hover:bg-[#31242c] dark:hover:text-white'
            }`}
          >
            <Icon size={16} />
          </button>
        );
      })}
    </div>
  );
}