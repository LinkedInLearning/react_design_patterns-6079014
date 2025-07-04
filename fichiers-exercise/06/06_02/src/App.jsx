import React, { useState, useMemo } from 'react';


const ThemeToggleApp = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => setTheme(prevTheme => !prevTheme);

  const isDark = useMemo(() => theme ? "Clair" : "Sombre", [theme]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: theme ? '#222' : '#f9f9f9',
      color: theme ? '#fff' : '#000',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease'
    }
  }, [theme])

  return (
    <div style={themeStyles}>
      <h2>Thème actuel : {isDark}</h2>
      <button onClick={toggleTheme}>
        Basculer le thème {isDark === "Dark" ? "Clair" : "Sombre"}
      </button>
    </div>
  );
};

export default ThemeToggleApp;
