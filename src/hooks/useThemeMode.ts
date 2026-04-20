import { useEffect, useState } from 'react';
import {
  applyTheme,
  getStoredTheme,
  resolveTheme,
  watchSystemTheme,
  type ThemeMode,
} from '../lib/theme';

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>(() => getStoredTheme());

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  useEffect(() => {
    if (mode !== 'system') return;

    return watchSystemTheme(() => {
      applyTheme('system');
    });
  }, [mode]);

  return {
    mode,
    resolvedTheme: resolveTheme(mode),
    setMode,
  };
}