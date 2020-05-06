import React, { useState } from 'react';
import Posts from './components/Posts';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <Posts posts={posts} setPosts={setPosts} />
    </div>
  );
}

export default App;
