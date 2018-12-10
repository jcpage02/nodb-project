import React, { Component } from 'react'
import axios from 'axios'
import './../Components/MyAccount.css'

export default class MyAccountModal extends Component {

    state = {
        user: {}
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
                console.log(res.data)
                this.setState({
                    user: res.data
                })
                // this.props.myAccountUpdate(res.data)
            })
        this.props.modalToggle()
    }
    handleCheckbox = (prop, genre) => {
        const updateUser = this.props.user
        if (!updateUser[prop].includes(genre)) {
            updateUser[prop].push(genre)
        } else {
            const index = updateUser[prop].indexOf(genre)
            updateUser[prop].splice(index, 1)
        }
        this.setState({
            user: updateUser
        })
    }


    render() {

        const userID = this.props.user.id
        const firstName = this.props.user.firstName
        const lastName = this.props.user.lastName
        const username = this.props.user.username
        const password = this.props.user.password

        const movieGenres = ['Action', 'Comedy', 'Fantasy', 'Horror', 'Romance', 'Sci-fi']
        const musicGenres = ['Alternative', 'Classical', 'Country', 'Indie', 'Pop', 'Rock']

        const favMovieGenres = movieGenres.map((genre) => {
            const included = this.props.user.favMovieGenres.includes(genre)
            return (
                <div className='GenreColumns'>
                    <span>{genre}</span>
                    <input checked={included} onClick={() => this.handleCheckbox('favMovieGenres', genre)} type="checkbox" />
                </div>
            )
        })

        const favMusicGenres = musicGenres.map((genre) => {
            const included = this.props.user.favMusicGenres.includes(genre)
            return (
                <div className='GenreColumns'>
                    <span>{genre}</span>
                    <input checked={included} onClick={() => this.handleCheckbox('favMusicGenres', genre)} type="checkbox" />
                </div>
            )
        })

        return (
            <div onClick={() => this.props.modalToggle()} className='MainDiv'>
                <div onClick={(e) => e.stopPropagation()} className='MyAccount'>
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