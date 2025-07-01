import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>Profil de {user.name}</h2>
      <p>Email : {user.email}</p>
    </div>
  );
};


const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>; // ou un spinner graphique
    }

    return <WrappedComponent {...props} />;
  };
};


const UserProfileWithLoading = withLoading(UserProfile);

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser({ name: 'Alice', email: 'alice@example.com' });
      setLoading(false);
    }, 2000); // simulation du chargement
  }, []);

  return <UserProfileWithLoading isLoading={loading} user={user} />;
};

export default App;

