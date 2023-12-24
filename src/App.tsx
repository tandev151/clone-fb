import React, { useState } from 'react';

import './App.css';
import { AuthContainer } from './containers/Auth';

import { ThemeContext } from './context';

function App() {
  const [theme, setTheme] = useState<string>('light');
  console.log({ theme });
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}>
      <div className='App'>
        <AuthContainer></AuthContainer>
        {theme}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
