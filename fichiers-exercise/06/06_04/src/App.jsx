import { useReducer, useMemo } from 'react';

function themeReducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return {
        theme: !state.theme
      }
    default:
      return state;
  }
}


const ThemeToggleApp = () => {
  const [state, dispatch] = useReducer(themeReducer, { theme: false });

  const toggleTheme = () => dispatch({ type: 'toggle' });

  const isDark = useMemo(() => state.theme ? "Clair" : "Sombre", [state.theme]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: state.theme ? '#222' : '#f9f9f9',
      color: state.theme ? '#fff' : '#000',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease'
    }
  }, [state.theme])

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
