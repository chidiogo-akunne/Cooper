import React from "react";
import { Link } from "react-router-dom";
import Button from "../../button";

import "./styles.scss";

interface HamburgerProps {
  className?: string;
  style?: React.CSSProperties;
  to: string;
  hamburgerValue: string;
  hambugerColor?: React.CSSProperties;
}

export default function Hamburger(props: HamburgerProps) {
  const { className, style, to, hamburgerValue, hambugerColor } = props;
  return (
    <div id="menuToggle" className={className} style={style}>
      <input type="checkbox" />
      <span style={hambugerColor}></span>
      <span style={hambugerColor}></span>
      <span style={hambugerColor}></span>
      <ul id="menu">
        <div className="menu_container">
          <img src="/images/logo2.svg" alt="logo" />
          <Link to={to}>
            <Button value={hamburgerValue} buttonClass="button_class" />
          </Link>
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
