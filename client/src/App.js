import React, { Component } from 'react';
import Data1 from './components/Data1'
import Header from './components/Header'
import Toolbar from './components/Toolbar'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {/* if or statement to check it login in state is true */}
        <Toolbar />
      </div>
    );
  }
}

export default App;
