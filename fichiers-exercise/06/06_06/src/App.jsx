import { useMemo } from 'react';
import { useState } from 'react';

const style = {
  width: "100vw",
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '20px'
}


// exemple avec useState
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (

    <>
      <h2>Counter with useState</h2>
      <p>Count: {count}</p>
      <div>
        <button onClick={increment}>
          Increment
        </button> &nbsp;
        <button onClick={decrement}>
          Decrement
        </button>
      </div>
    </>

  );
}

function App() {
  const toggleTheme = () => setTheme(prevTheme => !prevTheme);
  const [theme, setTheme] = useState(false);

  const themeStyle = useMemo(() => {
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

  const isDark = useMemo(() => theme ? 'Dark' : 'Light', [theme]);

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
