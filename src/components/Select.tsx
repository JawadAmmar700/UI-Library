"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

interface AppleSelectProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const options = [
  { value: "Next.Js", label: "Next.Js" },
  { value: "React.Js", label: "React.Js" },
  { value: "Node.Js", label: "Node.Js" },
];

export default function Select({
  defaultValue,
  onChange,
}: AppleSelectProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    defaultValue || options[0].value
  );

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onChange && onChange(value);
  };

  return (
    <div className="relative w-32">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-1 mb-1 text-left hover:opacity-80 font-semibold rounded-md shadow-sm focus:outline-none "
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="block truncate text-sm text-black dark:text-white">
          {options.find((option) => option.value === selectedValue)?.label}
        </span>
        <ChevronsUpDown
          className="w-5 h-5 ml-2 text-gray-400"
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <ul
          className="absolute z-10 animate-fadeIn duration-200 w-full py-1 mt-1 overflow-auto backdrop-blur-md rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          tabIndex={-1}
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`${
                selectedValue === option.value
                  ? "text-blue-600"
                  : "text-black dark:text-white"
              } cursor-pointer text-sm flex items-center justify-between font-semibold select-none p-2 hover:opacity-50`}
              role="option"
              aria-selected={selectedValue === option.value}
              onClick={() => handleSelect(option.value)}
            >
              <span className="block truncate">{option.label}</span>
              {selectedValue === option.value && (
                <Check className=" h-5 text-blue-600" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
