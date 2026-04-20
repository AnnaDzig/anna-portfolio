export type ThemeMode = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'theme';

export function getStoredTheme(): ThemeMode {
  const value = localStorage.getItem(STORAGE_KEY);

  if (value === 'light' || value === 'dark' || value === 'system') {
    return value;
  }

  return 'system';
}

export function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function resolveTheme(mode: ThemeMode): 'light' | 'dark' {
  return mode === 'system' ? getSystemTheme() : mode;
}

export function applyTheme(mode: ThemeMode) {
  const resolvedTheme = resolveTheme(mode);
  document.documentElement.dataset.theme = resolvedTheme;
  localStorage.setItem(STORAGE_KEY, mode);
}

export function watchSystemTheme(callback: () => void) {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', callback);

  return () => {
    mediaQuery.removeEventListener('change', callback);
  };
}