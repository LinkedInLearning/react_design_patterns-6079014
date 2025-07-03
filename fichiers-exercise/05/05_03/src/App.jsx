import { useContext } from 'react';
import { ThemeContext } from './context.jsx';

const App = () => {
  const { themeStyle, theme: isDark, toggleTheme } = useTheme(ThemeContext);
  return (
    <div style={themeStyle}>
      <h1>Thème {isDark ? 'sombre' : 'clair'}</h1>
      <button onClick={toggleTheme}>
        Basculer vers le thème {isDark ? 'clair' : 'sombre'}
      </button>
    </div>
  );
}

export default App

