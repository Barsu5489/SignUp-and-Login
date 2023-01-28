import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

function Home() {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const loggedIn = email && password;
  const navigate = useNavigate()

  useEffect(() => {
    if(loggedIn){
        navigate('/')
    }
  }, [loggedIn, navigate])
  return (
  <div>
    {loggedIn ? <h1>Welcome</h1> : <h1>Please login to continue</h1>}
  </div>
  )
}

export default Home
