import React, { Component } from 'react'
import axios from 'axios'
import './MyAccount.css'

export default class MyAccount extends Component {

    state = {
    }

    handleChange = (prop, e) => {
        this.setState({
            key:[prop],
            value: e
        })
    }

    handleUpdate = (idToUpdate) => {
        console.log(this.state)
        axios.put(`/api/userInfo/${idToUpdate}`, this.state)
            .then((res) => {
                this.props.updateUserFn(res.data)
                //function prop goes here from Login
                // res.data needs to be an array to send
            })
    }


    render() {

        const userID = this.props.user.id
        const firstName = this.props.user.firstName
        const lastName = this.props.user.lastName
        const username = this.props.user.username
        const password = this.props.user.password
        const movieGenres = this.props.user.userFavMovieGenres
        const musicGenres = this.props.user.userFavMusicGenres

        return (
            <div>
                <div className='MyAccount'>
                    <div>
                        <div className='FirstNameInput'>
                            First Name:
                            <input placeholder={firstName}
                                onChange={(e) => this.handleChange('userFirstName', e.target.value)} type="text" />
                        </div>
                        <div className='LastNameInput'>
                            Last Name:
                            <input placeholder={lastName}
                                onChange={(e) => this.handleChange('userLastName', e.target.value)} type="text" />
                        </div>
                        <div className='UsernameInput'>
                            Username:
                            <input placeholder={username}
                                onChange={(e) => this.handleChange('username', e.target.value)} type="text" />
                        </div>
                        <div className='PasswordInput'>
                            Password:
                            <input placeholder={password}
                                onChange={(e) => this.handleChange('password', e.target.value)} type="text" />
                        </div>
                        <div className='FavoritesMovies'>
                            Favorite Movie Genres:
                            {movieGenres}
                        </div>
                        <div className='FavoritesMusic'>
                            Favorite Music Genres:
                            {musicGenres}
                        </div>
                        <button onClick={() => this.props.deleteFn(this.props.user.id)}
                            className='DeleteButton'>
                            Delete Account
                        </button>
                        <button onClick={() => this.handleUpdate(this.props.user.id)}
                            className='UpdateButton'>
                            Update Account
                        </button>
                    </div>
                </div>
            </div >
        )
    }

}