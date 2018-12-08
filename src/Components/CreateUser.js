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
        const {  firstName, lastName, username, password, favMovieGenre, favMusicGenre } = this.state
        axios.post('/api/userInfo', { firstName, lastName, username, password, favMovieGenre, favMusicGenre })
            .then((res) => {
                this.setState({
                    userInfo: res.data
                })
            })
    }


    render() {
        return (
            <div className='Parent'>
                <div className='CreateUserInputs'>
                    <input placeholder='First Name' onChange={(e) => this.handleChange('firstName', e.target.value)} type="text" />
                    <input placeholder='Last Name' onChange={(e) => this.handleChange('lastName', e.target.value)} type="text" />
                    <input placeholder='Username' onChange={(e) => this.handleChange('username', e.target.value)} type="text" />
                    <input placeholder='Password' onChange={(e) => this.handleChange('password', e.target.value)} type="text" />
                    {this.handleGenre}
                    <button className='CreateUserButton'
                        onClick={() => this.handleCreateUser()}>
                        Create User
                    </button>
                </div>
            </div>
        )
    }


}