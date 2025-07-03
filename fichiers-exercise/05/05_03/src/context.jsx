
import { createContext, useState, useMemo } from 'react';

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


export default ThemeProvider;
