import { createContext, useContext, useState } from "react";

// créer un objet de contexte
const ToggleContext = createContext();


// créer le composant Provider
export function ToggleProvider({ children }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((prev) => !prev);

  return (
    <ToggleContext value={{ on, toggle }}>
      {children}
    </ToggleContext>
  );
}


// partager les données du contexte
ToggleProvider.On = function On({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
};

ToggleProvider.Off = function Off({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
};

ToggleProvider.Button = function Button({ children }) {
  const { toggle } = useContext(ToggleContext);
  return <button onClick={toggle}>{children}</button>;
};


function App() {
  return (
    <ToggleProvider>
      <ToggleProvider.On>activé</ToggleProvider.On>
      <ToggleProvider.Off>désactivé</ToggleProvider.Off>
      <ToggleProvider.Button>Toggle</ToggleProvider.Button>
    </ToggleProvider>
  );
}

export default App
