import React from 'react';
import "./SignUp.css";


export default function SignUp() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" >First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="Last Name"/>
              </div>
              <div className="email">
                  <label className="form__label" >Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" >Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" >Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div className="footer">
              <button type="submit" className="btn">Register</button>
          </div>
      </div>      
    )       
}