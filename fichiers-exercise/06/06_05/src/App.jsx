import { useMemo, useReducer } from 'react';


const style = {
  width: "100vw",
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px'
}


const Count = ({ count, increment, decrement }) => {
  return (<div>
    <button onClick={increment}>
      Increment
    </button> &nbsp;
    <button onClick={decrement}>
      Decrement
    </button>
  </div>)
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'toggleTheme':
      return { ...state, theme: !state.theme };
    default:
      throw new Error();
  }
}

// exemple avec useState
function Counter({ increment, decrement, count }) {
  return (
    <>
      <h2>Counter with useState</h2>
      <p>Count: {count}</p>
      <Count increment={increment} decrement={decrement} />
    </>

  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, theme: false });

  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });
  const toggleTheme = () => dispatch({ type: 'toggleTheme' });

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

  const isDark = useMemo(() => state.theme ? 'Dark' : 'Light', [state.theme]);

  return (
    <>
      <button onClick={toggleTheme}>
        {isDark}
      </button>

      <div style={themeStyle}>
        <div style={style}>
          <h1>Counter Example</h1>
          <Counter increment={increment} decrement={decrement} count={state.count} />
        </div>
      </div>
    </>
  );
}

export default App
