import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CreateUser from './Components/CreateUser';
import MoviesArtists from './Components/MoviesArtists';
import Header from './Components/Header'
import SignIn from './Components/SignIn'

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
        <CreateUser />
        <SignIn />
        
        <MoviesArtists />
      </div>
    );
  }
}

export default App;
