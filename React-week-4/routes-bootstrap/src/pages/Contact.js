import React from 'react'
import Image from 'react-bootstrap/Image'
import moviePoster from '../images/movies.jpg'

function Contact() {
  return (
    <div>
        <Image roundedCircle fluid src={moviePoster} />
    </div>
  )
}

export default Contact