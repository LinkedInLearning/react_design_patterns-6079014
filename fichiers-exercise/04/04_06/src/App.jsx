import React, { createContext, useContext, useState, useMemo } from 'react';
const style = {
  backgroundColor: isDark ? '#222' : '#f9f9f9',
  color: isDark ? '#fff' : '#000',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
};


// créer un objet de contexte
const ThemeContext = createContext();

// créer un composant Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => setTheme(prevTheme => !prevTheme);

  const isDark = useMemo(() => {
    const isThemeDark = theme ? 'light' : 'dark';
    return {
      backgroundColor: isThemeDark === 'dark' ? '#222' : '#f9f9f9',
      color: isThemeDark === 'dark' ? '#fff' : '#000',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    };
  }, [theme])

  return (
    <ThemeContext value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext>
  );
}

const App = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={isDark}>
      <h1>Thème {isDark ? 'sombre' : 'clair'}</h1>
      <button onClick={toggleTheme}>
        Basculer vers le thème {isDark ? 'clair' : 'sombre'}
      </button>
    </div>
  );
}

export default App

