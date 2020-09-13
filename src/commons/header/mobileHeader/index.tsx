import React from "react";

import Button from "../../button";
import Hamburger from "../hamburger";

import "./styles.scss";

export default function MobileHeader() {
  return (
    <div className="container">
      <img src="/images/logo2.svg" alt="logo" />
      <div className="cover">
        <Button value="sign up" buttonClass="buttonClass" />
        <Hamburger />
      </div>
    </div>
  );
}
