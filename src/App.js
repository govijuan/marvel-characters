import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav className='nav'><div className='container-fluid'><img src={logo} className='App-logo' alt='Marvel Logo'/></div>
          </nav>
        </header>
        <div className='main-content'>
          <div className='characters-search-wrap container'>
            <List/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
