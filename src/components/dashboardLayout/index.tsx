import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  mdiPower,
  mdiHomeOutline,
  mdiAccountOutline,
  mdiBellOutline,
  mdiWalletOutline,
  mdiBriefcaseVariantOutline,
  mdiCogOutline,
  mdiHelpCircleOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import MobileHeader from "../../commons/header/mobileHeader";
import Card from "../../commons/card";
import IconButton from "../../commons/iconButton";

import "./styles.scss";
import Button from "../../commons/button";

interface LayoutProps extends React.PropsWithChildren<unknown> {}

export default function DashboardLayout(props: LayoutProps) {
  const { children } = props;

  const [isError, setIsError] = useState(false);

  function logoutHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    localStorage.removeItem("tokens");
    localStorage.removeItem("id");
    window.location.href = "/";
  }

  const token = localStorage.getItem("tokens");
  const id = localStorage.getItem("id");

  function RequestAjo() {
    axios
      .post(`${process.env.REACT_APP_SERVER_URI}/api/ajoadminrequest/${id}`, {
        token,
      })
      .then((result) => {
        if (result.status === 200) {
          console.log("successful");
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  return (
    <div className="dashboard_layout">
      <MobileHeader
        to="/"
        onClick={logoutHandler}
        className="dashboard_mobile_header"
        buttonValue="Log out"
        hamburgerValue="log out"
        logo="/images/logo2.svg"
      >
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <Link to="/notification">
          <li>Notification</li>
        </Link>
        <Link to="/contribution">
          <li>Contribution</li>
        </Link>
        <Link to="/cooperative">
          <li>Cooperative</li>
        </Link>
        <Link to="/settings">
          <li>Account Settings</li>
        </Link>
        <Link to="/help">
          <li>Help</li>
        </Link>
        <Button value="Request Ajo" onClick={RequestAjo} />
      </MobileHeader>
      <div className="layout_container">
        <div className="layout_nav">
          <div className="nav_links">
            <div className="profile_cover">
              <div className="profile_image">
                <Icon path={mdiAccountOutline} size={3} color="#fff" />
              </div>
              <h2 className="welcome">Welcome,</h2>
              <h2 className="name">Chris.</h2>
            </div>
            <Link to="/dashboard">
              <li>
                <Icon
                  path={mdiHomeOutline}
                  size={1}
                  color="#fff"
                  className="nav_icon"
                />{" "}
                Dashboard
              </li>
            </Link>
            <Link to="/profile">
              <li>
                <Icon
                  path={mdiAccountOutline}
                  size={1}
                  color="#fff"
                  className="nav_icon"
                />
                Profile
              </li>
            </Link>
            <Link to="/notification">
              <li>
                <Icon
                  path={mdiBellOutline}
                  size={1}
                  color="#fff"
                  className="nav_icon"
                />
                Notification
              </li>
            </Link>
            <Link to="/contribution">
              <li>
                <Icon
                  path={mdiWalletOutline}
                  size={1}
                  color="#fff"
                  className="nav_icon"
                />
                Contribution
              </li>
            </Link>
            <Link to="/cooperative">
              <li>
                <Icon
                  path={mdiBriefcaseVariantOutline}
                  size={1}
                  color="#fff"
                  className="nav_icon"
                />
                Cooperative
              </li>
            </Link>
            <Link to="/settings">
              <li>
                <Icon
                  path={mdiCogOutline}
                  size={1}
                  color="#fff"
                  className="nav_icon"
                />
                Account Settings
              </li>
            </Link>
            <Link to="/help">
              <li>
                <Icon
                  path={mdiHelpCircleOutline}
                  size={1}
                  color="#fff"
                  className="nav_icon"
                />
                Help
              </li>
            </Link>
            <Button value="Request Ajo" onClick={RequestAjo} />
          </div>
        </div>
        <div className="layout_content">
          <div className="layout_header">
            <Card cardClass="alert_card">
              {isError && <h5>The data provided were incorrect!</h5>}
            </Card>
            <IconButton buttonClass="logout" onClick={logoutHandler}>
              <Icon
                path={mdiPower}
                size={0.6}
                color="#fff"
                className="button_icon"
              />{" "}
              Log out
            </IconButton>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
