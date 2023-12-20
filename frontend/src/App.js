import './App.css';

import React, { useState, useEffect} from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/test')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Fetch error:', error));
  }, []);

  return (
    <div>
      <p>Message from Flask: {message}</p>
    </div>
  );
}
export default App;
