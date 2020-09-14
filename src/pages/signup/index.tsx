import React, { useState } from "react";
import { Link } from "react-router-dom";

import MobileHeader from "../../commons/header/mobileHeader";
import Banner from "../../components/banner";
import Card from "../../commons/card";
import Input from "../../commons/input";
import SubmitButton from "../../components/submitButton";
import WebHeader from "../../commons/header/webHeader";
import MobileFooter from "../../commons/footer/mobileFooter";
import WebFooter from "../../commons/footer/webFooter";

import "../login/styles.scss";

export default function LoginPage() {
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
  });

  const { email, password, firstName, lastName } = state;

  const handleChange = (event: any) => {
    event.persist();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="login_container">
      <MobileHeader
        className="mobile_header"
        buttonValue="sign in"
        hamburgerValue="sign in"
        to="login"
        logo="/images/logo2.svg"
      />
      <WebHeader
        to="login"
        className="web_header"
        buttonValue="sign in"
        logo="/images/logo2.svg"
      />
      <Banner
        header="sign up"
        text="Please fill the form to create an account."
        cardClass="banner"
      />
      <div className="login_content">
        <Card cardClass="card_cover">
          <form onSubmit={handleSubmit} className="form">
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              inputClass="input_container"
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              inputClass="input_container"
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              inputClass="input_container"
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              inputClass="input_container"
            />
            <div className="select_container">
              <h4>Role:</h4>
              <div className="select">
                <select>
                  <option>None</option>
                  <option>Contributor</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
            <SubmitButton value="sign up" buttonClass="login_button" />
            <h4>already a user?</h4>
            <Link to="login">
              <SubmitButton value="sign in" buttonClass="sign_button" />
            </Link>
            <div className="options">
              <hr />
              <p>or sign up with</p>
              <hr />
            </div>
            <div className="social_cover">
              <img
                src="/images/google.svg"
                alt="google icon"
                className="social_icon"
              />
              <img
                src="/images/facebook.svg"
                alt="facebook icon"
                className="social_icon"
              />
              <img
                src="/images/linkedin.svg"
                alt="linkedin icon"
                className="social_icon"
              />
              <img
                src="/images/twitter.svg"
                alt="twitter icon"
                className="social_icon"
              />
            </div>
          </form>
        </Card>
        <Card cardClass="second_card_cover">
          <h1>sign in</h1>
          <p>
            Please, sign in to explore <br /> your spaces
          </p>

          <img src="/images/dollarPot.svg" alt="dollar pot" />
        </Card>
      </div>
      <MobileFooter className="mobile_footer" />
      <WebFooter className="web_footer" />
    </div>
  );
}
