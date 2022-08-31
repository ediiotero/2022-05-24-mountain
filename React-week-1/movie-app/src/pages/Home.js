import React, { Component } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import moviePosters from '../images/movies.jpg'

const data = [
    {
        id: 1,
        title: "The Batman",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, totam."
    },
    {
        id: 2,
        title: "Top Gun",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, totam."
    },
    {
        id: 3,
        title: "Lightyear",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, totam."
    },
    {
        id: 4,
        title: "Grease",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, totam."
    },
]


export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main className='container'>
            <img src={moviePosters} alt="movie posters" style={{minWidth: '100%', height: '20rem'}}/>
            <p className='post-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem debitis deleniti aliquam accusamus a soluta!
            </p>
            { data.map((movie) => <Card key={movie.id} title={movie.title} text={movie.post} />) }
        </main>
        <Footer copy='React Footer'/>
      </>
    )
  }
}
