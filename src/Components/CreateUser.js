import React, { Component } from 'react'
import axios from 'axios'
import './CreateUser.css'
// import { runInThisContext } from 'vm';

export default class CreateUser extends Component {

    state = {
        userInfo: [],
        // userID: '',
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        favMovieGenre: [],
        favMusicGenre: []
    }

    handleChange = (prop, e) => {
        this.setState({
            [prop]: e
        })
    }

    handleGenre = () => {

    }

    handleCreateUser = () => {
        const { firstName, lastName, username, password, favMovieGenre, favMusicGenre } = this.state
        axios.post('/api/userInfo', { firstName, lastName, username, password, favMovieGenre, favMusicGenre })
            .then((res) => {
                console.log(res.data)
                this.setState({
                    userInfo: res.data
                })
            })
    }


    render() {

        const movieGenres = ['Action', 'Comedy', 'Fantasy', 'Horror', 'Romance', 'Sci-fi']
        const musicGenres = ['Alternative', 'Classical', 'Country', 'Indie', 'Pop', 'Rock']

        const newMovieGenres = movieGenres.map((genre) => {
            return (
                <div className='GenreColumns'>
                    <span>{genre}</span>
                    <input value={genre} type="checkbox" />
                </div>
            )
        })

        const newMusicGenres = musicGenres.map((genre) => {
            return (
                <div className='GenreColumns'>
                    <span>{genre}</span>
                    <input value={genre} type="checkbox" />
                </div>
            )
        })

        return (
            <div className='Parent'>
                <div className='Body'>
                    <div className='CreateUserInputs'>
                        <input placeholder='First Name' onChange={(e) => this.handleChange('firstName', e.target.value)} type="text" />
                        <input placeholder='Last Name' onChange={(e) => this.handleChange('lastName', e.target.value)} type="text" />
                        <input placeholder='Username' onChange={(e) => this.handleChange('username', e.target.value)} type="text" />
                        <input placeholder='Password' onChange={(e) => this.handleChange('password', e.target.value)} type="text" />
                    </div>
                    <div className='AllGenres'>
                        <div className='GenreBody'>
                            <h4>Movies Genres</h4>
                            {newMovieGenres}
                        </div>
                        <div className='GenreBody'>
                            <h4>Music Genres</h4>
                            {newMusicGenres}
                        </div>
                    </div>
                    <div className='CreateUserButton'>
                        <button
                            onClick={() => this.handleCreateUser()}>
                            Create User
                        </button>
                    </div>
                </div>
            </div>
        )
    }


}