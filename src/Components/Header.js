import React, { Component } from 'react'
import axios from 'axios'
import './Header.css'
// import Modal from './../Modal'
// import MyAccount from './Components/MyAccount'

export default function Header() {

    return (
        <div>
            <div className='Branding'>MediaPlex</div>
            <header>
                <button className='MenuButton'>Menu</button>
                <div className='RightNavButtons'>
                    <button className='LoginButton'>
                        Login
                        </button>
                    <button className='SignUpButton'>Sign Up</button>
                </div>
            </header>
        </div>
    )
}