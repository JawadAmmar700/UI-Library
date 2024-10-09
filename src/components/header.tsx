"use client";
import { useState } from "react";
// import ThemeIcon from "./theme";
import { ChevronUp, TextSelect } from "lucide-react";
import Input from "./input";
import dynamic from "next/dynamic";
const ThemeIcon = dynamic(() => import("./theme"), {
  ssr: false,
});

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between relative">
      <div className="dark:text-white transition-opacity duration-500 ease-in-out">
        <h1 className="font-bold sm:text-2xl text-xl">Jawad Youssef Ammar</h1>
        <h2 className="font-semibold text-sm">Full Stack Web Developer</h2>
      </div>
      <div className="flex md:space-x-5 space-x-2 items-center transition-opacity duration-500 ease-in-out">
        <TextSelect
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Input className=" hidden md:block bg-transparent text-slate-400 font-bold text-sm px-2 placeholder-slate-400  rounded-md border-b-2 dark:border-slate-200/10 border-slate-200 w-[150px] h-8  outline-none" />
        <ThemeIcon />
      </div>
      {/* drawer for small screens */}
      <div
        className={`fixed inset-0 w-full h-20 flex flex-col justify-center items-center space-y-2 transition-transform duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-[-100%] opacity-100"
        } backdrop-blur-sm z-50`}
      >
        <Input className="bg-transparent text-slate-400 font-bold text-sm px-2 placeholder-slate-400 rounded-md border-b-2 dark:border-slate-200/50 border-slate-400 w-[250px] h-8 outline-none" />
        <ChevronUp
          className="text-slate-400 animate-pulse cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
};

export default Header;
