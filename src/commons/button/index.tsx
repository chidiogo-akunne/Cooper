import React from "react";

interface ButtonProps {
  value: string;
  buttonClass?: string;
  buttonStyle?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export default function Button(props: ButtonProps) {
  const { value, buttonClass, buttonStyle, onClick, onSubmit } = props;
  return (
    <button
      className={buttonClass}
      style={buttonStyle}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {value}
    </button>
  );
}
