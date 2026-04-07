import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export type ThemeContextValue = {
  resolvedTheme: Theme;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);
