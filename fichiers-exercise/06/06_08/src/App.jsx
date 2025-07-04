
import { useMemo } from 'react';
import { useCustomHook } from './context.jsx';

const style = {
  width: "100vw",
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px'
}


function Count() {
  const { increment, decrement } = useCustomHook();
  return (
    <div>
      <button onClick={increment}>
        Increment
      </button> &nbsp;
      <button onClick={decrement}>
        Decrement
      </button>
    </div>)
}

// exemple avec useState
function Counter() {
  const { state } = useCustomHook();
  return (
    <>
      <h2>Counter with useState</h2>
      <p>Count: {state.count}</p>
      <Count />
    </>
  );
}

function App() {
  const { state, toggleTheme } = useCustomHook();
  const isDark = useMemo(() => state.theme ? 'Dark' : 'Light', [state.theme]);

  const themeStyle = useMemo(() => {
    const isThemeDark = state.theme ? 'light' : 'dark';
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
  }, [state.theme])

  return (
    <>
      <button onClick={toggleTheme}>
        {isDark}
      </button>

      <div style={themeStyle}>
        <div style={style}>
          <h1>Counter Example</h1>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App
