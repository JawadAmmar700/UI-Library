import React from "react";
import HighlightText from "./highlight-text";
import Separator from "./separator";
import SectionTitle from "./section-title";

const Summary = () => {
  return (
    <div>
      <SectionTitle>SUMMARY</SectionTitle>
      <Separator />
      <p className="font-semibold text-xs mt-2">
        <HighlightText>
          Analytically minded individual with a bachelor's degree in computer
          and communication engineering, eager to advance my career in
          programming and committed to continuous skill development. I am
          actively seeking a web developer role in a growth-oriented company,
          and I am excited about the opportunity to join a dynamic and
          innovative team as I initiate my professional journey.
        </HighlightText>
      </p>
    </div>
  );
};

export default Summary;
