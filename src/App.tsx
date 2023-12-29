import React, { useState } from 'react';

import './App.css';
import { AuthContainer } from './containers/Auth';

import { ThemeContext } from './context';

function App() {
  const [theme, setTheme] = useState<string>('light');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}>
      <div className={`global-app ${theme}`}>
        <AuthContainer></AuthContainer>
        {theme}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
