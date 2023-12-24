import React, { useContext } from 'react';
import { useThemeContext } from '../../context';

export const AuthContainer = () => {
  const { theme, setTheme } = useThemeContext();
  console.log({ theme });

  return (
    <div>
      <button
        onClick={() => {
          console.log('Call');
          setTheme('abc');
        }}>
        Switch
      </button>
    </div>
  );
};
