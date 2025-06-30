import React, { useState, useEffect } from 'react';


// Presenter (dumb component)
const PostsList = ({ posts, loading }) => {

  return (
    <ul>
      {/* liste d'articles  */}
    </ul>
  );
};


// Contener (smart component)
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
};
const App = () => {
  return <PostsContainer />;
};

export default App;

