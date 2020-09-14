import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

interface MobileFooterProps {
  className?: string;
}

export default function MobileFooter(props: MobileFooterProps) {
  const { className } = props;
  return (
    <div className={`mobile_footer_container ${className}`}>
      <Link to="/faq">
        <li>FAQs</li>
      </Link>
      <Link to="/termsandconditions">
        <li>Terms and Conditions</li>
      </Link>
      <Link to="/policy">
        <li>Privacy Policy</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <div className="footer_social_cover">
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
      </div>
      <div className="footer_social_cover">
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
