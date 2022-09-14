import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'

function User() {
    const {username} = useParams()
    const navigate = useNavigate()
  return (
    <div>
        <h1>Hello {username}</h1>
        <div><button onClick={()=> navigate('/')}>Go Home</button></div>
    </div>
  )
}

export default User