import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Signup(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

const handleInputChange = (e) => {
   
    const {id , value} = e.target;
    if(id === "name"){
        setName(value);
    }
   
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }
}

const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (localStorage.getItem(email)) {
        setError("User with this email already exists");
        return;
      }
  
      const user = {
        name: name,
        email: email,
        password: password,
      };
      localStorage.setItem(email, JSON.stringify(user));
      navigate("/login");
      console.log(email);
    };

        return (
            <div className="auth-form-container">
                <h2>Signup</h2>
                <form className= "signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="name" > </label>
                    <input value={name} onChange = {(e) => handleInputChange(e)} name="name" id="name" type="text" placeholder="Full Name" required/>
                    <label htmlFor="email" > </label>
                    <input value={email} onChange = {(e) => handleInputChange(e)}  type="email" placeholder="your email address" id = "email" name="email" required/>
                    <label htmlFor="password" > </label>
                    <input value={password} onChange = {(e) => handleInputChange(e)} type="password" placeholder="your password" id = "password" name="password" required/>
                    <input value={confirmPassword} onChange = {(e) => handleInputChange(e)} type="password" placeholder="confirm password" id = "confirmPassword" name="confirmPassword" required/>
                    <button> Signup </button>
                    <p>{error}</p>
        
                </form>
        
                <button className="link-btn" onClick={() => navigate('/login')}>Already have an account? Login</button>
                </div>
        )
}