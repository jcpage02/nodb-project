import React, { Component } from 'react'
import axios from 'axios'
import './Login.css'
import MyAccount from './MyAccount'

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        user: []
    }

    handleChange = (prop, e) => {
        this.setState({
            [prop]: e
        })
    }

    handleLogin = () => {
        let { username, password } = this.state
        axios.post('/api/validUser', { username, password })
            .then((res) => {
                this.setState({
                    user: res.data[0]
                })
            })
    }

    handleDelete = (idToDelete) => {
        axios.delete(`/api/userInfo/:${idToDelete}`)
            .then((res) => {
                this.setState({
                    user: [],
                })
            })
    }

    handleUserUpdate = (userInfo) => {
        this.setState({
            user: userInfo
        })
    }

    render() {

        // const buttonChange = this.state.user.id ?
        //     <button>My Account</button>
        //     :
        //     <button onClick={() => this.handleLogin()}>Login</button>

        return (
            <div>
                <div className='SignInParent'>
                    <div className='SignInButtons'>
                        <input placeholder='Username'
                            onChange={(e) => this.handleChange('username', e.target.value)}
                            type="text"
                        />
                        <input placeholder='Password'
                            onChange={(e) => this.handleChange('password', e.target.value)}
                            type="text"
                        />
                        <button onClick={() => this.handleLogin()}>Login</button>
                        {/* {buttonChange} */}
                        <MyAccount deleteFn={this.handleDelete} 
                            user={this.state.user} 
                            updateUserFn = {this.handleUserUpdate}
                        />

                    </div>
                </div>
            </div>
        )
    }
}