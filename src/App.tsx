import React, { createContext, useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthContainer } from './containers/Auth';
import { ThemeContextType } from './actions/type';

const ThemeContext = createContext<ThemeContextType>('light');

function App() {
  const [theme, setTheme] = useState<ThemeContextType>('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div className='App'>
        {/* <AuthContainer {...{ theme: ThemeContext }}></AuthContainer> */}
        {theme}
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Switch
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
