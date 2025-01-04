import React, { useState, useEffect } from 'react';
import { initialWireframeData } from './utils/mockWireframe'; // Import the mock wireframe data
import './App.css'; // Import the stylesheet

const App = () => {
  const [wireframe, setWireframe] = useState(initialWireframeData.wireframe);

  useEffect(() => {
    // You can use mock data to initialize wireframe or load it from an API
    setWireframe(initialWireframeData.wireframe);
  }, []);

  return (
    <div className="App">
      <h1>Wireframe Tool Demo</h1>

      {/* Wireframe JSON Display */}
      <div className="json-container">
        <h2>Initial Wireframe JSON</h2>
        <pre>{JSON.stringify(wireframe, null, 2)}</pre>
      </div>

      {/* Wireframe Preview */}
      <div className="wireframe-container">
        <h3>Preview:</h3>
        <div className="browser-window">
          <header className="header">{wireframe.elements[0].content}</header>
          <button className="button">{wireframe.elements[1].content}</button>
          <footer className="footer">{wireframe.elements[2].content}</footer>
        </div>
      </div>
    </div>
  );
};

export default App;
