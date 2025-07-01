import React, { useState, useEffect } from 'react';


// Presenter (dumb component)
const PostsList = ({ posts, loading }) => {
  return (
    <ul>
      {loading ? (
        <li>Chargement des données...</li>
      ) : (
        posts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))
      )}
    </ul>
  );
};

// Table Component
const TableComponent = ({ posts }) => (
  <table style={{ borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
        <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
      </tr>
    </thead>
    <tbody>
      {/* articles here */}
    </tbody>
  </table>
);

// Card Component
const CardComponent = ({ posts }) => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    {posts.map(post => (
      <div
        key={post.id}
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '1rem',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          width: '200px'
        }}
      >
        <h3>#{post.id}</h3>
        <p>{post.title}</p>
      </div>
    ))}
  </div>
);

// Container (smart component)
const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPosts([
        { id: 1, title: 'React 19 est là !' },
        { id: 2, title: 'Comprendre le pattern conteneur-présentateur' },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  // composant de présentation (presenter)
  return <PostsList posts={posts} loading={loading} />;
};
const App = () => {
  return <PostsContainer />;
};

export default App;

