import { useContext, createContext } from 'react';

export type ThemeContextType = {
  theme: string;
  setTheme: (t: string) => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: (value) => {
    console.log({ value });
  }
});

export const useThemeContext = () => useContext(ThemeContext);
