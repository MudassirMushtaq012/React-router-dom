import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userName} = useParams()
  return (
    <div>
      <h1>Hello {userName}</h1>
    </div>
  )
}

export default User
