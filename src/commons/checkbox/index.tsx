import React from "react";

import "./styles.scss";

interface CheckboxProps {
  value?: string;
}

export default function Checkbox(props: CheckboxProps) {
  const { value } = props;
  return (
    <label className="checkbox_container">
      {value}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
}
