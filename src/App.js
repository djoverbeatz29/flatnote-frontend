import React from 'react';
import logo from './react-logo.png';
import Login from '../components/Login'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt='logo' id='react-logo' />
          <p>Bem-vindo ao App!</p>
        </header>
        <Login />
      </div>
    )
  }
}

export default App;