import React from "react";
import Card from "../../commons/card";

import "./styles.scss";

interface BannerProps {
  header: string;
  text: string;
  cardClass?: string;
}

export default function Banner(props: BannerProps) {
  const { header, text, cardClass } = props;
  return (
    <Card cardClass={`card_container ${cardClass}`}>
      <h1 className="header">{header}</h1>
      <p className="text">{text}</p>
    </Card>
  );
}
