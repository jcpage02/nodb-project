import React, { Component } from 'react'
import axios from 'axios'
import './MyAccount.css'

export default class MyAccount extends Component {

    handleDelete = () => {
        
    }

    handleUpdate = () => {

    }


    render() {

        // const firstName = {this.props.user.userFirstName}

        return (
            <div>
                <div className='MyAccount'>
                    <div>
                        <div className='FirstNameInput'>
                            First Name:
                            <input value={this.props.user.userFirstName} type="text" />
                        </div>
                        <div className='LastNameInput'>
                            Last Name:
                            <input value={this.props.user.userLastName} type="text" />
                        </div>
                        <div className='UsernameInput'>
                            Username:
                            <input value={this.props.user.username} type="text" />
                        </div>
                        <div className='PasswordInput'>
                            Password:
                            <input value={this.props.user.password} type="text" />
                        </div>
                        <div className='FavoritesMovies'>
                            Favorite Movie Genres:
                            {this.props.user.userFavMovieGenres} 
                        </div>
                        <div className='FavoritesMusic'>
                            Favorite Music Genres:
                            {this.props.user.userFavMusicGenres} 
                        </div>
                        <button onClick={()=>this.handleDelete()} className='DeleteButton'>
                            Delete Account
                        </button>
                        <button onClick={()=>this.handleUpdate()} className='UpdateButton'>
                            Update Account
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}