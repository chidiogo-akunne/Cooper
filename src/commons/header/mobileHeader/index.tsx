import React from "react";

import Button from "../../button";
import Hamburger from "../hamburger";

import "./styles.scss";

interface MobileHeaderProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function MobileHeader(props: MobileHeaderProps) {
  const { className, style } = props;
  return (
    <div className={`container ${className}`} style={style}>
      <img src="/images/logo2.svg" alt="logo" />
      <div className="cover">
        <Button value="sign up" buttonClass="buttonClass" />
        <Hamburger />
      </div>
    </div>
  );
}
