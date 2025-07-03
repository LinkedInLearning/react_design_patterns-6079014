import { useTheme } from './context.jsx';


const App = () => {
  const { themeStyle, theme: isDark, toggleTheme } = useTheme();
  return (
    <div style={{ width: '100%' }}>
      <div style={themeStyle}>
        <h1>Thème {isDark ? 'sombre' : 'clair'}</h1>
        <button onClick={toggleTheme}>
          Basculer vers le thème {isDark ? 'clair' : 'sombre'}
        </button>
      </div>
    </div>
  );
}

export default App

