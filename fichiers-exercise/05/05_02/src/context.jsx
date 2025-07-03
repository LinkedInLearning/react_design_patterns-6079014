
import { createContext, useState, useMemo, useContext } from 'react';

// créer un objet de contexte
export const ThemeContext = createContext();

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
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    };
  }, [theme])

  return (
    <ThemeContext value={{ themeStyle: isDark, theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}


export default ThemeProvider;