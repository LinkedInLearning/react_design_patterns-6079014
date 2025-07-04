import { useReducer, useMemo } from 'react';

function themeReducer(state, action) {
  switch (action.type) {
    case 'selectDark':
      return {
        theme: true
      }
    case 'selectLight':
      return {
        theme: false
      }
    default:
      return state;
  }
}


const ThemeToggleApp = () => {
  const [state, dispatch] = useReducer(themeReducer, { theme: false });

  const selectLightTheme = () => dispatch({ type: 'selectLight' });
  const selectDarkTheme = () => dispatch({ type: 'selectDark' });

  const isDark = useMemo(() => state.theme ? "Sombre" : "Clair", [state.theme]);

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
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={selectDarkTheme} style={{ backgroundColor: state.theme ? '#333' : '#f9f9f9', color: state.theme ? '#fff' : '#000', padding: '0.5rem 1rem', border: 'none', cursor: 'pointer' }}>
          Sombre
        </button>
        <button onClick={selectLightTheme} style={{ backgroundColor: state.theme ? '#f9f9f9' : '#333', color: state.theme ? '#000' : '#fff', padding: '0.5rem 1rem', border: 'none', cursor: 'pointer' }}>
          Clair
        </button>
      </div>
    </div>
  );
};

export default ThemeToggleApp;
