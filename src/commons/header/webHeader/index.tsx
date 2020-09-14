import React from "react";
import { Link } from "react-router-dom";
import Button from "../../button";

import "./styles.scss";

interface WebHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  buttonValue: string;
  to: string;
}

export default function WebHeader(props: WebHeaderProps) {
  const { className, style, buttonValue, to } = props;
  return (
    <div className={`web_header_container ${className}`} style={style}>
      <img src="/images/logo2.svg" alt="logo" />
      <div className="web_cover">
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
        <Link to={to}>
          <Button value={buttonValue} buttonClass="web_buttonClass" />
        </Link>
      </div>
    </div>
  );
}
