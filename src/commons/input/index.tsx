import React from "react";

import "./styles.scss";

interface InputProps {
  type: string;
  placeholder: string;
  name?: string;
  inputClass?: string;
  inputContainer?: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  const {
    type,
    placeholder,
    name,
    inputClass,
    inputContainer,
    value,
    onChange,
  } = props;
  return (
    <div className={`input_container ${inputContainer}`}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        className={`input ${inputClass}`}
        onChange={onChange}
        required
      />
    </div>
  );
}
