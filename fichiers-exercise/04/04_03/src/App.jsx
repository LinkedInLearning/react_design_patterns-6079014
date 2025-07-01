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



function App() {
  return null
}

export default App
