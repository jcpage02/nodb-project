import React, { Component } from 'react'
import axios from 'axios'
import './MyAccount.css'

export default class MyAccount extends Component {

    state = {
    }

    handleChange = (prop, e) => {
        this.setState({
            [prop]: e
        })
        console.log(this.state)
    }

    handleUpdate = (idToUpdate) => {
        console.log(this.state)
        axios.put(`/api/userInfo/${idToUpdate}`, this.state)
            .then((res) => {
                this.props.updateUserFn(res.data)
            })
    }


    render() {

        const userID = this.props.user.id
        const firstName = this.props.user.firstName
        const lastName = this.props.user.lastName
        const username = this.props.user.username
        const password = this.props.user.password
        // const favMovieGenres = this.props.user.favMovieGenre
        // const favMusicGenres = this.props.user.favMusicGenre

        const movieGenres = ['Action', 'Comedy', 'Fantasy', 'Horror', 'Romance', 'Sci-fi']
        const musicGenres = ['Alternative', 'Classical', 'Country', 'Indie', 'Pop', 'Rock']

        const favMovieGenres = movieGenres.map((genre) => {
            return (
                <div className='GenreColumns'>
                    <span>{genre}</span>
                    <input onClick={()=>this.handleCheckbox('favMovieGenre', genre)} type="checkbox" />
                </div>
            )
        })

        const favMusicGenres = musicGenres.map((genre) => {
            return (
                <div className='GenreColumns'>
                    <span>{genre}</span>
                    <input onClick={()=>this.handleCheckbox('favMusicGenre', genre)} type="checkbox" />
                </div>
            )
        })

        return (
            <div className='MyAccount'>
                <div>
                    <div className='InputsButtons'>
                        <div className='Inputs'>
                            First Name:
                            <input placeholder={firstName}
                                onChange={(e) => this.handleChange('firstName', e.target.value)} type="text" />
                        </div>
                        <div className='Inputs'>
                            Last Name:
                            <input placeholder={lastName}
                                onChange={(e) => this.handleChange('lastName', e.target.value)} type="text" />
                        </div>
                        <div className='Inputs'>
                            Username:
                            <input placeholder={username}
                                onChange={(e) => this.handleChange('username', e.target.value)} type="text" />
                        </div>
                        <div className='Inputs'>
                            Password:
                            <input placeholder={password}
                                onChange={(e) => this.handleChange('password', e.target.value)} type="text" />
                        </div>
                    </div>
                    <div className='AllFavGenres'>
                        <div className='Inputs'>
                            <h4>Your Movies Genres</h4>
                            {favMovieGenres}
                        </div>
                        <div className='Inputs'>
                            <h4>Your Music Genres</h4>
                            {favMusicGenres}
                        </div>
                    </div>
                    <div className='Buttons'>
                        <button onClick={() => this.props.deleteFn(this.props.user.id)}>
                            Delete Account
                        </button>
                        <button onClick={() => this.handleUpdate(this.props.user.id)}>
                            Update Account
                        </button>
                    </div>
                </div>
            </div >
        )
    }

}