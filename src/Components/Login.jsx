import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const[email, Setemail]=useState("");
    const[password, Setpassword]=useState("");

    function handleLogin(e){
        e.preventDefault();
        console.log(email, password)
    }
  return (
    <div className="container">
    <h1>Login</h1>
    <br></br>
    <form className="form-group" autoCapitalize="off" onSubmit={handleLogin}>
     
      <label htmlFor="email">Email id :</label>
      <input
        type="email"
        name="email"
        id="email"
        className="form-control"
        required
        value={email}
        onChange={(e)=>Setemail(e.target.value)}
      />
      <br></br>
      <br></br>

      <label htmlFor="password">Password :</label>
      <input
        type="password"
        name="password"
        id="password"
        className="form-control"
        required
        value={password}
        onChange={e=>Setpassword(e.target.value)}
      />
    <br></br>
    <br></br>
    <div className="btn-box">
      <span>Don't have an account Signup </span>
      <Link to="/Signup">Here</Link>
      <button type="submit" className="btn btn-success btn-md float-end">
        Login
      </button>
    </div>
    </form>
  </div>
  )
}

export default Login