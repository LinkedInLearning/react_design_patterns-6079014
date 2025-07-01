import React, { useState, useEffect } from 'react';



const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>Profil d'{user.name}</h2>
      <p>Email : {user.email}</p>
    </div>
  );
};

const PostsList = ({ posts }) => {
  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};
// HOC pour gérer le chargement

const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div>Chargement...</div>;
    }
    return <WrappedComponent {...props} />;
  };
};

const UserProfileWithLoading = withLoading(UserProfile);
const PostsListWithLoading = withLoading(PostsList);

const App = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser({ name: 'Alice', email: 'alice@example.com' });
      setPosts(['Post 1', 'Post 2', 'Post 3']);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <UserProfileWithLoading isLoading={loading} user={user} />
      <PostsListWithLoading isLoading={loading} posts={posts} />
    </>
  );
};

export default App;

