import React, { useState } from 'react';
import './App.css';
import Message from './components/Message';


function App() {
  const [name, setName] = useState('');
  const handleText = (e) => {
    setName(e.target.value)
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <input type="text" onChange={handleText} />
        </div>
        <Message name={name} />
      </header>
    </div>
  );
}

export default App;
