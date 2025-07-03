import { createContext, useState, useMemo, useContext } from 'react';


// créer un objet de contexte

const StatusContext = createContext();

// créer un composant Provider
const StatusProvider = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const goOnline = () => setIsOnline(true);
  const goOffline = () => setIsOnline(false);

  const value = useMemo(() => ({
    isOnline,
    goOnline,
    goOffline
  }), [isOnline]);

  return (
    <StatusContext value={value}>
      {children}
    </StatusContext>
  );
};

export const useOnlineStatus = () => {
  const context = useContext(StatusContext);
  if (!context) {
    throw new Error('useStatus must be used within a StatusProvider');
  }
  return context;
};

export default StatusProvider;