import React, { Component } from 'react'
import axios from 'axios'
import './Header.css'
// import MyAccount from './Components/MyAccount'

export default class Header extends Component {

    render() {
        return (
            <div>
                <header>
                    <button className='MenuButton'>Menu</button>
                    <h3 className='Branding'>MediaPlex</h3>
                    <div className='RightNavButtons'>
                        <button className='LoginButton'>Login</button>
                        <button className='SignUpButton'>Sign Up</button>
                    </div>
                </header>
            </div>
        )
    }


}