import React, { Component } from 'react'
import axios from 'axios'
import './Header.css'
import LoginModal from './../Modal/LoginModal'
import MyAccountModal from './../Modal/MyAccountModal'
import SignUpModal from './../Modal/SignUpModal'


export default class Header extends Component {

    state = {
        loginClick: false,
        loggedIn: false,
        signUp: false,
        user: {}
    }

    handleModalToggle = () => {
        this.setState({
            loginClick: !this.state.loginClick
        })
    }

    handleSignUpToggle = () => {
        this.setState({
            signUp: !this.state.signUp
        })
    }

    handleMyAccountToggle = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    handleSignUp = (userInfo) => {
        this.setState({
            user: userInfo
        })
    }

    userLoggedIn = (user) => {
        this.setState({
            user: user
        })
    }

    handleDelete = (idToDelete) => {
        axios.delete(`/api/userInfo/:${idToDelete}`)
            .then((res) => {
                this.setState({
                    user: res.data,
                })
            })
        this.handleMyAccountToggle()
    }

    handleMyAccountUpdate = (userInfo) => {
        this.setState({
            user: userInfo
        })
    }

    render() {

        const loginToggle = this.state.loginClick
        const myAccountToggle = this.state.loggedIn
        const signUpToggle = this.state.signUp

        const userIn = this.state.user.id

        const loginMyAccountButton = !userIn ?
            <button className='LoginButton' onClick={this.handleModalToggle}>
                Login
            </button>
            :
            <button className='MyAccountButton' onClick={this.handleMyAccountToggle}>
                MyAccount
            </button>



        const loginModal = loginToggle ?
            <LoginModal modalToggle={this.handleModalToggle}
                validUser={this.userLoggedIn} 
                userSignedUp={this.state.user}/> : null
        const myAccountModal = myAccountToggle ?
            <MyAccountModal modalToggle={this.handleMyAccountToggle}
                user={this.state.user}
                deleteFn={this.handleDelete} 
                myAccountUpdate={this.handleMyAccountUpdate}/> : null
        const signUpModal = signUpToggle ?
            <SignUpModal modalToggle={this.handleSignUpToggle} 
                signUpSignIn={this.handleSignUp} /> : null

        return (
            <div>
                <div className='Branding'>MediaPlex</div>
                <header>
                    <button className='MenuButton'>Menu</button>
                    <div className='RightNavButtons'>
                        {loginMyAccountButton}
                        {loginModal}
                        {myAccountModal}
                        <button className='SignUpButton' onClick={this.handleSignUpToggle}>
                            Sign Up
                        </button>
                        {signUpModal}
                    </div>
                </header>
            </div>
        )
    }
}

