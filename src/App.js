import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CreateUser from './Components/CreateUser';
import MoviesArtists from './Components/MoviesArtists';
import Header from './Components/Header'
import Login from './Components/Login'
import LoginModal from './Modal/LoginModal'
import MyAccountModal from './Modal/MyAccountModal'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className='BackgroundImage'></div>
        {/* <LoginModal /> */}
          <MoviesArtists />
        <div className='Editables'>
          {/* <CreateUser />
          <Login /> */}
        </div>
      </div>
    );
  }
}

export default App;
