import React from 'react';
import './App.css';
import Message from './components/Message';


function App() {
  const message = "hellooooooo!!!!!!";
  return (
    <div className="App">
      <header className="App-header">
        <Message name="hoge1" />
        <Message name="hoge2" />
        <Message name="hoge3" />
        <p>
          {message}
        </p>
      </header>
    </div>
  );
}

export default App;
