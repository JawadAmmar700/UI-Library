"use client";
import { SunIcon, SunMoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="transition-colors duration-500 z-50"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <SunIcon /> : <SunMoonIcon />}
    </button>
  );
};

export default ThemeIcon;
