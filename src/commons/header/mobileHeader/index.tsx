import React from "react";

import Button from "../../button";
import Hamburger from "../hamburger";

import "./styles.scss";
import { Link } from "react-router-dom";

interface MobileHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  buttonValue: string;
  to: string;
  hamburgerValue: string;
}

export default function MobileHeader(props: MobileHeaderProps) {
  const { className, style, buttonValue, to, hamburgerValue } = props;
  return (
    <div className={`container ${className}`} style={style}>
      <img src="/images/logo2.svg" alt="logo" />
      <div className="cover">
        <Link to={to}>
          <Button value={buttonValue} buttonClass="buttonClass" />
        </Link>
        <Hamburger to={to} hamburgerValue={hamburgerValue} />
      </div>
    </div>
  );
}
