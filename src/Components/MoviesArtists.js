import React, { Component } from 'react'
import axios from 'axios'
import './MoviesArtists.css'

export default class MoviesArtists extends Component {

    state = {
        movies: [],
        artists: []
    }


    render() {

        const leftArrow = '<'
        const rightArrow = '>'

        const avengers4 = {
            title: 'Avengers: Infinity War',
            genre: 'Action',
            movieImage: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }
        const theMartian = {
            title: 'The Martian',
            genre: 'Sci-fi',
            movieImage: 'https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
        }

        const jumanji = {
            title: 'Jumanji: Welcome to the Jungle',
            genre: 'Comedy',
            movieImage: 'https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg'
        }

        const artists = [
            {
                artist: 'Piano Guys',
                genre: 'Classical',
                artistImage: 'https://cdn.shopify.com/s/files/1/2722/7348/products/2d3d98b4d4ed9757d5dac68fe7f8bbfa_650x.jpg?v=1517501794'
            },
            {
                artist: 'Red Hot Chili Peppers',
                genre: 'Alternative',
                artistImage: 'https://yt3.ggpht.com/a-/AN66SAzcORn3ZeWUVv-2RMrSW1UC2iRabttP9mhjfg=s900-mo-c-c0xffffffff-rj-k-no'
            },
            {
                artist: 'Brad Paisley',
                genre: 'Country',
                artistImage: 'https://musicrow.com/wp-content/uploads/2016/11/Brad-Paisleys-Today-Cover.jpg'
            },
        ]
        
        return (
            <div className='MoviesArtists'>
                <div className='Movies'>
                    {/* <h4 className='MovieTag'>MOVIES</h4> */}
                    <button className='SwitchButtons'>{leftArrow}</button>
                    <img className='MovieTiles' src={avengers4.movieImage}></img>
                    <img className='MovieTiles' src={theMartian.movieImage}></img>
                    <img className='MovieTiles' src={jumanji.movieImage}></img>
                    <button className='SwitchButtons'>{rightArrow}</button>
                </div>
                <div className='Music'>
                    {/* <h4>ARTISTS</h4> */}
                    <button className='SwitchButtons'>{leftArrow}</button>
                    <img className='ArtistTiles' src={artists[0].artistImage}></img>
                    <img className='ArtistTiles' src={artists[1].artistImage}></img>
                    <img className='ArtistTiles' src={artists[2].artistImage}></img>
                    <button className='SwitchButtons'>{rightArrow}</button>
                </div>
            </div>
        )
    }
}