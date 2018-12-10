import React, { Component } from 'react'
import axios from 'axios'
import MyAccountModal from './../Modal/MyAccountModal'
import './../Components/Login.css'

export default class LoginModal extends Component {

    state = {
        username: '',
        password: '',
        user: [],
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
                this.props.modalToggle()
                this.props.validUser(res.data[0])
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


        return (
            <div onClick={() => this.props.modalToggle()} className='MainDiv'>
                <div onClick={(e)=>e.stopPropagation()} className='SignInParent'>
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


                    </div>
                </div>
            </div>
        )
    }
}