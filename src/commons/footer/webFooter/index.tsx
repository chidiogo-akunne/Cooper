import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

interface WebFooterProps {
  className?: string;
}

export default function WebFooter(props: WebFooterProps) {
  const { className } = props;
  return (
    <div className={`web_footer_container ${className}`}>
      <div className="footer_links">
        <Link to="/faq">
          <li>FAQs</li>
        </Link>
        <hr />
        <Link to="/termsandconditions">
          <li>Terms and Conditions</li>
        </Link>
        <hr />
        <Link to="/policy">
          <li>Privacy Policy</li>
        </Link>
        <hr />
        <Link to="/about">
          <li>About</li>
        </Link>
      </div>
      <div className="web_footer_social_cover">
        <img
          src="/images/twitter.svg"
          alt="twitter icon"
          className="footer_social_icon"
        />
        <img
          src="/images/facebook.svg"
          alt="facebook icon"
          className="footer_social_icon"
        />
        <img
          src="/images/google.svg"
          alt="google icon"
          className="footer_social_icon"
        />
        <img
          src="/images/linkedin.svg"
          alt="linkedin icon"
          className="footer_social_icon"
        />
      </div>

      <img src="/images/logo2.svg" alt="logo" className="footer_logo" />
      <p>Copyright &copy;. All rights reserved.</p>
    </div>
  );
}
