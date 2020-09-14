import React from "react";
import { Link } from "react-router-dom";
import Button from "../../button";

import "./styles.scss";

interface WebHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  buttonValue: string;
  to: string;
  logo: string;
  linkColor?: React.CSSProperties;
}

export default function WebHeader(props: WebHeaderProps) {
  const { className, style, buttonValue, to, logo, linkColor } = props;
  return (
    <div className={`web_header_container ${className}`} style={style}>
      <img src={logo} alt="logo" />
      <div className="web_cover">
        <Link to="/" style={linkColor}>
          <li>Home</li>
        </Link>
        <Link to="/ajo" style={linkColor}>
          <li>Ajo</li>
        </Link>
        <Link to="/cooperative" style={linkColor}>
          <li>Cooperative</li>
        </Link>
        <Link to="/about" style={linkColor}>
          <li>About</li>
        </Link>
        <Link to="/help" style={linkColor}>
          <li>Help</li>
        </Link>
        <Link to={to}>
          <Button value={buttonValue} buttonClass="web_buttonClass" />
        </Link>
      </div>
    </div>
  );
}
