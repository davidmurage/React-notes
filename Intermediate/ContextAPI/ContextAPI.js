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


{/*The Context API is primarily applied in React applications. It provides a way to pass data through the component tree without having to pass props down manually at every level. 
Context allows you to share values like themes, localization preferences, 
or any other global data across many components in a React application without explicitly passing props through every level of the component tree.

You typically use the Context API in scenarios where data needs to be accessible to many components at different nesting levels without the need for prop drilling (passing props through multiple levels of components).

Here are some common use cases for applying the Context API:

1.Theming: You can use context to provide the current theme to all components in a React application.
2.Authentication: Storing authentication state and making it available to components that need it.
3.Internationalization (i18n): Storing locale information and providing it to components for translation.
4.Redux-like state management: While Redux is a more comprehensive solution for state management, in simpler cases, you might use context to manage global state.
In summary, the Context API in React is applied wherever you need to pass data or state down the component tree to child components without 
explicitly passing it through props at every level. 
It's especially useful for providing global data or state that many components across the application might need access to.*/}
