import React from 'react';


const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser({ name: 'Alice', email: 'alice@example.com' });
      setLoading(false);
    }, 2000);
  }, []);

  return <div>
    <h2>Profil de {user.name}</h2>
    <p>Email : {user.email}</p>
  </div>;
};

export default App;

