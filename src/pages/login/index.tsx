import React, { useState } from "react";

import MobileHeader from "../../commons/header/mobileHeader";
import Banner from "../../components/banner";
import Card from "../../commons/card";
import Input from "../../commons/input";

import "./styles.scss";
import Checkbox from "../../commons/checkbox";
import SubmitButton from "../../components/submitButton";
import WebHeader from "../../commons/header/webHeader";

export default function LoginPage() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

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
      <MobileHeader className="mobile_header" buttonValue="sign in" />
      <WebHeader className="web_header" buttonValue="sign in" />
      <Banner
        header="sign in"
        text="Please log in to explore your space"
        cardClass="banner"
      />
      <div className="login_content">
        <Card cardClass="card_cover">
          <form onSubmit={handleSubmit} className="form">
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
            <Checkbox value="Keep me signed in" />
            <SubmitButton value="sign in" buttonClass="sign_button" />
            <h4>new user?</h4>
            <SubmitButton value="sign up" buttonClass="login_button" />
            <div className="options">
              <hr />
              <p>or sign in with</p>
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
    </div>
  );
}
