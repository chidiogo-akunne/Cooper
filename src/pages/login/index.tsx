import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import MobileHeader from "../../commons/header/mobileHeader";
import Banner from "../../components/banner";
import Card from "../../commons/card";
import Input from "../../commons/input";
import Checkbox from "../../commons/checkbox";
import SubmitButton from "../../components/submitButton";
import WebHeader from "../../commons/header/webHeader";
import MobileFooter from "../../commons/footer/mobileFooter";
import WebFooter from "../../commons/footer/webFooter";
import { useAuthContext } from "../../commons/auth/context";

import "./styles.scss";

export default function LoginPage(props: any) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { username, password } = state;

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
      .post(`${process.env.REACT_APP_SERVER_URI}/api/login/`, {
        username,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data.token);
          setLoggedIn(true);
          localStorage.setItem("id", JSON.stringify(result.data.user.id));
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
        to="signup"
        className="mobile_header"
        buttonValue="sign up"
        hamburgerValue="sign up"
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
        className="web_header"
        buttonValue="sign up"
        to="signup"
        logo="/images/logo2.svg"
      />
      <Banner
        header="sign up"
        text="Please log in to explore your space"
        cardClass="banner"
      />
      <div className="login_content">
        <Card cardClass="card_cover">
          <form onSubmit={handleSubmit} className="form">
            <Input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
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
            {isError && (
              <h1>The username or password provided were incorrect!</h1>
            )}
            <h4>new user?</h4>
            <Link to="signup">
              <SubmitButton value="sign up" buttonClass="login_button" />
            </Link>
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
      <MobileFooter className="mobile_footer" />
      <WebFooter className="web_footer" />
    </div>
  );
}
