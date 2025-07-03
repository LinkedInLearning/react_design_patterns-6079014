import { useTheme } from './context.jsx';
import { useOnlineStatus } from './statusContext.jsx';

const StatusBar = () => {
  const { isOnline, goOnline, goOffline } = useOnlineStatus();

  const barStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    padding: '10px',
    backgroundColor: isOnline ? '#4caf50' : '#f44336',
    color: 'white',
    textAlign: 'center',
    zIndex: 999,
  };

  return (
    <div style={barStyle}>
      {isOnline ? '✅ En ligne' : '❌ Hors ligne'}{' '}
      <button onClick={goOnline} style={{ marginLeft: 10 }}>Connexion</button>
      <button onClick={goOffline} style={{ marginLeft: 5 }}>Déconnexion</button>
    </div>
  );
};

const Content = () => {
  const { themeStyle, theme: isDark, toggleTheme } = useTheme();
  const { isOnline } = useOnlineStatus();

  if (!isOnline) {
    return (
      <div style={{ width: '100%', textAlign: 'center', padding: '20px' }}>
        <h1>Vous êtes hors ligne</h1>
        <p>Veuillez vous connecter pour accéder au contenu de l'application</p>
      </div>
    );
  }
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
};

const App = () => {

  return (
    <>
      <StatusBar />
      <Content />
    </>
  );
}

export default App

