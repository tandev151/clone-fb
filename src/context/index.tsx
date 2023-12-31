import { useContext, createContext } from 'react';

export type ThemeContextType = {
  theme: string;
  setTheme: (t: string) => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {}
});

export const useThemeContext = () => useContext(ThemeContext);
