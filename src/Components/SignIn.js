import React, { Component } from 'react'
import axios from 'axios'
import './SignIn.css'
import MyAccount from './MyAccount'

export default class SignIn extends Component {

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
        // console.log(` username: ${username} password:${password}`)
        axios.post('/api/validUser', { username, password })
            .then((res) => {
                // console.log('here is my response',res)
                this.setState({
                    user: res.data[0]
                })
            }
            )
    }

    render() {
        console.log(this.state)

        return (
            <div >
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
                        {
                            this.state.user.id ?
                                <button>
                                    My Account
                                </button>
                                :
                                <button onClick={() => this.handleLogin()}>
                                    Login
                                </button>
                        }
                        <MyAccount user={this.state.user}/>

                    </div>
                </div>
            </div>
        )
    }
}