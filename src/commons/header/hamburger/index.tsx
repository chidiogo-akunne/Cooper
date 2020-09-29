import React from "react";
import { Link } from "react-router-dom";
import Button from "../../button";

import "./styles.scss";

interface HamburgerProps extends React.PropsWithChildren<unknown> {
  className?: string;
  style?: React.CSSProperties;
  to: string;
  hamburgerValue: string;
  hambugerColor?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function Hamburger(props: HamburgerProps) {
  const {
    className,
    style,
    to,
    hamburgerValue,
    hambugerColor,
    children,
    onClick,
  } = props;
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
            <Button
              value={hamburgerValue}
              buttonClass="button_class"
              onClick={onClick}
            />
          </Link>
        </div>
        <div className="links">{children}</div>
      </ul>
    </div>
  );
}
