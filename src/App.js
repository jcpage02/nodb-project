import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CreateUser from './Components/CreateUser';
import MoviesArtists from './Components/MoviesArtists';
import Header from './Components/Header'
import Login from './Components/Login'

class App extends Component {

  state = {
    userLogedIn: [],
    usernameInput: '',
    passwordInput: '',
    media: []
  }

  // componentDidMount() {
  //   axios.get('/api/media')
  //     .then((res) => {
  //       console.log(res)
  //       this.setState({
  //         media: res.data
  //       })
  //     }
  //     )
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='BackgroundImage'></div>
          <MoviesArtists />
          <CreateUser />
          <Login />
      </div>
    );
  }
}

export default App;
