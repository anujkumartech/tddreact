import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn(true);
  }
  
  return (
    <div className="App">
      <Login onLogin={onLogin} />
      {isLoggedIn && <p>You are logged in.</p>}
    </div>
  );
}

export default App;
