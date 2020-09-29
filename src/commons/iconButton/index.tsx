import React from "react";

interface IconButtonProps extends React.PropsWithChildren<unknown> {
  buttonClass?: string;
  buttonStyle?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export default function IconButton(props: IconButtonProps) {
  const { children, buttonClass, buttonStyle, onClick, onSubmit } = props;
  return (
    <button
      className={buttonClass}
      style={buttonStyle}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  );
}
