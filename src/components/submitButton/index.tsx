import React from "react";
import Button from "../../commons/button";

import "./styles.scss";

interface SubmitButtonProp {
  value: string;
  buttonClass: string;
}

export default function SubmitButton(props: SubmitButtonProp) {
  const { value, buttonClass } = props;
  return <Button value={value} buttonClass={`submit_button ${buttonClass}`} />;
}
