//ThemeContext.js
import React from 'react';
import { createContext } from 'react';

const ThemeContext = createContext();



//ThemeProvider.js
import React, {useState} from 'react';

import ThemeContext from './ThemeContext';

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


//using provider in App.js
import React from 'react';
import ThemeProvider from './ThemeProvider';
import ThemedComponent from './ThemedComponent';

const App = () => {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    )
}

//accessing context 
// ThemedComponent.js
import React, { useContext } from 'react';
{/*import ThemeContext from './ThemeContext';*/}

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}>
      <h1>{`Current Theme: ${theme}`}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

