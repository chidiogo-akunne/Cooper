import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import MobileHeader from "../../commons/header/mobileHeader";
import Banner from "../../components/banner";
import Card from "../../commons/card";
import Input from "../../commons/input";
import SubmitButton from "../../components/submitButton";
import WebHeader from "../../commons/header/webHeader";
import MobileFooter from "../../commons/footer/mobileFooter";
import WebFooter from "../../commons/footer/webFooter";
import { useAuthContext } from "../../commons/auth/context";

import "../login/styles.scss";

export default function SignupPage(props: any) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
  });

  const { email, password, firstName, lastName, username } = state;

  const referer = props.location || "/dashboard";

  //@ts-ignore
  const { setAuthTokens } = useAuthContext();

  const handleChange = (event: any) => {
    event.persist();
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_SERVER_URI}/api/register/`, {
        email,
        password,
        firstName,
        lastName,
        username,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data.token);
          localStorage.setItem("id", JSON.stringify(result.data.user.id));
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  };

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <div className="login_container">
      <MobileHeader
        className="mobile_header"
        buttonValue="sign in"
        hamburgerValue="sign in"
        to="login"
        logo="/images/logo2.svg"
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/ajo">
          <li>Ajo</li>
        </Link>
        <Link to="/cooperative">
          <li>Cooperative</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/help">
          <li>Help</li>
        </Link>
      </MobileHeader>
      <WebHeader
        to="login"
        className="web_header"
        buttonValue="sign in"
        logo="/images/logo2.svg"
      />
      <Banner
        header="sign up"
        text="Please fill the form to create an account."
        cardClass="sign_banner"
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
              type="text"
              placeholder="Username"
              name="username"
              value={username}
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
              inputClass="input_container last_input"
            />
            <SubmitButton value="sign up" buttonClass="login_button" />
            {isError && <h1>The data provided were incorrect!</h1>}
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
        <Card cardClass="second_card_cover signup_cover">
          <h1>sign in</h1>
          <p>
            Please fill the form to <br /> create an account
          </p>

          <img
            src="/images/signup.svg"
            className="signup_image"
            alt="dollar pot"
          />
        </Card>
      </div>
      <MobileFooter className="mobile_footer" />
      <WebFooter className="web_footer" />
    </div>
  );
}
