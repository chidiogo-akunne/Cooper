import React from "react";
import { Link } from "react-router-dom";
import Button from "../../button";

import "./styles.scss";

export default function Hamburger() {
  return (
    <div id="menuToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <div className="menu_container">
          <img src="/images/logo2.svg" alt="logo" />
          <Button value="sign up" buttonClass="button_class" />
        </div>
        <div className="links">
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
        </div>
      </ul>
    </div>
  );
}
