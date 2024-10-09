import React from "react";
import HighlightText from "./highlight-text";

type SectionTitle = {
  children: string;
};

const SectionTitle = ({ children }: SectionTitle) => {
  return (
    <h1 className="font-bold text-sm">
      <HighlightText>{children}</HighlightText>
    </h1>
  );
};

export default SectionTitle;
