"use client";
import { useSearchText } from "@/lib/zustand";
import React from "react";
import Highlighter from "react-highlight-words";

const HighlightText = ({ children }: { children: string }) => {
  const { searchText } = useSearchText((state) => state);

  return (
    <Highlighter
      searchWords={[searchText]}
      autoEscape={true}
      textToHighlight={children}
    />
  );
};

export default HighlightText;
