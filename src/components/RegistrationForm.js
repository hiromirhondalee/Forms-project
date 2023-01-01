import React, { useState, setState } from "react";
import { database } from "../firebase";
import { ref, push, child, update } from "firebase/database";
import "./style.css";

export default function RegistrationForm () {
  const [firstName, setFirstName] = useState (null);
  const [lastName, setLastName] = useState (null);
  const [email, setEmail] = useState (null);
  const [password,setPassword] = useState (null);
  const [confirmPassword, setConfirmPassword] = useState (null);

  const handleInputChange = (dataform) => {
    const {id, value} =dataform.target;
    if(id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
     if (id === "email") {
       setEmail(value);
     }
      if (id === "password") {
        setPassword(value);
      }
       if (id === "confirmPassword") {
         setConfirmPassword(value);
       }
  }

  const handleSubmit =() => {
    let obj ={
      firstName: firstName,
      lastName:lastName,
      email:email,
      password:password,
      confirmPassword:confirmPassword,
    }
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates={};
    updates ['/' + newPostKey] =obj
    return update(ref(database), updates);
  }

  return (
    <div className="Registration-Form">
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form-label" for="firstName">
              First Name
            </label>
            <input
              className="form-input"
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(dataform) => handleInputChange(dataform)}
            />
          </div>
          <div className="lastname">
            <label className="form-label" for="lastName">
              Last Name
            </label>
            <input
              className="form-input"
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(dataform) => handleInputChange(dataform)}
            />
          </div>
          <div className="email">
            <label className="form-label" for="email">
              Email
            </label>
            <input
              className="form-input"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(dataform) => handleInputChange(dataform)}
            />
          </div>
          <div className="password">
            <label className="form-label" for="password">
              Password
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(dataform) => handleInputChange(dataform)}
            />
          </div>
          <div className="confirmPassword">
            <label className="form-label" for="confirmPassword">
              Confirm Password
            </label>
            <input
              className="form-input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(dataform) => handleInputChange(dataform)}
            />
          </div>
        </div>
        <div class="footer">
          <button type="submit" className="btn btn-primary" onClick={()=>handleSubmit()}>
            Registration
          </button>
        </div>
      </div>
    </div>
  );
}