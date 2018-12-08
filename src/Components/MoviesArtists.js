import React, { Component } from 'react'
import axios from 'axios'
import './MoviesArtists.css'

export default class MoviesArtists extends Component {

    state = {
        movies: [],
        artists: []
    }



    render() {
        return (
            <div>
                <div className='Movies'>
                    <button className='SwitchButtons'>Previous</button>
                    <image className='Tiles'>Movie 1</image>
                    <image className='Tiles'>Movie 2</image>
                    <image className='Tiles'>Movie 3</image>
                    <button className='SwitchButtons'>Next</button>
                </div>
                <div className='Music'>
                    <button className='SwitchButtons'>Previous</button>
                    <image className='Tiles'>Artist 1</image>
                    <image className='Tiles'>Artist 2</image>
                    <image className='Tiles'>Artist 3</image>
                    <button className='SwitchButtons'>Next</button>
                </div>
            </div>
        )
    }


}