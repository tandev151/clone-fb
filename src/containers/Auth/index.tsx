import React, { useContext } from 'react';
import { useThemeContext } from '../../context';

export const AuthContainer = () => {
  const { theme, setTheme } = useThemeContext();
  console.log({ theme });

  return (
    <div>
      <button
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}>
        Switch
      </button>
    </div>
  );
};
