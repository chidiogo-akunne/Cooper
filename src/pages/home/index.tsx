import React from "react";
import { Link } from "react-router-dom";
import MobileHeader from "../../commons/header/mobileHeader";
import WebHeader from "../../commons/header/webHeader";
import WebFooter from "../../commons/footer/webFooter";
import MobileFooter from "../../commons/footer/mobileFooter";
import Button from "../../commons/button";

import "./styles.scss";

export default function Home() {
  return (
    <div className="home_container">
      <MobileHeader
        to="login"
        className="mobile_header"
        buttonValue="sign in"
        hamburgerValue="sign in"
        logo="/images/logo.svg"
        hambugerColor={{ backgroundColor: "#008f71" }}
      />
      <WebHeader
        className="web_header"
        buttonValue="sign in"
        to="login"
        logo="/images/logo.svg"
        linkColor={{ color: "#707070" }}
      />
      <div className="home_banner">
        <img src="/images/piggysave.svg" alt="piggy safe" />
        <div className="save_for_tomorrow">
          <h1>save for tomorrow</h1>
          <p>
            Etiam convallis elementum sapien, a aliquam turpis aliquam vitae.
            Praesent sollicitudin felis vel mi facilisis posuere. Nulla ultrices
            facilisis justo, non varius nisl semper vel. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Phasellus at ante mattis,
            condimentum velit et, dignissim nunc.
          </p>
          <div className="start_button_cover">
            <Button value="start with ajo" buttonClass="ajo_button" />
            <Button
              value="start cooperative"
              buttonClass="cooperative_button"
            />
          </div>
        </div>
      </div>
      <div className="how_it_works">
        <div className="work_col">
          <img src="/images/howitworks.svg" alt="how it works" />
        </div>
        <div className="work_col">
          <div className="work_group">
            <span className="work_green">
              Aenean non accumsan ante. Duis et risus accumsan sem tempus porta
              nec sit amet est. Sed ut euismod quam. Suspendisse potenti.
            </span>
            <span className="number_cover">1</span>
          </div>
          <div className="work_group">
            <span className="number_cover">2</span>
            <span className="work_purple">
              Aenean non accumsan ante. Duis et risus accumsan sem tempus porta
              nec sit amet est. Sed ut euismod quam. Suspendisse potenti.
            </span>
          </div>
          <div className="work_group">
            <span className="work_green">
              Aenean non accumsan ante. Duis et risus accumsan sem tempus porta
              nec sit amet est. Sed ut euismod quam. Suspendisse potenti.
            </span>
            <span className="number_cover">3</span>
          </div>
          <div className="work_group">
            <span className="number_cover">4</span>
            <span className="work_purple">
              Aenean non accumsan ante. Duis et risus accumsan sem tempus porta
              nec sit amet est. Sed ut euismod quam. Suspendisse potenti.
            </span>
          </div>
          <Link to="/signup">
            <Button value="start now" buttonClass="start_button" />
          </Link>
        </div>
      </div>
      <MobileFooter className="mobile_footer" />
      <WebFooter className="web_footer" />
    </div>
  );
}
