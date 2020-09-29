import React from "react";

import Button from "../../button";
import Hamburger from "../hamburger";

import "./styles.scss";
import { Link } from "react-router-dom";

interface MobileHeaderProps extends React.PropsWithChildren<unknown> {
  className?: string;
  style?: React.CSSProperties;
  buttonValue: string;
  to: string;
  hamburgerValue: string;
  logo: string;
  hambugerColor?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function MobileHeader(props: MobileHeaderProps) {
  const {
    className,
    style,
    buttonValue,
    to,
    hamburgerValue,
    logo,
    hambugerColor,
    children,
    onClick,
  } = props;
  return (
    <div className={`container ${className}`} style={style}>
      <img src={logo} alt="logo" />
      <div className="cover">
        <Link to={to}>
          <Button
            value={buttonValue}
            onClick={onClick}
            buttonClass="buttonClass"
          />
        </Link>
        <Hamburger
          to={to}
          hamburgerValue={hamburgerValue}
          hambugerColor={hambugerColor}
          onClick={onClick}
        >
          {children}
        </Hamburger>
      </div>
    </div>
  );
}
