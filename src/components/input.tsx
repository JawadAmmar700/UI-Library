"use client";
import { useSearchText } from "@/lib/zustand";
import React from "react";

type InputType = {
  className: string;
};

const Input = ({ className }: InputType) => {
  const { setSearchText } = useSearchText((state) => state);

  return (
    <input
      type="text"
      placeholder="Search PDF..."
      onChange={(e) => setSearchText(e.target.value)}
      className={className}
    />
  );
};

export default Input;
